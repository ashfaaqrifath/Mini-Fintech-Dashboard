const express = require('express');
const cors = require('cors');
const db = require('./database');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/transactions', (req, res) => {
  const { category, startDate, endDate } = req.query;
  let query = 'SELECT * FROM transactions WHERE 1=1';
  const params = [];

  if (category && category !== 'all') {
    query += ' AND category = ?';
    params.push(category);
  }

  if (startDate) {
    query += ' AND date >= ?';
    params.push(startDate);
  }

  if (endDate) {
    query += ' AND date <= ?';
    params.push(endDate);
  }

  query += ' ORDER BY date DESC';

  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.post('/api/transactions', (req, res) => {
  const { amount, category, type, date, note } = req.body;

  if (!amount || !category || !type || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const id = uuidv4();
  const query = `INSERT INTO transactions (id, amount, category, type, date, note) 
                 VALUES (?, ?, ?, ?, ?, ?)`;

  db.run(query, [id, amount, category, type, date, note], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id, amount, category, type, date, note });
    }
  });
});

app.get('/api/summary', (req, res) => {
  const query = 'SELECT type, category, SUM(amount) as total FROM transactions GROUP BY type, category';
  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    let totalIncome = 0;
    let totalExpense = 0;
    const categorySpending = {};
    rows.forEach(row => {
      if (row.type === 'income') {
        totalIncome += row.total;
      } else {
        totalExpense += row.total;
        categorySpending[row.category] = (categorySpending[row.category] || 0) + row.total;
      }
    });
    const topCategory = Object.entries(categorySpending).length > 0
      ? Object.entries(categorySpending).reduce((a, b) => a[1] > b[1] ? a : b)[0]
      : 'N/A';

    const netBalance = totalIncome - totalExpense;

    let insight = '';
    if (totalExpense === 0) {
      insight = 'No expenses recorded yet. Start tracking your spending!';
    } else if (totalIncome === 0) {
      insight = 'You have expenses but no recorded income yet. Add some income to see your savings ratio!';
    } else {
      const expenseRatio = (totalExpense / totalIncome) * 100;
      if (expenseRatio > 90) {
        insight = `Warning: Your expenses (${expenseRatio.toFixed(1)}%) are consuming most of your income!`;
      } else if (expenseRatio > 75) {
        insight = `Your expense-to-income ratio is ${expenseRatio.toFixed(1)}%. Consider reducing non-essential spending.`;
      } else {
        insight = `Great job! You're saving ${(100 - expenseRatio).toFixed(1)}% of your income.`;
      }
    }

    res.json({
      totalIncome,
      totalExpense,
      netBalance,
      topCategory,
      categorySpending,
      insight
    });
  });
});

app.delete('/api/transactions/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM transactions WHERE id = ?', [id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ success: true });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

import React from 'react';

function Summary({ summary }) {
  return (
    <div className="card summary-section">
      <h2>Summary</h2>
      <div className="summary-grid">
        <div className="stat-box">
          <div className="stat-label">Total Income</div>
          <div className="stat-value">${summary.totalIncome.toFixed(2)}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Total Expense</div>
          <div className="stat-value">${summary.totalExpense.toFixed(2)}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Net Balance</div>
          <div className="stat-value" style={{ color: summary.netBalance >= 0 ? '#10b981' : '#ef4444' }}>
            ${summary.netBalance.toFixed(2)}
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Top Spending</div>
          <div className="stat-value">{summary.topCategory}</div>
        </div>
      </div>
      <div className="insight-box">
        <strong>💡 Insight:</strong> {summary.insight}
      </div>
    </div>
  );
}

export default Summary;

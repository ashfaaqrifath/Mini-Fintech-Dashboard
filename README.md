# Mini Fintech Dashboard

A simple personal finance tracker built with React, Node.js, Express, and SQLite. Track your income and expenses, view spending patterns, and get insights about your financial habits.

## Features

✅ **Add Transactions** - Log income and expenses with amount, category, date, and optional notes
✅ **Filter Transactions** - Filter by category or date range
✅ **Summary View** - See total income, total expenses, net balance, and top spending category
✅ **Spending Charts** - Visualize spending by category with bar and pie charts
✅ **Smart Insights** - Get rule-based observations about your spending habits

## Tech Stack

- **Frontend**: React, TypeScript, Chart.js, Axios
- **Backend**: Node.js, Express
- **Database**: SQLite
- **Styling**: CSS3 with modern gradients and responsive design

## Project Structure

```
fintech-dashboard/
├── frontend/                 # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.js           # Main application component
│   │   ├── index.js         # Entry point
│   │   └── index.css        # Global styles
│   ├── package.json
│   └── .env
├── backend/                  # Node.js backend application
│   ├── src/
│   │   ├── server.js        # Express server
│   │   └── database.js      # SQLite database setup
│   ├── package.json
│   └── .env
├── package.json             # Root package.json
└── README.md               # This file
```

## Installation

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fintech-dashboard.git
   cd fintech-dashboard
   ```

2. **Install dependencies for all parts**
   ```bash
   npm run install-all
   ```

   Or manually:
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. **Set up environment variables**

   Backend (.env):
   ```
   PORT=5000
   NODE_ENV=development
   ```

   Frontend (.env):
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

## Running the Application

### Development Mode

Run both frontend and backend concurrently:
```bash
npm run dev
```

Or run them separately:
```bash
npm run dev:backend   # Terminal 1
npm run dev:frontend  # Terminal 2
```

The frontend will be available at `http://localhost:3000`
The backend API will be available at `http://localhost:5000/api`

### Production Build

```bash
npm run build
```

## API Endpoints

### GET /api/transactions
Get all transactions with optional filters
- Query parameters:
  - `category` - Filter by category
  - `startDate` - Filter from date (YYYY-MM-DD)
  - `endDate` - Filter to date (YYYY-MM-DD)

### POST /api/transactions
Add a new transaction
- Body:
  ```json
  {
    "amount": 50.00,
    "category": "Food",
    "type": "expense",
    "date": "2024-01-15",
    "note": "Lunch"
  }
  ```

### GET /api/summary
Get financial summary and insights
- Response:
  ```json
  {
    "totalIncome": 5000,
    "totalExpense": 1500,
    "netBalance": 3500,
    "topCategory": "Food",
    "categorySpending": { "Food": 500, "Transport": 200 },
    "insight": "Great job! You're saving 70% of your income."
  }
  ```

### DELETE /api/transactions/:id
Delete a transaction by ID

## Features Explained

### Transaction Management
Add transactions with full details including amount, category (income or expense), date, and optional notes. View all transactions in a clean list format.

### Filtering
Filter transactions by:
- **Category**: Select from predefined categories or "All Categories"
- **Date Range**: Choose start and end dates to see transactions within a specific period

### Summary Statistics
View key financial metrics:
- **Total Income**: Sum of all income transactions
- **Total Expense**: Sum of all expense transactions
- **Net Balance**: Income minus expenses
- **Top Spending Category**: Category with the highest spending

### Spending Visualization
Two chart types to visualize spending:
- **Bar Chart**: Shows comparison of spending across categories
- **Pie Chart**: Shows proportion of spending in each category

### Smart Insights
Get automatic insights based on your spending patterns:
- Warning if expenses exceed 90% of income
- Recommendation if expenses are between 75-90% of income
- Positive feedback if you're saving over 25% of income

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Deploy Frontend on Vercel**
   - Go to https://vercel.com
   - Connect your GitHub repository
   - Set build command: `npm run build` in frontend directory
   - Deploy

3. **Deploy Backend**
   - Options: Render, Railway, Heroku, or DigitalOcean
   - See backend-specific deployment guides

### Alternative: Docker Deployment

Create a `Dockerfile` for containerized deployment on any cloud platform.

## Usage Example

1. **Open the dashboard** at http://localhost:3000
2. **Add a transaction**:
   - Enter amount: 50
   - Select type: Expense
   - Choose category: Food
   - Set today's date
   - Click "Add Transaction"
3. **View summary** to see updated totals
4. **Filter transactions** by category or date
5. **Check insights** for spending recommendations
6. **View charts** to see spending distribution

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

MIT License - see LICENSE file for details

## Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ for personal finance management**

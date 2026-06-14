# Mini Fintech Dashboard

A personal finance tracker built with a React frontend, Node.js/Express backend, and a SQLite database.

## Prerequisites
**Node.js** (v14 or higher) and **npm**

## Installation & Setup

### 1. Install Dependencies
The project is structured as a monorepo. Use the root-level script to install all necessary packages for the root, frontend, and backend folders at once:
```bash
npm run install-all
```

### 2. Configure Environment Variables
You need to set up environment files so the frontend can communicate with the backend.

*   **Backend:** Create a file at `backend/.env`
    ```env
    PORT=5000
    ```
*   **Frontend:** Create a file at `frontend/.env`
    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    ```

### 3. Running the App
To start both the backend server and the React development server concurrently, run:
```bash
npm run dev
```
*   **Dashboard UI:** http://localhost:3000
*   **API Endpoint:** http://localhost:5000/api

## Core Features
- **Transaction Management**: Add income or expenses with details like amount, category, date, and notes.
- **Smart Filtering**: Filter your transaction history by category or specific date ranges.
- **Financial Summary**: View real-time totals for income, expenses, net balance, and your top spending category.
- **Data Visualization**: Interactive charts showing a breakdown of spending by category.
- **Rule-Based Insights**: Automated financial observations (e.g., savings ratios) derived from your data.

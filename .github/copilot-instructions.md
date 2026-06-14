<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Fintech Dashboard Project

## Project Overview
Mini Fintech Dashboard - A personal finance tracker with React frontend, Node.js backend, and SQLite database.

## Tech Stack
- Frontend: React with TypeScript, Chart.js for visualizations
- Backend: Node.js with Express
- Database: SQLite
- Styling: CSS3

## Key Features
1. Add transactions (income/expense) with category, date, and notes
2. Filter transactions by category and date range
3. Summary view with total income, expense, net balance, top category
4. Spending charts (bar and pie) visualizing category breakdown
5. Smart insights based on spending patterns

## Project Structure
- `/frontend` - React application (port 3000)
- `/backend` - Express server (port 5000)
- `/backend/src` - Database and API logic

## Development Commands
- `npm run install-all` - Install all dependencies
- `npm run dev` - Run both frontend and backend
- `npm run dev:backend` - Run backend only
- `npm run dev:frontend` - Run frontend only

## Deployment Notes
- Frontend: Deploy to Vercel
- Backend: Deploy to Render, Railway, or similar
- Database: SQLite (local file, migrate to managed DB for production)

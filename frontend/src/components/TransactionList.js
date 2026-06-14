import React from 'react';

function TransactionList({ transactions, onDeleteTransaction }) {
  if (transactions.length === 0) {
    return <p style={{ color: '#999', textAlign: 'center' }}>No transactions yet</p>;
  }

  return (
    <div className="transaction-list">
      {transactions.map(transaction => (
        <div key={transaction.id} className="transaction-item">
          <div className="transaction-details">
            <div className="transaction-header">{transaction.category}</div>
            <div className="transaction-meta">
              {new Date(transaction.date).toLocaleDateString()} 
              {transaction.note && ` • ${transaction.note}`}
            </div>
          </div>
          <div className={`transaction-amount ${transaction.type}`}>
            {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
          </div>
          <button 
            className="delete-btn"
            onClick={() => onDeleteTransaction(transaction.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;

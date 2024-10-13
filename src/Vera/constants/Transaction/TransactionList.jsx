import React from 'react';

const TransactionList = ({ transactions, onDeleteTransaction }) => (
  <ul>
    {transactions.map((transaction) => (
      <li key={transaction.id}>
        {transaction.date} — {transaction.amount} $ ({transaction.type}, {transaction.category})
        <button onClick={() => onDeleteTransaction(transaction.id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default TransactionList;

import React, { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Filter from './Filter';

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [typeFilter, setTypeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Вычисление баланса
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);
    const expenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);
    setBalance(income - expenses);
  }, [transactions]);

  // Добавление транзакции
  const addTransaction = (amount, type, category, date) => {
    console.log({amount, type, category, date})
    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      type,
      category,
      date,
    };
    console.log(newTransaction)
    setTransactions([...transactions, newTransaction]);
  };

  // Удаление транзакции
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  // Фильтрация транзакций
  const filteredTransactions = transactions.filter(transaction => {
    return (
      (typeFilter === 'all' || transaction.type === typeFilter) &&
      (categoryFilter === 'all' || transaction.category === categoryFilter)
    );
  });

  // Данные для графика
  const expenseData = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  return (
    <div>
      <h1>Отслеживание финансов</h1>

      <TransactionForm onAddTransaction={addTransaction} />
      <h2>Баланс: {balance} $</h2>

      <Filter
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />

      <TransactionList
        transactions={filteredTransactions}
        onDeleteTransaction={deleteTransaction}
      />

    </div>
  );
};

export default Transaction;

import React, { createContext, useState, useContext } from 'react';
import { loadTransactions, saveTransactions } from '../storage/transactionStorage';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const initializeTransactions = async () => {
    try {
      const storedTransactions = await loadTransactions();
      setTransactions(storedTransactions || []);
    } catch (error) {
      console.error('Error loading transactions:', error);
      setTransactions([]);
    }
  };

  const addTransaction = async (transaction) => {
    const newTransaction = { ...transaction, id: Date.now().toString(), timestamp: new Date().toISOString() };
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    await saveTransactions(updatedTransactions);
    return newTransaction;
  };

  const updateTransaction = async (id, updatedTransaction) => {
    const updatedTransactions = transactions.map(transaction => 
      transaction.id === id ? { ...transaction, ...updatedTransaction } : transaction
    );
    setTransactions(updatedTransactions);
    await saveTransactions(updatedTransactions);
  };

  const deleteTransaction = async (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
    await saveTransactions(updatedTransactions);
  };

  return (
    <TransactionContext.Provider value={{
      transactions,
      initializeTransactions,
      addTransaction,
      updateTransaction,
      deleteTransaction
    }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransaction must be used within a TransactionProvider');
  }
  return context;
};
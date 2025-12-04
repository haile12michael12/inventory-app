import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTransaction } from '../context/TransactionContext';
import TransactionList from '../components/transactions/TransactionList';

const TransactionsScreen = () => {
  const { transactions, initializeTransactions } = useTransaction();
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    initializeTransactions();
  }, []);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Transactions</Text>
      <TransactionList transactions={filteredTransactions} />
    </View>
  );
};

export default TransactionsScreen;
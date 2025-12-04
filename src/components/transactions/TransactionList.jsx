import React from 'react';
import { FlatList, View, Text } from 'react-native';

const TransactionItem = ({ transaction }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getTypeColor = (type) => {
    return type === 'add' ? 'text-green-600' : 'text-red-600';
  };

  const getTypeText = (type) => {
    return type === 'add' ? 'Stock Added' : 'Stock Removed';
  };

  return (
    <View className="bg-white rounded-lg shadow-md p-4 mb-2">
      <View className="flex-row justify-between items-center">
        <Text className="font-semibold text-lg">{transaction.productName}</Text>
        <Text className={getTypeColor(transaction.type)}>
          {getTypeText(transaction.type)}
        </Text>
      </View>
      <View className="flex-row justify-between mt-2">
        <Text className="text-gray-600">Quantity: {transaction.quantity}</Text>
        <Text className="text-gray-600">{formatDate(transaction.timestamp)}</Text>
      </View>
      {transaction.notes && (
        <Text className="text-gray-600 mt-2">Notes: {transaction.notes}</Text>
      )}
    </View>
  );
};

const TransactionList = ({ transactions }) => {
  const renderItem = ({ item }) => <TransactionItem transaction={item} />;

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TransactionList;
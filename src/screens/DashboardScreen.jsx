import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useProduct } from '../context/ProductContext';
import { useTransaction } from '../context/TransactionContext';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get("window").width;

const DashboardScreen = () => {
  const { products } = useProduct();
  const { transactions } = useTransaction();
  const [totalProducts, setTotalProducts] = useState(0);
  const [lowStockProducts, setLowStockProducts] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);

  useEffect(() => {
    setTotalProducts(products.length);
    setLowStockProducts(products.filter(product => product.stock < 5).length);
    setTotalTransactions(transactions.length);
  }, [products, transactions]);

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#007bff"
    }
  };

  const barData = {
    labels: ["Products", "Low Stock", "Transactions"],
    datasets: [
      {
        data: [totalProducts, lowStockProducts, totalTransactions]
      }
    ]
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-6 text-center">Inventory Dashboard</Text>
      
      <View className="bg-white rounded-lg shadow-md p-4 mb-4">
        <Text className="text-lg font-semibold mb-2">Summary</Text>
        <View className="flex-row justify-between">
          <View className="items-center">
            <Text className="text-2xl font-bold text-blue-600">{totalProducts}</Text>
            <Text className="text-gray-600">Total Products</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-red-600">{lowStockProducts}</Text>
            <Text className="text-gray-600">Low Stock</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-green-600">{totalTransactions}</Text>
            <Text className="text-gray-600">Transactions</Text>
          </View>
        </View>
      </View>

      <View className="bg-white rounded-lg shadow-md p-4 mb-4">
        <Text className="text-lg font-semibold mb-2">Statistics</Text>
        <BarChart
          data={barData}
          width={screenWidth - 32}
          height={220}
          yAxisLabel=""
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
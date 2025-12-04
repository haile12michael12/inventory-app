import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useProduct } from '../context/ProductContext';
import { useTransaction } from '../context/TransactionContext';
import StockAdjustForm from '../components/forms/StockAdjustForm';
import Button from '../components/ui/Button';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { adjustStock } = useProduct();
  const { addTransaction } = useTransaction();
  const [showAdjustForm, setShowAdjustForm] = useState(false);

  const handleAdjustStock = async (adjustmentData) => {
    const { quantity, type } = adjustmentData;
    
    // Adjust stock
    await adjustStock(product.id, type === 'add' ? quantity : -quantity);
    
    // Add transaction record
    const transaction = {
      productId: product.id,
      productName: product.name,
      quantity: quantity,
      type: type,
      notes: adjustmentData.notes
    };
    
    await addTransaction(transaction);
    
    setShowAdjustForm(false);
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <View className="bg-white rounded-lg shadow-md p-4 mb-4">
        <Text className="text-2xl font-bold mb-2">{product.name}</Text>
        <Text className="text-gray-600 mb-4">{product.description}</Text>
        
        <View className="flex-row justify-between mb-2">
          <Text className="font-semibold">Price:</Text>
          <Text>${product.price}</Text>
        </View>
        
        <View className="flex-row justify-between mb-2">
          <Text className="font-semibold">Current Stock:</Text>
          <Text className={product.stock < 5 ? "text-red-600 font-bold" : ""}>
            {product.stock} {product.unit}
          </Text>
        </View>
        
        <View className="flex-row justify-between">
          <Text className="font-semibold">Category:</Text>
          <Text>{product.category}</Text>
        </View>
      </View>
      
      <View className="bg-white rounded-lg shadow-md p-4 mb-4">
        <Text className="text-xl font-bold mb-2">Actions</Text>
        <Button 
          title="Adjust Stock" 
          onPress={() => setShowAdjustForm(true)} 
          className="mb-2"
        />
      </View>
      
      {showAdjustForm && (
        <StockAdjustForm 
          onSubmit={handleAdjustStock}
          onCancel={() => setShowAdjustForm(false)}
        />
      )}
    </ScrollView>
  );
};

export default ProductDetailScreen;
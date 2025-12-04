import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ProductItem = ({ product, onEdit, onDelete, onViewDetails }) => {
  return (
    <View className="bg-white rounded-lg shadow-md p-4 mb-2">
      <TouchableOpacity onPress={() => onViewDetails(product)}>
        <Text className="font-semibold text-lg">{product.name}</Text>
        <Text className="text-gray-600">${product.price}</Text>
        <Text className={product.stock < 5 ? "text-red-600 font-bold" : "text-gray-600"}>
          Stock: {product.stock} {product.unit}
        </Text>
      </TouchableOpacity>
      
      <View className="flex-row justify-end mt-2">
        <TouchableOpacity 
          className="bg-blue-500 px-3 py-1 rounded mr-2"
          onPress={() => onEdit(product)}
        >
          <Text className="text-white">Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className="bg-red-500 px-3 py-1 rounded"
          onPress={() => onDelete(product.id)}
        >
          <Text className="text-white">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;
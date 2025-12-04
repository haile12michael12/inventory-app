import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Input from '../ui/Input';
import Button from '../ui/Button';

const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    unit: '',
    category: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price ? product.price.toString() : '',
        stock: product.stock ? product.stock.toString() : '',
        unit: product.unit || '',
        category: product.category || ''
      });
    }
  }, [product]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const submitData = {
      ...formData,
      price: parseFloat(formData.price) || 0,
      stock: parseInt(formData.stock) || 0
    };
    onSubmit(submitData);
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">
        {product ? 'Edit Product' : 'Add Product'}
      </Text>
      
      <Input
        label="Product Name"
        value={formData.name}
        onChangeText={(value) => handleChange('name', value)}
        placeholder="Enter product name"
      />
      
      <Input
        label="Description"
        value={formData.description}
        onChangeText={(value) => handleChange('description', value)}
        placeholder="Enter product description"
        multiline
        numberOfLines={3}
      />
      
      <Input
        label="Price"
        value={formData.price}
        onChangeText={(value) => handleChange('price', value)}
        placeholder="Enter price"
        keyboardType="numeric"
      />
      
      <Input
        label="Initial Stock"
        value={formData.stock}
        onChangeText={(value) => handleChange('stock', value)}
        placeholder="Enter initial stock"
        keyboardType="numeric"
      />
      
      <Input
        label="Unit"
        value={formData.unit}
        onChangeText={(value) => handleChange('unit', value)}
        placeholder="e.g., pcs, kg, liters"
      />
      
      <Input
        label="Category"
        value={formData.category}
        onChangeText={(value) => handleChange('category', value)}
        placeholder="Enter category"
      />
      
      <View className="flex-row justify-between mt-4">
        <Button title="Cancel" onPress={onCancel} className="bg-gray-500" />
        <Button title="Save" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default ProductForm;
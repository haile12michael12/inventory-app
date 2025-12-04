import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useProduct } from '../context/ProductContext';
import ProductForm from '../components/forms/ProductForm';
import ProductList from '../components/product/ProductList';
import Button from '../components/ui/Button';

const ProductScreen = ({ navigation }) => {
  const { products, initializeProducts, addProduct, updateProduct, deleteProduct } = useProduct();
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    initializeProducts();
  }, []);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDeleteProduct = (id) => {
    Alert.alert(
      'Delete Product',
      'Are you sure you want to delete this product?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => deleteProduct(id) }
      ]
    );
  };

  const handleSubmit = async (productData) => {
    if (editingProduct) {
      await updateProduct(editingProduct.id, productData);
    } else {
      await addProduct(productData);
    }
    setShowForm(false);
  };

  const handleViewDetails = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  if (showForm) {
    return (
      <ProductForm 
        product={editingProduct}
        onSubmit={handleSubmit}
        onCancel={() => setShowForm(false)}
      />
    );
  }

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold">Products</Text>
        <Button title="Add Product" onPress={handleAddProduct} />
      </View>
      
      <ProductList 
        products={products}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
        onViewDetails={handleViewDetails}
      />
    </View>
  );
};

export default ProductScreen;
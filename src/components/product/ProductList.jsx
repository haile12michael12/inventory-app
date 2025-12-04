import React from 'react';
import { FlatList } from 'react-native';
import ProductItem from './ProductItem';

const ProductList = ({ products, onEdit, onDelete, onViewDetails }) => {
  const renderItem = ({ item }) => (
    <ProductItem 
      product={item}
      onEdit={onEdit}
      onDelete={onDelete}
      onViewDetails={onViewDetails}
    />
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductList;
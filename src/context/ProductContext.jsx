import React, { createContext, useState, useContext } from 'react';
import { loadProducts, saveProducts } from '../storage/productStorage';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const initializeProducts = async () => {
    try {
      const storedProducts = await loadProducts();
      setProducts(storedProducts || []);
    } catch (error) {
      console.error('Error loading products:', error);
      setProducts([]);
    }
  };

  const addProduct = async (product) => {
    const newProduct = { ...product, id: Date.now().toString() };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    await saveProducts(updatedProducts);
    return newProduct;
  };

  const updateProduct = async (id, updatedProduct) => {
    const updatedProducts = products.map(product => 
      product.id === id ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
    await saveProducts(updatedProducts);
  };

  const deleteProduct = async (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    await saveProducts(updatedProducts);
  };

  const adjustStock = async (id, quantity) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        return { ...product, stock: product.stock + quantity };
      }
      return product;
    });
    setProducts(updatedProducts);
    await saveProducts(updatedProducts);
  };

  return (
    <ProductContext.Provider value={{
      products,
      initializeProducts,
      addProduct,
      updateProduct,
      deleteProduct,
      adjustStock
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
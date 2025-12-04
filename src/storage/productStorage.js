import AsyncStorage from '@react-native-async-storage/async-storage';

const PRODUCTS_KEY = 'inventory_products';

export const loadProducts = async () => {
  try {
    const products = await AsyncStorage.getItem(PRODUCTS_KEY);
    return products ? JSON.parse(products) : [];
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
};

export const saveProducts = async (products) => {
  try {
    await AsyncStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  } catch (error) {
    console.error('Error saving products:', error);
  }
};
import AsyncStorage from '@react-native-async-storage/async-storage';

const TRANSACTIONS_KEY = 'inventory_transactions';

export const loadTransactions = async () => {
  try {
    const transactions = await AsyncStorage.getItem(TRANSACTIONS_KEY);
    return transactions ? JSON.parse(transactions) : [];
  } catch (error) {
    console.error('Error loading transactions:', error);
    return [];
  }
};

export const saveTransactions = async (transactions) => {
  try {
    await AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
  } catch (error) {
    console.error('Error saving transactions:', error);
  }
};
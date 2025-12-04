import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = 'inventory_users';

export const loadUsers = async () => {
  try {
    const users = await AsyncStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error loading users:', error);
    return [];
  }
};

export const saveUsers = async (users) => {
  try {
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users:', error);
  }
};
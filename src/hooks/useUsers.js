import { useState, useEffect } from 'react';
import { loadUsers, saveUsers } from '../storage/userStorage';

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  const initializeUsers = async () => {
    try {
      const storedUsers = await loadUsers();
      setUsers(storedUsers || []);
    } catch (error) {
      console.error('Error loading users:', error);
      setUsers([]);
    }
  };

  const addUser = async (user) => {
    const newUser = { ...user, id: Date.now().toString() };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    await saveUsers(updatedUsers);
    return newUser;
  };

  const updateUser = async (id, updatedUser) => {
    const updatedUsers = users.map(user => 
      user.id === id ? { ...user, ...updatedUser } : user
    );
    setUsers(updatedUsers);
    await saveUsers(updatedUsers);
  };

  const deleteUser = async (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    await saveUsers(updatedUsers);
  };

  return {
    users,
    initializeUsers,
    addUser,
    updateUser,
    deleteUser
  };
};
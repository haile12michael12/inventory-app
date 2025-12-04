import React, { createContext, useState, useContext } from 'react';
import { loadUsers, saveUsers } from '../storage/userStorage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

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

  const login = (user) => {
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{
      users,
      currentUser,
      initializeUsers,
      addUser,
      updateUser,
      deleteUser,
      login,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
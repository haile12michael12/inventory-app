import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useUser } from '../context/UserContext';
import UserForm from '../components/forms/UserForm';
import Button from '../components/ui/Button';

const UserScreen = () => {
  const { users, initializeUsers, addUser, updateUser, deleteUser } = useUser();
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    initializeUsers();
  }, []);

  const handleAddUser = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleDeleteUser = (id) => {
    Alert.alert(
      'Delete User',
      'Are you sure you want to delete this user?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => deleteUser(id) }
      ]
    );
  };

  const handleSubmit = async (userData) => {
    if (editingUser) {
      await updateUser(editingUser.id, userData);
    } else {
      await addUser(userData);
    }
    setShowForm(false);
  };

  const renderUser = ({ item }) => (
    <View className="bg-white rounded-lg shadow-md p-4 mb-2 flex-row justify-between items-center">
      <View>
        <Text className="font-semibold text-lg">{item.name}</Text>
        <Text className="text-gray-600">{item.email}</Text>
        <Text className="text-gray-600">{item.role}</Text>
      </View>
      <View className="flex-row">
        <TouchableOpacity 
          className="bg-blue-500 px-3 py-1 rounded mr-2"
          onPress={() => handleEditUser(item)}
        >
          <Text className="text-white">Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className="bg-red-500 px-3 py-1 rounded"
          onPress={() => handleDeleteUser(item.id)}
        >
          <Text className="text-white">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (showForm) {
    return (
      <UserForm 
        user={editingUser}
        onSubmit={handleSubmit}
        onCancel={() => setShowForm(false)}
      />
    );
  }

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold">Users</Text>
        <Button title="Add User" onPress={handleAddUser} />
      </View>
      
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderUser}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UserScreen;
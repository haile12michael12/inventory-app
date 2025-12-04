import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Input from '../ui/Input';
import Button from '../ui/Button';

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        role: user.role || ''
      });
    }
  }, [user]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">
        {user ? 'Edit User' : 'Add User'}
      </Text>
      
      <Input
        label="Name"
        value={formData.name}
        onChangeText={(value) => handleChange('name', value)}
        placeholder="Enter user name"
      />
      
      <Input
        label="Email"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
        placeholder="Enter user email"
        keyboardType="email-address"
      />
      
      <Input
        label="Role"
        value={formData.role}
        onChangeText={(value) => handleChange('role', value)}
        placeholder="Enter user role"
      />
      
      <View className="flex-row justify-between mt-4">
        <Button title="Cancel" onPress={onCancel} className="bg-gray-500" />
        <Button title="Save" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default UserForm;
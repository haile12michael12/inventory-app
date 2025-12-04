import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Input from '../ui/Input';
import Button from '../ui/Button';

const StockAdjustForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    quantity: '',
    type: 'add',
    notes: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const submitData = {
      ...formData,
      quantity: parseInt(formData.quantity) || 0
    };
    onSubmit(submitData);
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Adjust Stock</Text>
      
      <View className="mb-4">
        <Text className="mb-1 font-medium">Adjustment Type</Text>
        <Picker
          selectedValue={formData.type}
          onValueChange={(value) => handleChange('type', value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <Picker.Item label="Add Stock" value="add" />
          <Picker.Item label="Remove Stock" value="remove" />
        </Picker>
      </View>
      
      <Input
        label="Quantity"
        value={formData.quantity}
        onChangeText={(value) => handleChange('quantity', value)}
        placeholder="Enter quantity"
        keyboardType="numeric"
      />
      
      <Input
        label="Notes (Optional)"
        value={formData.notes}
        onChangeText={(value) => handleChange('notes', value)}
        placeholder="Enter notes"
        multiline
        numberOfLines={3}
      />
      
      <View className="flex-row justify-between mt-4">
        <Button title="Cancel" onPress={onCancel} className="bg-gray-500" />
        <Button title="Save" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default StockAdjustForm;
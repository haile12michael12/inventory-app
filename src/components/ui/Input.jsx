import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, keyboardType, multiline, numberOfLines }) => {
  return (
    <View className="mb-4">
      {label && <Text className="mb-1 font-medium">{label}</Text>}
      <TextInput
        className="border border-gray-300 rounded px-3 py-2"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

export default Input;
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress, className, disabled }) => {
  return (
    <TouchableOpacity
      className={`bg-blue-500 px-4 py-2 rounded ${disabled ? 'opacity-50' : ''} ${className}`}
      onPress={onPress}
      disabled={disabled}
    >
      <Text className="text-white text-center font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
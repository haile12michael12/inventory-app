import React from 'react';
import { View } from 'react-native';

const Card = ({ children, className }) => {
  return (
    <View className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </View>
  );
};

export default Card;
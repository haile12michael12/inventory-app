import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { UserProvider } from './src/context/UserContext';
import { ProductProvider } from './src/context/ProductContext';
import { TransactionProvider } from './src/context/TransactionContext';

export default function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <TransactionProvider>
          <NavigationContainer>
            <StatusBar style="auto" />
            <AppNavigator />
          </NavigationContainer>
        </TransactionProvider>
      </ProductProvider>
    </UserProvider>
  );
}
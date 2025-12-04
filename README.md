# Inventory Management App

A mobile inventory management application built with React Native, NativeWind, and Expo.

## Features

- Product management (add, edit, delete products)
- Stock tracking with low stock alerts
- User management
- Transaction history
- Dashboard with charts and statistics

## Tech Stack

- React Native
- Expo
- NativeWind (Tailwind CSS for React Native)
- React Navigation
- AsyncStorage for local data storage
- react-native-chart-kit for data visualization

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npx expo start
   ```

3. Follow the instructions in the terminal to run on iOS, Android, or web.

## Project Structure

```
src/
├── navigation/       # Navigation setup
├── context/          # React Context providers
├── storage/          # Local storage utilities
├── screens/          # Screen components
├── components/       # Reusable UI components
├── hooks/            # Custom hooks
├── utils/            # Utility functions
├── theme/            # Theme and styling constants
└── assets/           # Static assets
```

## Available Scripts

- `npm start`: Start the development server
- `npm run android`: Start the development server and run on Android
- `npm run ios`: Start the development server and run on iOS
- `npm run web`: Start the development server and run on web
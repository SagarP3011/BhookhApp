import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e', // Header background color
          },
          headerTintColor: '#fff', // Header text color
          headerTitleStyle: {
            fontWeight: 'bold', // Header title font weight
          },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login Screen' }} // Customize the screen title if needed
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home Screen' }} // Customize the screen title if needed
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;



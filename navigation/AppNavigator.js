import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  // TODO: add routes for other screens here
}, { initialRouteName: 'Home' });

export { AppNavigator };

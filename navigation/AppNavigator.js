import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { OrderFromScreen } from '../screens/OrderFromScreen';
import { OrderToScreen } from '../screens/OrderToScreen';
import { OrderWhenScreen } from '../screens/OrderWhenScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  OrderFrom: { screen: OrderFromScreen },
  OrderTo: { screen: OrderToScreen },
  OrderWhen: { screen: OrderWhenScreen },

  // TODO: add routes for other screens here
}, { initialRouteName: 'Home' });

export { AppNavigator };

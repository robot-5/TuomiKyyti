import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from '../screens/HomeScreen';
import { OrderFromScreen } from '../screens/OrderFromScreen';
import { OrderToScreen } from '../screens/OrderToScreen';
import { OrderWhenScreen } from '../screens/OrderWhenScreen';
import { OrderPassengersScreen } from '../screens/OrderPassengersScreen';
import { OrderCommentScreen } from '../screens/OrderCommentScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { OrderTravelTypeScreen } from '../screens/OrderTravelTypeScreen';

const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
  OrderTravelType: { screen: OrderTravelTypeScreen },
  OrderFrom: { screen: OrderFromScreen },
  OrderTo: { screen: OrderToScreen },
  OrderWhen: { screen: OrderWhenScreen },
  OrderPassengers: { screen: OrderPassengersScreen },
  OrderComment: { screen: OrderCommentScreen },
  // TODO: add routes for other screens here

},
  { initialRouteName: 'Login' });

export { AppNavigator };

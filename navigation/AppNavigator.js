import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { OrderCommentScreen } from '../screens/OrderCommentScreen';
import { OrderFromScreen } from '../screens/OrderFromScreen';
import { OrderPassengersScreen } from '../screens/OrderPassengersScreen';
import { OrderToScreen } from '../screens/OrderToScreen';
import { OrderTravelTypeScreen } from '../screens/OrderTravelTypeScreen';
import { OrderWhenScreen } from '../screens/OrderWhenScreen';

//main navigator for the whole app
const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
  OrderTravelType: { screen: OrderTravelTypeScreen },
  OrderFrom: { screen: OrderFromScreen },
  OrderTo: { screen: OrderToScreen },
  OrderWhen: { screen: OrderWhenScreen },
  OrderPassengers: { screen: OrderPassengersScreen },
  OrderComment: { screen: OrderCommentScreen },
},
  { initialRouteName: 'Login' });

export { AppNavigator };


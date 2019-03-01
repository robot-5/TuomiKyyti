import React from 'react';
import { View } from 'react-native';
import { createButton } from '../components/Buttons';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'HomeScreen',
  };

  render() {
    const { navigate, getParam } = this.props.navigation;

    var orderData = {
      customerName: getParam('customerName'),
      customerNumber: getParam('customerNumber'),
      travelType: '', //for work, education or leisure
      fromLocation: '',
      toLocation: '',
      dateTime: '',
      leaving: true, //if customer wants to leave or arrive at dateTime
      passengers: '',
      comment: '', //free text message from customer
    }

    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>

        {createButton(() => navigate('OrderTravelType', { orderData: orderData }), 'Order A Ride')}

      </View>
    );
  }
}

export { HomeScreen };
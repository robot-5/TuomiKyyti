import React from 'react';
import { View } from 'react-native';
import { createButton } from '../components/Buttons';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'HomeScreen',
  };

  render() {
    const { navigate } = this.props.navigation;

    var orderData = {
      // TODO: take username and number as real user input
      customerName: "Maija Meikalainen",
      customerNumber: "0815123",
      travelType: "",
      fromLocation: "",
      toLocation: "",
      dateTime: "",
      leaving: true, //if customer wants to leave or arrive at dateTime
      passengers: "",
      comment: "", //free text message from customer
    }

    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>

        {createButton(() => navigate('OrderFrom', { orderData: orderData }), 'ORDER A RIDE')}

      </View>
    );
  }
}

export { HomeScreen };
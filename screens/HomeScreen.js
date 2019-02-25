import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { sendOrderEmail } from '../communication/Mailing';



class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'HomeScreen',
  };

  render() {
    const { navigate } = this.props.navigation;

    var orderData = {
      // TODO: take username and number as real user input
      customerName: "Maja Meikalainen",
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
      <View style={{ maxHeight: 300, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>

        <Button
          title="Order a ride"
          onPress={() => navigate('OrderFrom', { orderData: orderData })}
        />

      </View>
    );
  }
}

export { HomeScreen };
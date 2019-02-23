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
      customerName: "",
      customerNumber: "",
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
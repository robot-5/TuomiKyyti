import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { sendOrderEmail } from '../communication/Mailing';



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'HomeScreen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ maxHeight: 300, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', { name: 'Jane' })}
        />
        <Button
          title="Order a ride"
          onPress={() => navigate('OrderFrom')}
        />
        <Button
          title="Send Mail"
          onPress={() => {
            sendOrderEmail(["fakeName@fakesite.fake"], "cool subject",
              "some Message. Nice. Ümläüte alsö wörk?");
          }}
        />
      </View>
    );
  }
}

export { HomeScreen };
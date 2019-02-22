import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';
import { createButton } from '../components/Buttons';

class OrderToScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orderData: this.props.navigation.getParam('orderData', 'NOPE'),

        };
    }

    static navigationOptions = {
        title: 'To Where',
    };

    render() {
        const { getParam, navigate, push } = this.props.navigation;
        return (
            <View style={{ height: Layout.window.height, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>

                {/* TODO: implement this */}
                <Text>You start from: {this.state.orderData.fromLocation}</Text>

                {/* TODO: implement this */}
                <Text>User Input goes here</Text>


                {/* TODO: go to right screen when implemented */}
                {createButton(() => navigate('Home'), 'Confirm To', 'wide')}

            </View>
        );
    }
}

export { OrderToScreen };
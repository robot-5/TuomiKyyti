import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity, TextInput } from 'react-native';
import Layout from '../constants/Layout';
import { createButton } from '../components/Buttons';


class OrderFromScreen extends React.Component {
    static navigationOptions = {
        title: 'From Where',
    };

    constructor(props) {
        super(props);
        this.state = {
            orderData: this.props.navigation.getParam('orderData'),
            setFromLocation: (event) => {
                //complicated function because orderData is nested
                this.setState({
                    orderData: {
                        ...this.state.orderData,
                        fromLocation: event.nativeEvent.text,
                    },
                });

            }
        };
    }



    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ height: Layout.window.height, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>

                {/* TODO: implement this */}
                <Text>Some status message goes here</Text>

                <TextInput
                    style={{ height: 40 }}
                    placeholder="Enter from where here"
                    onSubmitEditing={this.state.setFromLocation}
                />

                {createButton(() => navigate('OrderTo', { orderData: this.state.orderData }), 'Confirm From', 'wide')}


            </View>
        );
    }
}

export { OrderFromScreen };
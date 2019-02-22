import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';
import { buttonStyles } from '../constants/ButtonStyles';

class OrderFromScreen extends React.Component {
    static navigationOptions = {
        title: 'From Where',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ height: Layout.window.height, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>

                {/* TODO: implement this */}
                <Text>Some status message goes here</Text>

                {/* TODO: implement this */}
                <Text>User Input goes here</Text>

                <TouchableOpacity
                    style={buttonStyles.wideButton}
                    onPress={() => navigate('OrderTo')}
                >
                    <Text style={{ color: 'white' }}> Confirm From </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export { OrderFromScreen };
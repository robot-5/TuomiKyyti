import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';
import {createButton} from '../components/Buttons';

class OrderToScreen extends React.Component {
    static navigationOptions = {
        title: 'To Where',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ height: Layout.window.height, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>

                {/* TODO: implement this */}
                <Text>Some status message goes here</Text>

                {/* TODO: implement this */}
                <Text>User Input goes here</Text>


                {/* TODO: go to right screen when implemented */}
                {createButton(() => navigate('Home'), 'Confirm To', 'wide')}

            </View>
        );
    }
}

export { OrderToScreen };
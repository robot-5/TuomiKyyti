import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Layout from '../constants/Layout';
import { createButton } from '../components/Buttons';
import { displayOrderData } from '../components/HelperFunctions';


class OrderToScreen extends React.Component {
    static navigationOptions = {
        title: 'To Where',
    };

    constructor(props) {
        super(props);
        this.state = {
            orderData: this.props.navigation.getParam('orderData'),
        };
    }

    setToLocation(event) {
        //complicated function because orderData is nested        
        this.setState({
            orderData: {
                ...this.state.orderData,
                toLocation: event.nativeEvent.text,
            },
        });

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ height: Layout.window.height, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>

                {displayOrderData(this.state.orderData)}

                {/* TODO: adjust for keyboard */}
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Enter to where here"
                    onSubmitEditing={(event) => this.setToLocation(event)}
                />

                {createButton(() => navigate('OrderWhen', { orderData: this.state.orderData }), 'Confirm To', 'wide')}


            </View>
        );
    }
}

export { OrderToScreen };
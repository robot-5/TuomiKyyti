import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Layout from '../constants/Layout';
import { createButton } from '../components/Buttons';
import { displayOrderData } from '../components/HelperFunctions';


class OrderFromScreen extends React.Component {
    static navigationOptions = {
        title: 'From Where',
    };

    constructor(props) {
        super(props);
        this.state = {
            orderData: this.props.navigation.getParam('orderData'),
        };
    }

    setFromLocation(event) {
        //complicated function because orderData is nested        
        this.setState({
            orderData: {
                ...this.state.orderData,
                fromLocation: event.nativeEvent.text,
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
                    placeholder="Enter from where here"
                    onSubmitEditing={(event) => this.setFromLocation(event)}
                />

                {createButton(() => navigate('OrderTo', { orderData: this.state.orderData }), 'Confirm From', 'wide')}


            </View>
        );
    }
}

export { OrderFromScreen };
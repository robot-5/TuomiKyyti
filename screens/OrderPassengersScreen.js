import React from 'react';
import { TextInput } from 'react-native';
import { createButton } from '../components/Buttons';
import { displayOrderData } from '../components/HelperFunctions';
import { OrderBaseScreen } from './OrderBaseScreen';
import { createTextInput } from '../components/TextInput';


class OrderPassengersScreen extends React.Component {
    static navigationOptions = {
        title: 'With Whom',
    };

    constructor(props) {
        super(props);
        this.state = {
            orderData: this.props.navigation.getParam('orderData'),
        };
        this.setPassengers = this.setPassengers.bind(this);
    }

    setPassengers(event) {
        this.setState({
            orderData: {
                ...this.state.orderData,
                passengers: event.nativeEvent.text, //TODO: set with correct input type
            },
        });
    }



    render() {
        const currentOrderData = displayOrderData(this.state.orderData);
        const input = createTextInput("Enter Passengers (Helpers, Children, ...)", this.setPassengers);
        const footer = createButton(() => this.props.navigation.navigate('OrderComment', { orderData: this.state.orderData }), 'Confirm Passengers', 'wide');

        return <OrderBaseScreen
            currentOrderData={currentOrderData}
            input={input}
            footer={footer} />
    }
}

export { OrderPassengersScreen };
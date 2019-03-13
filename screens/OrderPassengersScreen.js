import React from 'react';
import { createButton } from '../components/Buttons';
import { displayOrderData } from '../components/HelperFunctions';
import { createTextInput } from '../components/TextInput';
import { OrderBaseScreen } from './OrderBaseScreen';

//Screen that allows user to specify accompanying passengers and possible gear (e.g. wheelchair) for the trip
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
        const footer = createButton(() => this.props.navigation.navigate('OrderComment', { orderData: this.state.orderData }), 'CONFIRM', 'wide');

        return <OrderBaseScreen
            currentOrderData={currentOrderData}
            input={input}
            footer={footer} />
    }
}

export { OrderPassengersScreen };

import React from 'react';
import { createButton } from '../components/Buttons';
import { createTextInput } from '../components/TextInput';
import { displayOrderData } from '../components/HelperFunctions';
import { OrderBaseScreen } from './OrderBaseScreen';


class OrderFromScreen extends React.Component {
    static navigationOptions = {
        title: 'From Where',
    };

    constructor(props) {
        super(props);
        this.state = {
            orderData: this.props.navigation.getParam('orderData'),
        };
        this.setFromLocation = this.setFromLocation.bind(this);
    }

    setFromLocation(event) {
        this.setState({
            orderData: {
                ...this.state.orderData,
                fromLocation: event.nativeEvent.text,
            },
        });

    }

    render() {
        const currentOrderData = displayOrderData(this.state.orderData);
        const input = createTextInput("Enter from where here", this.setFromLocation);
        const footer = createButton(() => this.props.navigation.navigate('OrderTo', { orderData: this.state.orderData }), 'Confirm From');

        return <OrderBaseScreen
            currentOrderData={currentOrderData}
            input={input}
            footer={footer} />
    }
}

export { OrderFromScreen };
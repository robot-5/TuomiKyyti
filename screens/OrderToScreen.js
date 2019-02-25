import React from 'react';
import { TextInput } from 'react-native';
import { createButton } from '../components/Buttons';
import { displayOrderData } from '../components/HelperFunctions';
import { OrderBaseScreen } from './OrderBaseScreen';


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
        const currentOrderData = displayOrderData(this.state.orderData);
        const input = <TextInput
            style={{ height: 40 }}
            placeholder="Enter to where here"
            onSubmitEditing={(event) => this.setToLocation(event)}
        />
        const footer = createButton(() => this.props.navigation.navigate('OrderWhen', { orderData: this.state.orderData }), 'Confirm To', 'wide')

        return <OrderBaseScreen currentOrderData={currentOrderData}
            input={input}
            footer={footer} />
    }
}

export { OrderToScreen };
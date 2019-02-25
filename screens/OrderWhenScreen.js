import React from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import { createButton } from '../components/Buttons';
import { displayOrderData } from '../components/HelperFunctions';
import { OrderBaseScreen } from './OrderBaseScreen';


class OrderWhenScreen extends React.Component {
    static navigationOptions = {
        title: 'To Where',
    };

    constructor(props) {
        super(props);
        this.state = {
            orderData: this.props.navigation.getParam('orderData'),
        };
        this.setDateTime = this.setDateTime.bind(this);
        this.setLeaving = this.setLeaving.bind(this);
    }

    setDateTime(event) {
        this.setState({
            orderData: {
                ...this.state.orderData,
                dateTime: event.nativeEvent.text, //TODO: set with correct input type
            },
        });
    }

    setLeaving(value) {
        this.setState({
            orderData: {
                ...this.state.orderData,
                leaving: value, //TODO: set with correct input type
            },
        });
    }

    render() {
        const currentOrderData = displayOrderData(this.state.orderData);

        //inputs for date and time of trip plus whether customer wants to leave or arrive at given time
        const input = <View>
            <TextInput
                style={{ height: 40 }}
                placeholder="Enter date and time"
                onSubmitEditing={this.setDateTime}
            />

            <View>
                <Text>{this.state.orderData.leaving ? 'Order to leave at given time' : 'Order to arrive at given time'}</Text>
                <Switch
                    style={{ marginTop: 30 }}
                    onValueChange={this.setLeaving}
                    value={this.state.orderData.leaving} />
            </View>
        </View>

        const footer = createButton(() => this.props.navigation.navigate('Home'), 'Confirm Time', 'wide');

        return <OrderBaseScreen
            currentOrderData={currentOrderData}
            input={input}
            footer={footer} />
    }
}

export { OrderWhenScreen };
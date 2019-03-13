import React from 'react';
import { Switch, Text, View } from 'react-native';
import { createButton } from '../components/Buttons';
import { displayOrderData } from '../components/HelperFunctions';
import { createTextInput } from '../components/TextInput';
import { OrderBaseScreen } from './OrderBaseScreen';

//Screen that allows user to select the time for the trip. 
// User may select either leaving time (when taxi should arrive at start location)
// or arrival time (when taxi should arrive at destination)
class OrderWhenScreen extends React.Component {
    static navigationOptions = {
        title: 'When',
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
                leaving: value,
            },
        });
    }

    render() {
        const currentOrderData = displayOrderData(this.state.orderData);
        const timeDisclaimer = this.state.orderData.leaving ? 'The car may get to you up to 25 minutes earlier or later than ordered!' : 'The car may arrive at your destination up to 25 minutes earlier than ordered!';

        //TODO: use more user-friendly input type
        //inputs for date and time of trip plus whether customer wants to leave or arrive at given time
        const input = <View>
            <View>
                <Switch
                    style={{ marginTop: 30 }}
                    onValueChange={this.setLeaving}
                    value={this.state.orderData.leaving} />
                <Text>{this.state.orderData.leaving ? 'Order to leave at given time' : 'Order to arrive at given time'}</Text>
            </View>

            <View>
                <Text>{timeDisclaimer}</Text>
                {createTextInput("Enter date and time", this.setDateTime)}
            </View>


        </View>;

        const footer = createButton(() => this.props.navigation.navigate('OrderPassengers', { orderData: this.state.orderData }), 'CONFIRM');

        return <OrderBaseScreen
            currentOrderData={currentOrderData}
            input={input}
            footer={footer} />
    }
}

export { OrderWhenScreen };

import React from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import Layout from '../constants/Layout';
import { createButton } from '../components/Buttons';
import { displayOrderData } from '../components/HelperFunctions';


class OrderWhenScreen extends React.Component {
    static navigationOptions = {
        title: 'To Where',
    };

    constructor(props) {
        super(props);
        this.state = {
            orderData: this.props.navigation.getParam('orderData'),
        };
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
        const { navigate } = this.props.navigation;
        return (
            <View style={{ height: Layout.window.height, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>

                {displayOrderData(this.state.orderData)}

                {/* TODO: adjust for keyboard */}
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Enter date and time"
                    onSubmitEditing={(event) => this.setDateTime(event)}
                />

                <View>
                    <Text>{this.state.orderData.leaving ? 'Order to leave at given time' : 'Order to arrive at given time'}</Text>
                    <Switch
                        style={{ marginTop: 30 }}
                        onValueChange={(value) => this.setLeaving(value)}
                        value={this.state.orderData.leaving} />
                </View>

                {/* TODO: navigate to PassengersScreen when implemented */}
                {createButton(() => navigate('Home'), 'Confirm Time', 'wide')}


            </View>
        );
    }
}

export { OrderWhenScreen };
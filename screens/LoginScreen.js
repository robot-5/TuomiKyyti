import React from 'react';
import { View } from 'react-native';
import Layout from '../constants/Layout';
import { createButton } from '../components/Buttons';
import { createTextInput } from '../components/TextInput';

class LoginScreen extends React.Component {

    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
        this.state = {
            customerName: '',
            customerNumber: '',
        };
        this.setCustomerName = this.setCustomerName.bind(this);
        this.setCustomerNumber = this.setCustomerNumber.bind(this);
    }

    setCustomerName(event) {
        this.setState({ customerName: event.nativeEvent.text });
    }

    setCustomerNumber(event) {
        this.setState({ customerNumber: event.nativeEvent.text });
    }

    render() {
        const { navigate } = this.props.navigation;



        return (
            <View
                style={{ height: Layout.window.height, flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>

                {createTextInput("Your first and last name", this.setCustomerName)}

                {createTextInput("Your customer number", this.setCustomerNumber)}

                {/* TODO: verify customer name + number against backend data, persist name + number locally */}
                {createButton(() => navigate('Home', { customerName: this.state.customerName, customerNumber: this.state.customerNumber }), 'Login')}

            </View>
        );
    }
}

export { LoginScreen };
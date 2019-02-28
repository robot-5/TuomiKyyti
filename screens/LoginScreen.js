import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Layout from '../constants/Layout';
import { createButton } from '../components/Buttons';
import { createTextInput } from '../components/TextInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

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
        const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      responsiveBox: {
        flex:2,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      },
    });



        return (
            <View style={styles.container}>
        <View style={styles.responsiveBox}>


                {createTextInput("Your first and last name", this.setCustomerName)}

                {createTextInput("Your customer number", this.setCustomerNumber)}
                </View>

                {/* TODO: verify customer name + number against backend data, persist name + number locally */}
                {createButton(() => navigate('Home', { customerName: this.state.customerName, customerNumber: this.state.customerNumber }), 'Login')}


            </View>
        );
    }
}

export { LoginScreen };

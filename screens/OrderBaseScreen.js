import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Layout from '../constants/Layout';
import { createButton } from '../components/Buttons';
import { displayOrderData } from '../components/HelperFunctions';

/* base for all screens in order-a-ride logic
*/
function OrderBaseScreen(props) {

    return (
        <View style={{ height: Layout.window.height, flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>

            {props.currentOrderData}

            {props.input}

            {props.footer}
        </View>

    );
}

export { OrderBaseScreen }
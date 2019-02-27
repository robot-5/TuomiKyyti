import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

/* base for all screens in order-a-ride logic
*/
function OrderBaseScreen(props) {

    return (


        <KeyboardAvoidingView
            behavior='padding'
            style={{ height: Layout.window.height, flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.orderScreenBackground }}>
            {props.currentOrderData}


            {props.input}


            {props.footer}
        </KeyboardAvoidingView >



    );
}

export { OrderBaseScreen }
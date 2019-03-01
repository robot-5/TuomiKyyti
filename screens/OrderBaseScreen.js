import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

/* Base for all screens that are used to order a car ride
Main purpose is to take props.currentOrderData, props.input and props.footer and display them in a consistent way
props.currentOrderData: should display the information for the current order given by the user 
props.input: should allow the user to input information for the current part of the order
props.footer: should finish current part of the order and move to the next screen - or finalize order
*/
function OrderBaseScreen(props) {

    return (
        <View style={{ height: Layout.window.height, flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.orderScreenBackground }}>
            <KeyboardAvoidingView behavior='padding' enabled>
                {props.currentOrderData}

                {props.input}
            </KeyboardAvoidingView>

            {props.footer}
        </View>
    );
}

export { OrderBaseScreen }
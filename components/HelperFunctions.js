//contains helper functions, TODO: delete before handing in
import React from 'react';
import { View, Text } from 'react-native';

function displayOrderData(orderData) {
    return (
        <View>
            <Text>Your name: {orderData.customerName}</Text>
            <Text>Your customer id: {orderData.customerNumber}</Text>
            <Text>Type of trip: {orderData.travelType}</Text>
            <Text>You start from: {orderData.fromLocation}</Text>
            <Text>You go to: {orderData.toLocation}</Text>
            <Text>You want to {orderData.leaving ? 'leave' : 'arrive'} at {orderData.dateTime}</Text>
            <Text>Passengers: {orderData.passengers}</Text>
            <Text>Your comment: {orderData.comment}</Text>
        </View>
    );
}


export { displayOrderData };
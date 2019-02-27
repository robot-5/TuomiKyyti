import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Layout from '../constants/Layout';

/**
 * Creates a Button based on TouchableOpacity Component with given action, text and width. 
 * Action must be a function, text any string and width a string: 'wide' of 'halfWide'
 */
function createButton(action, text) {
    return (
        <TouchableOpacity
            style={buttonStyles.wideButton}
            onPress={action}
        >
            <Text style={buttonStyles.text}> {text}</Text>
        </TouchableOpacity>
    );
}


const buttonStyles = StyleSheet.create({
    // Button that spans the whole width of the screen
    wideButton:
    {
        height: 100,
        width: Layout.window.width,
        alignItems: 'center',
        backgroundColor: 'steelblue',
        padding: 10
    },
    text:
    {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }

})

export { createButton };
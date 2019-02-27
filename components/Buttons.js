import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

/**
 * Creates a Button based on TouchableOpacity Component with given action and text. Text will be in upper case.
 */
function createButton(action, text) {
    return (
        <TouchableOpacity
            style={buttonStyles.wideButton}
            onPress={action}
        >
            <Text style={buttonStyles.text}> {text.toUpperCase()}</Text>
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
        backgroundColor: Colors.button,
        padding: 10,
        borderRadius: 40,

    },
    text:
    {
        color: Colors.buttonText,
        fontSize: 30,
        fontWeight: 'bold',
    }

})

export { createButton };
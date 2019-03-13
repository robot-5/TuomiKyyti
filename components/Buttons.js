import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
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
        width: wp('80%'),
        height: hp('10%'),
        alignItems: 'center',
        backgroundColor: Colors.button,
        padding: 10,
        borderRadius: 30,
        marginBottom: 40,
    },
    text:
    {
        color: Colors.buttonText,
        fontSize: 30,
        fontWeight: 'bold',
    }

})

export { createButton };


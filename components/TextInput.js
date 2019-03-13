import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../constants/Colors';


/**
* Creates a text input field with given action and text. 
  Text will be in upper case and action will be executed when text in input changes.
*/
function createTextInput(text, action) {

    return <TextInput
        style={textInputStyles.textInput}
        placeholder={text}
        onChange={action}
    />;
}

const textInputStyles = StyleSheet.create({
    textInput:
    {
        width: wp('86%'),
        height: hp('10%'),
        backgroundColor: Colors.textInputBackground,
        borderBottomWidth: 5,
        borderBottomColor: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
})

export { createTextInput };


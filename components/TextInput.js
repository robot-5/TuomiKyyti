import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';


/**
* Creates a text input field with given action and text. Text will be in upper case and action will be executed on submit.
*/
function createTextInput(text, action) {

    return <TextInput
        style={textInputStyles.textInput}
        placeholder={text}
        onSubmitEditing={action}
    />;
}

const textInputStyles = StyleSheet.create({
    // Button that spans the whole width of the screen
    textInput:
    {
        height: 60,
        width: Layout.window.width - 20,
        backgroundColor: Colors.textInputBackground,
        borderWidth: 3,
        borderColor: 'black',
    },
    textInputText:
    {
        color: Colors.textInputText,
    }
})

export { createTextInput };
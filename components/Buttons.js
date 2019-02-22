import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from '../constants/ButtonStyles';

/**
 * Creates a Button based on TouchableOpacity Component with given action, text and width. 
 * Action must be a function, text any string and width a string: 'wide' of 'halfWide'
 */
function createButton(action, text, width) { 
    return(
        <TouchableOpacity
                    style={width === 'wide' ? buttonStyles.wideButton : buttonStyles.halfWideButton}
                    onPress={action}
                >
                    <Text style={buttonStyles.text}> {text}</Text>
                </TouchableOpacity>
    );
}

export {createButton};
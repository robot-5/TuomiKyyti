import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Layout from './Layout';


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
    // Button that spans half the width of the screen
    halfWideButton:
    {
        height: 100,
        width: Layout.window.width / 2,
        alignItems: 'center',
        backgroundColor: 'steelblue',
        padding: 10
    }

})

export { buttonStyles };



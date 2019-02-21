import React from 'react';
import { Button, Text, View } from 'react-native';


class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };
    render() {
        const { getParam, navigate, push } = this.props.navigation;
        return (
            <View>
                <Button
                    title="Navigate to HomeScreen"
                    onPress={() => navigate('Home', { name: 'Jane' })}
                />
                <Text>{getParam('name', 'Somebody')}'s Profile Page</Text>
                <Text>Nice to meet you!</Text>
                <Button
                    title="Go to this Screen... again"
                    onPress={() => push('Profile', { name: 'Jane Again?' })}
                />
            </View>
        );
    }
}

export { ProfileScreen };
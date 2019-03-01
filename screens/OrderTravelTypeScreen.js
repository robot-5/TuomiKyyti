import React from 'react';
import { Picker, View, Text } from 'react-native';
import { createButton } from '../components/Buttons';
import { displayOrderData } from '../components/HelperFunctions';
import { OrderBaseScreen } from './OrderBaseScreen';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


class OrderTravelTypeScreen extends React.Component {
    static navigationOptions = {
        title: 'From Where',
    };

    constructor(props) {
        super(props);
        this.state = {
            orderData: this.props.navigation.getParam('orderData'),
        };
        this.setTravelType = this.setTravelType.bind(this);
    }

    setTravelType(travelType) {
        this.setState({
            orderData: {
                ...this.state.orderData,
                travelType: travelType,
            },
        });

    }

    render() {
        const currentOrderData = displayOrderData(this.state.orderData);
        const input =
            <View>
                <Text>Choose the type of your trip:</Text>
                <Picker
                    selectedValue={this.state.orderData.travelType}
                    style={{
                        width: wp('86%'), height: hp('10%'), backgroundColor: 'white'
                    }}
                    onValueChange={(itemValue, itemIndex) => this.setTravelType(itemValue)}>
                    <Picker.Item label="Work" value="Work" />
                    <Picker.Item label="Education" value="Education" />
                    <Picker.Item label="Leisure" value="Leisure" />
                </Picker>
            </View>;

        const footer = createButton(() => this.props.navigation.navigate('OrderFrom', { orderData: this.state.orderData }), 'CONFIRM');

        return <OrderBaseScreen
            currentOrderData={currentOrderData}
            input={input}
            footer={footer} />
    }
}

export { OrderTravelTypeScreen };
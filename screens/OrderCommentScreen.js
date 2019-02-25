import React from 'react';
import { TextInput } from 'react-native';
import { createButton } from '../components/Buttons';
import { displayOrderData } from '../components/HelperFunctions';
import { OrderBaseScreen } from './OrderBaseScreen';


class OrderCommentScreen extends React.Component {
    static navigationOptions = {
        title: 'Comment',
    };

    constructor(props) {
        super(props);
        this.state = {
            orderData: this.props.navigation.getParam('orderData'),
        };
        this.setComment = this.setComment.bind(this);
    }

    setComment(event) {
        this.setState({
            orderData: {
                ...this.state.orderData,
                comment: event.nativeEvent.text,
            },
        });
    }

    render() {
        const currentOrderData = displayOrderData(this.state.orderData);
        const input =
            <TextInput
                style={{ height: 40 }}
                placeholder="Maybe leave a comment"
                onSubmitEditing={this.setComment}
            />;
        const footer = createButton(() => this.props.navigation.navigate('Home', { orderData: this.state.orderData }), 
        'Confirm Comment', 'wide');

        return <OrderBaseScreen
            currentOrderData={currentOrderData}
            input={input}
            footer={footer} />
    }
}

export { OrderCommentScreen };
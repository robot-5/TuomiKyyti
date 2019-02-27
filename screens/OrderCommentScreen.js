import React from 'react';
import { TextInput } from 'react-native';
import { createButton } from '../components/Buttons';
import { displayOrderData } from '../components/HelperFunctions';
import { OrderBaseScreen } from './OrderBaseScreen';
import { createOrderEmailText, sendOrderEmail } from '../communication/Mailing';


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
        this.sendOrder = this.sendOrder.bind(this);
    }

    setComment(event) {
        this.setState({
            orderData: {
                ...this.state.orderData,
                comment: event.nativeEvent.text,
            },
        });
    }

    sendOrder() {
        const { subject, body } = createOrderEmailText(this.state.orderData);
        sendOrderEmail(subject, body);
    }

    render() {
        const currentOrderData = displayOrderData(this.state.orderData);
        const input =
            <TextInput
                style={{ height: 40 }}
                placeholder="Maybe leave a comment"
                onSubmitEditing={this.setComment}
            />;

        // TODO: give button special color
        // TODO: return to home screen after email sending
        const footer = createButton(this.sendOrder, 'Send Order');

        return <OrderBaseScreen
            currentOrderData={currentOrderData}
            input={input}
            footer={footer} />
    }
}

export { OrderCommentScreen };
import { MailComposer } from 'expo';

//creates subject and body for ordering email from given orderData
// TODO: decide language
function createOrderEmailText(orderData) {

    //using ES6 template strings (backticks instead of quotes)
    const subject = `Ride Order from ${orderData.customerName}`;
    const body = 
    `Customer Name: ${orderData.customerName}
Customer ID: ${orderData.customerName}
Travel Type: ${orderData.travelType}
From: ${orderData.fromLocation}
To: ${orderData.toLocation}
${orderData.leaving ? 'Leaving' : 'Arriving'} at ${orderData.dateTime}
Additional Passengers: ${orderData.passengers}
Customer Message: ${orderData.comment}`

    return { subject: subject, body: body };
}

/*
sends plaintext email to order a car ride
theRecipients must be string array of recipient mail addresses
theSubject must be string
theMessage must be string
*/

function sendOrderEmail(subject, body) {
    // TODO: set correct recipients
    const mailOptions = {
        recipients: [''],
        ccRecipients: [],
        bccRecipients: [],
        subject: subject,
        body: body,
        isHtml: false,
        attachments: [],
    }
    sendMail(mailOptions);
}

// prompts user to open mail app where fields will be prefilled with given options
function sendMail(mailOptions) {
    mailing = MailComposer.composeAsync(mailOptions);
    // TODO: check promise resolution?
}


export { sendOrderEmail, createOrderEmailText };
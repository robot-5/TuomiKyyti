import { MailComposer } from 'expo';

//creates subject and body for ordering email from given orderData
// TODO: decide language
function createOrderEmailText(orderData) {

    //using ES6 template strings (backticks instead of quotes)
    const subject = `Ride Order from ${orderData.customerName}`;
    const body = 
    `Customer Name: ${orderData.customerName}\n
Customer ID: ${orderData.customerNumber}\n
Travel Type: ${orderData.travelType}\n
From: ${orderData.fromLocation}\n
To: ${orderData.toLocation}\n
${orderData.leaving ? 'Leaving' : 'Arriving'} at ${orderData.dateTime}\n
Additional Passengers: ${orderData.passengers}\n
Customer Message: ${orderData.comment}`

    return { subject: subject, body: body };
}

/*
sends plaintext email to order a car ride
subject must be string
message must be string
*/

function sendOrderEmail(subject, body) {    
    const mailOptions = {
        recipients: [''], // TODO: set correct recipient (Tuomi customer service)
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
import { MailComposer } from 'expo';

/*
sends plaintext email to order a car ride
theRecipients must be string array of recipient mail addresses
theSubject must be string
theMessage must be string
*/

function sendOrderEmail(theRecipients, theSubject, theMessage) {
    const mailOptions = {
        recipients: theRecipients,
        ccRecipients: [],
        bccRecipients: [],
        subject: theSubject,
        body: theMessage,
        isHtml: false,
        attachments: [],
    }

    // prompts user to open mail app where fields will be prefilled
    mailing = MailComposer.composeAsync(mailOptions);
    // TODO: check promise resolution?
}


export { sendOrderEmail };
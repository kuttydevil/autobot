const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (to, subject, html) => {
    const msg = {
        to,
        from: 'notifyautobot@gmail.com',
        subject,
        html,
    };

    sgMail.send(msg);
};

module.exports = sendEmail;

import axios from 'axios';

export const sendEmail = (employeeData) => {
  const emailContent = `
    Employee Name: ${employeeData.name}
    Employee Email: ${employeeData.email}
    ID Card Expiry Date: ${employeeData.idCardExpiry}
    Passport Expiry Date: ${employeeData.passportExpiry}
    Airport Pass Expiry Date: ${employeeData.airportPassExpiry}
    License Expiry Date: ${employeeData.licenseExpiry}
  `;

  axios.post('https://api.sendgrid.com/v3/mail/send', {
    personalizations: [
      {
        to: [
          {
            email: 'kuttydevilz@gmail.com',
          },
        ],
        subject: 'Employee ID Card Expiry Notification',
      },
    ],
    from: {
      email: 'notifyautobot@gmail.com',
    },
    content: [
      {
        type: 'text/plain',
        value: emailContent,
      },
    ],
  }, {
    headers: {
      Authorization: `Bearer YOUR_SENDGRID_API_KEY`,
    },
  })
  .then((response) => {
    console.log('Email sent successfully');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
};
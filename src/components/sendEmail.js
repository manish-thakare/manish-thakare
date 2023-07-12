// import { createTransport } from 'nodemailer';
// // const contact = require('./Contact');
// // const emailData = <contact
// // emailData: emailData/>

// const sendEmail = (emailData) => {
//   return new Promise((resolve, reject) => {
//     console.log('ithparyant zala')
//     // Create a Nodemailer transporter
//     const transporter = createTransport({
//       // Configure your email provider settings here
//       service: 'Gmail',
//       auth: {
//         user: 'rebelmt4545@gmail.com',
//         pass: 'Rebel@4545.',
//       },
//     });

//     // Compose the email message
//     const mailOptions = {
        
//       from: emailData.email,
//       to: 'rebelmt4545@gmail.com', // Replace with your email address
//       subject: 'Lets connect',
//       html: `
//         <h3>Contact Details:</h3>
//         <p><strong>First Name:</strong> ${emailData.firstName}</p>
//         <p><strong>Last Name:</strong> ${emailData.lastName}</p>
//         <p><strong>Email:</strong> ${emailData.email}</p>
//         <p><strong>Phone:</strong> ${emailData.phone}</p>
//         <p><strong>Message:</strong> ${emailData.message}</p>
//       `,
//     };

//     // Send the email
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log(error);
//         reject(error);
//       } else {
//         console.log('Email sent: ' + info.response);
//         resolve(info.response);
//       }
//     });
//   });
// };

// export default sendEmail;
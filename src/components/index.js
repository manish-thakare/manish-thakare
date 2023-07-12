// const express = require('express');
// const bodyParser = require('body-parser');
// const sendEmail = require('./sendEmail').default;

// const app = express();
// app.use(bodyParser.json());

// app.post('/send-email', async (req, res) => {
//   const emailData = req.body;

//   try {
//     await sendEmail(emailData);
//     res.status(200).json({ code: 200, message: 'Email sent successfully' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ code: 500, message: 'Failed to send email' });
//   }
// });

// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });

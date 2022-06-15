require('dotenv').config();
const path = require('path');
const sgMail = require('@sendgrid/mail');
const express = require('express');
const { getMaxListeners } = require('process');
const app = express();
const router = express.Router();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.route('/').get(function (req, res) {
  // console.log('req', req.body);
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/', (req, res) => {
  // console.log(req);
  const msg = {
    to: `kathy.son7@gmail.com`,
    from: 'kathy.son7@gmail.com',
    subject: req.body.subject,
    text: `Message from ${req.body.email}:\n${req.body.message}`,
  };
  try {
    sgMail.send(msg);
    res.send('Message Successfully Sent!');
  } catch (error) {
    res.send('Message Could not be Sent');
  }
});

app.listen(8080, () => {
  console.log(`Listening on port 8080`);
});

// app.listen(3000, () => {
//   console.log(`Listening on port 3000`);
// });

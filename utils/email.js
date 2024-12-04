
//const nodemailer = require('nodemailer');
//const twilio = require('twilio');

// Função para enviar email
//const sendEmail = async (to, subject, text) => {
  //const transporter = nodemailer.createTransport({
    //service: 'gmail',
    //auth: {
      //user: process.env.EMAIL_USER,
      //pass: process.env.EMAIL_PASSWORD,
    //},
  //});

  //const mailOptions = {
    //from: process.env.EMAIL_USER,
    //to,
    //subject,
    //text,
  //};

  //try {
    //const info = await transporter.sendMail(mailOptions);
    //console.log('Email enviado: ' + info.response);
  //} catch (error) {
    //console.error('Erro ao enviar email:', error);
    //throw new Error('Erro ao enviar email');
  //}
//};

// Função para enviar mensagem SMS via Twilio
//const sendSmsMessage = (to, message) => {
    //console.log(`Tentando enviar SMS para: ${to} com a mensagem: ${message}`);
    
    //const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    
    //client.messages
      //.create({
        //body: message,
        //messagingServiceSid: 'MG36be59d04c1b20aa23e8255c73be85d8',
        //to: to, // Número do destinatário no formato internacional
      //})
      //.then((message) => console.log('SMS enviado: ', message.sid))
      //.catch((err) => console.error('Erro ao enviar SMS: ', err));
//};


//module.exports = { sendEmail, sendSmsMessage };

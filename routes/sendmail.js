var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
// var sendmail=require('../mailconnection');


// Create the transporter with the required configuration for Gmail
// change the user and pass !

var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
        user: 'anusha.gadepalli@trianz.com',
        pass: 'lhndsydjpltyhcpd'
    }
});

router.get('/',function(req,res){
var mailOptions = {
    from: '"Our Code World " <anusha.gadepalli@trianz.com>', // sender address (who sends)
    to: 'anusha.gadepalli@trianz.com,niteshkumar.sharma@trianz.com', // list of receivers (who receives)
    subject: 'Hello ', // Subject line
    text: 'Hello world ', // plaintext body
    html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});
})
module.exports=router;

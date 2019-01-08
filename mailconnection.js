var nodemailer=require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'anusha.gadepalli@trianz.com',
        pass: 'gvs@tty!996600'
    }
});

module.exports=transporter;
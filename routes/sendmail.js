var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

 var db=require('../dbconnection');


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

router.get('/:id',function(req,res){
    var id=req.params.id;
    console.log(id);
    var sql="CALL updateEmailDetails(?)";
    db.query(sql,[id],function(err,rows){
        console.log(id);
        if(err){
            return res.json(err);
        }
        else{
           return res.json(rows);
        }
    })

var mailOptions = {
    from: '"Our Code World " <anusha.gadepalli@trianz.com>', // sender address (who sends)
    to: 'anusha.gadepalli@trianz.com', // list of receivers (who receives)
   
    subject: 'Invoice Info', // Subject line
    text: ' ', // plaintext body
    html: '<br> Invoice is generated for the project' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return error;
    }
    return 'Message sent: ' + info.response;
});

})

module.exports=router;

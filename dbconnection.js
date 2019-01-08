var mysql=require('mysql');

var connection=mysql.createConnection({
    host:'leap.chb6nt6repko.ap-southeast-1.rds.amazonaws.com',
    user:'leap2018',
    password:'leap2018',
    database:'leap2018',
    timezone:'utc'
});


// var connection = mysql.createConnection({multipleStatements: true});
module.exports=connection;
var express = require('express');
var router = express.Router();
var db=require('../dbconnection');

router.get('/:id',function(req,res){
    var id=req.params.id;
    console.log(id);
   
    var sql="CALL Viewemployeedetails(?)";
    console.log(sql);
    db.query(sql,[id],function(err,rows){
        console.log(id);
        if(err){
            return res.json(err);
        }
        else{
           return res.json(rows[0]);
        }
    })
})
module.exports=router;
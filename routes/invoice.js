var express = require('express');
var router = express.Router();
// var User=require('../model/User');
var db=require('../dbconnection');
router.get('/:id/:id1',function(req,res){
    var id=req.params.id;
    var id1=req.params.id1;
    var sql="CALL RetrieveClient(?,?)";
    db.query(sql,[id,id1],function(err,rows,fields){
        if(err){
            return res.status(501).json(err);
        }
        else{
            return res.status(201).json(rows[0][0]);
        }
    })

})

router.get('/:id',function(req,res){
    var id=req.params.id;
    var sql="CALL InvoiceDetails(?)";
    db.query(sql,[id],function(err,rows){
        if(err){
            return res.status(501).json(err);
        }
        else{
            return res.status(201).json(rows);
        }
    })
})
  module.exports=router;
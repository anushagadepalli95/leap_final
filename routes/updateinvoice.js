var express = require('express');
var router = express.Router();
var db=require('../dbconnection');

router.get('/:id/:id1/:id2/:id3',function(req,res){
    var id=req.params.id;
    var id1=req.params.id1;
    var id2=req.params.id2;
    var id3=req.params.id3;
    console.log(id);
    console.log(id1);
    var sql="CALL updateInvoiceDetails(?,?,?,?)";
    console.log(sql);
    db.query(sql,[id,id1,id2,id3],function(err,rows){
        console.log(id,id1,id2);
        if(err){
            return res.json(err);
        }
        else{
           return res.json(rows);
        }
    })
})
router.get('/:id',function(req,res){
    var id=req.params.id;
    var sql="CALL viewrevenue(?)";
    db.query(sql,[id],function(err,rows){
        if(err){
            return res.json(err);
        }
        else{
           return res.json(rows[0]);
        }
    })

})
module.exports=router;
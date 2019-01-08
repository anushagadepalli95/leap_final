var express = require('express');
var router = express.Router();
var db=require('../dbconnection');

router.get('/:id/:id1',function(req,res){
    var id=req.params.id;
    var id1=req.params.id1;
    console.log(id);
    console.log(id1);
    var sql="CALL RetriveMilestoneSD(?,?)";
    console.log(sql);
    db.query(sql,[id,id1],function(err,rows){
        console.log(id,id1);
        if(err){
            return res.json(err);
        }
        else{
           return res.json(rows);
        }
    })
})
router.get('/:id/:id1/:id2',function(req,res){
    var id=req.params.id;
    var id1=req.params.id1;
    var id2=req.params.id2;
    console.log(id);
    console.log(id1);
    var sql="CALL UpdateTimesheet(?,?,?)";
    console.log(sql);
    db.query(sql,[id,id1,id2],function(err,rows){
        console.log(id,id1,id2);
        if(err){
            return res.json(err);
        }
        else{
           return res.json(rows);
        }
    })
})
module.exports=router;
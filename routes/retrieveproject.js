var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');
var db=require('../dbconnection');

router.get('/:id/:id1',function(req,res){
    var id=req.params.id;
    var id1=req.params.id1;

    console.log(id);
    var now =new Date(id1);
    var now1= new Date(id1);

    var x=dateFormat(now,"yyyy-12-31");
    console.log(x);
    var y=dateFormat(now1,"yyyy-01-01");
    var sql="CALL RetieveProjectDetails5(?,?,?)";
    db.query(sql,[id,x,y],function(err,rows){
        console.log(x);
        console.log(y);
        if(err){
            return res.json(err);
        }
        else{
           return res.json(rows[0]);
        }
    })

})
router.get('/:id',function(req,res){
    var id=req.params.id;
    console.log(id);
    var sql="CALL RetrieveProject(?)";
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
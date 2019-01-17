var express = require('express');
var router = express.Router();
var db=require('../dbconnection');
router.get('/:id',function(req,res){
    var id=req.params.id;
    var sql="CALL RetriveCommonMilestoneDetails(?)";
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
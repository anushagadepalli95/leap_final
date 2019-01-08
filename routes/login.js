var express = require('express');
var router = express.Router();
var User=require('../model/User');
router.get('/:id',function(req,res,next){
    if(req.params.id){
     User.getUserDetails(req.params.id,function(err,rows){
       if(err)
       {
        return res.status(501).json(err);
       }
       else{
        return res.status(201).json(rows[0]);
       }

    })
    
   }
  })
  module.exports=router;
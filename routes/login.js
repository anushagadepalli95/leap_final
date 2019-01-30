var express = require('express');
var router = express.Router();
var db=require('../dbconnection');
router.get('/:id/:id1',function(req,res){
  var id=req.params.id;
  var id1=req.params.id1;
  console.log(id);
  console.log(id1);
  var sql="CALL ValidateEmployeeCredentials1(?,?)";
  db.query(sql,[id,id1],function(err,rows,fields){
      if(err){
          return res.status(501).json(err);
      }
      else{
          return res.status(201).json(rows);
      }
  })

})

  module.exports=router;
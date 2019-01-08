var express = require('express');
var router = express.Router();
var Task=require('../model/Task');

/* GET Project Details. */
router.get('/', function(req, res, next) {
  Task.getAllTasks(function(err,rows){
   
    if(err)
      {
      return res.status(501).json(err);
      }
      else
      {
      return res.status(201).json(rows[0]);
      }
     
     });
});
router.get('/:id?',function(req,res,next){
 
  if(req.params.id){
   
  Task.getTaskById(req.params.id,function(err,rows){
   
  if(err)
    {
    return res.status(501).json(err);
    }
    else{
    return res.status(201).json(rows[0]);
    }
    });
   }
   });
  


module.exports = router;

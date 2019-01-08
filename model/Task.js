var db=require('../dbconnection');
var Task={
 
    // getAllTasks:function(callback){
        
    // return db.query("CALL RetrieveProject()",callback);
     
    // },
    getTaskById:function(id,callback){
 
        return db.query("CALL RetrieveMilestone(?)",[id],callback);
         }

    
}
module.exports=Task;
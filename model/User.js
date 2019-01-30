var db=require('../dbconnection');
var User={
    // getUserDetails:function(id,callback){
        
    //     query_str="Call leap2018.ValidateEmployeeCredentials1(?,?)";
    //     return db.query(query_str,[id],callback);
    // },
    getInvoiceDetails:function(id,callback){
        query_str="Call leap2018.RetrieveClient(?,?)";
        return db.query(query_str,[id],callback);
    }

}
module.exports=User;
const List = require("../models/list");

module.exports.home = function(req,res){
    List.find({},function(err,result){
       if(err){
        return res.send(err);
       }
    //    console.log(result);
       return res.render('home',{
        title: "todo list",
        Lists:result
    })
})
   
}

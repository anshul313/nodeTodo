const { json } = require("body-parser");
const List = require("../models/list");


module.exports.addtask= function(req,res){
  console.log(req.body);
  List.create(req.body,function(err,result){
    if(err){
      console.log('error occured',err);
      return res.send(err);
    }
    return res.redirect('/');
  })
}

module.exports.delete=function(req,res){
  console.log(req.body);
  List.deleteMany({"_id":{$in:req.body.userIds}},function(err,result){
    if(err){
      console.log('error occured',err);
      return res.send(err);
    }
    return res.redirect('/');
  });
}
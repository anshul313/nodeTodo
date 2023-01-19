const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    Description:{
        type:String,
        required:true,
        unique:true
    },
    Category:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const List = mongoose.model('List',ListSchema);

module.exports=List;
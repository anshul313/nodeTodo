const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost/todo_development');



const db = mongoose.connection;

db.on('error',console.error.bind(console,'error to connecting mongodb'));

db.once('open',function(){
    console.log('db connected successfully');
});

module.exports=db;
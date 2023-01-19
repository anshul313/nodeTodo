const express = require("express");
var cookieParser = require('cookie-parser');
var cors = require('cors');
const path = require('path');
const port = 8001;
const app = express();
const expresslayout = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.json());
app.use(cors())
app.use(cookieParser());
app.use(expresslayout);
app.use(express.urlencoded({ extended: true }));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use("/", require("./routes"));
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./Assests'));


app.listen(port, function (err) {
  if (err) {
    console.log("Error", err);
    console.log("error occured during starting express server", err);
  }
  console.log(`server listen on port: ${port}`);
});

const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost/aswin";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", function () {
  console.log("connected...");
});



const quizRouter=require('./routers/question');
app.use('/question',quizRouter)

app.listen(8888,()=>{
    console.log("Server Started");
});
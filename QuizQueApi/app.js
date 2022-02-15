const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');


const url = "mongodb://localhost/aswin"

const app = express();

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open',()=>{
    console.log("connected...");
})

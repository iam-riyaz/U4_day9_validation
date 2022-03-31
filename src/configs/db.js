const mongoose = require("mongoose");


const connect = ()=>{
  return new mongoose.connect("mongodb+srv://riyazMongo:Riyaz123@cluster0.nfiqb.mongodb.net/second_db?retryWrites=true&w=majority"
  );
}


  module.exports=connect
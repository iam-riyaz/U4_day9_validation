const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    gender: {
      type: String,
      enum: ["Male", "Female"]},
    age: { type: Number, required: true },
    pincode:{type:Number,required:true}
  }
);

const User = mongoose.model("user", userSchema);

module.exports=User



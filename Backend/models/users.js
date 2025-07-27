import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  savedPins:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Pins"
  }]
});

const User = mongoose.model("user", userSchema); 
export default User;

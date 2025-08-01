import mongoose from "mongoose";

const sectionSchema=new mongoose.Schema({
  name:{
    type:String,
  },
  boardName:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Board"
  },
  pins:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Pin"
  }],
  createdAt:{
    type:Date,
    default:Date.now
  }
})

const Section=mongoose.model("Section",sectionSchema)

export default Section;
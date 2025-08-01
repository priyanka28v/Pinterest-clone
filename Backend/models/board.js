import mongoose from "mongoose";

const boardSchema=new mongoose.Schema({
  boardName:{
    type:String
  },
  coverImage:{
    type:String,
    default:""
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  section:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Section"
  }],
  pins:[{
   type:mongoose.Schema.Types.ObjectId,
   ref:"Pins" 
  }],
  createdAt:{
    type:Date,
    default:Date.now()
  },
})

const Board=mongoose.model("Board",boardSchema)

export default Board;
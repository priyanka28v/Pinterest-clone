import  mongoose from 'mongoose'
import dontenv from 'dotenv'
dontenv.config()
 const connectDB=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("server connected");
  }
  catch(err){
    console.log(err)
  }
 }

 export default connectDB
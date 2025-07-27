import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export function Verification(req, res, next){
  const token =req.cookies.token;
  if(!token){
    return res.status(401).json({msg: "No token, authorization denied"});
  }
  try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded
    next();
  }
  catch(err){
    return res.status(401).json({msg: "Invalid token"});
  }
}
const {JWT_SECRET}= require("../config.js");
const jwt=require("jsonwebtoken");

function middleware(req,res,next){
const token =req.headers.authorization;
const words=token.split(" ");
const jwttoken=words[1];
const decodedvalue=jwt.verify(jwttoken,JWT_SECRET);
 res.locals.decodedvalue=decodedvalue;
if(decodedvalue.username){
    next();
}
else{
    res.status(411).json({
        msg:"you are not authorized"
    })
}
}
module.exports= middleware;
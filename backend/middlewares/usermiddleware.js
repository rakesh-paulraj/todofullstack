const {JWT_SECRET}= require("..config.js");
const jwt=reqiure("jsonwebtoken");

function middleware(req,res,next){
const token =req.headers.authorization;
const words=token.split(" ");
const jwttoken=words[1];
const decodedvalue=jwt.verify(jwttoken,JWT_SECRET);
 
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
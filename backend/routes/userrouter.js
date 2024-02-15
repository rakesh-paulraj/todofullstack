const {Router}=require("express");
const router=Router();
const User=require ("../database/User");
const {JWT_SECRET}=require("../JWTSECRET.js");
const jwt = require('jsonwebtoken');

const { usermiddleware } = require("../middlewares/userauth");


router.post("/signup",async (req,res,next)=>{
    try{
        const name=req.body.name;
        const password=req.body.password;
        const email=req.body.email;
       
        const dbcheck=await User.findOne({
            name:name,
           
        });
     if(  !dbcheck){
        const user=  await User.create({
            name:name,
            password:password,
            email:email
             }) 
        res.json({
            message:"User created succesfully"
        })
     }

    }
catch(error){
    next(error);

}
});


router.post("/signin",async (req,res,next)=>{
    try{
  
const user =await User.findOne({
    email:req.body.email,
    password:req.body.password})
    if (user){
        const token=jwt.sign({
            userid:user._id
        },JWT_SECRET);
        res.json({
            token:token
        })
        return ;
    }
    else {res.status(411).json({
    message:"Wrong password or username"
})}
    }catch(error){
        next(error);
    }

});
router.get("/user",usermiddleware,(req,res)=>{
    res.status(200).json({
        success: true,
        user: req.user,
      });
})
router.get("/logout",(req,res,next)=>{
    try{
       
        res.setHeader("Authorization","");
        res.json({
            success: true,
            message: 'Logout successful',
          });
    }catch(error){
        console.log(error);
        next(error)
    }
})
router.delete("/:id", async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json({
            message: "User deleted successfully"
        });
    } catch (error) {
        next(error);
    }
}); 


module.exports=router;



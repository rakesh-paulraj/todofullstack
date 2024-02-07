const {Router}=require("express");
const router=Router();
const User=require ("../database/User");
const resgisteruser = require("../zod/userzod");


router.post("/signup",async (req,res,next)=>{
    try{
        const signupuser=req.body;
        const {success}=resgisteruser.safeParse(signupuser);
        const dbcheck=await User.findOne({
            username:signupuser.username
        });
     if(success && !dbcheck){
        const user=  await User.create({
            signupuser
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
const user =await User.findOne({
    email:req.body.email,
    password:req.body.password})
    if (user){
        const token=jwt.sign({
            userid:user._id
        },)
    }

})

modules.exports=router;



const express= require("express");
const router =express();
const {User,Todo}=require ("database/database.js");
const jwt =require("jsonwebtoken");
const {JWT_SECRET} = require("config.js");
const middleware=require("middlewares/usermiddleware.js")

router.use(express.json());

router.post('/signup',async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    await User.create({
        username,
        password
    })
    res.json({
        message:"User created successfully"
    })

});
router.post('/signin',async (req,res)=>{
    const username= req.body.username;
    const password=rew.body.password;

    const user= await User.find({
        username,
        password
    })

    if(user){
        const token=jwt.sign({
            username
        },JWT_SECRET)
        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            msg:"Wrong password or username"
        })
    }

});
router.get('todos')






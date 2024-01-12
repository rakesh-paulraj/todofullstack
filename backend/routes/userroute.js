const express= require("express");
const router =express();
const {User,Todo}=require ("database/database.js");
const jwt =require("jsonwebtoken");


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

    await User.find({
        username,
        password
    })

})


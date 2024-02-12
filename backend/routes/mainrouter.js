const {Router}=require("express");
const router =Router();
const userrouter=require("./userrouter");
const todorouter=require("./todorouter");


router.use("/user",userrouter);
router.use("/todo",todorouter);

module.exports=router;

const {Router}=require("express");
const router =Router();
const userrouter=require("./userroute");
const todorouter=require("./todoroute");


router.use("/user",userrouter);
router.use("/todo",todorouter);

modules.exports=router;

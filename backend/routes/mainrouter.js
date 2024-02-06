const {Router}=require("express");
const router =Router();
const userrouter=require("./userroute");
const todorouter=require("./todoroute");
const cors=require("cors");
router.use(cors());
router.use("/user",)
const {Router}=require("express");
const router =Router();
const mainrouter=require("./mainrouter");
const cors=require("cors");
router.use(cors());


router.use("/api/v1/",mainrouter);

router.listen(3000);
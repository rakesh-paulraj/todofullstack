
const mainrouter=require("../backend/routes/mainrouter");
const cors=require("cors");
const express=require("express");
const router =express();
router.use(cors());
const express=require("express");

router.use (express.json());


router.use("/api/v1/",mainrouter);

router.listen(3000, () => {
    console.log("Server is running on port 3000");
});
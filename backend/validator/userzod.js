const zod =require("zod");

const registeruser=zod.object({
    name:String(),
    email:zod.string().email(),
    password:zod.string().min(8)
})
const signinuser=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)
})
module.exports={registeruser,signinuser};

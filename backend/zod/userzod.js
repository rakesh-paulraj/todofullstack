const zod =require("zod");

const resgisteruser=zod.object({
    name:String(),
    email:zod.string().email(),
    password:zod.string().min(8)
})
const signinuser=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)
})
module.exports={resgisteruser,signinuser};

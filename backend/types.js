const zod=require("zod");

const createtodo=zod.object({
    title:zod.String(),
    description:zod.String()
})
const updatetodo=zod.object({
    id:zod.String()
})

module.exports={
    createtodo:createtodo,
    usertodo:usertodo
}
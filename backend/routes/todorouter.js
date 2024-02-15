const {Router}=require("express");
const router=Router();
const Todo=require ("../database/Todo");

router.post("/createtodo",async(req,res,next)=>{
    try{
        const{title,description,tag}=req.body;
        await Todo.create({
            title,
            description,
            tag,
            user:req.user._id});
            res.status(201).json({
                message:"Todo created succesfully"})

    }catch(error){
            next(error);
    }

});

router.get("/getalltodos",async (req,res,next)=>{
    try{
        const userid = req.user._id;
        const todos=await Todo.find({user:userid});
        res.status(200).json({
            todos
        })
    }catch(error){
        next(error);

    }
})
router.put("/updatetodo/:id",async (req,res,next)=>{
    try{
        const{title,description,tag}=req.body;
        const{todoid}=req.params;
        const userid = req.user._id;
        const todo=await Todo.findOne({
            _id:todoid,
            user:userid
        });
        if(todo){
            await Todo.updateOne({
                _id:todoid
            },{
                title,
                description,
                tag
            })
            res.status(200).json({
                message:"Todo updated succesfully"
            })
        }
        else{
            res.status(404).json({
                message:"Todo not found"
            })
        }
    }catch(error){
        next(error);
    }
})
router.delete("/deletetodo/:id",async (req,res,next)=>{
    try{
        const todo=await Todo.findOne({todo:req.params.id});
        await todo.deleteOne();
        res.json({
            message: 'Todo deleted successfully',
        });
    }
    catch (error) {
       
        next(error);
    }
})





module.exports=router;
const express= require("express");
const router =express();
const User=require ("../database/user");
const Todo=require ("../database/Todo");
const jwt =require("jsonwebtoken");
const {JWT_SECRET} = require("../config.js");
const middleware=require("../middlewares/usermiddleware.js");
const { createtodo, updatetodo } = require("../types");

router.use(express.json());

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
    const password=req.body.password;

    const user= await User.find({
        username,
        password
    })

    if(user){
        const token=jwt.sign({
            username
        },JWT_SECRET)
        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            msg:"Wrong password or username"
        })
    }
});

router.post('/todo', middleware , async function(req,res){
    const username =res.locals.decodedvalue.username;
    const createpaytodo=req.body;
    const parsedpaytodo=createtodo.safeParse(createpaytodo);

    if(!parsedpaytodo.success){
        res.status(411).json({
            msg:"you have sent wrong inputs"
        })
        return
    }
    try {
        
        const user = await User.findOne({ username });

        if (!user) {
            res.status(404).json({
                msg: "User not found",
            });
            return;
        }

        
        const todo = await Todo.create({
            title: createpaytodo.title,
            description: createpaytodo.description,
            completed: false,
        });

        
        user.todos.push(todo._id);
        await user.save();

        res.json({
            msg: "Todo created",
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal Server Error",
        });
    }
});

router.get('/todos',middleware, async function(req,res){
    try{
    const username=res.locals.decodedvalue.username;
    const user = await User.findOne({ username }).populate('todos');
    if (!user) {
        return res.status(404).json({
            msg: "User not found",
        });
    }

    return res.json({
         todos: user.todos,
    });
} catch (error) {
    console.error("Error in /todos route:", error);
    return res.status(500).json({
        msg: "Internal Server Error",
    });
}
});

router.put('/completed',middleware,async function(req,res){
    
    try{
        const username=res.locals.decodedvalue.username;
    
    const todoId = req.body._id;

    
    const result = await Todo.updateOne(
        { _id: todoId, user: { $in: [username] } }, 
        { completed: true }
    );

    if (result.nModified === 0) {
        return res.status(404).json({
            msg: "Todo not found or does not belong to the user",
        });
    }

    return res.json({
        msg: "Todo updated",
    });
} catch (error) {
    console.error(error);
    return res.status(500).json({
        msg: "Internal Server Error",
    });
}
});

router.listen(3000);









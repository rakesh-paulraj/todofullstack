const mongoose = require("mongoose");
const{Schema,model}=require("mongoose");

mongoose.connect("mongodb+srv://admin:fQ8qLRJqWtSwH33G@cluster0.mmielod.mongodb.net/doer", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const todoschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },des:{
        type:String,
        required:true,
    },tag:{
        type:String,
        default:"General",
    },user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    

})

const Todo = mongoose.model('Todo', todoschema);

module.exports ={Todo};

    

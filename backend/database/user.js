const mongoose= require("mongoose");
const{Schema,model}=require("mongoose");


mongoose.connect("mongodb+srv://admin:fQ8qLRJqWtSwH33G@cluster0.mmielod.mongodb.net/todo_fullstack")


const userschema=mongoose.Schema({
    username:String,
    password:String,
    todos: [{
        type: Schema.Types.ObjectId,
        ref: "Todo", // Assuming "Todo" is the name of the referenced model
        required: [true, "Todo Id is required to store todo for user"]
    }]
});


const User= mongoose.model('user',userschema);

module.exports={
    User
};
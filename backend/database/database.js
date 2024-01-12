const mongoose= require("mongoose");


mongoose.connect("mongodb+srv://admin:fQ8qLRJqWtSwH33G@cluster0.mmielod.mongodb.net/todo_fullstack")

const userschema=mongoose.Schema({
    username:String,
    password:String 
})

const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
 const Todo = mongoose.model('Todo',todoschema);
 const User =mongoose.model('User',userschema);

 module.exports={
    Todo,
    User
 }
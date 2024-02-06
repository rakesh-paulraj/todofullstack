const mongoose= require("mongoose");
const{Schema,model}=require("mongoose");


mongoose.connect("mongodb+srv://admin:fQ8qLRJqWtSwH33G@cluster0.mmielod.mongodb.net/todo_fullstack")


const userschema=mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        select: false,
      },
      
    });


const User= mongoose.model('user',userschema);

module.exports=
    User;

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:fQ8qLRJqWtSwH33G@cluster0.mmielod.mongodb.net/todo_fullstack", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('todo', todoschema);

module.exports = {
    Todo
};

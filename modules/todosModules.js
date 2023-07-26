const mongoose = require("mongoose");
const todosSchema = require("./todosSchema");

const Todos = mongoose.model("todo", todosSchema);

module.exports = Todos;

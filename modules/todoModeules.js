const mongoose = require("mongoose");
const todosSchema = new mongoose.Schema({
  success: { type: Boolean, default: false },
  name: {
    type: String,
    required: [true, "A todo must have a name"],
    unique: [true, "name already exists"],
  },
});

const Todos = mongoose.model("todo", todosSchema);

module.exports = Todos;

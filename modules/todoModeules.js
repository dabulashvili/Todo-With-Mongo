const mongoose = require("mongoose");
const todosSchema = new mongoose.Schema({
  success: { type: Boolean, default: false },
  name: {
    type: String,
    trim: true,
    required: [true, "A todo must have a name"],
    unique: true,
  },
});

const Todos = mongoose.model("todo", todosSchema);

module.exports = Todos;

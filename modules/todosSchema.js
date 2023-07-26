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
module.exports = todosSchema;

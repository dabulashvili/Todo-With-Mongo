const mongoose = require("mongoose");
const todosSchema = new mongoose.Schema({
  success: { type: Boolean, default: false },
  description: { type: String },
  name: {
    type: String,
    trim: true,
    required: [true, "A todo must have a name"],
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message: "Invalid email format",
    },
  },
});
module.exports = todosSchema;

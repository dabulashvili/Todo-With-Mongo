const mongoose = require("mongoose");
const hashPassword = require("../utils/hashPass");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value) {
        return value.length >= 4;
      },
      message: "Password must be at least 4 characters long",
    },
  },
});

userSchema.virtual("virtualProp").get(function () {
  return "virtual1234";
});

userSchema.pre("save", async function preSave(next) {
  const user = this;
  console.log(user);
  if (!user.isModified("password")) {
    next();
  } else {
    user.password = await hashPassword(user.password);
    return next();
  }
});
module.exports = userSchema;

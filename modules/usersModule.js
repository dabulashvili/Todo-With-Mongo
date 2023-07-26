const mongoose = require("mongoose");
const userSchema = require("./usersSchema");

const Users = mongoose.model("Users", userSchema);

module.exports = Users;

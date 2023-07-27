const Users = require("../models/usersModel");
const comparePasswords = require("../utils/comparePass");
// const hashPassword = require("../utils/hashPass");
const jwt = require("jsonwebtoken");
require("dotenv").config();
class AuthServices {
  constructor() {}
  async addUser(body) {
    // const { email } = body;
    // const password = await hashPassword(body.password);

    const data = await Users.create(body);
    return data;
  }

  async getSingleUser(email) {
    const user = await Users.find({ email });
    return user;
  }

  async authenticateUser(body) {
    const userFromBase = await this.getSingleUser(body.email);

    if (await comparePasswords(body.password, userFromBase[0].password)) {
      const token = jwt.sign({ email: body.email }, process.env.SECRET_KEY, {
        expiresIn: "3h",
      });
      return token;
    } else throw new Error("incorect email of pass");
  }
}
module.exports = AuthServices;

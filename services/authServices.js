const Users = require("../modules/usersModule");
const comparePasswords = require("../utils/comparePass");
// const hashPassword = require("../utils/hashPass");
const jwt = require("jsonwebtoken");
require("dotenv").config();
class AuthServices {
  constructor() {}
  async addUser(body) {
    // const { email } = body;
    // const password = await hashPassword(body.password);
    console.log(
      await comparePasswords(
        "irakli123",
        "$2b$10$glPCFSYWut3yLREoZ1ZwFe6mSK9knx4vzBKJtLsw.pg5qkWRrVlVO"
      ),
      "match"
    );
    const data = await Users.create(body);
    return data;
  }

  async getSingleUser(email) {
    const user = await Users.find({ email });
    return user;
  }

  async authenticateUser(body) {
    const userFromBase = await this.getSingleUser(body.email);
    console.log(body.password, userFromBase[0].password);

    if (await comparePasswords(body.password, userFromBase[0].password)) {
      console.log("entered");
      const token = jwt.sign({ email: body.email }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      return token;
    } else throw new Error("incorect email of pass");
  }
}
module.exports = AuthServices;

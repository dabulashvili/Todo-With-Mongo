const AuthServices = require("./../services/authServices");
const authServices = new AuthServices();

class TodoController {
  constructor() {}

  async addUser(req, res) {
    try {
      const newTodo = await authServices.addUser(req.body);
      const { password, ...rest } = newTodo._doc;
      res.status(201).json({ status: "success", data: rest });
    } catch (er) {
      res.status(400).json({ status: "fail", er });
    }
  }

  async authenticateUser(req, res) {
    console.log(req.body, "bodyyy");
    try {
      const token = await authServices.authenticateUser(req.body);
      console.log(token);
      res.status(200).json({ status: "success", token });
    } catch (err) {
      console.log(err);
      res.status(404).json({ status: "fail", err });
    }
  }
}

module.exports = TodoController;

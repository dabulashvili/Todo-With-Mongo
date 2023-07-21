const TodoServices = require("../services/todoServices");
const todoServices = new TodoServices();
class TodoController {
  constructor() {}
  async getAllData(req, res) {
    //some operation on req
    console.log("sss", req.body);
    const data = await todoServices.getAllData();
    res.status(200).json({ data });
  }

  async addTodo(req, res, next) {
    const newTodo = await todoServices.addTodoService(req.body);
    console.log(req.body, "ssss", newTodo);
    // res.status(404).json({ message: "not found" });
  }
}

module.exports = TodoController;

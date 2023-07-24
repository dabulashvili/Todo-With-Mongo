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

  async getSingleTodo(req, res) {
    try {
      const data = await todoServices.getSingleData(req.params.id);
      res.status(200).json({ status: "success", data });
    } catch (er) {
      res.status(400).json({ status: "errors", er });
    }
  }

  async changeTodo(req, res) {
    try {
      const data = await todoServices.changeTodo(req.params.id, res.body);
      res.status(201).json({ status: updated, data });
    } catch (err) {
      res.status(404).json(err);
    }
  }

  async addTodo(req, res, next) {
    try {
      const newTodo = await todoServices.addTodoService(req.body);
      res.status(201).json({ status: "success", data: newTodo });
    } catch (er) {
      res.status(400).json({ status: "fail", er });
    }
  }
}

module.exports = TodoController;

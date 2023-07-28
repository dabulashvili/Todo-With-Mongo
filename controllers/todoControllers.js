const TodoServices = require("../services/todoServices");
const todoServices = new TodoServices();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

class TodoController {
  constructor() {
    this.getSingleTodo = this.getSingleTodo.bind(this);
  }
  async getAllData(req, res) {
    try {
      const data = await todoServices.getAllData(req.query);
      res.status(200).json({ data });
    } catch (err) {
      res.status(404).json({ message: err });
    }
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
      const data = await todoServices.changeTodo(req.params.id, req.body);

      res.status(201).json({ status: "updated", data });
    } catch (err) {
      res.status(404).json(err);
    }
  }
  async verifyJWT(req, res, next) {
    try {
      req.user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
      next();
    } catch (err) {
      next(err, "invalid or expired token");
    }
  }

  async checkAuthorization(req, res, next) {
    const todo = await todoServices.getSingleData(req.params.id);
    if (todo.email === req.user.email) {
      next();
    } else {
      console.log(todo.email, req.user.email);
      next("Sorry you dont have permission for this operation");
    }
  }

  async addTodo(req, res, next) {
    try {
      const newTodo = await todoServices.addTodoService({
        ...req.body,
        email: req.user.email,
      });
      res.status(201).json({ status: "success", data: newTodo });
    } catch (er) {
      res.status(400).json({ status: "fail", er });
    }
  }

  async deleteTodo(req, res) {
    const deleted = await todoServices.deleteTodo(req.params.id);
    if (deleted) {
      res.status(200).json({ status: "deleted", data: null });
    } else {
      res.status(400).json({
        status: "fail",
        message: "couldnt find todo with provided id",
      });
    }
  }
  async getStats(req, res) {
    console.log(req.headers);
    try {
      const stats = await todoServices.getStats();
      res.status(200).json({ stats });
    } catch (err) {
      res.status(404).json({ err });
    }
  }
}

module.exports = TodoController;

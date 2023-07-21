const express = require("express");
const router = express.Router();
const TodoController = require("./../controllers/todoControllers");
const controllers = new TodoController();

router.route("/").get(controllers.getAllData).post(controllers.addTodo);

module.exports = router;

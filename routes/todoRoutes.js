const express = require("express");
const router = express.Router();
const TodoController = require("./../controllers/todoControllers");
const controllers = new TodoController();

router
  .route("/")
  .get(controllers.verifyJWT, controllers.getAllData)
  .post(controllers.verifyJWT, controllers.addTodo);

router.route("/stats").get(controllers.getStats);

router.route("/stats").get(controllers.getStats);

router
  .route("/:id")
  .get(
    controllers.verifyJWT,
    controllers.checkAuthorization,
    controllers.getSingleTodo
  )
  .patch(
    controllers.verifyJWT,
    controllers.checkAuthorization,
    controllers.changeTodo
  )
  .delete(
    controllers.verifyJWT,
    controllers.checkAuthorization,
    controllers.deleteTodo
  );

module.exports = router;

const express = require("express");
const router = express.Router();
const AuthControllers = require("./../controllers/authControllers");
const controllers = new AuthControllers();

router.route("/registration").post(controllers.addUser);
router.route("/login").get(controllers.authenticateUser);

module.exports = router;

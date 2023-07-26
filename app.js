const express = require("express");
const app = express();
const todoRouter = require("./routes/todoRoutes");
const authRouter = require("./routes/authRoutes");

app.use(express.json());
app.use("/api/todos", todoRouter);
app.use("/api/auth", authRouter);

module.exports = app;

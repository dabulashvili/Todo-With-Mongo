const express = require("express");
const Todos = require("./modules/todoModeules");
const app = express();
const mongoose = require("mongoose");
const todoRouter = require("./routes/todoRoutes");

require("dotenv").config();
mongoose
  .connect(process.env.MONGODB_DS, {
    useNewUrlParser: true,
    dbName: "my_database",
  })
  .then((con) => console.log("s"));

app.use(express.json());
app.use("/api/todos", todoRouter);

app.listen(5000, () => console.log("listening to 5000"));

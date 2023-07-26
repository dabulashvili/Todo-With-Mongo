const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
const port = 5000;

mongoose
  .connect(process.env.MONGODB_DS, {
    useNewUrlParser: true,
    dbName: "my_database",
  })
  .then((con) => {
    console.log("Connected To MongoDB");
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  })
  .catch((err) => console.log(err));

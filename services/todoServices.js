const Todos = require("../modules/todoModeules");
class TodoServices {
  constructor() {}
  async getAllData() {
    try {
      const data = await Todos.find();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async addTodoService(body) {
    const data = await Todos.create(body);
    return data;
  }
}
module.exports = TodoServices;

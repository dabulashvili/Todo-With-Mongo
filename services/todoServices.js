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

  async getSingleData(id) {
    console.log(id);
    const data = await Todos.findById(id);
    console.log(data);
    return data;
  }

  async updateTodo(_id, body) {
    const data = await Todos.findOneAndUpdate({ _id }, body, {
      new: true,
    });
    return data;
  }

  async addTodoService(body) {
    const data = await Todos.create(body);
    return data;
  }
}
module.exports = TodoServices;

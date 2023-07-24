const Todos = require("../modules/todoModeules");
const dinamicSort = require("../utils/dinamicSort");
const queryStringParser = require("../utils/queryStringParser");
class TodoServices {
  constructor() {}
  async getAllData(queryObj) {
    const { page, sort, ...query } = queryStringParser(
      JSON.stringify(queryObj)
    );

    const data = await Todos.find(query).sort(sort);
    // return dinamicSort(data, sort);
    return data;
  }

  async getSingleData(id) {
    const data = await Todos.findById(id);

    return data;
  }

  async changeTodo(_id, body) {
    const data = await Todos.findOneAndUpdate({ _id }, body, {
      new: true,
      runValidators: true,
    });
    return data;
  }

  async addTodoService(body) {
    const data = await Todos.create(body);
    return data;
  }

  async deleteTodo(_id) {
    const data = await Todos.findOneAndDelete({ _id });
    Todos.find();

    return data;
  }
}
module.exports = TodoServices;

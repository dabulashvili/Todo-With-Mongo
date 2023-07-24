const Todos = require("../modules/todoModeules");
const dinamicSort = require("../utils/dinamicSort");
const queryStringParser = require("../utils/queryStringParser");
class TodoServices {
  constructor() {}
  async getAllData(queryObj) {
    const { page, sort, fields, ...reqQueries } = queryStringParser(
      JSON.stringify(queryObj)
    );

    const query = Todos.find(reqQueries);

    if (fields) {
      const f = fields.split(",").join(" ");
      query.select(f);
    } else {
      query.select("-__v");
    }

    if (sort) {
      query.sort(sort);
    }
    // return dinamicSort(data, sort);
    const data = await query;
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

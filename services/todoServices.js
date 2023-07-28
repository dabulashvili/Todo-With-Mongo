const Todos = require("../models/todosModel");
const queryStringParser = require("../utils/queryStringParser");

class TodoServices {
  constructor() {}
  async getAllData(queryObj) {
    let { page, sort, limit, fields, ...reqQueries } = queryStringParser(
      JSON.stringify(queryObj)
    );

    let query = Todos.find(reqQueries);

    //filtering , return only some data
    if (fields) {
      const f = fields.split(",").join(" ");
      query.select(f);
    } else {
      query.select("-__v");
    }

    //pagination
    limit = limit || 50;
    page = page || 1;
    query = query.skip(page * limit - limit).limit(limit);

    //sort
    if (sort) {
      sort = sort.split(",").join(" ");
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
    console.log(body, "bodyy");
    const data = await Todos.create(body);
    return data;
  }

  async deleteTodo(_id) {
    const data = await Todos.findOneAndDelete({ _id });
    Todos.find();

    return data;
  }

  async getStats() {
    const stats = await Todos.aggregate([
      // {
      //   //@match: {} filtering
      //   //@unwind : destruct array and make single item from every item
      // },
      {
        $group: {
          _id: "$success",
          totalNum: { $sum: 1 },
        },
      },
    ]);
    return stats;
  }
}
module.exports = TodoServices;

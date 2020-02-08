var orm = require('../db');

var Todo = {
  all: async () => {
    const todos = await orm.selectAll('todos');
    return todos;
  },
  getById: async todoId => {
    const todo = await orm.selectOneById('todos', todoId);
    return todo;
  },
  create: async todo => {
    const result = await orm.insertInto('todos', todo);
    return result;
  },
  update: async (todoId, todo) => {
    const result = await orm.updateOneById('todos', todoId, todo);
    return result;
  },
  delete: async todoId => {
    const result = await orm.deleteOneById('todos', todoId);
    return result;
  }
};

module.exports = Todo;

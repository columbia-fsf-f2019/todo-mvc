var orm = require('../db');

var Todo = {
  all: async () => {
    const todos = orm.selectAll('todos');
    return todos;
  }
};

module.exports = Todo;

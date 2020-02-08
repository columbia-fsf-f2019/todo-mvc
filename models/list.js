var orm = require('../db');

var List = {
  all: async () => {
    const lists = await orm.selectAll('lists');
    return lists;
  },
  getById: async listId => {
    const list = await orm.selectOneById('lists', listId);
    return list;
  },
  create: async list => {
    const result = await orm.insertInto('lists', list);
    return result;
  },
  update: async (listId, list) => {
    const result = await orm.updateOneById('lists', listId, list);
    return result;
  },
  delete: async listId => {
    const result = await orm.deleteOneById('lists', listId);
    return result;
  },
  todos: async listId => {
    const result = await orm.selectAllWhere('todos', 'list', listId);
    return result;
  },
  addTodo: async (listId, todo) => {
    const result = await orm.insertInto('todos', { ...todo, list: listId });
    return result;
  }
};

module.exports = List;

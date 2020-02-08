var router = require('express').Router();
var orm = require('../../db');

router.get('/', async (req, res) => {
  const todos = await orm.selectAll('todos');
  res.json({ todos: todos });
});

router.post('/', async (req, res) => {
  const result = await orm.insertInto('todos', req.body);
  res.json(result);
});

router.get('/:id', async (req, res) => {
  const todo = await orm.selectOneById('todos', req.params.id);
  res.json(todo);
});

router.put('/:id', async (req, res) => {
  const result = await orm.updateOneById('todos', req.params.id, req.body);
  res.json(result);
});

router.delete('/:id', async (req, res) => {
  const result = await orm.deleteOneById('todos', req.params.id);
  res.json(result);
});

module.exports = router;

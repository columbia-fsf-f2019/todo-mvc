var router = require('express').Router();
var Todo = require('../../models/todo');

router.get('/', async (req, res) => {
  const todos = await Todo.all();
  res.json({ todos: todos });
});

router.post('/', async (req, res) => {
  const result = await todo.create(req.body);
  res.json(result);
});

router.get('/:id', async (req, res) => {
  const todo = await todo.getOne(req.params.id);
  res.json(todo);
});

router.put('/:id', async (req, res) => {
  const result = await todo.update(req.params.id, req.body);
  res.json(result);
});

router.delete('/:id', async (req, res) => {
  const result = await todo.delete(req.params.id);
  res.json(result);
});

module.exports = router;

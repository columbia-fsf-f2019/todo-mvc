var router = require('express').Router();
var List = require('../../models/list');

router.get('/', async (req, res) => {
  const lists = await List.all();
  res.json({ lists: lists });
});

router.post('/', async (req, res) => {
  const result = await List.create(req.body);
  res.json(result);
});

router.get('/:id', async (req, res) => {
  const todo = await List.getById(req.params.id);
  res.json(todo);
});

router.put('/:id', async (req, res) => {
  const result = await List.update(req.params.id, req.body);
  res.json(result);
});

router.delete('/:id', async (req, res) => {
  const result = await List.delete(req.params.id);
  res.json(result);
});

router.get('/:id/todos', async (req, res) => {
  const result = await List.todos(req.params.id);
  res.json(result);
});

router.post('/:id/todos', async (req, res) => {
  const result = await List.addTodo(req.params.id, req.body);
  res.json(result);
});

module.exports = router;

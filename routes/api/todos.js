var router = require('express').Router();
var db = require('../../config');

router.get('/', (req, res) => {
  db.query('SELECT * FROM todos;', (err, results) => {
    if (err) res.status(500).json({ message: err });

    res.json({ todos: results });
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  db.query(
    `INSERT INTO todos (text) VALUES ("${req.body.text}");`,
    (err, results) => {
      if (err) res.status(500).json({ message: err.sqlMessage });

      res.send(results);
    }
  );
});

router.get('/:id', (req, res) => {
  db.query(
    `SELECT * FROM todos WHERE id = ${req.params.id};`,
    (err, results) => {
      if (err) res.status(500).json({ message: err.sqlMessage });

      res.json(results);
    }
  );
});

router.put('/:id', (req, res) => {
  db.query(
    `UPDATE todos SET ? WHERE id = ${req.params.id};`,
    req.body,
    (err, results) => {
      if (err) res.status(500).json({ message: err.sqlMessage });
      if (results.affectedRows === 0) res.status(404).end();

      res.json(results.changedRows);
    }
  );
});

router.delete('/:id', (req, res) => {
  db.query(`DELETE FROM todos WHERE id = ${req.params.id};`, (err, results) => {
    if (err) res.status(500).json({ message: err.sqlMessage });
    if (results.affectedRows === 0) res.status(404).end();
    res.json(results);
  });
});

module.exports = router;

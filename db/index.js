var db = require('../config');

const orm = {
  selectAll: async table => {
    // db.query('SELECT * FROM todos;', (err, results) => {
    //   if (err) res.status(500).json({ message: err });
    //   res.json({ todos: results });
    // });
    const data = await db.promise().query('SELECT * FROM ??;', [table]);
    return data || [];
  },
  selectOneById: async (table, id) => {
    const [
      data,
      info
    ] = await db.promise().query('SELECT * FROM ?? WHERE id = ?;', [table, id]);
    return data || [];
  }
};

module.exports = orm;

var db = require('../config');

const orm = {
  selectAll: async table => {
    const data = await db.promise().query('SELECT * FROM ??;', [table]);
    return data || [];
  },
  selectOneById: async (table, id) => {
    const [data, _] = await db
      .promise()
      .query('SELECT * FROM ?? WHERE id = ?;', [table, id]);
    return data || [];
  },
  insertInto: async (table, data) => {
    const result = await db
      .promise()
      .query(`INSERT INTO ?? SET ?`, [table, data]);
    return result;
  },
  updateOneById: async (table, id, data) => {
    const result = await db
      .promise()
      .query('UPDATE ?? SET ? WHERE id = ?;', [table, data, id]);
    return result;
  },
  deleteOneById: async (table, id) => {
    const result = await db
      .promise()
      .query('DELETE FROM ?? WHERE id = ?', [table, id]);
    return result;
  }
};

module.exports = orm;

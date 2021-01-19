const db = require('../../database/index.js');

const getInfo = (callback) => {
  db.query('SELECT * FROM HomeInfo WHERE id = 1', callback);
};

module.exports = {
  getInfo,
};

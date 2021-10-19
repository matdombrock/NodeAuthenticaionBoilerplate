const db = require('../db');

module.exports = async (req, res) => { 
  const data = await db.User.findAll();
  res.send(data)
};
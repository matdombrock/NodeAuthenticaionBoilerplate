const bcrypt = require('bcrypt');
const db = require('../db');
const jwt = require('../jwt');

module.exports = async (req, res) => { 
  const username = req.query.username;
  const password = req.query.password;
  if(!username || !password){
    res.status(403).send('Missing Credentials!');
    return;
  }
  const found = await db.User.findOne({
    where: {
      username: username
    }
  });
  if (!found){
    res.status(401).send('Invalid username or password.');
    return;
  }
  const passCheck = await bcrypt.compare(password, found.password);
  if (!passCheck){
    res.status(401).send('Invalid username or password.');
    return;
  }
  const token = jwt.sign(found.id, found.username);
  res.send(token);
};
const bcrypt = require('bcrypt');
const db = require('../db');
const jwt = require('../jwt');

module.exports = async (req, res) => { 
  const username = req.query.username;
  let password = req.query.password;
  if(!username || !password){
    res.status(403).send('Missing Credentials!');
    return;
  }
  const found = await db.User.findOne({
    where:{
      username:username
    }
  });
  if(found){
    res.status(403).send('A user with this name already exists!');
    return;
  }
  const saltRounds = 10;  
  password = await bcrypt.hash(password, saltRounds);
  const data = await db.User.create({username, password});
  const token = jwt.sign(data.id, data.username);
  res.send(token);
};
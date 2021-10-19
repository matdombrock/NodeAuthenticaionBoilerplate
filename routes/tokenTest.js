const jwt = require('../jwt');

module.exports = async (req, res) => { 
  const token = req.query.token;
  const decoded = await jwt.decode(token);
  if(!decoded){
    res.send('Can not decode token');
  }
  res.send(decoded);
};
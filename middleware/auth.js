const jwt = require('../jwt');

const verifyToken = (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  const decoded = jwt.decode(token);
  if(!decoded){
    return res.status(401).send("Invalid Token");
  }
  req.user = decoded;
  return next();
};

module.exports = verifyToken;
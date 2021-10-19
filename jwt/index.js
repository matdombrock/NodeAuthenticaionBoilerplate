const jwt = require('jsonwebtoken');
const JWTKey = require('./key');

function sign(user_id, username){
  if(!user_id || !username){
    console.log('Missing Creds');
    return 'InvalidToken';
  }
  const token = jwt.sign(
    { user_id: user_id, username: username },
    JWTKey,
    {
      expiresIn: "2h",
    }
  );
  return token;
}

function decode(token){
  try{
    const decoded = jwt.verify(token, JWTKey);
    return decoded;
  }catch(err){
    //console.log(err);
    console.log('Can not decode token');
    return;
  }
}

module.exports = {
  sign,
  decode
}
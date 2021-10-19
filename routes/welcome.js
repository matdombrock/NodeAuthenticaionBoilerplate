module.exports = async (req, res) => { 
  let response = 'Welcome ';
  response += req.user.username + '! \r\n';
  response += JSON.stringify(req.user,null,2);
  res.send(response);
};
const config = require('../config');

module.exports = function (req, res, next) {
  const data = {
    IP: req.ip,
    method: req.method,
    URL: req.originalUrl,
    query: req.query,
    rawHeaders: req.rawHeaders,
  }
  if(config.log_requests_to_console){
    console.log(data)
  }
  next()
}
const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes');

const auth = require("./middleware/auth");
const logger = require('./middleware/logger')

app.use(logger)

app.get('/',(req, res) => {
  res.send('Hello World!')
});

app.post('/welcome', auth, routes.welcome);

app.post('/createUser', routes.createUser);

app.post('/login', routes.login);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
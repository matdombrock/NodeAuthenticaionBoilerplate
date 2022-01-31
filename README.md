# Express Authentication Boilerplate
This is a minimalist authentication boilerplate for an Express API. Passwords are hashed and authentication is done via JWT. Endpoints for creating users, logging in ect. are already in place. This project uses Sequelize as an ORM with a simple SQLite database implementation containing only a `users` table. 

## Requirements
* bcrypt
* express
* jsonwebtoken
* sequelize
* sqlite3 (optional)

## Getting Started
1) Clone the project.
2) Run `npm install`.
3) Create a file called `key.js` in the `/jwt/` directory.
This key should look something like this (this should be a random string):
```js
module.exports = 'key123';
```
4) Create the SQLite DB with `node _syncTables`.
5) Run with `node app`.
6) You can now test the service via software like Postman.

## Endpoints

### `GET /`
Returns "Hello World"

### `POST /login`
Attempts a login request. 

Input:
- username <string>
- password <string>

Outputs a JWT if successful and returns 401 if not.

### `POST /createUser`
Creates a new user for the system.

Input:
- username <string>
- password <string>

Outputs a JWT if successful and returns 403 if not.

### `POST /welcome`
Attempts to to show a welcome message. Used for checking successful login.

Input:
- token <JWT>

Outputs a welcome message containing the logged in user name. 

## Config
This server can be configured with the `config.js` file in the root of project. 

```js
module.exports = {
  port: 3000,
  log_requests_to_console: true,
  db_logging: true
}
```

The properties should be self explanatory. 
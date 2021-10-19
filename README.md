# Express Authentication Boilerplate
This is a minimalist authentication boilerplate for an Express API. Passwords are fully hashed and authentication is done via JWT. Endpoints for creating users, logging in ect. are already in place. This project uses Sequelize as an ORM with a simple SQLite database implementation containing only a `users` table. 

## Requirements
* bcrypt
* express
* jsonwebtoken
* sequelize
* sqlite3 (optional)

## Getting Started
1) Clone the project.
2) Run `npm install`
3) Create a file called `key.js` in the `/jwt/` directory.
This key should look something like this (this should be a random string):
```js
module.exports = 'key123';
```
4) Run with `node app`
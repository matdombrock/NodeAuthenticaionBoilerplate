const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname+'/database.sqlite',
  logging: config.db_logging ? config.db_logging : false,
});

const User = sequelize.define('User', {
  // Model attributes are defined here
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

async function syncTables(){
  await sequelize.sync({force:true});
}

module.exports = {
  tools:{
    syncTables
  },
  User
}


// async function test(){
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
// test()
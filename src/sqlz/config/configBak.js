const path = require('path');
const storage = path.join(__dirname, '../../../db.sqlite');

module.exports = {
  development: {
    dialect: 'mysql',
    storage
  },
  test: {
    dialect: 'mysql',
    storage: ':memory'
  },
  production: {
    use_env_variable: 'DB_CONNECTION_STRING',
    dialect: 'mysql',
    logging: false
  }
};
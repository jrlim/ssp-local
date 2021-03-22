import { Sequelize, Options } from 'sequelize'

import config from '../config/config'

console.log('config ---> ', config)
// console.log('process.env ---> ', process.env)

const dbConfig = config.development

console.log('dbConfig ---> ', dbConfig)

const options: Options = {
  host: dbConfig.host,
  port: parseInt(dbConfig.port as string, 10) || 3306,
  dialect: 'mysql'
}

const sequelize = new Sequelize(
  dbConfig['database'],
  dbConfig['username'],
  dbConfig['password'],
  options
)

export default sequelize

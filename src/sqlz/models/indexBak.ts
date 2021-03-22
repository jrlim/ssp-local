'use strict';

const fs = require('fs');
const path = require('path');
import { Sequelize } from "sequelize";
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const dbConfig = config[process.env.NODE_ENV]

const sequelize = new Sequelize(
  dbConfig['database'],
  dbConfig['username'],
  dbConfig['password'],
  dbConfig
)

// sequelize.addModels([User]);

export default sequelize

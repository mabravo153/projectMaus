const Sequelize = require('sequelize')
require('dotenv').config( { path: 'var.env' } )

const connect = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    define: {
      timestamps: false
    },
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  } 
}
)


module.exports = connect
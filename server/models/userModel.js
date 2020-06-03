const { DataTypes }  = require('sequelize')
const connect = require('../config')


const userModel = connect.define('user', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING
    }
});


module.exports = userModel
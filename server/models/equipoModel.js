const { DataTypes } = require('sequelize')
const connect = require('../config')

const equipoModel = connect.define('equipo', {
    titulo: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    fabricante: {
        type: DataTypes.STRING(70)
    },
    tipo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    ultima_reparacion: {
        type: DataTypes.DATE
    }
});

module.exports = equipoModel
const { DataTypes } = require('sequelize')
const connect = require('../config')

const reporteModel = connect.define('reporte', {
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.CHAR
    },
    horometro: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_equipo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

});

module.exports = reporteModel
const { DataTypes } = require('sequelize')
const sequilize = require('../config/database')

const Usuario =  sequilize.define('TB_USUARIO', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = Usuario
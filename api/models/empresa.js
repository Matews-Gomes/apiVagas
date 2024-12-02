const sequilize = require('../config/database')
const { DataTypes } = require('sequelize')

const Empresa = sequilize.define('TB_EMPRESA',{
    id: {
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Empresa

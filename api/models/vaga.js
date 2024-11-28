const sequilize = require('../config/database')
const { DataTypes } = require('sequelize')

const Vaga = sequilize.define('TB_VAGA', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataCadastro: {
        type: DataTypes.DATE,
        allowNull: false
    },
    situacao: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Vaga
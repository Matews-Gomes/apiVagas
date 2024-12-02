const sequilize = require('../config/database')
const { DataTypes } = require('sequelize')
const Empresa = require('./empresa');

const Vaga = sequilize.define('TB_VAGA', {
    id: {
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4,
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
    empresaId: {  
        type: DataTypes.UUID,
        references: {
            model: Empresa,
            key: 'id'
        },
        allowNull: false
    }
})

Vaga.belongsTo(Empresa, { foreignKey: 'empresaId', as: 'empresa' });

module.exports = Vaga
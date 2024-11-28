const {Sequelize} = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './jobs.sqlite'
})

module.exports = sequelize
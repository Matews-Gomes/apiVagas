const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./config/database')
const usersRoute = require('./routes/usuarios')
const vagasRoute =  require('./routes/vagas')

const app = express()
app.use(bodyParser.json())

sequelize.sync().then(() => {
    console.log('Database sincronizado!')
}).catch(error =>{
    console.log(`Database não sincronizada, ${error}`);
})

app.use('/api/user', usersRoute)
app.use('/api/vagas', vagasRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`servidor rodando na porta: ${PORT}`)
} )
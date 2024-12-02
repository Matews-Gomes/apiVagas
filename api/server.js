const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./config/database')
const authRoute = require('./routes/authenticate')
const vagasRoute =  require('./routes/vagas')
const epresasRoute =  require('./routes/empresa')
const usersRoute = require('./routes/usuarios')

const app = express()
app.use(bodyParser.json())

sequelize.sync().then(() => {
    console.log('Database sincronizado!')
}).catch(error =>{
    console.log(`Database não sincronizada, ${error}`);
})

app.use('/api/auth', authRoute)
app.use('/api/user', usersRoute)
app.use('/api/vagas', vagasRoute)
app.use('/api/empresas', epresasRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`servidor rodando na porta: ${PORT}`)
} )
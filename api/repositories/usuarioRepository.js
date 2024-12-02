const bcrypt = require('bcrypt');
const Usuario =  require('../models/usuario')

async function findById(id){
    try {
        return await Usuario.findByPk(id)
    } catch (error) {
        throw new Error('Error: Registro não encontrado, ' + error.message); 
    }
}

async function create({nome, username, email, password, telefone}){
    try {

        const existingname = await Usuario.findOne({ where: { nome } });
        if (existingname) {
            throw new Error('Cadastro já está em uso.');
        }

        const existingUsername = await Usuario.findOne({ where: { username } });
        if (existingUsername) {
            throw new Error('Usuário já está em uso.');
        }

        const existingUser = await Usuario.findOne({ where: { email } });
        if (existingUser) {
            throw new Error('Email já está em uso.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Usuario.create({   
                nome, 
                username, 
                email, 
                password : hashedPassword, 
                telefone
            }) 
       
        return newUser
    } catch (error) {
        throw new Error('Error: Não foi possivel criar um novo registro, ' + error.message); 
    }   
}

async function update(id, {nome, username, email, password, telefone}){
    try {
        const user = await Usuario.findByPk(id)
        const hashedPassword = await bcrypt.hash(password, 10);

        if(user){
            user.nome = nome
            user.username = username,
            user.email = email,
            user.password = hashedPassword,
            user.telefone = telefone

            await user.save()

            return user
        }
    } catch (error) {
        throw new Error('Error:  Impossivel atualizar o registro, ' + error.message); 
    }
}

async function remove(id){
    try {
        const user = await Usuario.findByPk(id)
        if(user){
            await user.destroy()

            return true
        }
    } catch (error) {
        throw new Error('Error: Impossivel remover o registro, ' + error.message);
    }
}

module.exports = {
    findById,
    create,
    update,
    remove
}
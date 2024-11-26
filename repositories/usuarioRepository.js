const {v4: uuidv4} = require('uuid')
const Usuario =  require('../models/usuario')

async function findById(id){
    try {
        return await Usuarios.findByPk(id)
    } catch (error) {
        throw new Error('Error: Registro não encontrado, ' + error.message); 
    }
}

async function create({nome, email, password, telefone}){
    try {
        return await Usuario.create({ id: uuidv4(), nome, email, password, telefone})
    } catch (error) {
        throw new Error('Error: Não foi possivel criar um novo registro, ' + error.message); 
    }   
}

async function update(id, {nome, email, password, telefone}){
    try {
        const user = await Usuario.findByPk(id)
        if(user){
            user.nome = nome,
            user.email = email,
            user.password = password,
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
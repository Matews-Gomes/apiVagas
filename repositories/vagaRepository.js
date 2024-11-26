const {v4: uuidv4} = require('uuid')
const Vaga =  require('../models/vaga')

async function findAllJobs(){
    try {
        return await Vaga.findAll()
    } catch (error) {
        throw new Error('Error: Resgistros não encontrados, ' + error.message); 
    }   
}

async function findById(id) {
    try {
        return await Vaga.findByPk(id)       
    } catch (error) {
        throw new Error('Error: Resgistro não encontrado, ' + error.message); 
    }
}

async function create({titulo, descricao, dataCadastro, situacao, telefone, empresa}){
    try {
        return await Vaga.create({ id: uuidv4(), titulo, descricao, dataCadastro, situacao, telefone, empresa})
    } catch (error) {
        throw new Error('Error: Não foi possivel criar um novo registro, ' + error.message);      
    }
}

async function update(id, {titulo, descricao, situacao, telefone, empresa}){
    try {
        const vaga = await Vaga.findByPk(id)
        if(vaga){
            vaga.titulo = titulo,
            vaga.descricao = descricao,
            vaga.situacao = situacao,
            vaga.telefone = telefone,
            vaga.empresa = empresa

            await vaga.save()

            return vaga
        }
    } catch (error) {
        throw new Error('Error: Impossivel atualizar o registro,' + error.message);      
    }
}

async function remove(id){
    try {
        const vaga = await Vaga.findByPk(id)
    if(vaga){
        await vaga.destroy()

        return true
    }
    } catch (error) {
        throw new Error('Error: Impossivel remover o registro, ' + error.message); 
    }
}

module.exports = {
    findAllJobs,
    findById,
    create,
    update,
    remove
}

const Empresa =  require('../models/empresa')

async function findAll(){
    try {
        return await Empresa.findAll()
    } catch (error) {
        throw new Error('Error: Resgistros não encontrados, ' + error.message); 
    }   
}

async function findById(id) {
    try {
        return await Empresa.findByPk(id)       
    } catch (error) {
        throw new Error('Error: Resgistro não encontrado, ' + error.message); 
    }
}

async function create({empresa, telefone, imageUrl}){
    try {

        return await Empresa.create({
            empresa, 
            telefone, 
            imageUrl 
        })

    } catch (error) {
        throw new Error('Error: Não foi possivel criar um novo registro, ' + error.message);      
    }
}

async function update(id, {empresa, telefone, imageUrl}){
    try {

        const empresaById = await Empresa.findByPk(id)

        if(empresaById){
            empresaById.empresa = empresa,
            empresaById.telefone = telefone,
            empresaById.imageUrl = imageUrl

            await empresaById.save()

            return empresaById
        }
    } catch (error) {
        throw new Error('Error: Impossivel atualizar o registro,' + error.message);      
    }
}

async function remove(id){
    try {
        const empresa = await Empresa.findByPk(id)
    if(empresa){
        await empresa.destroy()

        return true
    }
    } catch (error) {
        throw new Error('Error: Impossivel remover o registro, ' + error.message); 
    }
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}
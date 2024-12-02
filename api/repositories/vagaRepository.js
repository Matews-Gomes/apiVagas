const Vaga =  require('../models/vaga')
const Empresa =  require('../models/empresa')

async function findAllJobs(){
    try {
        return await Vaga.findAll({
            include: {
                model: Empresa,
                as: 'empresa', 
                attributes: ['empresa', 'telefone', 'imageUrl'], 
            },
        })
    } catch (error) {
        throw new Error('Error: Resgistros não encontrados, ' + error.message); 
    }   
}

async function findById(id) {
    try {
        return await Vaga.findByPk(id, {
            include: {
                model: Empresa,
                as: 'empresa', 
                attributes: ['empresa', 'telefone', 'imageUrl'], 
            },
        });
    } catch (error) {
        throw new Error('Error: Registro não encontrado, ' + error.message);
    }
}

async function create({titulo, descricao, dataCadastro, situacao, empresaId}){
    try {

        const empresa = await Empresa.findByPk(empresaId);
        if (!empresa) {
            throw new Error('Empresa não encontrada');
        }

        return await Vaga.create({
            titulo, 
            descricao, 
            dataCadastro, 
            situacao, 
            empresaId 
        })

    } catch (error) {
        throw new Error('Error: Não foi possivel criar um novo registro, ' + error.message);      
    }
}

async function update(id, {titulo, descricao, situacao, empresaId}){
    try {
        const vaga = await Vaga.findByPk(id)
        if(vaga){
            vaga.titulo = titulo,
            vaga.descricao = descricao,
            vaga.situacao = situacao,
            vaga.empresaId = empresaId

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
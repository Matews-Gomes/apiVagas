const express = require('express')
const router = express.Router()
const usuarioRepository = require('../repositories/usuarioRepository')


router.get('/:id', async (req, res) =>{
    try {
        const user = await usuarioRepository.findById(req.params.id)
        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(404).json({error: 'Usuário não encontrado!' })
        }
        
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

router.post('/register', async (req, res) =>{
    try {
        const newUser  = await usuarioRepository.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        if (error.message.includes('já está em uso')) {
            return res.status(400).json({ error: error.message });
        }

        res.status(500).json({ error: 'Erro interno do servidor, por favor tente novamente mais tarde.' });
    }
})

router.put('/:id', async (req, res) =>{
    try {
        const user = await usuarioRepository.update(req.params.id, req.body)
        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(404).json({error: 'Usuário não encontrado!' })
        }
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

router.delete('/:id', async (req, res) =>{
    try {
        const user = await usuarioRepository.remove(req.params.id)
        if(user){
            res.status(204).send()
        }
        else{
            res.status(404).json({error: 'Usuário não encontrado!' })
        }
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

module.exports = router;
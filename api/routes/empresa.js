const express = require('express')
const router = express.Router()
const empresaRepository = require('../repositories/empresaRepository')

router.get('/', async (req, res) =>{
    try {
        const empresas = await empresaRepository.findAll()
        res.status(200).json(empresas)
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

router.get('/:id', async (req, res) =>{
    try {
        const empresa = await empresaRepository.findById(req.params.id)
        if(empresa){
            res.status(200).json(empresa)
        }
        else{
            res.status(404).json({error: 'Empresa não encontrada!' })
        }
        
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

router.post('/create', async (req, res) =>{
    try {
        const empresa = await empresaRepository.create(req.body)
        res.status(201).json(empresa)
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

router.put('/:id', async (req, res) =>{
    try {
        const empresa = await empresaRepository.update(req.params.id, req.body)
        if(empresa){
            res.status(200).json(empresa)
        }
        else{
            res.status(404).json({error: 'Empresa não encontrada!' })
        }
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

router.delete('/:id', async (req, res) =>{
    try {
        const empresa = await empresaRepository.remove(req.params.id)
        if(empresa){
            res.status(204).send()
        }
        else{
            res.status(404).json({error: 'Empresa não encontrada!' })
        }
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

module.exports = router;
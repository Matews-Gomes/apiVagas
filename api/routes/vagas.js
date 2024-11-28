const express = require('express')
const router = express.Router()
const vagaRepository = require('../repositories/vagaRepository')

router.get('/', async (req, res) =>{
    try {
        const vagas = await vagaRepository.findAllJobs()
        res.status(200).json(vagas)
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

router.get('/:id', async (req, res) =>{
    try {
        const vaga = await vagaRepository.findById(req.params.id)
        if(vaga){
            res.status(200).json(vaga)
        }
        else{
            res.status(404).json({error: 'Vaga não encontrada!' })
        }
        
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

router.post('/', async (req, res) =>{
    try {
        const vaga = await vagaRepository.create(req.body)
        res.status(201).json(vaga)
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

router.put('/:id', async (req, res) =>{
    try {
        const vaga = await vagaRepository.update(req.params.id, req.body)
        if(vaga){
            res.status(200).json(vaga)
        }
        else{
            res.status(404).json({error: 'Vaga não encontrada!' })
        }
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

router.delete('/:id', async (req, res) =>{
    try {
        const vaga = await vagaRepository.remove(req.params.id)
        if(vaga){
            res.status(204).send()
        }
        else{
            res.status(404).json({error: 'Vaga não encontrada!' })
        }
    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

module.exports = router;
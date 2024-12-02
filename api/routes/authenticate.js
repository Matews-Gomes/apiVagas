const express = require('express')
const router = express.Router()
const authenticateRepository = require('../repositories/authenticateRepository')


router.post('/login', async (req, res) =>{
    try {
        const { email, password } = req.body;
        
        const user = await authenticateRepository.findUserByUsernamePassword(email, password);

        if (user) {
            return res.status(200).json({
                authenticated: true,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,                   
                },
            });
        } else {  
            return res.status(404).json({
                authenticated: false,
                user: null,
            });
        }

    } catch (error) {
        res.status(500).json({error: error.message })
    }
})

module.exports = router;
const bcrypt = require('bcrypt');
const Usuario =  require('../models/usuario')


async function findUserByUsernamePassword(email, password){
    try {

        const user = await Usuario.findOne({ where: { email } })

        if (!user) {
            console.log("Usuário não encontrado");
            return null
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {       
            return null
        }

        const { password: _, ...userWithoutPassword } = user.toJSON()

        return userWithoutPassword

    } catch (error) {
        throw new Error('Error: Registro não encontrado, ' + error.message); 
    }
}

module.exports = {
    findUserByUsernamePassword
}
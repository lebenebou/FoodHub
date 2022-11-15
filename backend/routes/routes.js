
const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')


const SignUpTemplateCopy = require('../models/singupModels')

router.post('/signup', async (request, response) => {

    const salted_pass = await(bcrypt.genSalt(9))
    const hashed_pass = await(bcrypt.hash(request.body.password, salted_pass))


    const singed_up_user = new SignUpTemplateCopy({

        first_name: request.body.first_name,
        last_name: request.body.last_name,
        username: request.body.username,
        email: request.body.email,
        password: hashed_pass
    })

    singed_up_user.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router

const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";


const SignUpTemplateCopy = require('../models/singupModels')

router.post('/signup', async (request, response) => {

    if(request.body.name==="Just logging in..."){
        alert("manyake")
        return;
    }

    const salted_pass = await(bcrypt.genSalt(9))
    const hashed_pass = await(bcrypt.hash(request.body.password, salted_pass))

    const singed_up_user = new SignUpTemplateCopy({

        first_name: request.body.first_name,
        last_name: request.body.last_name,
        username: request.body.username,
        email: request.body.email,
        password: hashed_pass
    })

    const oldUser=await singed_up_user.findOne({email});
    if(oldUser){
        return response.send({error:"User exist"});
    }

    singed_up_user.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})




module.exports = router
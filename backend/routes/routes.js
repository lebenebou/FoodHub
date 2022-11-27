
const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const jwt=require("jsonwebtoken")
const JWT_SECRET="anaesmejeanpaul123"
const SignUpTemplateCopy = require('../models/singupModels')
const LogInTemplateCopy = require('../models/loginModels')

router.post('/signup', async (request, response) => {

    const salted_pass = await(bcrypt.genSalt(9))
    const hashed_pass = await(bcrypt.hash(request.body.password, salted_pass))

    // const oldUser=await singed_up_user.findOne({email});
    // if(oldUser){
    //     return response.send({error:"User exist"});
    // }
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

// login

router.post('/login', async (request, response) => {

    const{email,password}=request.body;
    const user=await singed_up_user.findOne({email});
    if(!user){
        return response.json({error:"User Not found"});
    }
    //decrypt
    if(await bcrypt.compare(password,user.password)){
        const token = jwt.sign({},JWT_SECRET);

        if (response.status(201)){
            return res.json({status:"ok",data:token});
        }
        else{
            return res.json({error:"error"});
        }
        
    }
    response.json({status:"error",error:"invalid password"});
});



module.exports = router
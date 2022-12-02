
const mongoose = require('mongoose')

const SignUpTemplate = new mongoose.Schema({

    first_name:{
        type : String,
        required:true
    },

    last_name:{
        type : String,
        required:true
    },

    username:{
        type : String,
        required:true
    },

    email:{
        type : String,
        required:true
    },

    password:{
        type : String,
        required:true
    },

    isVegan:{
        type:Boolean,
        default:null
    },

    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('mytable', SignUpTemplate)
const mongoose = require('mongoose')

const teacherRegisterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('teacherRegisterSchema',teacherRegisterSchema)
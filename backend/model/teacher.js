const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    uniqueId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    clgid:{
        type:Number,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Teacher',teacherSchema)
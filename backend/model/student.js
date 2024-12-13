const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
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
    branch:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    program:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Student',studentSchema)
const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    idNO:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Components',studentSchema)
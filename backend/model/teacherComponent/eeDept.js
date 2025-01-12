const mongoose = require('mongoose')

const eecomponentSchema = new mongoose.Schema({
    component:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
    }
})

module.exports = mongoose.model('eecomp',eecomponentSchema)
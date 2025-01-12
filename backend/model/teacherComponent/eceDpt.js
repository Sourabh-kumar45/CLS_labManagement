const mongoose = require('mongoose')

const ececomponentSchema = new mongoose.Schema({
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

module.exports = mongoose.model('ececomp',ececomponentSchema)
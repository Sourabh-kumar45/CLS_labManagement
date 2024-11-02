const mongoose = require('mongoose')

const componentSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    specificationNO:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Components',componentSchema)
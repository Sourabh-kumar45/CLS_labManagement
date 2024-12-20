const mongoose = require('mongoose')


const componentItemSchema = new mongoose.Schema({
    item: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  });

const componentSchema = new mongoose.Schema({
    components: {
        type: [componentItemSchema], // Array of items based on the sub-schema
        required: true
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
    uniqueId:{
        type:String,
        required:true
    },
    returnStatus:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Components',componentSchema)
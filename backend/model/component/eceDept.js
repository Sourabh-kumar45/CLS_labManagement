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

const ECEDeptComp = new mongoose.Schema({
    components: {
        type: [componentItemSchema],
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
    },
    email:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('ECEDeptComp',ECEDeptComp)
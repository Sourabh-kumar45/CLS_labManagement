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

const MechDeptComp = new mongoose.Schema({
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
    },
    department:{
        type:String,
        required:true,
        default: "mechDept" 
    }
})

module.exports = mongoose.model('MechDeptComp',MechDeptComp)
const express  = require('express')
const router = express.Router()
const Components = require('../model/components')

router.get('/',(req,res)=>{
    res.send("hello i am student part of backend")
})

module.exports = router
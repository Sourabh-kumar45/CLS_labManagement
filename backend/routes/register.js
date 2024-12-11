const express  = require('express')
const router = express.Router()
const Register = require('../model/register')

router.get('/',(req,res)=>{
    res.send("hello i am register part of backend")
})

router.post('/',(req,res)=>{
    Register.create(req.body)
    .then(Register => res.json(Register))
    .catch(err => res.json(err))
})

module.exports = router
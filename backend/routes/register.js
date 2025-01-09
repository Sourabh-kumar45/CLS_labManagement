const express  = require('express')
const router = express.Router()
const Register = require('../model/register')
const TeacherRegister = require('../model/teacherRegister')

router.get('/',(req,res)=>{
    res.send("hello i am register part of backend")
})

router.post('/',(req,res)=>{
    const {name,email,password,userType,branch}=req.body;

    const data = {name,email,branch,password}
    if(userType==='teacher'){
        TeacherRegister.create(data)
        .then((Register) => res.json(Register))
        .catch((err) => res.json(err));
    }
    else{
      // Register.create(req.body)
      Register.create(data)
        .then((Register) => res.json(Register))
        .catch((err) => res.json(err));
    }
    
})

module.exports = router
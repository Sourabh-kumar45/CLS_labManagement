const express  = require('express')
const router = express.Router()
const Login = require('../model/login')
const Register = require('../model/register')
const TeacherRegister = require('../model/teacherRegister')

router.get('/',(req,res)=>{
    res.send("hello i am login part of backend")
})

router.post('/',(req,res)=>{
    // get the email and the password
    const {email,password,userType} = req.body;

    if(userType == 'teacher'){
        TeacherRegister.findOne({email:email})
        .then(teacher =>{
            if(teacher){
                if(teacher.password === password){
                    // here we would pass the user id.
                    res.json(teacher.id)
                    // res.json("Success")
                }
                else{
                    res.json("incorrect password feeded")
                }
            }
            else{
                res.json("no record existed")
            }
        })
    }
    else{
        // Student part
        Register.findOne({email: email})
        .then(user =>{
            if(user){
                if(user.password === password){
                    // here we would pass the user id.
                    res.json(user.id)
                    // res.json("Success")
                }
                else{
                    res.json("incorrect password feeded")
                }
            }
            else{
                res.json("no record existed")
            }
        })
    }
   

    // Login.create(req.body)
    // .then(Login => res.json(Login))
    // .catch(err => res.json(err))
})


module.exports = router
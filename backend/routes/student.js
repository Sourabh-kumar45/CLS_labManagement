const express  = require('express')
const router = express.Router()
const Components = require('../model/components')
const Register = require('../model/register')
const Student = require('../model/student')

router.get('/',(req,res)=>{
    res.send("hello i am student part of backend")
})


// from here the data to each id no is send.
router.get('/:id',async (req,res)=>{
    const id = req.params.id
    try{
        const user = await Register.findById(id); // Assuming `Register` is your user model

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Respond with user data
        
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
        });
    } catch{
        // if user is not found
        res.redirect('/')
        // to login once more
    }
})



// student form path to enter academic details

router.get('/:id/form',async (req,res)=>{
    const id = req.params.id;
    try{
        const user = await Student.findOne( { uniqueId: id}); // Assuming `Register` is your user model

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Respond with user data
        
        res.json({
            clgid: user.clgid,
            name: user.name,
            email: user.email,
            program: user.program,
            branch: user.branch
        });
    } catch{
        // if user is not found
        res.redirect('/')
        // to login once more
    }
    // res.send(`this is the form page for student id ${id}`)
})

router.post('/:id/form',(req,res)=>{
    // Student.create(req.body)
    // .then(Student => res.json(Student))
    // .catch(err => res.json(err))


    console.log("Request Body:", req.body); // Log the request body
    Student.create(req.body)
      .then(student => {
        console.log("Student Saved:", student); // Log the saved student
        res.json(student);
      })
      .catch(err => {
        console.error("Error Saving Student:", err); // Log the error
        res.status(500).json(err);
      });
})

// data is not sendign please check it once 

module.exports = router
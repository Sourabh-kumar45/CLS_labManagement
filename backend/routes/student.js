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



// student path to issue component



router.get('/:id/compForm',async (req,res)=>{
    const id = req.params.id;
    try{
        const user = await Components.find( { uniqueId: id}); // Assuming `Register` is your user model

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Respond with user data
        
        res.json({user});
    } catch{
        // if user is not found
        res.redirect('/')
        // to login once more
    }
    // res.send(`this is the form page for student id ${id}`)
})



router.post('/:id/compForm',async (req,res)=>{
    console.log("Request Body:", req.body); // Log the request body

    const id = req.params.id;

    let dataSet = {
        // the reqest body contain data in teh form of array of objects
        components:req.body
    }

    // find the data in the student info dabase and add the necessary details form that
    try{
        const user = await Student.findOne( { uniqueId: id}); 

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Respond with user data
        dataSet={
            ...dataSet ,// to keep the previous data intact 
            name:user.name,
            clgid:user.clgid,
            branch:user.branch,
            uniqueId:user.uniqueId,
        }
    } catch{
        // if user is not found
        res.redirect('/')
        // to login once more error occured.
    }


    Components.create(dataSet)
      .then(Components => {
        console.log("Student Saved:", Components); // Log the saved component
        res.json(Components);
      })
      .catch(err => {
        console.error("Error Saving Student:", err); // Log the error
        res.status(500).json(err);
      });
})

module.exports = router
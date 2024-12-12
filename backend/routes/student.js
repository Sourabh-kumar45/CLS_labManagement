const express  = require('express')
const router = express.Router()
const Components = require('../model/components')
const Register = require('../model/register')

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

module.exports = router
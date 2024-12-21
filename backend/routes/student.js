const express  = require('express')
const router = express.Router()
const Components = require('../model/components')
const Register = require('../model/register')
const Student = require('../model/student')

router.get('/',(req,res)=>{
    res.send("This is the Student route")
})


// Sending the register Data
router.get('/:id',async (req,res)=>{
    const id = req.params.id
    try{
        const user = await Register.findById(id); 

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        } 
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




// Student Form path to enter Details.

router.get('/:id/form',async (req,res)=>{
    const id = req.params.id;
    try{
        const user = await Student.findOne( { uniqueId: id});

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
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

// Endpoint for updating existing Student data in the Student Form

router.put('/:id/form', (req, res) => {
    const id = req.params.id; // Extract the student ID from the URL
  
    console.log("Request Body:", req.body); // Log the incoming data
  
    // Update the student data in the database
        Student.findOneAndUpdate(
            { uniqueId: id }, // Search by uniqueId
            req.body, // The data to update
            { new: true, runValidators: true } // Return the updated document and run validations
        )
      .then(updatedStudent => {
        if (!updatedStudent) {
          return res.status(404).json({ message: 'Student not found' });
        }
        console.log("Student Updated:", updatedStudent); // Log the updated student data
        res.json(updatedStudent); // Respond with the updated student
      })
      .catch(err => {
        console.error("Error Updating Student:", err); // Log any errors
        res.status(500).json({ error: 'Error updating student', details: err });
      });
  });













// student path to issue component

router.get('/:id/compForm',async (req,res)=>{
    const id = req.params.id;
    try{
        const user = await Components.find( { uniqueId: id}); 

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
            returnStatus:"Not Returned"
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



// Route to handle reissue and update status 
router.put('/:id/compForm/:issuedId', async (req, res) => {
  const { id, issuedId } = req.params;
  const { returnStatus, issueDate, daysRemaining } = req.body; // Get the data to update

  try {
    // Step 1: Find the component by issuedId
    console.log("Attempting to find component with issuedId:", issuedId);
    const updatedComponent = await Components.findOneAndUpdate(
      { "_id": issuedId },
      { 
        $set: {
          "returnStatus": returnStatus,
          "issueDate": issueDate,
          "daysRemaining" : daysRemaining,
        }
      },
      { new: true, runValidators: true } // Ensure validation and return the updated record
    );
    
    if (!updatedComponent) {
      console.log("No component found with issuedId:", issuedId);
      return res.status(404).json({ message: 'Component not found' });
    }

    console.log("Component successfully updated:", updatedComponent);

    // Step 2: Return the updated component as response
    res.json(updatedComponent);
  } catch (error) {
    // Log detailed error info
    
    // Respond with the error details
    res.status(500).json({ error: 'Error reissuing component', details: error.message });
  }
});



// forLogout  this would be later implemented.
router.post('/:id/logout', (req, res) => {
  if (req.session) {
    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).json({ message: "Error logging out" });
      }
      res.clearCookie("connect.sid"); // Clear session cookie (if you're using default session cookie name)
      res.status(200).json({ message: "Logged out successfully" });
    });
  } else {
    res.status(200).json({ message: "No active session to log out" });
  }
});


module.exports = router

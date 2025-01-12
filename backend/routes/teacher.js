const express = require('express')
const router = express.Router()

const Student = require('../model/student')
const Teacher = require('../model/teacherRegister')
const electricalDept = require('../model/teacherComponent/eeDept')
const mechDept = require('../model/teacherComponent/mechDpt')
const eceDept = require('../model/teacherComponent/eceDpt')

const EEData = require('../model/component/electricalDept')
const ECEData = require('../model/component/eceDept')
const MEData = require('../model/component/mechDept')
const XLSX = require("xlsx");

router.get('/',(req,res)=>{
    res.send("hello world ")
})

router.get('/:teacherid',async (req,res)=>{
    const teacherid = req.params.teacherid
    try{
        const currentTeacher = await Teacher.findById(teacherid)
        const fetchedData = await Student.find({branch : currentTeacher.branch})
        console.log("data fetched succesfully"+fetchedData)
        res.json(fetchedData)

    } catch(error){
        res.status({errormessage:error})
    }
})

router.get('/:teacherid/download',async(req,res)=>{
    const teacherid = req.params.teacherid
    try{
      const currentTeacher = Teacher.findById(teacherid);
      let model;
      if (currentTeacher.branch == "electrical") {
        model = EEData;
      } else if (currentTeacher.branch == "mechanical") {
        model = MEData;
      } else {
        model = ECEData;
      }

      const ListofData = await model.find().lean();
      // Check if data is found
      if (ListofData.length === 0) {
        return res
          .status(404)
          .json({ message: "No data found for the selected branch" });
      }

      // Convert data to worksheet
      const worksheet = XLSX.utils.json_to_sheet(ListofData);

      // Create a new workbook and append the worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

      // Write the workbook to a buffer
      const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

      // Set headers for file download
      res.setHeader("Content-Disposition", "attachment; filename=data.xlsx");
      res.setHeader("Content-Type", "application/octet-stream");

      // Send the file
      res.send(buffer);
    } catch(error){
        console.error("Error:", error);
        res.status(500).json({ errormessage: error.message });
    }
})

router.post('/:teacherid/add',(req,res)=>{
    const teacherid = req.params.teacherid
    try{
        const currentTeacher = Teacher.findById(teacherid)
        let model;
        if(currentTeacher.branch == 'electrical'){
            model = electricalDept;
        }else if(currentTeacher.branch == 'mechanical'){
            model = mechDept
        }
        else{
            model = eceDept
        }

        const payload = req.body;
        model.create(payload).then(payload => {
            console.log("new component added succesfuly:", payload); 
            res.json(payload);
          })
          .catch(err => {
            console.error("Error Saving component:", err);
            res.status(500).json(err);
          });
    
    } catch(error){
        res.status({errormessage:error})
    }
})


router.get('/:teacherid/issue',async(req,res)=>{
    const teacherid = req.params.teacherid
    try{
        const currentTeacher = Teacher.findById(teacherid)
        let model;
        if(currentTeacher.branch == 'electrical'){
            model = EEData;
        }else if(currentTeacher.branch == 'mechanical'){
            model = MEData
        }
        else{
            model = ECEData
        }

        const ListofData = await model.find();
       (ListofData.map((data)=>{
            console.log(data.components)
       }))
       res.send(ListofData)
    
    } catch(error){
        res.status({errormessage:error})
    }
})

module.exports = router
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

const express = require('express')
const App = express()
const port = 3000

// registering the router
const studentRoute = require('./routes/student')


// routes

App.get('/',(req,res)=>{
    res.send("hello world")
})



// mongoose connection

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db = mongoose.connection
db.on('error',error=>console.error(error))
db.once('open',error=>console.log('connected to mongoose'))


App.use('/student',studentRoute)

// app listening 
App.listen(port,()=>{
    console.log(`listening at: http://localhost:${port}`)
})


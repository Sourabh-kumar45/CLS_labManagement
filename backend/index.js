if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

const express = require('express')
const App = express()
const port = 3000
const cors = require('cors')
App.use(cors())
App.use(express.json()) // this would transport the data from front end to backend.


// registering the router
const studentRoute = require('./routes/student')
const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')


// routes

App.get('/',(req,res)=>{
    res.send("hello world")
})



// mongoose connection

const mongoose = require('mongoose')
// mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
mongoose.connect('mongodb://localhost:27017/cls')
// mongoose.connect('mongodb+srv://sourabh24workin:bH6ffT52tnxCvedg@cslabmanagement.trbr6.mongodb.net/')
const db = mongoose.connection
db.on('error',error=>console.error(error))
db.once('open',error=>console.log('connected to mongoose'))


App.use('/student',studentRoute)
App.use('/login',loginRoute)
App.use('/register',registerRoute)

// app listening 
App.listen(port,()=>{
    console.log(`listening at: http://localhost:${port}`)
})


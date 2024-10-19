const express = require('express')
const App = express()
const port = 3000

App.get('/',(req,res)=>{
    res.send("hello world")
})

App.listen(port,()=>{
    console.log(`listening at: http://localhost:${port}`)
})

const express = require('express')
const app = express()
app.get('',(request,response)=>{
    response.send("Hello World")
})
app.listen(8080,()=>{
    console.log('We are live on port 8080')
})
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicPath = path.join(__dirname,'../public/')
// app.use(express.static(publicPath))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../templates/views'))
hbs.registerPartials(path.join(__dirname,'../templates/partials'));
app.get('',(req,res)=>{
    res.render('index',{
        title : "Weather App",
        name: "Adarsh"
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title : "About",
        name : "Adarsh"
    })
})
app.get('*',(req,res)=>{
    res.send("<h1>404 Page</h1>")
})
app.listen(8080,()=>{
    console.log('We are live on port 8080')
})
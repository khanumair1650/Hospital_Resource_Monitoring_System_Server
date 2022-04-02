require(`dotenv`).config()
const express = require(`express`)
const mongoose = require('mongoose')
const cors = require(`cors`)
const req = require('express/lib/request')
const res = require('express/lib/response')

const port = process.env.PORT || 3000

//Routes
const userRoutes = require(`./api/UserRoutes`)
const { search } = require('./api/UserRoutes')
const adminRoutes = require('./api/AdminRoutes')
const hospitalRoutes=require('./api/HospitalRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.get(`/`, (req,res)=>{
    res.send("Hello Programmers")
})

app.use(`/users`,userRoutes) 
app.use('/admins',adminRoutes)
app.use('/hospitals',hospitalRoutes)


mongoose.connect(process.env.MONGODB,{useUnifiedTopology: true})
.then(()=>{
    app.listen(port,()=>{
        console.log("app running...")
    })
}).catch(err =>console.log(err))
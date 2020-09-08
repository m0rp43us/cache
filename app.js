const express = require('express')
const morgan = require('morgan')
const creatError = require('http-errors')
require('dotenv').config()


const Authroute = require('./routes/Authroute')
const app = express()
app.use(morgan('dev'));

app.get('/',async(req,res,next)=>{
    res.send("hello")
})

app.use('/auth',Authroute)

app.use(async(req,res,next)=>{
    const error = new Error("not found")
    error.status = 404
    next(error)
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({error:{
        status: err.status || 500,
        message : err.message
    },})
})

const PORT = process.env.PORT || 80

app.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`)
})
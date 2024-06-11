const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const students = require("./models/student")

const app = express()
app.use(cors())

app.post("/view",(req,res)=>{
    res.send("hello")
})

app.post("/search",(req,res)=>{
    res.send("contact page")
})

app.post("/delete",(req,res)=>{
    res.send("contact page")
})

app.listen(8081,()=>{
    console.log("server started")
})

app.post("/add",(req,res)=>{
    res.send("test")
})
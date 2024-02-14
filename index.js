const express = require('express');
const app=express();
const signInRoute=require('./routes/sign');
const loginRoute=require('./routes/login');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/libraryUsers")
.then(()=>{
    console.log("DB connected");
})

app.get("/", (req, res) => {
    res.send('hello')
})

app.use(express.json());
app.use('/user',signInRoute);
app.use('/user',loginRoute)


app.listen(4000, ()=>{
    console.log("server is running on port 4000");
})
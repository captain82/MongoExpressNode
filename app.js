const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

//ROUTES
app.get('/',(req,res)=>{
    res.send("We are on home");
});

app.get('/posts',(req,res)=>{
    res.send("We are on posts");
});



//Connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
()=> console.log('connected to db'),
()=>console.log(require('dotenv').config())
)
//How do we start listening to the server
app.listen(3000);
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

//import Routes
const postsRoute = require('./routes/posts')

app.use('/posts' , postsRoute)

//ROUTES
app.get('/',(req,res)=>{
    res.send("We are on home");
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
()=> console.log('connected to db') )
//How do we start listening to the server
app.listen(3000);
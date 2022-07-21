const dotenv = require('dotenv');
const mongoose = require('moongoose'); 
const express  = require('express');
const moongoose = require('moongoose');
const app = express();

dotenv.config({path: './config.env'});
require('./db/conn');

const PORT = process.env.PORT;

// const DB = 'mongodb+srv://AbhayChandel:chandelabhay@cluster0.w752yjc.mongodb.net/mernstack?retryWrites=true&w=majority';



app.get('/',(req,res)=>{
   res.send('Hello from the server');
});

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})
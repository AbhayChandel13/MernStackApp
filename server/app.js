const dotenv = require('dotenv');
const mongoose = require('mongoose'); 
const express  = require('express');
const app = express();

dotenv.config({path: './config.env'});
require('./db/conn');

app.use(express.json());

//we link the router files to make our  route easy 
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// const DB = 'mongodb+srv://AbhayChandel:chandelabhay@cluster0.w752yjc.mongodb.net/mernstack?retryWrites=true&w=majority';



// app.get('/',(req,res)=>{
//    res.send('Hello from the server');
// });

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})
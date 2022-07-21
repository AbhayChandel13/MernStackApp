const mongoose = require('moongoose'); 
const express  = require('express');
const moongoose = require('moongoose');
const app = express();

const DB = 'mongodb+srv://AbhayChandel:chandelabhay@cluster0.w752yjc.mongodb.net/mernstack?retryWrites=true&w=majority';

moongoose.connect(DB).then(()=>{
    console.log('Connection sucessful ');
}). catch((err)=>console.log(`No Connection `));

app.get('/',(req,res)=>{
   res.send('Hello from the server');
});

app.listen(5000,()=>{
    console.log('server is running on port 5000');
})
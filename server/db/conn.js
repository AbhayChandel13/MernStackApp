const mongoose = require('moongoose');

const DB = process.env.DATABASE;


mongoose.connect(DB).then(()=>{
    console.log('Connection sucessful ');
}). catch((err)=>console.log(`No Connection `));
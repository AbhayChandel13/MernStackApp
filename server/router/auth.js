const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send(`Hello Form the server Router js`);

})

router.post('/register',(req,res)=>{
    const{ name,email,phone, work,password,cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "Please Filled the correct data "})
    }

    User.findOne({email :email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"email already Exist"});
        }

        const user = new User({name,email,phone,work,password,cpassword});
        user.save().then(()=>{
            res.status(201).json({message:"User Registered Successfully "});
        }).catch((err)=>res.status(500).json({error:"failed to registered"}));
    }).catch((err)=>{console.log(err)});
    // console.log(name);
    // console.log(email);
    //console.log(req.body);
    //  res.json({message: req.body});
    // res.send('mera register page');
})


module.exports = router;
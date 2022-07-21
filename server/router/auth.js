const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello Form the server Router js`);

})

//Using Promises :--

// router.post('/register',(req,res)=>{
//     const{ name,email,phone, work,password,cpassword} = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error: "Please Filled the correct data "})
//     }

//     User.findOne({email :email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"email already Exist"});
//         }

//         const user = new User({name,email,phone,work,password,cpassword});
//         user.save().then(()=>{
//             res.status(201).json({message:"User Registered Successfully "});
//         }).catch((err)=>res.status(500).json({error:"failed to registered"}));
//     }).catch((err)=>{console.log(err)});
//     // console.log(name);
//     // console.log(email);
//     //console.log(req.body);
//     //  res.json({message: req.body});
//     // res.send('mera register page');
// })

//Using Async and Await :--

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please Filled the correct data " })
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "email already Exist" });
        }
        const user = new User({ name, email, phone, work, password, cpassword });
        const userRegister = await user.save()
        if (userRegister) {
            res.status(201).json({ message: "User Registered Successfully " });
        } else {
            res.status(500).json({ error: "failed to registered" });
        }

    }
    catch (err) {
        console.log(err);
    }


    // console.log(name);
    // console.log(email);
    //console.log(req.body);
    //  res.json({message: req.body});
    // res.send('mera register page');
})

//login route:--
router.post('/signin', async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill data in both the field " })
        }

        const userLogin = await User.findOne({ email: email });
        console.log(userLogin);
        if (!userLogin) {
            res.json({ error: "User Does Not Exits" });
        } else {
            res.json({ message: "User SignIn Successfully" });
        }
    } catch (err) {
        console.log(err);
    }
    // console.log(req.body);
    // res.json({message:"awesome "});
})


module.exports = router;
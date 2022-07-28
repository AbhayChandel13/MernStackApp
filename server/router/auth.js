const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");


require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello Form the server Router js`);

})

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
        else if (password != cpassword) {
            return res.status(422).json({ error: "Password are not matching" });
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });
            await user.save()
            res.status(201).json({ message: "User Registered Successfully " });
        }


    }
    catch (err) {
        console.log(err);
    }

})

//login route:--
router.post('/signin', async (req, res) => {

    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill data in both the field " })
        }

        const userLogin = await User.findOne({ email: email });
        // console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials pass" });
            } else {
                res.json({ message: "User Signin Successfully" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }

        // if (!userLogin) {
        //     res.json({ error: "User Does Not Exits" });
        // } else {
        //     res.json({ message: "User SignIn Successfully" });
        // }
    } catch (err) {
        console.log(err);
    }



    //about Page 

    router.get('/about', authenticate, (req, res) => {
        console.log("Hello from About");
        res.send(req.rootUser);
    });

    //Contact  Page 

    router.get('/contact', authenticate, (req, res) => {
        console.log("Hello from Contact ");
        res.send(req.rootUser);
    });

    //get User data for homepage and contact page

    router.get('/getdata', authenticate, (req, res) => {
        console.log("Hello ");
        res.send(req.rootUser);
    });


    //LOGOUT PAGE 

    router.get('/logout', async (req, res) => {
        console.log("Hello logout");
        // res.clearCookie('jwtoken');     
        // req.user.tokens = req.user.tokens.filter((currElement)=>{
        //     return currElement.token != req.token
        // })  
        res.clearCookie('jwtoken', { path: '/' });
        // await req.user.save() 
        res.status(200).send("User logout");
    });
})

//read the data of registered  Users :

router.get("/users", async (req, res) => {
    try {
        const usersdata = await User.find();
        res.send(usersdata);
    } catch (err) {
        res.send(err);
    }
});


module.exports = router;
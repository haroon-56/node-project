const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.post('/login',(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
  
    User.findOne({email:email,password:password})
    .then(user =>{
        console.log(user)
            if(user)
                {
                    res.status(200);
                    res.json("login")
                }   
    }).then(error=>
        {
            res.status(400);
            res.json("email or password not match")
        });
});

router.post('/register',(req,res,next)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email:email})
    .then(user =>{
        console.log(user);
            if(user == null)
                {
                    newuser = new User({
                        username : username,
                        email : email,
                        password : password
                    });
                    newuser.save()
                    .then((post)=>{
                        res.json(post);
                    })
                    .catch(error=> console.log(error));
                }
                else{
                    res.status(400);
                    res.json("email already exist")
                } 
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Config = require('../config/database');
const User = require('../models/user');


//Register
router.post('/register', function(req,res,next){
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, function(error, user){
        if(error){
            res.json({
                success: false,
                message: 'Failed to register user'
            });
        }
        else{
            res.json({
                success: true,
                message: 'User registered'
            });
        }
    });
});

//Authenticate
router.post('/authenticate', function(req,res,next){
    const username = req.body.username;    
    const password = req.body.password;

    User.getUserByUsername(username, function(error, user){
        if(error){
            throw error;
        }
        if(!user){
            return res.json({
                success:false,
                message:"User not found."
            });
        }
        //Compare entered password to the hashed password
        User.comparePassword(password, user.password, function(error, isMatch){
            if(error){
                throw error;
            }

            if(isMatch){
                const token = jwt.sign({data: user}, Config.secret, {
                    expiresIn: 604800 //1 week expiration on token
                });

                res.json({
                    success: true,                    
                    token: 'JWT ' + token,
                    user:{
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            }
            else{
                return res.json({
                    success:false,
                    message:"Incorrect password."
                });
            }
        });

    });

});

//Profile with token protection
router.get('/profile', passport.authenticate('jwt', {session:false}), function(req,res,next){
    res.json({
        user: req.user
    });
    res.send('PROFILE');
});


module.exports = router;
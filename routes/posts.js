const express = require('express');
const router = express.Router();

const Post = require('../models/post');


//Get all
router.get('/', function(req,res,next){   
    res.send('Lists of posts here.');
});

//Get 1
router.get('http://jsonplaceholder.typicode.com/posts/:number', function(req,res,next){   
    res.send(req.params.number);
});

//Create
router.post('/temp', function(req,res,next){
    res.send('Temp');
});


//Update


//Delete


module.exports = router;
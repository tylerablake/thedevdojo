const express = require('express');
const router = express.Router();

const Post = require('../models/post');


//Get
router.get('/', function(req,res,next){   
    res.send('Lists of posts here.');
});

router.get('/temp', function(req,res,next){
    res.send('Temp');
});



module.exports = router;
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//Get all
router.get('/', function(req,res,next){   
    return res.json({
        title: 'Blog Title',
        id: '123',        
        body: 'Some cool blog text goes here.',
        author: 'Tyler',
        authorUsername: 'tyler'
    });
});

//Get 1
var tempUrl = 'http://jsonplaceholder.typicode.com/posts';
router.post('/:id', function(req,res,next){   
    console.log(req.params.id);
    Post.getPostById(req.params.id);    
});

//Create
// router.get('/temp', function(req,res,next){
//     return res.json({
//         title: 'Blog Title',
//         id: '123',        
//         body: 'Some cool blog text goes here.',
//         author: 'Tyler',
//         authorUsername: 'tyler'
//     });
// });


//Update


//Delete


module.exports = router;
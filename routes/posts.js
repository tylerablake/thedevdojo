const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//Get all
router.get('/', function(req,res,next){   
    res.json(Post.getPosts())
});

//Get 1
router.get('/:id', function(req,res,next){   
    console.log(req.params.id);
    res.json(Post.getPostById(req.params.id));    
});

//TODO: Create

//TODO: Update

//TODO: Delete/Deactivate


module.exports = router;
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

//Create
router.post('/create', function(req,res,next){
    let newPost = new Post({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
        authorUsername: req.body.authorUsername,
        date: req.body.date
    });

    Post.addPost(newPost, function(error, user){
        if(error){
            res.json({
                success: false,
                message: 'Failed to create post'
            });
        }
        else{
            res.json({
                success: true,
                message: 'Post created'
            });
        }
    });
});

//TODO: Update

//TODO: Delete/Deactivate


module.exports = router;
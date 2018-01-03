const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//GetAll
router.get('/', function(req,res,next){   
    Post.getPosts(function(error, posts){
        res.json(posts);
    });
});

//GetById
router.get('/:id', function(req,res,next){       
    Post.getPostById(req.params.id, function(error, post){
        console.log(post);
        res.json(post);
    });    
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
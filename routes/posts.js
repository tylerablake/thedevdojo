const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//GetAllPublished
router.get('/', function(req,res,next){   
    Post.getPublishedPosts(function(error, posts){
        res.json(posts);
    });
});

//GetAllUnpublished
router.get('/unpublished', function(req,res,next){   
    Post.getUnpublishedPosts(function(error, posts){
        res.json(posts);
    });
});

//GetById
router.get('/:id', function(req,res,next){       
    Post.getPostById(req.params.id, function(error, post){        
        res.json(post);
    });    
});

router.get('/tag/:tag', function(req,res){
    Post.getPostsByTag(req.params.tag, function(error, posts){
        if(error){
            res.json({
                success: false,
                message: 'Failed to find posts'
            });
        }
        else{
            res.json({posts});
        }
    })
})

//Create
router.post('/create', function(req,res,next){
    
    let newPost =  {        
        title,
        body,
        author,
        authorUsername,
        createDate,
        tags
    } = req.body;

    Post.addPost(newPost, function(error, post){ 
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
router.put('/update', function(req,res,next){
    
    let newPost =  {
        id,
        title,
        body,
        author,
        authorUsername,
        createDate,
        tags
    } = req.body;
    
    Post.updatePost(newPost, function(error, post){ 
        if(error){
            next(error);
        }
        else{            
            res.json({
                success: true,
                message: 'Post Updated',
                data: newPost
            });
        }
    });
});




//TODO: Delete/Deactivate or just unpublish?








router.use((error, req, res, next) => {
    if(error){
        res.json({
            success: false,
            message: error
        });
    }    
});


module.exports = router;
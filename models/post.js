const mongoose = require('mongoose');
const config = require('../config/database');
const User = require('./user');

//Post Schema
const PostSchema = mongoose.Schema({
    id:{
        type: Number        
    },
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required : true
    },
    body:{
        type: String,
        required : true
    },
    createDate:{
        type: Date,
        required : true,
        default: Date.now
    },
    authorUsername:{
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    updateDate:{
        type: Date,
        default: Date.now
    },
    isPublished:{
        type: Boolean,
        default: false   
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getPublishedPosts = function(callback){
    Post.find({isPublished: true},function(error, posts){
        if(error){
            return callback(error, null);
        }
        else{
            return callback(null,posts);
        }               
    });  
}

module.exports.getUnpublishedPosts = function(callback){
    Post.find({isPublished: false}, function(error, posts){
        if(error){
            return callback(error, null);
        }
        else{
            return callback(null, posts);
        }
    })
}


module.exports.getPostById = function(paramId, callback){       
    Post.findById(paramId, function(error, post){
        if(error){
            return callback(error, null);
        }
        else{
            return callback(null, post);
        }
    });
}

module.exports.getPostsByTag = function(tag, callback){
    Post.find({tags: new RegExp('^'+ tag +'$', "i")}, function(error, posts){
        if(error){
            return callback(error, null);
        }
        else{
            return callback(null, posts);
        }
    });
}

module.exports.addPost = function(newPost, callback){    
    User.findOne({username: newPost.authorUsername}, function(error, user){
        if(error){
            return callback(error, null)            
        }
        else{            

            let postToCreate = new Post({
                title: newPost.title,
                body: newPost.body,
                author: user.name,
                authorUsername: newPost.authorUsername,
                createDate: newPost.createDate,
                isPublished: newPost.isPublished,
                tags: newPost.tags,
                updateDate: newPost.createDate                
            });
                             
            postToCreate.save(function(error, post){
                    if(error){            
                        console.log(error)    ;
                        return callback(error,null);
                    }
                    else{
                        return callback(null)
                    }
                });
        }
    });     
}

module.exports.updatePost = function(updatedPost, callback){    
    Post.findById(updatedPost.id, function(error, post){
        if(error){
            return callback(error, null);
        }
        else{  
            if(!post){
                return callback('An error occurred, please try again later.', null)
            }          
            else{
                post.title = updatedPost.title;            
                post.body = updatedPost.body;
                post.author = updatedPost.author;
                post.tags = updatedPost.tags;
                post.isPublished = updatedPost.isPublished;
                post.updateDate = new Date();
                
                post.save(function(error, savedPost){
                    if(error){
                        return callback('Unable to update the post.', null);
                    }
                    else{
                        return callback(null, savedPost);
                    }
                });
            } 
        }
    });
}
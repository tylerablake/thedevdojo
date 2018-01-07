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
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getPosts = function(callback){
    Post.find({},function(error, posts){
        if(error){
            return callback(error, null);
        }
        else{
            return callback(null,posts);
        }               
    });  
}

module.exports.getPostById = function(paramId, callback){   
    //TODO: refactor to use Post.findOne()...you lazy bum 
    Post.getPosts(function(error, posts){        
        for(let index = 0; index < posts.length; index++){ 

            if(posts[index].id == paramId){
                return callback(null, posts[index]);
            }
            else{
            }            
        }
        return callback('No match found', null);
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
            let authorName = user.name;            
            newPost.author = authorName;

            Post.count({}, function(error, count){
                newPost.id = count + 1;        
                newPost.save(function(error, post){
                    if(error){                
                        return callback(error,null);
                    }
                    else{
                        return callback(null)
                    }
                });
            })


        }
    });     
}

module.exports.updatePost = function(updatedPost, callback){
    console.log(updatedPost);

    Post.findOne({ id: updatedPost.id}, function(error, post){
        if(error){
            return callback(error, null);
        }
        else{

            Post.findByIdAndUpdate(post._id, 
                { $set: { 
                    title: updatedPost.title,
                    body: updatedPost.body,
                    tags: updatedPost.tags,
                    author: updatedPost.author,                   
                    updatedDate: new Date()
                }}, { new: true }, function (error, post) {
                if (error){
                    return callback('Error occurred while attempting to update your post.', null);
                }
                else{                    
                    return callback(null, post)                    
                }                
              });            
        }
    });
}
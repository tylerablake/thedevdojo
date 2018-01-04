const mongoose = require('mongoose');
const config = require('../config/database');

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
       return callback(null,posts);
    });  
}

module.exports.getPostById = function(paramId, callback){    
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

module.exports.addPost = function(newPost, callback){
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
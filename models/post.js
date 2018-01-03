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
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);
const tempData = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }];

module.exports.getPosts = function(callback){
    Post.find({},function(error, posts){        
       return callback(null,posts);
    });  
}

module.exports.getPostById = function(paramId, callback){    
    Post.getPosts(function(error, posts){        
        for(let index = 0; index < posts.length; index++){ 

            if(posts[index].id == paramId){
                console.log('Match found');                             
                return callback(null, posts[index]);
            }
            else{
                console.log('No match');                
            }            
        }
        return callback('No match found', null)  ;
    });
}

module.exports.addPost = function(newPost, callback){
    Post.count({}, function(error, count){
        newPost.id = count + 1;        
        newPost.save(function(error){
            if(error){
                console.log(error);
                throw error;
            }
        });
    })
    
    
}
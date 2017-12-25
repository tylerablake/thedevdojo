const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    name:{
        type: String 
    },
    email:{
        type: String,
        required : true
    },
    username:{
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    }
});


const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, function(error, salt){
        bcrypt.hash(newUser.password, salt, function(error, hash){
            if(error){
                throw error;
            }
            newUser.password = hash;
            newUser.save(callback);
        })
    });
}

module.exports.comparePassword = function(submitPassword, hash, callback){
    bcrypt.compare(submitPassword, hash, function(error, isMatch){        
        if(error){
            throw error;
        }
        callback(null, isMatch);
    });
}

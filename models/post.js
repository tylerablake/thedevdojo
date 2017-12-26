const mongoose = require('mongoose');
const config = require('../config/database');

//Post Schema
const PostSchema = mongoose.Schema({
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
    date:{
        type: Date,
        required : true
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);
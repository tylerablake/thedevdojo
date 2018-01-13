const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require("passport");
const mongoose = require('mongoose');
const config = require('./config/database');

//Models
const User = require('./models/user');
const Post = require('./models/post');


mongoose.connect(config.uri, config.options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.     
    console.log('Connected to database.')                      
});

//Fix Mongoose depricated promise library
mongoose.Promise = global.Promise;

const app = express();

const users = require('./routes/users');
const posts = require('./routes/posts');

////Dev Port
//const port = 8000;

//Port Number configured for Heroku deployment.
const port = process.env.PORT || 8080;

//CORS Middleware
app.use(cors());

//Set Static Folder for Angular
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/posts', posts);


//Start Server
app.listen(port, function(){
    console.log('Server started on port ' + port);
});
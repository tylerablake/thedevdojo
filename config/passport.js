const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const Config = require('../config/database');

module.exports = function(passport){
    let options = {};
    options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    options.secretOrKey = Config.secret;
    passport.use(new JwtStrategy(options, function(jwt_payload, done){
        User.getUserById(jwt_payload.data._id, function(error, user){
            if(error){
                return done(error, false);                
            }

            if(user){
                return done(null,user);
            }
            else{
                return done(null,false)
            }
        })
    }))
    
}

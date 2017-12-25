module.exports = {
    uri: 'mongodb://user:test@ds161426.mlab.com:61426/meanauth',
    options: { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } }
            },
    secret: 'yourSecret'
}
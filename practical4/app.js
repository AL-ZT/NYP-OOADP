// Import basic modules
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//import multer
var multer = require('multer');
var upload = multer({dest:'./public/uploads/',limits:{fileSize: 1500000, files:1}});

// Import home controller
var index = require('./server/controllers/index');
// Import login controller
var auth = require('./server/controllers/auth');
//Import comments controller
var comments = require('./server/controllers/comments');
//Import videos controller
var videos = require('./server/controllers/videos');
//Import images controller
var images = require("./server/controllers/images");

// Modules to store session
var myDatabase = require('./server/controllers/database');
var expressSession = require('express-session');
var SessionStore = require('express-session-sequelize')(expressSession.Store);
var sequelizeSessionStore = new SessionStore({
    db: myDatabase.sequelize,
});
// Import Passport and Warning flash modules
var passport = require('passport');
var flash = require('connect-flash');

var app = express();
var serverPort = 3000;
var httpServer = require('http').Server(app);

// view engine setup
app.set('views', path.join(__dirname, 'server/views/pages'));
app.set('view engine', 'ejs');

// Passport configuration
require('./server/config/passport')(passport);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true,
    sourceMap: true
}));

// Setup public directory
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
// secret for session
app.use(expressSession({
    secret: 'sometextgohere',
    store: sequelizeSessionStore,
    resave: false,
    saveUninitialized: false,
}));

// Init passport authentication
app.use(passport.initialize());
// persistent login sessions
app.use(passport.session());
// flash messages
app.use(flash());

// Application Routes
// Index Route
app.get('/', index.show);
app.get('/login', auth.signin);
app.post('/login', passport.authenticate('local-login', {
    //Success go to Profile Page / Fail go to login page
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
}));
app.get('/signup', auth.signup);
app.post('/signup', passport.authenticate('local-signup', {
    //Success go to Profile Page / Fail go to Signup page
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

app.get('/profile', auth.isLoggedIn, auth.profile);

//setup routes for videos
app.get('/videos', videos.hasAuthorization, videos.show);
app.post('/videos', videos.hasAuthorization, upload.single('video'), videos.uploadVideo);

//setup routes for images
app.post('/images', images.hasAuthorization, upload.single('image'), images.uploadImage);
app.get('/images-gallery', images.hasAuthorization, images.show);

//setup chat
var io = require('socket.io')(httpServer);
var chatConnections = 0;
var ChatMsg = require('./server/models/chatMsg');

io.on('connection', function(socket) {
    chatConnections++;
    console.log("Num of chat users connected: "+chatConnections);

    socket.on('disconnect', function() {
        chatConnections--;
        console.log("Num of chat users connected: "+chatConnections);
    });
})


app.get('/messages', function (req,res) {
    ChatMsg.findAll().then((chatMessages) => {
        res.render('chatMsg', {
            url: req.protocol + "://" + req.get("host") + req.url,
            data: chatMessages
        });
    });
});

app.post('/messages', function (req,res) {
    var chatData = {
        name: req.body.name,
        message: req.body.message
    }
    //Save into database
    ChatMsg.create(chatData).then((newMessage) => {
        if (!newMessage) {
            res.sendStatus(500);
        }
        io.emit('message', req.body)
        res.sendStatus(200)
    })
});

// Logout Page
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

app.get('/comments', comments.hasAuthorization, comments.list);

app.post('/comments', comments.hasAuthorization, comments.create);

app.delete('/comments/:comments_id', comments.hasAuthorization, comments.delete);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

app.set('port', serverPort);

var server = httpServer.listen(app.get('port'), function () {
    console.log('http server listening on port ' + server.address().port);
});

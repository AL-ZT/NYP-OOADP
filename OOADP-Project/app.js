var express = require('express');
var app = express();
var path = require('path');
var multer = require('multer');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var serverPort = 3000;
var httpServer = require('http').Server(app);
var moment = require('moment');
var fs = require("fs");

// Multer
var auth = require('./controllers/auth');
var myDatabase = require('./controllers/sqlDatabase');
var budget=require('./models/budget')
var transactions = require("./models/transactions");
var sequelizeInstance = myDatabase.sequelizeInstance;
var reviews = require('./models/review');
var members = require('./models/memberModel')
var notif = require('./models/notificationModel');
var listingTable = require('./models/listingTable');
var chatRoom = require('./models/roomChat');
var expressSession = require('express-session');
var SessionStore = require('express-session-sequelize')(expressSession.Store);
var sequelizeSessionStore = new SessionStore({
    db: myDatabase.sequelizeInstance,
});
var flash = require('connect-flash');
var parts = require('./models/parts');
var chatupload = multer({ dest: './public/images/chatimages' });

app.set('views', path.resolve(__dirname, 'views/pages'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

require('./config/passport')(passport);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true,
    sourceMap: true
}));

app.use(expressSession({
    secret: 'ooadp',
    store: sequelizeSessionStore,
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

var chatConnections = 0;
var currentuser;
var onlineusers = [];

app.use(function (req, res, next) {
    res.locals.user = req.user;
    currentuser = req.user;
    next();
})

app.get('/', (req, res) => {
    res.locals.user = req.user;
    sequelizeInstance.query('select * from `listing tables`', { model: listingTable }).then(items => {
        var temp = [];
        var listings = [];
        items.forEach(function (item) {
            temp.unshift(item);
        })
        for (var i = 0; i < 12; i++) {
            listings.push(temp[i]);
        }
        res.render('index', { listings: listings });
    })
})

app.get('/login', auth.signin);
app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));
app.get('/register', auth.signup);
app.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/register',
    failureFlash: true
}));

app.get('/logout', auth.logout);

var io = require('socket.io')(httpServer);
var ChatMsg = require('./models/chatMsg');

io.on('connection', function (socket) {
    chatConnections++;
    console.log("Num of chat users connected : " + chatConnections);
    io.emit('addconcurrentuser', chatConnections);

    socket.on('disconnect', function (socket) {
        chatConnections--;
        console.log("Num of chat users connected : " + chatConnections);
        io.emit('removeconcurrentuser', chatConnections);
    });
})

var globalchat = io.of('/Global');
globalchat.on('connection', function (socket) {
    console.log("Connected to Global");
    if (currentuser) {
        socket.join(currentuser.username);
        if (!socket.join(currentuser)) {
            console.log('Already in room');
        }
    }

    socket.on('profilepic', function (data) {
        var tabledata = [];
        sequelizeInstance.query('select username, profilePicture from members', { model: members }).then((picture) => {
            for (var i = 0; i < picture.length; i++) {
                var picturedata = {
                    username : picture[i].username,
                    profilePicture : picture[i].profilePicture
                }
                tabledata.push(picturedata);
            }
            globalchat.in(data.user).emit('loadpic', tabledata);
        })
    })

    socket.on('userlisting', function (data) {
        var tabledata = [];
        sequelizeInstance.query('select itemDescription, itemQuantity, itemPrice, itemType, itemAdditionalDescription, itemListingDate, itemPicture from `listing tables` l join members m on m.id = l.itemOPID where m.username =' + "\"" + data.username + "\"", { model: listingTable }).then((list) => {
            for (var i = 0; i < list.length; i++) {
                var data = {
                    itemDescription: list[i].itemDescription,
                    itemQuantity: list[i].itemQuantity,
                    itemPrice: list[i].itemPrice,
                    itemType: list[i].itemType,
                    itemAdditionalDescription: list[i].itemAdditionalDescription,
                    itemListingDate: list[i].itemListingDate,
                    itemPicture: list[i].itemPicture,
                }
                tabledata.push(data);
            }
            globalchat.in(currentuser.username).emit('list', tabledata);
        })
    })

    socket.on('userreviews', function (data) {
        var tabledata = [];
        sequelizeInstance.query('select r.id, r.product, r.user, m.profilePicture, r.commenter, r.comment, r.vote from reviews r join members m on r.commenter = m.username where r.user = ' + "\"" + data.username + "\"", { model: reviews, raw: true }).then((reviews) => {
            for (var i = 0; i < reviews.length; i++) {
                var data = {
                    id: reviews[i].id,
                    product: reviews[i].product,
                    user: reviews[i].user,
                    profilePicture: reviews[i].profilePicture,
                    commenter: reviews[i].commenter,
                    comment: reviews[i].comment,
                    vote: reviews[i].vote
                }
                tabledata.push(data);
            }
            globalchat.in(currentuser.username).emit('reviews', tabledata);
        })
    })

    socket.on('usertransactions', function (data) {
        var tabledata = []
        sequelizeInstance.query('SELECT t.transaction_items, sm.username seller, pm.username payer from transactions t join members sm ON t.seller_id = sm.id JOIN members pm ON t.payer_id = pm.id where pm.username = ' + "\"" + data.payer + "\"" + 'and sm.username = ' + "\"" + data.seller + "\"", { model: transactions }).then((transactions) => {
            for (var i = 0; i < transactions.length; i++) {
                var data = {
                    payer: transactions[i].payer,
                    transaction_items: transactions[i].transaction_items,
                    seller: transactions[i].seller
                }
                tabledata.push(data);
            }
            globalchat.in(currentuser.username).emit('transactions', tabledata);
        })
    })

    socket.on('pushnotif', function (data) {
        var tempdata = {
            type: data.type
        }
        notif.create(tempdata).then((temp) => {
            var valid = true;
            sequelizeInstance.query('select id, type, userfrom, userto from notifmodels', { model: notif }).then((notifications) => {
                for (var i = 0; i < notifications.length; i++) {
                    if (notifications.length != 0) {
                        var tableid = notifications[i].id;
                        if (tempdata.type == "chatinvitation") {
                            if (data.userfrom == notifications[i].userfrom || data.userfrom == notifications[i].userto) {
                                if (data.userto == notifications[i].userfrom || data.userto == notifications[i].userto) {
                                    valid = false;
                                }
                            }
                        }
                    }
                }
                if (valid == true) {
                    var tabledata = {
                        userfrom: data.userfrom,
                        userto: data.userto,
                        type: data.type,
                        notifid : tableid
                    }
                    notif.update(tabledata, { where : {id : tableid }});
                    globalchat.in(data.userto).emit('notifretrieval', tabledata);
                } else {
                    globalchat.in(data.userfrom).emit('erroralert', { message: "Unable to send, invitation still pending!" });
                }
            })
        });
        
    })

    socket.on('notification', function (data) {
        sequelizeInstance.query('select id, type, userfrom, userto, item from notifmodels where userto = ' + "\"" + data.user + "\"", { model: notif }).then((notifications) => {
            var tabledata = [];
            for (var i = 0; i < notifications.length; i++) {
                tabledata.push({
                    notifid: notifications[i].id,
                    userfrom: notifications[i].userfrom,
                    userto: notifications[i].userto,
                    type: notifications[i].type,
                    item: notifications[i].item
                })
            }
            globalchat.in(data.user).emit('loadnotif', tabledata);
        })
    })

    socket.on('loadtabs', function (data) {
        sequelizeInstance.query('select roomid, firstuser, lastuser from roomchats where firstuser = ' + "\"" + data.user + "\"" + 'or lastuser = ' + "\"" + data.user + "\"", { model: chatRoom }).then((currentrooms) => {
            var tabledata = [];
            for (var i = 0; i < currentrooms.length; i++) {
                tabledata.push({
                    firstuser: currentrooms[i].firstuser,
                    lastuser: currentrooms[i].lastuser,
                    roomid: currentrooms[i].roomid
                })
            }
            globalchat.in(data.user).emit('loadchat', tabledata);
        })
    })

    socket.on('disconnect', function (socket) {
        console.log("Disconnected from Global");
    })
})

var rooms = io.of('/Rooms');

rooms.on('connection', function (socket) {
    console.log("Connected to Rooms");
    if (currentuser) {
        sequelizeInstance.query('select roomid from roomchats where firstuser = ' + "\"" + currentuser.username + "\"" + 'or lastuser = ' + "\"" + currentuser.username + "\"", { model: chatRoom }).then((rooms) => {
            for (var i = 0; i < rooms.length; i++) {
                socket.join(rooms[i].roomid);
            }
        })
    }

    socket.on('createroom', function (data) {
        var room = data.userfrom + "-" + data.userto
        var tabledata = {
            firstuser: data.userfrom,
            lastuser: data.userto,
            roomid: room
        };
        chatRoom.create(tabledata).then((room) => {
            if (!room) {
                sendStatus(500);
            }
        })
        socket.join(room);
        if (Object.keys(io.of('/Global').adapter.rooms).indexOf(data.userfrom) >= 0) {
            globalchat.in(data.userfrom).emit('redirecttab', tabledata);
        } else {
            socket.emit('createtab', tabledata);
        }
    })

    socket.on('fucreateroom', function (data) {
        socket.join(data.roomid);
        rooms.in(data.roomid).emit('createtab', data);
    })

    socket.on('userdisplay', function (data) {
        sequelizeInstance.query('select username from members where username !=' + "\"" + data.clientuser + "\"", { model: members }).then((members) => {
            var tabledata = []
            for (var i = 0; i < members.length; i++) {
                tabledata.push({
                    username: members[i].username
                })
            }
            socket.emit('userdivs', tabledata);
        })
    })

    socket.on('leaveroom', function (data) {
        socket.leave(data.roomId);
        console.log("Left Room " + data.roomId);
    })

    socket.on('disconnect', function (socket) {
        console.log("Disconnected from Rooms");
    });
})

app.post('/send', function (req, res) {
    var chatData = {
        roomId: req.body.room,
        username: req.body.name,
        message: req.body.message
    }
    if (req.body.room != "global") {

        ChatMsg.create(chatData).then((newMessage) => {
            if (!newMessage) {
                sendStatus(500);
            }
            rooms.in(req.body.room).emit('message', req.body);
        })
    } else {
        globalchat.emit('message', {
            name: req.body.name,
            message: req.body.message,
            room: 'global'
        });
    }
    res.sendStatus(200)
})

app.post('/deletenotif', function (req, res) {
    var notifid = req.body.notifid;
    notif.destroy({ where: { id: notifid } });
    res.sendStatus(200);
})

app.post('/delete', function (req, res) {
    var deletedroomId = req.body.roomId;
    chatRoom.destroy({ where: { roomid: deletedroomId } })
    res.sendStatus(200);
})

app.post('/chatupload', chatupload.single('myfile'), function (req, res) {
    var src;
    var dest;
    var targetPath;
    var targetName;
    var picture = req.file;
    targetPath = "./public/images/chatimages/" + picture.originalname;
    src = fs.createReadStream(picture.path);
    dest = fs.createWriteStream(targetPath);
    src.pipe(dest);
    res.sendStatus(200);
})

//Create Listing 
var create_listing = require('./routes/create_listing');
app.use("/create_listing", create_listing);
//Modify Listing
var modify_listing = require("./routes/modify_listing");
app.use("/modify_listing", modify_listing);
//PC Building
var pc_building = require("./routes/pc_building");
app.use("/pc_building", pc_building);
//Shopping Cart
var shopping_cart = require("./routes/shopping_cart");
app.use("/shopping_cart", shopping_cart);
//Checkout
var checkout = require('./routes/checkout');
app.use("/checkout", checkout);

//Auction
var auction = require("./routes/auction");
app.use("/auction", auction);
//Bidding
var bidding = require('./routes/bidding');
app.use("/bid", bidding);
app.post('/bidnotif', function (req, res) {
    var tabledata = {
        userto: req.body.username,
        type: req.body.type
    }
    notif.create(tabledata);
    globalchat.in(req.body.username).emit('notifretrieval', tabledata);
})

// Profile Page

var profiles = require('./routes/profile');
app.use("/users", profiles);

//JUN WEI

var browse = require('./routes/browse');
app.use("/browse", browse);

var selectedbrowse = require('./routes/selectedbrowse');
app.use("/selected_browse", selectedbrowse);

var productdetails = require('./routes/productdetails');
app.use("/product_details", productdetails);

var comparing = require('./routes/comparing');
app.use("/compare", comparing);

var bookmarks = require('./routes/bookmarks');
app.use("/bookmarks", bookmarks);

var profile = require('./routes/profile');
app.use("/profile", profile);

//Set Budget
var set_budget = require('./routes/set_budget');
app.use("/set_budget",set_budget);
//Edit Budget
var edit_budget=require('./routes/edit_budget');
app.use("/edit_budget",edit_budget);

module.exports = app;

app.set('port', serverPort);

var server = httpServer.listen(app.get('port'), function () {
    console.log('http server listening on port ' + server.address().port);
});


var Bids = require('../models/bid');
var listing = require('../models/listingTable');
var members = require('../models/memberModel');
var myDatabase = require('./sqlDatabase');
var bidhistorys = require('../models/bidhistory');
var sequelize = myDatabase.sequelizeInstance;
// Multer
var fs = require("fs");
//var mime = require("mime");
//var IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

exports.list = function(req, res) {
    var user = req.user;
    sequelize.query('SELECT b.id, b.datetimer, b.title, b.desc, b.imageName1, b.imageName2, b.imageName3, b.highbid, b.highbidname, b.category AS user_id from Bids b join Members m on b.user_id = m.id', {model: Bids}).then((bids) => {

        res.render('bid', {
            title:'Bids Page',
            bids: bids,
            user: user,
    //        gravatar: gravatar.url(bid.user_id, {s:'80', r:'x', d: 'retro'}, true),
            urlPath: req.protocol + "://" + req.get("host") + req.url
        })
    }).catch((err) => {
        return res.status(400).send({
            message: err
        });
    });
};

exports.sortstar = function(req, res) {
    var sort = req.body.sortstar;
    console.log(sort);
    if(sort=="stardef") {
        Bids.findAll({}).then((bids)=> {
            res.render('bid', {bids});
        })
    }
    else if(sort=="sorthigh") {
        Bids.findAll({order:[[sequelize.literal('startotal / starcount'), "DESC"]]}).then((bids)=> {
            res.render('bid', {bids});
        })
    }
    else if(sort=="sortlow") {
        Bids.findAll({order:[[sequelize.literal('startotal / starcount'), "ASC"]]}).then((bids)=> {
            res.render('bid', {bids});
        })
    }
}
exports.showTable = function(req, res)  {
    sequelize.query('SELECT b.id, b.datetimer, b.title, b.desc, b.imageName1, b.imageName2, b.imageName3, b.highbid, b.highbidname, b.category AS user_id from Bids b join Members m on b.user_id = m.id', {model: Bids}).then((bids) => {

        res.render('dashboard', {
            title:'Table Page',
            bids: bids
        })
    })
};
exports.create = function(req,res) {
    console.log("creating bids")
    console.log(req.files);
    console.log(req.user);
    var pictures = req.files;
    var src1;
    var src2;
    var src3;
    var dest;
    var targetPath;
    var targetName;
    //var tempPath = req.file.path;
    
  //  var type = mime.lookup(req.file.mimetype);
  //  var extension = req.file.path.split(/[. ]+/).pop();
  //  if (IMAGE_TYPES.indexOf(type) == -1) {
  //      return res.status(415).send("Supported image formats: jpeg, jpg, jpe, png.");
 //   }
    var timer = req.body.datetimer + ':00';

    timer = timer.replace('T', ' ');
    console.log(timer);
    targetPath1 = "./public/images/bidimages/" + pictures[0].originalname;
    targetPath2 = "./public/images/bidimages/" + pictures[1].originalname;
    targetPath3 = "./public/images/bidimages/" + pictures[2].originalname;
    src1 = fs.createReadStream(pictures[0].path);
    src2 = fs.createReadStream(pictures[1].path);
    src3 = fs.createReadStream(pictures[2].path);

    dest1 = fs.createWriteStream(targetPath1);
    dest2 = fs.createWriteStream(targetPath2);
    dest3 = fs.createWriteStream(targetPath3);
    src1.pipe(dest1);
    src2.pipe(dest2);
    src3.pipe(dest3);
    
    var bidData = {
        title: req.body.title,
        desc: req.body.desc,
        desc2: req.body.desc2,
        user_id: req.user.id,
        category: req.body.category,
        imageName1: pictures[0].originalname,
        imageName2: pictures[1].originalname,
        imageName3: pictures[2].originalname,
        highbid: req.body.highbid,
        highbidname: req.user.username,
        datetimer: timer
    }
    console.log(timer);
    Bids.create(bidData).then((newComment, created) => {

        if(!newComment) {
            return res.send(400, {
                message: "error"
            });
        }
        
        
        res.redirect('/bid');
    })

};


exports.delete = function(req,res) {
    var record_num = req.params.bid_id;
    console.log("deleting bid" + record_num);
    Bids.destroy({where: {id: record_num}}).then((deletedComment)=> {

        if(!deletedComment) {
            return res.send(400, {
                message: "error"
            });
        }
        res.status(200).send({message: "Deleted bids: " + record_num});
    })
}

exports.showbids = function(req, res) {


    Bids.find({where: {id: req.params.bid_id}}).then((bids)=> {
        var user= req.user.username;
        var refusers = bids.referredpeople;
        var trufalse;
        console.log("wtf");
        console.log(user);
        console.log(refusers);

        if(refusers.includes(user)){
            trufalse = true;
        }
        else {
            truefalse = false;
        }
        res.render('bidspage', { bids: bids, trufalse:trufalse , urlPath: req.protocol + "://" + req.get("host") + req.url  });

    })
    
};

exports.editbid = function(req, res) {


    Bids.find({where: {id: req.params.bid_id}}).then((bids)=> {

        if(!bids) {
            return res.send(400, {
                message: "error"
            });
        }
        res.render('edit_bid', { bids: bids, urlPath: req.protocol + "://" + req.get("host") + req.url  });

    })
    
};


exports.updatebid = function(req, res) {

    var itbool = req.body.itsbool;
    var tempbidder = req.user.username;
    console.log("hey");
    console.log(itbool);
    if (req.body.bidsupdate) {
        if(itbool.includes("YES")) {

            Bids.update(
                {
                    highbid: req.body.bidsupdate * 1.2,
                    highbidname: tempbidder,
                    startotal: sequelize.literal('startotal + '+ req.body.starrating),
                    starcount: sequelize.literal('starcount + 1'),
                },  {where: {id: req.params.bid_id}}
            )
        }
        else
        {
            Bids.update(
                {
                    highbid: req.body.bidsupdate,
                    highbidname: tempbidder,
                    startotal: sequelize.literal('startotal + '+ req.body.starrating),
                    starcount: sequelize.literal('starcount + 1'),
                },      {where: {id: req.params.bid_id}}
            )
        }
    }
    res.redirect('/bid')
};

exports.editbidding = function(req, res) {
    var timer = req.body.datetimer + ':00';
    var person = req.body.referral;
    Bids.update(
        {
            highbid: req.body.highbid,
            highbidname: req.body.highbidname,
            title: req.body.title,
            referredpeople: sequelize.fn('concat', sequelize.col('referredpeople'), ' ', person),
            desc: req.body.desc,
            datetimer: timer

        }, {where: {id: req.params.bid_id}}
    )
    res.redirect("/bid/dashboard")
};

exports.showmembers = function(req, res)  {

    sequelize.query('SELECT name, username, email, phone, adminStatus from members', {model: members}).then((members) => {

        res.render('membertable', {
            title:'Table Page',
            members: members
        })
    })
};

exports.showhistory = function(req, res) {
    bidhistorys.findAll({}).then(bidhistory =>
        {
            res.render('bidhistory', {bidhistory});
        })
};
exports.importbid = function(req, res) {
    listing.findAll({}).then(listingtable =>
    {
        res.render('importbid', {listingtable});
    })
};

exports.submitimport = function(req, res) {
    var record_num = req.params.id;
    var importobj;
    listing.find({where: {ListingID: record_num}}).then((listing)=> {
        var bidData = {
            title: listing.itemDescription,
            desc: listing.itemAdditionalDescription,
            user_id: listing.itemOPID,
            category: listing.itemType,
            imageName1: listing.itemPicture,
            imageName2: listing.itemPicture,
            imageName3: listing.itemPicture,
            highbid: listing.itemPrice,
            highbidname: listing.itemBrand
        }
        Bids.create(bidData);
    });
    res.redirect('/bid');
};

exports.bidhistory = function(req, res) {
    var data ={
        bid_id: req.body.bid_id,
        bid_highbidname: req.body.bid_username,
        bid_title: req.body.bid_title,
        bid_created: req.body.bid_created
    };
    Bids.destroy({where: {id: req.body.bid_id}});
    bidhistorys.create(data);
    

}

exports.showgraph = function(req, res) {

    Bids.findAll({}).then((bidgraph)=>{
        res.render('graph', {bidgraph})
    })
};
exports.hasAuthorization = function (req,res,next) {
    if(req.isAuthenticated())
        return next();
    res.redirect('/login');
};

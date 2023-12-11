var express = require("express");
var bodyParser = require('body-parser');
var profiles = express.Router();
var member = require('../models/memberModel');
var listings = require('../models/listingTable');
var reviews = require('../models/review')
var myDatabase = require('../controllers/sqlDatabase');
var multer = require('multer');
var auth = require('../controllers/auth');
var profileupload = multer({ dest : 'public/images/profileimages' })
var sequelizeInstance = myDatabase.sequelizeInstance;
profiles.use(bodyParser.urlencoded({ extended: false }));
profiles.use(bodyParser.json());

profiles.get('/:username', auth.isLoggedIn, (req, res) => {
    sequelizeInstance.query('select name, username, email, password, phone, adminStatus, profilePicture, balance from members where username = ' + "\"" + req.params.username + "\"", {model : member}).then((memberDetails) => {
        res.render('profile', {
            memberDetails : memberDetails
        });
    })
})

profiles.post('/:username/updateinfo', auth.isLoggedIn, (req, res) => {
    var changedData = req.body;
    member.update(changedData, { where : { username : req.params.username }}).then((updatedData) => {
        if(!updatedData) {
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    })
})

profiles.post('/:username/addreview', auth.isLoggedIn, (req, res) => {
    var review = req.body;
    reviews.create(review).then((createdReview) => {
        if (!createdReview) {
            res.sendStatus(400);
        } else {
            res.sendStatus(200);
        }
    })
})

profiles.post('/:username/profilepicupload', auth.isLoggedIn, profileupload.single('profile'), (req, res) => {
    var picture = req.file;
    var data = {
        profilePicture : picture.filename
    }
    member.update(data, { where : { username : req.params.username }}).then((updatedData) => {
        if(!updatedData) {
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    })
})

// profiles.post('/:username/loadlistings', auth.isLoggedIn, (req, res) => {
    
//     sequelizeInstance.query('select itemDescription, itemQuantity, itemPrice, itemType, itemAdditionalDescription, itemListingDate, itemPicture from `listing tables` l join members m on l.itemOPID = m.id where username = ' + "\"" + req.params.username + "\"", {model : listings}).then((userlistings) => {
//         var tabledata = [];
//         for (var i = 0; i < userlistings.length; i++) {
//             var list = {
//                 itemDescription : userlistings[i].itemDescription,
//                 itemQuantity : userlistings[i].itemQuantity,
//                 itemPrice : userlistings[i].itemPrice,
//                 itemType : userlistings[i].itemType,
//                 itemAdditionalDescription : userlistings[i].itemAdditionalDescription,
//                 itemListingDate : userlistings[i].itemListingDate,
//                 itemPicture : userlistings[i].itemPicture
//             }
//             tabledata.push(list);
//         }
//         res.status(200).json({ data : tabledata });
//     })
// })

module.exports = profiles;

var express = require('express');
var bookmarks = express.Router();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var myDatabase = require('../controllers/sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;
var listingTable = require('../models/listingTable');
var bookmarkTable = require('../models/bookmarks');
var multer = require('multer')
const Op = Sequelize.Op

bookmarks.get("/", (req, res) => {
    bookmarkTable.findAll({
        /* where: {
            
        } */
        order: [["ListingID", "DESC"]]
    }).then((bookmarkItem) =>{
        var noBookmark;
        if (bookmarkItem.length <= 0){
            noBookmark = "You have no bookmarks";
        }
        res.render('bookmarks', {bookmarkItem, noBookmark});
    })    
})

bookmarks.get("/:id", (req, res)=> {
    var bookmarkid = req.params.id;
    console.dir("DELETING")
    bookmarkTable.destroy({
        where: {
            bookmarkID: bookmarkid
        }
    }).then((deletedItem) =>{
        console.dir("Item deleted: " + deletedItem)
        res.redirect(req.get('referer'));
    })
})

module.exports = bookmarks;
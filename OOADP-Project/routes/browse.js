var express = require('express');
var browse = express.Router();
//var listingTable = require('../models/listingTable');
//var multer = require('multer')
//var upload = multer({ dest: 'public/images/listingImages'})

browse.get("/", function(req, res){
    res.render('browse');
})

module.exports = browse;
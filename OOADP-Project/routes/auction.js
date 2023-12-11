var express = require('express');
var auction = express.Router();

auction.get("/", function (req, res){
    res.send("Hello World!");
})

module.exports = auction;
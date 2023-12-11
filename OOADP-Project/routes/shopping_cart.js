var express = require('express');
var shopping_cart = express.Router();
var session = require('express-session');
var listingTable = require('../models/listingTable');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

shopping_cart.post("/add/:id/:quantity", function (req, res) {
    var postid = req.params.id;
    var quantity = req.params.quantity;
    if (req.session.sc == undefined) {
        req.session.sc = [];
    }
    if (req.session.scq == undefined) {
        req.session.scq = [];
    }
    if (req.session.sc.indexOf(postid) == -1) {
        req.session.sc.push(postid);
        req.session.scq.push([postid, quantity]);
        req.session.save();
        res.send("OK");
    } else {
        res.send("NOT OK");
    }
    console.log(req.session.sc);
    console.log(req.session.scq);
});

shopping_cart.post("/remove/:id", function (req, res) {
    var postid = req.params.id;
    for (var i = 0; i < req.session.sc.length; i++) {
        if (postid == req.session.sc[i]) {
            req.session.sc.splice(i, 1);
            req.session.scq.splice(i, 1);
        }
    }
    req.session.save();
    res.send("OK");
    console.log(req.session.sc);
    console.log(req.session.scq);
})

shopping_cart.post("/remove_all", function (req, res) {
    req.session.sc = [];
    req.session.scq = [];
    req.session.save();
    res.send("OK");
    console.log(req.session.sc);
    console.log(req.session.scq);
})

shopping_cart.post("/show", function (req, res) {
    if (req.session.sc == undefined) {
        req.session.sc = [];
        res.send("EMPTY");
    } else if (req.session.sc.length == 0) {
        res.send("EMPTY");
    } else {
        listingTable.findAll({
            where: {
                ListingID: {
                    [Op.or]: req.session.sc
                }
            }
        }).then(items => {
            res.send(items);
        })
    }
    console.log(req.session.sc);
    console.log(req.session.scq);
})

shopping_cart.get("/show", function (req, res) {
    if (req.session.sc == undefined) {
        req.session.sc = [];
        res.send("EMPTY");
    } else if (req.session.sc.length == 0) {
        res.send("EMPTY");
    } else {
        listingTable.findAll({
            where: {
                ListingID: {
                    [Op.or]: req.session.sc
                }
            }
        }).then(items => {
            var quantity = []
            var scq = req.session.scq;
            items.forEach(function(item) {
                for (var i = 0; i < scq.length; i++) {
                    if (item.ListingID == scq[i][0]) {
                        quantity.push([item, scq[i][1]]);
                    }
                }
            })
            res.send(quantity);
        })
    }
    console.log(req.session.sc);
    console.log(req.session.scq);
})

module.exports = shopping_cart;
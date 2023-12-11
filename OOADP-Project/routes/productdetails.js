var express = require('express');
var productdetails = express.Router();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var myDatabase = require('../controllers/sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;
var listingTable = require('../models/listingTable');
var member = require('../models/memberModel');
var multer = require('multer')
const Op = Sequelize.Op

productdetails.post('/:id', (req, res) => {
    var quantity = req.body.quantity;
    listingTable.findAll({
        where: {
            ListingID: req.param.id
        }
    }).then((check) => {
        listingTable.update({
            itemQuantity: itemQuantity - quantity
        })
    }).then((item) => {
        res.render("checkout", { item });
    })
})

/* productdetails.get('/:id', function (req, res) {
    var id = req.params.id;
    listingTable.find({
        where: {
            ListingID: id
        }
    }).then(details => {
        sequelizeInstance.query('SELECT m.username FROM members m JOIN `listing tables` l ON m.id = l.itemOPID', { model: member }).then((username) => {
            console.dir(username);
            var thisIsTheRealUsername = username[0].username;
            console.dir(thisIsTheRealUsername);
            res.render('product_details', { details, thisIsTheRealUsername });
        })
    })
}); */

productdetails.get('/:id', (req, res) =>{
    sequelizeInstance.query('SELECT m.username, l.ListingID, l.itemDescription, l.itemQuantity, l.itemPrice, l.itemType, l.itemBrand, l.itemModel, l.itemAdditionalDescription, l.itemListingDate, l.itemPicture as itemPicture FROM `listing tables` l JOIN members m ON m.id = l.itemOPID WHERE l.ListingID = ' + "\"" + req.params.id + "\"" ,{model: listingTable, raw:true}).then((details) => {
        console.dir(details);
        //res.sendStatus(200);
        res.render('product_details', {details : details[0]});
    })
})

module.exports = productdetails;
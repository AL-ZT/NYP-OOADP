//import { insertcomparelist } from "../controllers/compare";

var express = require("express");
var comparing = express.Router();
var compare = require("../controllers/compare");
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var myDatabase = require('../controllers/sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;
var listingTable = require('../models/listingTable');
var compareRetail = require('../models/compareRetail');
var multer = require('multer');

comparing.get('/', compare.default);

comparing.get('/selected_comparetype_shop', compare.listshop);
comparing.get('/:id', compare.getinfo);
comparing.post('/delete/:id', compare.delete);
/* //temp
comparing.get('/selected_comparetype_retail', compare.listretail)
comparing.post('/selected_comparetype_retail', compare.insertcomparelist)
// */
module.exports = comparing;
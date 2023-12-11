var express = require("express");
var bidding = express.Router();
var bids = require("../controllers/bid");
var multer = require('multer');
var upload = multer({dest:'/uploads/',limits:{fileSize: 1500000, files:3}});


bidding.get('/', bids.hasAuthorization,   bids.list);
bidding.post('/', bids.hasAuthorization, bids.sortstar);
bidding.get('/createbid', bids.hasAuthorization, (req,res)=>{res.render('create_bid')});
bidding.post('/createbid', bids.hasAuthorization,  upload.array('image', 3), bids.create, );
bidding.get('/show/:bid_id', bids.hasAuthorization, bids.showbids);
bidding.get('/editbid/:bid_id', bids.hasAuthorization, bids.editbid);
bidding.post('/editbid/:bid_id', bids.hasAuthorization, bids.editbidding);
bidding.post('/show/:bid_id', bids.hasAuthorization, bids.updatebid);
bidding.delete('/:bid_id', bids.hasAuthorization,  bids.delete);
bidding.get('/dashboard', bids.showTable);
bidding.get('/membertable', bids.hasAuthorization, bids.showmembers);
bidding.get('/importbid', bids.hasAuthorization, bids.importbid);
bidding.get('/importbid/:id', bids.hasAuthorization, bids.submitimport);
bidding.post('/bidhistory', bids.bidhistory);
bidding.get('/bidhistory', bids.hasAuthorization, bids.showhistory);
bidding.get('/graph', bids.hasAuthorization, bids.showgraph);
module.exports = bidding;
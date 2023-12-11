//import { EDESTADDRREQ } from 'constants';
//import { WSAECANCELLED } from 'constants';

var express = require('express');
var selectedbrowse = express.Router();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var myDatabase = require('../controllers/sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;
var listingTable = require('../models/listingTable');
var bookmarks = require('../models/bookmarks')
var compare = require('../models/compare');
var multer = require('multer')
const Op = Sequelize.Op

selectedbrowse.post('/bookmarks', function (req, res) {
    var listingid = req.body.listingid;

    listingTable.findAll({
        where: {
            ListingID: listingid
        }
    }).then((bookmarkItem) => {
        console.dir("BOOKMARK BUTTON WORKS")
        //console.dir(bookmarkItem[0].ListingID);

        /* if ((bookmarks.findAll({ where: { ListingID: bookmarkItem[0].ListingID } })) <= 0) {
            console.dir("INSERTED INTO BOOKMARKS");
            bookmarks.upsert({
                ListingID: bookmarkItem[0].ListingID,
                itemOPID: bookmarkItem[0].itemOPID,
                itemDescription: bookmarkItem[0].itemDescription,
                itemQuantity: bookmarkItem[0].itemQuantity,
                itemPrice: bookmarkItem[0].itemPrice,
                itemType: bookmarkItem[0].itemType,
                itemBrand: bookmarkItem[0].itemBrand,
                itemModel: bookmarkItem[0].itemModel,
                itemAdditionalDescription: bookmarkItem[0].itemAdditionalDescription,
                itemListingDate: bookmarkItem[0].itemListingDate,
                itemPicture: bookmarkItem[0].itemPicture
            })
            res.status(200);
            res.redirect(req.get('referer'));
        }
        else if ((bookmarks.findAll({ where: { ListingID: bookmarkItem[0].ListingID } })) >= 1) {
            console.dir("This item is already in bookmarks");
            res.redirect(req.get('referer'));
        } */
        
        bookmarks.findAll({
            where: {
                ListingID: bookmarkItem[0].ListingID
            }
        }).then((check) => {
            //console.dir(check);
            if (check.length >= 1) {
                console.dir("This item is already in bookmarks");
                res.redirect(req.get('referer'));
            }
            else if (check.length <= 0) {
                listingTable.findAll({
                    where: {
                        ListingID: listingid
                    }
                }).then((bookmarkItem) => {
                    console.dir("INSERTED INTO BOOKMARKS");
                    bookmarks.upsert({
                        ListingID: listingid,
                        itemOPID: bookmarkItem[0].itemOPID,
                        itemDescription: bookmarkItem[0].itemDescription,
                        itemQuantity: bookmarkItem[0].itemQuantity,
                        itemPrice: bookmarkItem[0].itemPrice,
                        itemType: bookmarkItem[0].itemType,
                        itemBrand: bookmarkItem[0].itemBrand,
                        itemModel: bookmarkItem[0].itemModel,
                        itemAdditionalDescription: bookmarkItem[0].itemAdditionalDescription,
                        itemListingDate: bookmarkItem[0].itemListingDate,
                        itemPicture: bookmarkItem[0].itemPicture
                    })
                    res.status(200);
                    res.redirect(req.get('referer'));
                })
            }
        })
    })
})

selectedbrowse.post('/addcompare', function (req, res) {
    //get details of item
    var listingid = req.body.listingid;
    listingTable.findAll({
        where: {
            ListingID: listingid
        }
    }).then((compareitem) => {
        console.dir("COMPARE BUTTON WORKS");        
        compare.findAll({
            where:{
                ListingID: compareitem[0].ListingID
            }
        }).then((check) => {
            if(check.length >= 1){
                console.dir("This item is already in compare");
                res.redirect(req.get('referer'));
            }
            else if(check.length <= 0){
                listingTable.findAll({
                    where:{
                        ListingID: listingid
                    }
                }).then((compareitem) => {
                    console.dir("INSERTED INTO COMPARE");
                    compare.upsert({
                        ListingID: listingid,
                        itemOPID: compareitem[0].itemOPID,
                        itemDescription: compareitem[0].itemDescription,
                        itemQuantity: compareitem[0].itemQuantity,
                        itemPrice: compareitem[0].itemPrice,
                        itemType: compareitem[0].itemType,
                        itemBrand: compareitem[0].itemBrand,
                        itemModel: compareitem[0].itemModel,
                        itemAdditionalDescription: compareitem[0].itemAdditionalDescription,
                        itemListingDate: compareitem[0].itemListingDate,
                        itemPicture: compareitem[0].itemPicture
                    })
                    res.status(200);
                    res.redirect(req.get('referer'));
                })
            }
        })
    })
})

selectedbrowse.post('/type/:typename', function (req, res) {
    var sortby;
    var pricerangelow;
    var pricerangehigh;
    var searchfor = "nothing";

    var sortbytype = req.body.sortby;
    var pricerangetype = req.body.pricerange;

    //check if search bar is empty
    if (req.body.searchfor) {
        searchfor = req.body.searchfor;
        console.dir(searchfor);
    }
    else if (!req.body.searchfor) {
        console.dir("search is empty");
    }

    //set sort type
    if (sortbytype == "sortdefault") {
        console.dir("sort is nothing");
    }
    else if (sortbytype == "sortlow") {
        sortby = "ASC";
    }
    else if (sortbytype == "sorthigh") {
        sortby = "DESC";
    }

    //set price range
    if (pricerangetype == "defaultprice") {
        console.dir("default price it is");
    }
    else if (pricerangetype == "1") {
        pricerangelow = "0";
        pricerangehigh = "20";
    }
    else if (pricerangetype == "2") {
        pricerangelow = "20";
        pricerangehigh = "50";
    }
    else if (pricerangetype == "3") {
        pricerangelow = "50";
        pricerangehigh = "100";
    }
    else if (pricerangetype == "4") {
        pricerangelow = "100";
        pricerangehigh = "250";
    }
    else if (pricerangetype == "5") {
        pricerangelow = "250";
        pricerangehigh = "999999999";
    }

    if (searchfor == "nothing" && sortbytype == "sortdefault" && pricerangetype == "defaultprice") {   //all empty
        var type = req.params.typename;

        listingTable.findAll({
            where: {
                itemType: {
                    [Op.like]: '%' + type + '%'
                }
            }
        }).then((selectedlist) => {
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (searchfor != "nothing" && sortbytype == "sortdefault" && pricerangetype == "defaultprice") { //search nt empty
        var type = req.params.typename;

        listingTable.findAll({
            where: {
                itemType: {
                    [Op.like]: '%' + type + '%'
                },
                itemDescription: {
                    [Op.like]: '%' + searchfor + '%'
                }
            }
        }).then((selectedlist) => {
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (searchfor != "nothing" && sortbytype != "sortdefault" && pricerangetype == "defaultprice") { //search and sort nt empty
        var type = req.params.typename;

        listingTable.findAll({
            where: {
                itemType: {
                    [Op.like]: '%' + type + '%'
                },
                itemDescription: {
                    [Op.like]: '%' + searchfor + '%'
                }
            },
            order: [["itemPrice", sortby]]
        }).then((selectedlist) => {
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (searchfor == "nothing" && sortbytype != "sortdefault" && pricerangetype == "defaultprice") { //sort nt empty
        var type = req.params.typename;

        listingTable.findAll({
            where: {
                itemType: {
                    [Op.like]: '%' + type + '%'
                }
            },
            order: [["itemPrice", sortby]]
        }).then((selectedlist) => {
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (searchfor == "nothing" && sortbytype != "sortdefault" && pricerangetype != "defaultprice") { //sort and range nt empty
        var type = req.params.typename;

        listingTable.findAll({
            where: {
                itemType: {
                    [Op.like]: '%' + type + '%'
                },
                itemPrice: {
                    [Op.between]: [pricerangelow, pricerangehigh]
                }
            },
            order: [["itemPrice", sortby]]
        }).then((selectedlist) => {
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (searchfor == "nothing" && sortbytype == "sortdefault" && pricerangetype != "defaultprice") { //range nt empty
        var type = req.params.typename;

        listingTable.findAll({
            where: {
                itemType: {
                    [Op.like]: '%' + type + '%'
                },
                itemPrice: {
                    [Op.between]: [pricerangelow, pricerangehigh]
                }
            }
        }).then((selectedlist) => {
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (searchfor != "nothing" && sortbytype == "sortdefault" && pricerangetype != "defaultprice") { //range and search nt empty
        var type = req.params.typename;

        listingTable.findAll({
            where: {
                itemType: {
                    [Op.like]: '%' + type + '%'
                },
                itemDescription: {
                    [Op.like]: '%' + searchfor + '%'
                },
                itemPrice: {
                    [Op.between]: [pricerangelow, pricerangehigh]
                }
            }
        }).then((selectedlist) => {
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (searchfor != "nothing" && sortbytype != "sortdefault" && pricerangetype != "defaultprice") { //all nt empty
        var type = req.params.typename;

        listingTable.findAll({
            where: {
                itemType: {
                    [Op.like]: '%' + type + '%'
                },
                itemDescription: {
                    [Op.like]: '%' + searchfor + '%'
                },
                itemPrice: {
                    [Op.between]: [pricerangelow, pricerangehigh]
                }
            },
            order: [["itemPrice", sortby]]
        }).then((selectedlist) => {
            //var prevurl = req.get('referer');
            //console.dir(prevurl);
            //res.redirect(req.get('referer'), {selectedlist});

            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }

            //res.render('selected_browse', {selectedlist})
        })
    }
})

selectedbrowse.get('/type/:typename', function (req, res) {
    var type = req.params.typename;
    if (type == "CPU") {
        listingTable.findAll({
            where: {
                itemType: "Central Processing Unit (CPU)",
                itemQuantity: {[Op.gte]: 1}
            },
            raw: true
        }).then(selectedlist => {
            //console.dir(selectedlist);
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (type == "GPU") {
        listingTable.findAll({
            where: {
                itemType: "Graphics Processing Unit (GPU)",
                itemQuantity: {[Op.gte]: 1}
            },
            raw: true
        }).then(selectedlist => {
            //console.dir(selectedlist);
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (type == "RAM") {
        listingTable.findAll({
            where: {
                itemType: "Random Access Memory (RAM)",
                itemQuantity: {[Op.gte]: 1}
            },
            raw: true
        }).then(selectedlist => {
            //console.dir(selectedlist);
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (type == "Motherboard") {
        listingTable.findAll({
            where: {
                itemType: "Motherboard",
                itemQuantity: {[Op.gte]: 1}
            },
            raw: true
        }).then(selectedlist => {
            //console.dir(selectedlist);
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (type == "PSU") {
        listingTable.findAll({
            where: {
                itemType: "Power Supply Unit (PSU)",
                itemQuantity: {[Op.gte]: 1}
            },
            raw: true
        }).then(selectedlist => {
            //console.dir(selectedlist);
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (type == "Drives") {
        listingTable.findAll({
            where: {
                itemType: "Hard Disk Drives (HDD) / Solid State Drive (SSD)",
                itemQuantity: {[Op.gte]: 1}
            },
            raw: true
        }).then(selectedlist => {
            //console.dir(selectedlist);
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (type == "Cases") {
        listingTable.findAll({
            where: {
                itemType: "Cases",
                itemQuantity: {[Op.gte]: 1}
            },
            raw: true
        }).then(selectedlist => {
            //console.dir(selectedlist);
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
    else if (type == "Others") {
        listingTable.findAll({
            where: {
                itemType: "Others",
                itemQuantity: {[Op.gte]: 1}
            },
            raw: true
        }).then(selectedlist => {
            //console.dir(selectedlist);
            if (selectedlist.length >= 1) {
                var noitems = "";
                res.render('selected_browse', { selectedlist, noitems });

            } else if (selectedlist.length < 1) {
                var noitems = "There are currently no items";
                res.render('selected_browse', { selectedlist, noitems });
            }
        })
    }
})


module.exports = selectedbrowse;
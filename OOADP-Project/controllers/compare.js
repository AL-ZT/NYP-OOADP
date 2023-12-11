var express = require('express');
var compare = express.Router();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var myDatabase = require('../controllers/sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;
var listingTable = require('../models/listingTable');
var partsmodels = require('../models/parts');
var compare = require('../models/compare');
var compareRetail = require('../models/compareRetail');
var multer = require('multer')

/* exports.default = function (req, res) {
    compareRetail.findAll({
        
    }).then((comparelist) => {
        res.render('compare', {
            comparelist: comparelist
        });
    })
}//this is temp^ */

exports.default = function (req, res){
    compare.findAll({
        order:[["compareID", "DESC"]]
    }).then((comparelist) => {
        res.render('compare', {comparelist: comparelist});
    })
}

exports.listshop = function (req, res) {
    res.render('browse');
}

exports.getinfo = function (req, res) {
    var listingid = req.params.id;
    compare.findAll({
        where:{
            ListingID: listingid
        }
    }).then((itemInfo) => {
        res.send(itemInfo);
    })
}

exports.delete = function (req, res) {
    var selecteditems = req.params.id
    //console.log(selecteditems);
    var items = selecteditems.split("&")
    for(var z=0; z<items.length; z++){

        compare.destroy({
            where: {
                itemDescription: items[z]
            }
        }).then((deletedItem) =>{
            console.dir("Compare item deleted")
        })
    }
    res.sendStatus(200);
}

/* exports.listretail = function (req, res) {
    //    sequelizeInstance.query('SELECT model FROM partsmodels WHERE category="CPU" AND brand="Intel" ', {model : partsmodels}).then((intelcpu) =>{
    //        res.render('selected_comparetype_retail', {intelcpu: intelcpu});
    //    })
    partsmodels.findAll({
        where: {
            brand: 'Intel',
            category: 'CPU'
        }
    }).then((intelcpu) => {
        partsmodels.findAll({
            where: {
                brand: 'AMD',
                category: 'CPU'
            }
        }).then((amdcpu) => {
            partsmodels.findAll({
                where: {
                    brand: 'NVIDIA',
                    category: 'GPU'
                }
            }).then((nvidiagpu) => {
                partsmodels.findAll({
                    where: {
                        brand: 'AMD',
                        category: 'GPU'
                    }
                }).then((amdgpu) => {
                    partsmodels.findAll({

                        //find all other parts

                    }).then((otherparts) => {
                        res.render('selected_comparetype_retail', {
                            intelcpu: intelcpu,
                            amdcpu: amdcpu,
                            nvidiagpu: nvidiagpu,
                            amdgpu: amdgpu,
                            otherparts: otherparts
                        })
                    });
                });
            });
        });
    });
} */

/* exports.insertcomparelist = function (req, res) {
    var brand;
    var model;

    if (req.body.parttype == "cpu") {
        if (req.body.cpubrand == "intel" && req.body.cpuintel != "") {
            brand = req.body.cpubrand;
            model = req.body.cpuintel;
        }
        else if (req.body.cpubrand == "amd" && req.body.cpuamd != "") {
            brand = req.body.cpubrand;
            model = req.body.cpuamd;
        }
    }
    else if (req.body.parttype == "gpu") {
        if (req.body.gpubrand == "amd" && req.body.gpuamd != "") {
            brand = req.body.gpubrand;
            model = req.body.gpuamd;
        }
        else if (req.body.gpubrand == "nvidia" && req.body.gpunvidia != "") {
            brand = req.body.gpubrand;
            model = req.body.gpunvidia;
        }
    }

    var compareitem = {
        //item_id: req.body.
        model: model,
        brand: brand,
        type: req.body.parttype
        
    }
    compareRetail.create(compareitem).then((newcompareitem, created) => {
        if (!newcompareitem) {
            return res.send(400, {
                message: "error"
            });
        }
        res.redirect("/");
    })
}; */
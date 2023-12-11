var express = require('express');
var modify_listing = express.Router();
var listingTable = require('../models/listingTable');
var multer = require('multer');
var upload = multer({ dest: 'public/images/listingImages' });
var moment = require('moment');
var auth = require('../controllers/auth');
var parts = require('../models/parts');

modify_listing.get('/delete/:id', function (req, res) {
    listingTable.destroy({
        where: {
            ListingID: req.params.id
        }
    })
    res.send('<script>alert("Your listing has been deleted!, Returning to homepage now"); window.location.href="/"</script>');
});

modify_listing.get('/modify/:id', function (req, res) {
    listingTable.find({
        where: {
            ListingID: req.params.id
        }
    }).then(listing => {
        parts.findAll({
            where: { brand: "AMD", category: "GPU" },
            order: [["id", "DESC"]]
        }).then((amdGPU) => {
            parts.findAll({
                where: { brand: "NVIDIA", category: "GPU" },
                order: [["id", "DESC"]]
            }).then((nvidiaGPU) => {
                parts.findAll({
                    where: { brand: "INTEL", category: "CPU" },
                    order: [["id", "DESC"]]
                }).then((intelCPU) => {
                    parts.findAll({
                        where: { brand: "AMD", category: "CPU" },
                        order: [["id", "DESC"]]
                    }).then((amdCPU) => {
                        res.render('modify_listing', {
                            listing: listing,
                            user: req.user,
                            amdGPU: amdGPU,
                            nvidiaGPU: nvidiaGPU,
                            intelCPU: intelCPU,
                            amdCPU: amdCPU
                        });
                    });
                });
            })
        })
    })
});

modify_listing.post('/modify/:id', upload.single('fileupload'), function (req, res) {
    var data = req.body;
    var brand;
    var model;
    var listingID = req.params.id;
    console.log(data);
    if (data.type == "Central Processing Unit (CPU)") {
        if (data.typeCPU == "INTEL" && data.intelCPU != "") {
            brand = data.typeCPU;
            model = data.intelCPU;
        }
        else if (data.typeCPU == "AMD" && data.amdCPU != "") {
            brand = data.typeCPU;
            model = data.amdCPU;
        }
    }
    else if (data.type == "Graphics Processing Unit (GPU)") {
        if (data.typeGPU == "AMD" && data.amdGPU != "") {
            brand = data.typeGPU;
            model = data.amdGPU;
        }
        else if (data.typeGPU == "NVIDIA" && data.nvidiaGPU != "") {
            brand = data.typeGPU;
            model = data.nvidiaGPU;
        }
    }
    if (req.file == undefined) {
        listingTable.update(
            {
                itemOPID: req.user.id,
                itemDescription: data.description,
                itemQuantity: data.quantity,
                itemPrice: data.price,
                itemType: data.type,
                itemBrand: brand,
                itemModel: model,
                itemAdditionalDescription: data.additionalDescription,
                itemStatus: data.status
            },
            { where: { ListingID: listingID } }
        );
    }
    else {
        listingTable.update(
            {
                itemOPID: req.user.id,
                itemDescription: data.description,
                itemQuantity: data.quantity,
                itemPrice: data.price,
                itemType: data.type,
                itemBrand: brand,
                itemModel: model,
                itemAdditionalDescription: data.additionalDescription,
                itemPicture: req.file.filename,
                itemStatus: data.status
            },
            { where: { ListingID: listingID } }
        );
    }
    res.send('<script>alert("Your listing has been modified!, Returning to homepage now"); window.location.href="/"</script>');
})

modify_listing.get('/', auth.isLoggedIn ,function (req, res) {
    listingTable.findAll({
        where: { itemOPID : req.user.id } 
    }).then(userlisting => {
        res.render('modify_listings', { userlisting: userlisting });
    })
});





module.exports = modify_listing;
var express = require('express');
var create_listing = express.Router();
var listingTable = require('../models/listingTable');
var multer = require('multer')
var upload = multer({ dest: 'public/images/listingImages' });
var auth = require('../controllers/auth');
var parts = require('../models/parts');

create_listing.get('/', auth.isLoggedIn, (req, res) => {
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
                    res.render('create_listing', {
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
});

create_listing.post('/', upload.single('fileupload'), (req, res, next) => {
    var data = req.body;
    var brand;
    var model;
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
    listingTable.upsert({
        itemOPID: req.user.id,
        itemDescription: data.description,
        itemQuantity: data.quantity,
        itemPrice: data.price,
        itemType: data.type,
        itemBrand: brand,
        itemModel: model,
        itemAdditionalDescription: data.additionalDescription,
        itemPicture: req.file.filename
    });
    res.status(200);
    res.send('<script>alert("Your listing has been created!, Returning to homepage now"); window.location.href="/"</script>');
})

module.exports = create_listing;
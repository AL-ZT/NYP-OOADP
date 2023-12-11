var express = require('express');
var pc_building = express.Router();
var listingTable = require('../models/listingTable');
var Sequelize = require('sequelize');
var auth = require('../controllers/auth');
const Op = Sequelize.Op;

pc_building.get("/", auth.isLoggedIn, function (req, res) {
    console.log(req.user);
    listingTable.findAll({
        where: {
            itemType: "Central Processing Unit (CPU)"
        }
    }).then(cpu => {
        var thethingtosendback = [];
            cpu.forEach(function(cpu_) {
                if (cpu_.itemOPID != req.user.id) {
                    thethingtosendback.push(cpu_);
                }
            })
        res.render("pc_building", { cpu: thethingtosendback });
    });
});

pc_building.get("/:category", function (req, res) {
    var category = req.params.category;
    if (category == "cpu") {
        listingTable.findAll({
            where: {
                itemType: "Central Processing Unit (CPU)"
            }
        }).then(cpu => {
            var thethingtosendback = [];
            cpu.forEach(function(cpu_) {
                if (cpu_.itemOPID != req.user.id) {
                    thethingtosendback.push(cpu_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "gpu") {
        listingTable.findAll({
            where: {
                itemType: "Graphics Processing Unit (GPU)"
            }
        }).then(gpu => {
            var thethingtosendback = [];
            gpu.forEach(function(gpu_) {
                if (gpu_.itemOPID != req.user.id) {
                    thethingtosendback.push(gpu_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "ram") {
        listingTable.findAll({
            where: {
                itemType: "Random Access Memory (RAM)"
            }
        }).then(ram => {
            var thethingtosendback = [];
            ram.forEach(function(ram_) {
                if (ram_.itemOPID != req.user.id) {
                    thethingtosendback.push(ram_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "motherboard") {
        listingTable.findAll({
            where: {
                itemType: "Motherboard"
            }
        }).then(motherboard => {
            var thethingtosendback = [];
            motherboard.forEach(function(motherboard_) {
                if (motherboard_.itemOPID != req.user.id) {
                    thethingtosendback.push(motherboard_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "psu") {
        listingTable.findAll({
            where: {
                itemType: "Power Supply Unit (PSU)"
            }
        }).then(psu => {
            var thethingtosendback = [];
            psu.forEach(function(psu_) {
                if (psu_.itemOPID != req.user.id) {
                    thethingtosendback.push(psu_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "storage") {
        listingTable.findAll({
            where: {
                itemType: "Hard Disk Drives (HDD) / Solid State Drive (SSD)"
            }
        }).then(storage => {
            var thethingtosendback = [];
            storage.forEach(function(storage_) {
                if (storage_.itemOPID != req.user.id) {
                    thethingtosendback.push(storage_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "cases") {
        listingTable.findAll({
            where: {
                itemType: "Cases"
            }
        }).then(cases => {
            var thethingtosendback = [];
            cases.forEach(function(cases_) {
                if (cases_.itemOPID != req.user.id) {
                    thethingtosendback.push(cases_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "others") {
        listingTable.findAll({
            where: {
                itemType: "Others"
            }
        }).then(others => {
            var thethingtosendback = [];
            others.forEach(function(others_) {
                if (others_.itemOPID != req.user.id) {
                    thethingtosendback.push(others_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "extras") {
        listingTable.findAll({
            where: {
                itemType: "Extras"
            }
        }).then(others => {
            var thethingtosendback = [];
            others.forEach(function(others_) {
                if (others_.itemOPID != req.user.id) {
                    thethingtosendback.push(others_);
                }
            })
            res.send(thethingtosendback);
        })
    }
})

pc_building.get("/:category/:price", function (req, res) {
    var category = req.params.category;
    var price = req.params.price;
    if (category == "cpuquery" && price < 801) {
        listingTable.findAll({
            where: {
                itemType: "Central Processing Unit (CPU)",
                itemPrice: {
                    [Op.between]: [price - 200, price]
                }
            }
        }).then(cpu => {
            var thethingtosendback = [];
            cpu.forEach(function(cpu_) {
                if (cpu_.itemOPID != req.user.id) {
                    thethingtosendback.push(cpu_);
                }
            })
            res.send(thethingtosendback);;
        })
    }
    else if (category == "gpuquery" && price < 801) {
        listingTable.findAll({
            where: {
                itemType: "Graphics Processing Unit (GPU)",
                itemPrice: {
                    [Op.between]: [price - 200, price]
                }
            }
        }).then(gpu => {
            var thethingtosendback = [];
            gpu.forEach(function(gpu_) {
                if (gpu_.itemOPID != req.user.id) {
                    thethingtosendback.push(gpu_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "ramquery" && price < 801) {
        listingTable.findAll({
            where: {
                itemType: "Random Access Memory (RAM)",
                itemPrice: {
                    [Op.between]: [price - 200, price]
                }
            }
        }).then(ram => {
            var thethingtosendback = [];
            ram.forEach(function(ram_) {
                if (ram_.itemOPID != req.user.id) {
                    thethingtosendback.push(ram_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "motherboardquery" && price < 801) {
        listingTable.findAll({
            where: {
                itemType: "Motherboard",
                itemPrice: {
                    [Op.between]: [price - 200, price]
                }
            }
        }).then(motherboard => {
            var thethingtosendback = [];
            motherboard.forEach(function(motherboard_) {
                if (motherboard_.itemOPID != req.user.id) {
                    thethingtosendback.push(motherboard_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "psuquery" && price < 801) {
        listingTable.findAll({
            where: {
                itemType: "Power Supply Unit (PSU)",
                itemPrice: {
                    [Op.between]: [price - 200, price]
                }
            }
        }).then(psu => {
            var thethingtosendback = [];
            psu.forEach(function(psu_) {
                if (psu_.itemOPID != req.user.id) {
                    thethingtosendback.push(psu_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "storagequery" && price < 801) {
        listingTable.findAll({
            where: {
                itemType: "Hard Disk Drives (HDD) / Solid State Drive (SSD)",
                itemPrice: {
                    [Op.between]: [price - 200, price]
                }
            }
        }).then(storage => {
            var thethingtosendback = [];
            storage.forEach(function(storage_) {
                if (storage_.itemOPID != req.user.id) {
                    thethingtosendback.push(storage_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "casesquery" && price < 801) {
        listingTable.findAll({
            where: {
                itemType: "Cases",
                itemPrice: {
                    [Op.between]: [price - 200, price]
                }
            }
        }).then(cases => {
            var thethingtosendback = [];
            cases.forEach(function(cases_) {
                if (cases.itemOPID != req.user.id) {
                    thethingtosendback.push(cases_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "othersquery" && price < 801) {
        listingTable.findAll({
            where: {
                itemType: "Others",
                itemPrice: {
                    [Op.between]: [price - 200, price]
                }
            }
        }).then(others => {
            var thethingtosendback = [];
            others.forEach(function(others_) {
                if (others_.itemOPID != req.user.id) {
                    thethingtosendback.push(others_);
                }
            })
            res.send(thethingtosendback);
        })
    } 
    else if (category == "extrasquery" && price < 801) {
        listingTable.findAll({
            where: {
                itemType: "Extras",
                itemPrice: {
                    [Op.between]: [price - 200, price]
                }
            }
        }).then(others => {
            var thethingtosendback = [];
            others.forEach(function(cpu_) {
                if (others.itemOPID != req.user.id) {
                    thethingtosendback.push(others_);
                }
            })
            res.send(thethingtosendback);
        })
    } 
    else if (category == "cpuquery" && price > 800) {
        listingTable.findAll({
            where: {
                itemType: "Central Processing Unit (CPU)",
                itemPrice: {
                    [Op.gt]: [800]
                }
            }
        }).then(cpu => {
            var thethingtosendback = [];
            cpu.forEach(function(cpu_) {
                if (cpu_.itemOPID != req.user.id) {
                    thethingtosendback.push(cpu_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "gpuquery" && price > 800) {
        listingTable.findAll({
            where: {
                itemType: "Graphics Processing Unit (GPU)",
                itemPrice: {
                    [Op.gt]: [800]
                }
            }
        }).then(gpu => {
            var thethingtosendback = [];
            gpu.forEach(function(gpu_) {
                if (gpu_.itemOPID != req.user.id) {
                    thethingtosendback.push(gpu_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "ramquery" && price > 800) {
        listingTable.findAll({
            where: {
                itemType: "Random Access Memory (RAM)",
                itemPrice: {
                    [Op.gt]: [800]
                }
            }
        }).then(ram => {
            var thethingtosendback = [];
            ram.forEach(function(ram_) {
                if (ram_.itemOPID != req.user.id) {
                    thethingtosendback.push(ram_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "motherboardquery" && price > 800) {
        listingTable.findAll({
            where: {
                itemType: "Motherboard",
                itemPrice: {
                    [Op.gt]: [800]
                }
            }
        }).then(motherboard => {
            var thethingtosendback = [];
            motherboard.forEach(function(motherboard_) {
                if (motherboard_.itemOPID != req.user.id) {
                    thethingtosendback.push(motherboard_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "psuquery" && price > 800) {
        listingTable.findAll({
            where: {
                itemType: "Power Supply Unit (PSU)",
                itemPrice: {
                    [Op.gt]: [800]
                }
            }
        }).then(psu => {
            var thethingtosendback = [];
            psu.forEach(function(psu_) {
                if (psu_.itemOPID != req.user.id) {
                    thethingtosendback.push(psu_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "storagequery" && price > 800) {
        listingTable.findAll({
            where: {
                itemType: "Hard Disk Drives (HDD) / Solid State Drive (SSD)",
                itemPrice: {
                    [Op.gt]: [800]
                }
            }
        }).then(storage => {
            var thethingtosendback = [];
            storage.forEach(function(storage_) {
                if (storage_.itemOPID != req.user.id) {
                    thethingtosendback.push(storage_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "casesquery" && price > 800) {
        listingTable.findAll({
            where: {
                itemType: "Cases",
                itemPrice: {
                    [Op.gt]: [800]
                }
            }
        }).then(cases => {
            var thethingtosendback = [];
            cases.forEach(function(cases_) {
                if (cases_.itemOPID != req.user.id) {
                    thethingtosendback.push(cases_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "othersquery" && price > 800) {
        listingTable.findAll({
            where: {
                itemType: "Others",
                itemPrice: {
                    [Op.gt]: [800]
                }
            }
        }).then(others => {
            var thethingtosendback = [];
            others.forEach(function(others_) {
                if (others_.itemOPID != req.user.id) {
                    thethingtosendback.push(others_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "extrasquery" && price > 800) {
        listingTable.findAll({
            where: {
                itemType: "Extras",
                itemPrice: {
                    [Op.gt]: [800]
                }
            }
        }).then(others => {
            var thethingtosendback = [];
            others.forEach(function(others_) {
                if (others_.itemOPID != req.user.id) {
                    thethingtosendback.push(others_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    //null
    else if (category == "cpuquery" && price == "Price") {
        listingTable.findAll({
            where: {
                itemType: "Central Processing Unit (CPU)",
            }
        }).then(cpu => {
            var thethingtosendback = [];
            cpu.forEach(function(cpu_) {
                if (cpu_.itemOPID != req.user.id) {
                    thethingtosendback.push(cpu_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "gpuquery" && price == "Price") {
        listingTable.findAll({
            where: {
                itemType: "Graphics Processing Unit (GPU)",
            }
        }).then(gpu => {
            var thethingtosendback = [];
            gpu.forEach(function(gpu_) {
                if (gpu_.itemOPID != req.user.id) {
                    thethingtosendback.push(gpu_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "ramquery" && price == "Price") {
        listingTable.findAll({
            where: {
                itemType: "Random Access Memory (RAM)",
            }
        }).then(ram => {
            var thethingtosendback = [];
            ram.forEach(function(ram_) {
                if (ram_.itemOPID != req.user.id) {
                    thethingtosendback.push(ram_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "motherboardquery" && price == "Price") {
        listingTable.findAll({
            where: {
                itemType: "Motherboard",
            }
        }).then(motherboard => {
            var thethingtosendback = [];
            motherboard.forEach(function(motherboard_) {
                if (motherboard_.itemOPID != req.user.id) {
                    thethingtosendback.push(motherboard_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "psuquery" && price == "Price") {
        listingTable.findAll({
            where: {
                itemType: "Power Supply Unit (PSU)",
            }
        }).then(psu => {
            var thethingtosendback = [];
            psu.forEach(function(psu_) {
                if (psu_.itemOPID != req.user.id) {
                    thethingtosendback.push(psu_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "storagequery" && price == "Price") {
        listingTable.findAll({
            where: {
                itemType: "Hard Disk Drives (HDD) / Solid State Drive (SSD)",
            }
        }).then(storage => {
            var thethingtosendback = [];
            storage.forEach(function(storage_) {
                if (storage_.itemOPID != req.user.id) {
                    thethingtosendback.push(storage_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "casesquery" && price == "Price") {
        listingTable.findAll({
            where: {
                itemType: "Cases",
            }
        }).then(cases => {
            var thethingtosendback = [];
            cases.forEach(function(cases_) {
                if (cases_.itemOPID != req.user.id) {
                    thethingtosendback.push(cases_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "othersquery" && price == "Price") {
        listingTable.findAll({
            where: {
                itemType: "Others",
            }
        }).then(others => {
            var thethingtosendback = [];
            others.forEach(function(others_) {
                if (others_.itemOPID != req.user.id) {
                    thethingtosendback.push(others_);
                }
            })
            res.send(thethingtosendback);
        })
    }
    else if (category == "extrasquery" && price == "Price") {
        listingTable.findAll({
            where: {
                itemType: "Extras",
            }
        }).then(others => {
            var thethingtosendback = [];
            others.forEach(function(others_) {
                if (others_.itemOPID != req.user.id) {
                    thethingtosendback.push(others_);
                }
            })
            res.send(thethingtosendback);
        })
    }
})

module.exports = pc_building;
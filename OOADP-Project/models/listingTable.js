var myDatabase = require('../controllers/sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;
var moment = require('moment')

const listingTable = sequelizeInstance.define('Listing Table', {
    ListingID : {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    itemOPID : {
        type: Sequelize.INTEGER,
    },
    itemDescription : {
        type : Sequelize.STRING
    },
    itemQuantity : {
        type : Sequelize.INTEGER
    },
    itemPrice : {
        type : Sequelize.FLOAT
    },
    itemType : {
        type : Sequelize.STRING
    },
    itemBrand : {
        type : Sequelize.STRING
    },
    itemModel : {
        type : Sequelize.STRING
    },
    itemAdditionalDescription : {
        type : Sequelize.STRING
    },
    itemListingDate : {
        type : Sequelize.DATE,
        defaultValue : Sequelize.NOW,
        get: function () {
            var date = this.getDataValue('itemListingDate');
            return moment(this.getDataValue('itemListingDate')).format('dddd DD-MM-YYYY HH:mm:ss');
        }
    },
    itemPicture : {
        type : Sequelize.STRING
    },
    itemStatus : {
        type : Sequelize.STRING,
        defaultValue : "Available"
    }
});

listingTable.sync({ force : true, logging : false }).then(() => {
    listingTable.upsert({
        itemOPID: 0,
        itemDescription: "Hardware Checks/Assembly",
        itemQuantity: 1,
        itemPrice: 30,
        itemType: 'Extras',
        itemAdditionalDescription: 'Checks for faults and assemble components',
        itemPicture: 'buildingicon'
    });
    listingTable.upsert({
        itemOPID: 0,
        itemDescription: "Warranty Service",
        itemQuantity: 1,
        itemPrice: 100,
        itemType: 'Extras',
        itemAdditionalDescription: 'Provides 2 years of warranty',
        itemPicture: 'warranty'
    });
    listingTable.upsert({
        itemOPID: 2,
        itemDescription: "Corsair 750W PSU",
        itemQuantity: 10,
        itemPrice: 20,
        itemType: 'Power Supply Unit (PSU)',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Brand New',
        itemPicture: 'corsairpsu'
    });
    listingTable.upsert({
        itemOPID: 4,
        itemDescription: "Corsair AX1500i PSU",
        itemQuantity: 1,
        itemPrice: 500,
        itemType: 'Power Supply Unit (PSU)',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Brand new',
        itemPicture: 'ax1500i'
    });
    listingTable.upsert({
        itemOPID: 5,
        itemDescription: "Corsair RM750X PSU",
        itemQuantity: 1,
        itemPrice: 170,
        itemType: 'Power Supply Unit (PSU)',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Brand new',
        itemPicture: 'rm750x'
    });
    listingTable.upsert({
        itemOPID: 1,
        itemDescription: "MSI Motherboard B250",
        itemQuantity: 10,
        itemPrice: 300,
        itemType: 'Motherboard',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Slightly Used',
        itemPicture: 'msimotherboardb250'
    });
    listingTable.upsert({
        itemOPID: 5,
        itemDescription: "Asus H97 Motherboard",
        itemQuantity: 1,
        itemPrice: 120,
        itemType: 'Motherboard',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: '1 usb port faulty',
        itemPicture: 'h97'
    });
    listingTable.upsert({
        itemOPID: 3,
        itemDescription: "Asus Z170 Motherboard",
        itemQuantity: 1,
        itemPrice: 120,
        itemType: 'Motherboard',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: '1 usb port faulty',
        itemPicture: 'z170'
    });
    listingTable.upsert({
        itemOPID: 3,
        itemDescription: "GSKILL 8GB DDR3",
        itemQuantity: 10,
        itemPrice: 120,
        itemType: 'Random Access Memory (RAM)',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Dual Channel',
        itemPicture: 'gskillram'
    });
    listingTable.upsert({
        itemOPID: 5,
        itemDescription: "Adata 8GB DDR3",
        itemQuantity: 10,
        itemPrice: 40,
        itemType: 'Random Access Memory (RAM)',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Single stick',
        itemPicture: 'adata8gb'
    });
    listingTable.upsert({
        itemOPID: 2,
        itemDescription: "HyperX 16GB DDR4",
        itemQuantity: 10,
        itemPrice: 180,
        itemType: 'Random Access Memory (RAM)',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Dual Channel 2X8 2400MHz',
        itemPicture: 'hyperx16gb'
    });
    listingTable.upsert({
        itemOPID: 3,
        itemDescription: "WD Black 6TB",
        itemQuantity: 10,
        itemPrice: 350,
        itemType: 'Hard Disk Drives (HDD) / Solid State Drive (SSD)',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: '6TB',
        itemPicture: 'wdblack6tb'
    });
    listingTable.upsert({
        itemOPID: 1,
        itemDescription: "Seagate Barracuda 6TB",
        itemQuantity: 5,
        itemPrice: 340,
        itemType: 'Hard Disk Drives (HDD) / Solid State Drive (SSD)',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Slightly Used',
        itemPicture: 'barracuda6tb'
    });
    listingTable.upsert({
        itemOPID: 1,
        itemDescription: "Crucial MX200 256GB",
        itemQuantity: 1,
        itemPrice: 150,
        itemType: 'Hard Disk Drives (HDD) / Solid State Drive (SSD)',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Slightly Used',
        itemPicture: 'mx200'
    });
    listingTable.upsert({
        itemOPID: 1,
        itemDescription: "Corsair Spec-04 Case",
        itemQuantity: 10,
        itemPrice: 120,
        itemType: 'Cases',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Side Panel Broken',
        itemPicture: 'corsairspec04'
    });
    listingTable.upsert({
        itemOPID: 3,
        itemDescription: "Corsair Carbide 275R Mid-Tower Case",
        itemQuantity: 10,
        itemPrice: 150,
        itemType: 'Cases',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Working Condition',
        itemPicture: '275R'
    });
    listingTable.upsert({
        itemOPID: 5,
        itemDescription: "NZXT Phantom 240 Mid-Tower Case",
        itemQuantity: 10,
        itemPrice: 190,
        itemType: 'Cases',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Working Condition',
        itemPicture: 'phantom240'
    });
    listingTable.upsert({
        itemOPID: 0,
        itemDescription: "Windows 10 License Key",
        itemQuantity: 10,
        itemPrice: 120,
        itemType: 'Others',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Not Used',
        itemPicture: 'windows10'
    });
    listingTable.upsert({
        itemOPID: 1,
        itemDescription: "USB3.0 4-Port Hub ",
        itemQuantity: 4,
        itemPrice: 40,
        itemType: 'Others',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Not Used',
        itemPicture: 'usbhub'
    });
    listingTable.upsert({
        itemOPID: 2,
        itemDescription: "Corsair H100i AIO Cooler",
        itemQuantity: 4,
        itemPrice: 120,
        itemType: 'Others',
        itemBrand: null,
        itemModel: null,
        itemAdditionalDescription: 'Not Used',
        itemPicture: 'h100i'
    });
    listingTable.upsert({
        itemOPID: 3,
        itemDescription: "AMD R9 390X",
        itemQuantity: 1,
        itemPrice: 500,
        itemType: 'Graphics Processing Unit (GPU)',
        itemBrand: 'AMD',
        itemModel: 'Radeon R9 390X',
        itemAdditionalDescription: 'Not Used',
        itemPicture: 'amdgpubox'
    });
    listingTable.upsert({
        itemOPID: 4,
        itemDescription: "AMD R9 390X",
        itemQuantity: 2,
        itemPrice: 468,
        itemType: 'Graphics Processing Unit (GPU)',
        itemBrand: 'AMD',
        itemModel: 'Radeon R9 390X',
        itemAdditionalDescription: 'Not Used',
        itemPicture: 'amd390x'
    });
    listingTable.upsert({
        itemOPID: 2,
        itemDescription: "AMD RX 580",
        itemQuantity: 1,
        itemPrice: 250,
        itemType: 'Graphics Processing Unit (GPU)',
        itemBrand: 'AMD',
        itemModel: 'Radeon RX 580',
        itemAdditionalDescription: 'Perfect Condition',
        itemPicture: 'rx580'
    });
    listingTable.upsert({
        itemOPID: 5,
        itemDescription: "AMD R7 260X",
        itemQuantity: 1,
        itemPrice: 130,
        itemType: 'Graphics Processing Unit (GPU)',
        itemBrand: 'AMD',
        itemModel: 'Radeon R7 260X',
        itemAdditionalDescription: 'Slightly used',
        itemPicture: 'r7260x'
    });
    listingTable.upsert({
        itemOPID: 2,
        itemDescription: "Nvidia GTX580",
        itemQuantity: 1,
        itemPrice: 85,
        itemType: 'Graphics Processing Unit (GPU)',
        itemBrand: 'NVIDIA',
        itemModel: 'GeForce GTX 580',
        itemAdditionalDescription: 'Slightly Used',
        itemPicture: 'gtx580'
    });
    listingTable.upsert({
        itemOPID: 3,
        itemDescription: "Nvidia GTX460",
        itemQuantity: 1,
        itemPrice: 120,
        itemType: 'Graphics Processing Unit (GPU)',
        itemBrand: 'NVIDIA',
        itemModel: 'GeForce GTX 460',
        itemAdditionalDescription: 'Working properly',
        itemPicture: 'gtx460'
    });
    listingTable.upsert({
        itemOPID: 2,
        itemDescription: "Nvidia GTX650 Ti",
        itemQuantity: 1,
        itemPrice: 120,
        itemType: 'Graphics Processing Unit (GPU)',
        itemBrand: 'NVIDIA',
        itemModel: 'GeForce GTX 650 Ti',
        itemAdditionalDescription: 'Working properly',
        itemPicture: 'gtx650ti'
    });
    listingTable.upsert({
        itemOPID: 3,
        itemDescription: "Nvidia GTX660 Ti",
        itemQuantity: 1,
        itemPrice: 140,
        itemType: 'Graphics Processing Unit (GPU)',
        itemBrand: 'NVIDIA',
        itemModel: 'GeForce GTX 660 Ti',
        itemAdditionalDescription: 'Working properly',
        itemPicture: 'gtx660ti'
    });
    listingTable.upsert({
        itemOPID: 1,
        itemDescription: "Intel i3-8350k",
        itemQuantity: 1,
        itemPrice: 500,
        itemType: 'Central Processing Unit (CPU)',
        itemBrand: 'INTEL',
        itemModel: 'Intel® Core™ i3-8350K Processor',
        itemAdditionalDescription: 'Not Used',
        itemPicture: 'intelcpu'
    });
    listingTable.upsert({
        itemOPID: 3,
        itemDescription: "Intel i7-4790k",
        itemQuantity: 1,
        itemPrice: 394,
        itemType: 'Central Processing Unit (CPU)',
        itemBrand: 'INTEL',
        itemModel: 'Intel® Core™ i7-4790K Processor',
        itemAdditionalDescription: 'Not Used',
        itemPicture: 'i7-4790k'
    });
    listingTable.upsert({
        itemOPID: 4,
        itemDescription: "Intel i5-4690k",
        itemQuantity: 1,
        itemPrice: 250,
        itemType: 'Central Processing Unit (CPU)',
        itemBrand: 'INTEL',
        itemModel: 'Intel® Core™ i7-4690K Processor',
        itemAdditionalDescription: 'Not Used',
        itemPicture: 'i5-4690k'
    });
    listingTable.upsert({
        itemOPID: 2,
        itemDescription: "Intel i7-2600k",
        itemQuantity: 1,
        itemPrice: 190,
        itemType: 'Central Processing Unit (CPU)',
        itemBrand: 'INTEL',
        itemModel: 'Intel® Core™ i7-2600K Processor',
        itemAdditionalDescription: 'Not Used',
        itemPicture: 'i7-2600k'
    });
    listingTable.upsert({
        itemOPID: 1,
        itemDescription: "AMD FX-8350",
        itemQuantity: 1,
        itemPrice: 120,
        itemType: 'Central Processing Unit (CPU)',
        itemBrand: 'AMD',
        itemModel: 'AMD FX-8350',
        itemAdditionalDescription: 'Not Used',
        itemPicture: 'fx8350'
    });
    listingTable.upsert({
        itemOPID: 5,
        itemDescription: "Intel i5-6600K",
        itemQuantity: 1,
        itemPrice: 300,
        itemType: 'Central Processing Unit (CPU)',
        itemBrand: 'INTEL',
        itemModel: 'Intel® Core™ i5-6600K Processor',
        itemAdditionalDescription: 'Not Used',
        itemPicture: 'i5-6600k'
    });
    listingTable.upsert({
        itemOPID: 3,
        itemDescription: "Intel i7-7700K",
        itemQuantity: 1,
        itemPrice: 500,
        itemType: 'Central Processing Unit (CPU)',
        itemBrand: 'INTEL',
        itemModel: 'Intel® Core™ i7-7700K Processor',
        itemAdditionalDescription: 'Great Condition',
        itemPicture: 'i7-7700k'
    });
    listingTable.upsert({
        itemOPID: 2,
        itemDescription: "Intel i7-6700K",
        itemQuantity: 1,
        itemPrice: 560,
        itemType: 'Central Processing Unit (CPU)',
        itemBrand: 'INTEL',
        itemModel: 'Intel® Core™ i7-6700K Processor',
        itemAdditionalDescription: 'Not Used',
        itemPicture: 'i7-6700k'
    });
    console.log("Listing Table Synced");
});

module.exports = sequelizeInstance.model('Listing Table', listingTable);
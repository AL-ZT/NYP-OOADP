var myDatabase = require('../controllers/sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

const compare = sequelizeInstance.define("compares", {
    compareID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ListingID : {
        type : Sequelize.INTEGER,
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
        type : Sequelize.CHAR
    },
    itemPicture : {
        type : Sequelize.STRING
    }
});

compare.sync({ force: false, logging : false }).then(() => {
    console.log("compare table synced");
});

module.exports = sequelizeInstance.model("compares", compare);
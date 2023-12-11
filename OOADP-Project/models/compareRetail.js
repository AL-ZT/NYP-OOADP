var myDatabase = require('../controllers/sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

const compareRetail = sequelizeInstance.define("compareRetail", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    //item_id: {
    //    type: Sequelize.INTEGER
    //},
    model: {
        type: Sequelize.STRING,
    },
    brand: {
        type: Sequelize.STRING,
    },
    type: {
        type: Sequelize.STRING
    }
});

compareRetail.sync({ force: false, logging : false }).then(() => {
    console.log("compareRetail table synced");
});

module.exports = sequelizeInstance.model("compareRetail", compareRetail);
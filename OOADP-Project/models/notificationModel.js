var myDatabase = require('../controllers/sqlDatabase');
var sequelize = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

const notifModel = sequelize.define('notifModel', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    userfrom : {
        type : Sequelize.STRING
    },
    userto : {
        type : Sequelize.STRING
    },
    type : {
        type : Sequelize.STRING
    },
    item : {
        type : Sequelize.STRING
    }
})

notifModel.sync({ force : true, logging : false }).then(() => {
    console.log("notifModel table synced");
})

module.exports = sequelize.model('notifModel', notifModel);
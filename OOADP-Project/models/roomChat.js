var myDatabase = require('../controllers/sqlDatabase');
var sequelize = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

const roomChat = sequelize.define('roomChat', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    roomid : {
        type : Sequelize.STRING
    },
    firstuser : {
        type : Sequelize.STRING
    },
    lastuser : {
        type : Sequelize.STRING
    },
    
});

roomChat.sync({ force : false, logging : false }).then(() => {
    console.log("roomChat table synced");
});

module.exports = sequelize.model('roomChat', roomChat);
var myDatabase = require('../controllers/sqlDatabase');
var sequelize = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

const ChatMsg = sequelize.define('ChatMsg', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    roomId : {
        type : Sequelize.STRING
    },
    username : {
        type : Sequelize.STRING
    },
    message : {
        type : Sequelize.STRING,
        allowNull : false,
        defaultValue : '',
        trim : true
    }
});

ChatMsg.sync({ force : false, logging : false }).then(() => {
    console.log("ChatMsgs table synced");
});

module.exports = sequelize.model('ChatMsg', ChatMsg);
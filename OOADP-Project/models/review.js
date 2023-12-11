var myDatabase = require('../controllers/sqlDatabase');
var sequelize = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

const Review = sequelize.define('review', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    product : {
        type : Sequelize.STRING
    },
    user : {
        type : Sequelize.STRING
    },
    commenter : {
        type : Sequelize.STRING
    },
    comment : {
        type : Sequelize.STRING,
        allowNull : false,
        defaultValue : '',
        trim : true
    },
    vote : {
        type : Sequelize.BOOLEAN
    }
});

Review.sync({ force : false, logging : false }).then(() => {
    console.log("Reviews table synced");
});

module.exports = sequelize.model('review', Review);
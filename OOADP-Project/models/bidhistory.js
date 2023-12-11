// models/comments.js
var myDatabase = require('../controllers/sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

const Bidhist = sequelizeInstance.define('bidhistory', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bid_id: {
        type: Sequelize.INTEGER,
    },
    bid_created: {
        type: Sequelize.DATE,

    },
    bid_title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bid_highbidname: {
        type: Sequelize.STRING
    },
});

// force: true will drop the table if it already exists
Bidhist.sync({ force: true, logging: false }).then(() => {
    Bidhist.upsert({
        bid_id: 1,
        bid_created:'2018-08-04 08:20:58',
        bid_title:'GPU',
        bid_highbidname:'jiajun'
    });
    Bidhist.upsert({
        bid_id: 2,
        bid_created:'2018-08-08 08:20:58',
        bid_title:'Motherboard',
        bid_highbidname:'weijun'
    });
    Bidhist.upsert({
        bid_id: 3,
        bid_created:'2018-08-12 08:20:58',
        bid_title:'PC',
        bid_highbidname:'D3rp'
    });
    Bidhist.upsert({
        bid_id: 4,
        bid_created:'2018-08-16 08:20:58',
        bid_title:'Motherboard',
        bid_highbidname:'argel'
    });
    Bidhist.upsert({
        bid_id: 5,
        bid_created:'2018-08-20 08:20:58',
        bid_title:'GPU',
        bid_highbidname:'zhongwei'
    });
    // Table created
    console.log("Bid history table synced");

});

module.exports = sequelizeInstance.model('bidhistory', Bidhist);
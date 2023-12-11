var myDatabase = require('../controllers/sqlDatabase');
var sequelize = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

const transactions = sequelize.define('transactions', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    receipt_id : {
        type : Sequelize.INTEGER
    },
    transactionID : {
        type : Sequelize.STRING
    },
    intent : {
        type : Sequelize.STRING
    },
    state : {
        type : Sequelize.STRING
    },
    cart : {
        type : Sequelize.STRING
    },
    payer_payment_method : {
        type : Sequelize.STRING
    },
    payer_email : {
        type : Sequelize.STRING
    },
    payer_firstname : {
        type : Sequelize.STRING
    },
    payer_lastname : {
        type : Sequelize.STRING
    },
    payer_id : {
        type : Sequelize.INTEGER
    },
    shipping_address : {
        type : Sequelize.STRING
    },
    recipient_city : {
        type : Sequelize.STRING
    },
    recipient_state : {
        type : Sequelize.STRING
    },
    recipient_postalcode : {
        type : Sequelize.STRING
    },
    recipient_countrycode : {
        type : Sequelize.STRING
    },
    transaction_total : {
        type : Sequelize.FLOAT
    },
    transaction_total_currency : {
        type : Sequelize.STRING
    },
    transaction_items : {
        type : Sequelize.STRING
    },
    transaction_items_quantity : {
        type : Sequelize.INTEGER
    },
    createdAt : {
        type : Sequelize.DATE
    },
    seller_id: {
        type : Sequelize.INTEGER
    }
})

transactions.sync({ force : true, logging : false }).then(() => {
    console.log("transaction table synced");
})

module.exports = sequelize.model('transactions', transactions);
var myDatabase = require('../controllers/sqlDatabase');
var Sequelize = myDatabase.Sequelize;
var sequelizeInstance=myDatabase.sequelizeInstance;
var moment=require('moment')

const budget = sequelizeInstance.define('budget',{
    
    budgetID:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    budgetAmt:{
        type:Sequelize.FLOAT
    },
    budgettedAt:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW,
        allowNull:true,
        get: function(){
            var date=this.getDataValue('createdAt');
            return moment(this.getDataValue('createdAt')).format('dddd DD-MM-YYYY HH:mm:ss')
        }
    }
});
budget.sync({ force : true, logging : false }).then(() => {
    
});
module.exports=sequelizeInstance.model('budget',budget);
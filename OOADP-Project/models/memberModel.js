var myDatabase = require('../controllers/sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

const memberModel = sequelizeInstance.define('member', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    username : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    phone : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    adminStatus : {
        type : Sequelize.BOOLEAN,
        defaultValue : false
    },
    balance : {
        type : Sequelize.FLOAT,
        defaultValue : 0
    },
    profilePicture : {
        type : Sequelize.STRING,
        defaultValue : "default-profile.png"
    }
});

memberModel.sync({ force : true, logging : false }).then(() => {
    console.log("Member table synced");
    memberModel.upsert({
        name : "Lim Zheng Ting",
        username : "D3rp",
        email : "ALZT@mymail.nyp.edu.sg",
        password : "lmao",
        phone : "98765432",
        adminStatus : true
    });
    memberModel.upsert({
        name : "Chow Jia Jun",
        username : "x3MaoMao",
        email : "chow_jia_jun@hotmail.com",
        password : "1234",
        phone : "87654321",
        adminStatus : true
    });
    memberModel.upsert({
        name : "Rebancos Argel James Angeles",
        username : "argel",
        email : "argel@mymail.nyp.edu.sg",
        password : "hahayes",
        phone : "76543210",
        adminStatus : true
    });
    memberModel.upsert({
        name : "Liew Jun Wei",
        username : "weijun",
        email : "junwei@mymail.nyp.edu.sg",
        password : "qwerty",
        phone : "12345678",
        adminStatus : true
    });
    memberModel.upsert({
        name : "Tuak Zhong Wei",
        username : "Cardantagonist Nemisis Deus Excellis",
        email : "ilovemyjacket@email.com",
        password : "iamthegodthatdefysalllogicandbehaviourofallmankind",
        phone : "11110000",
        adminStatus : true
    })
})

module.exports = sequelizeInstance.model('member', memberModel);
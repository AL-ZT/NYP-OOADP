var myDatabase = require('../controllers/sqlDatabase');
var sequelizeInstance = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

const partsModel = sequelizeInstance.define('partsModel', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    model: {
        type: Sequelize.STRING,
    },
    brand: {
        type: Sequelize.STRING,
    },
    category: {
        type: Sequelize.STRING
    }
});

partsModel.sync({ force: true, logging:false }).then(() => {
    //NVIDIA GPU
    partsModel.upsert({
        model: "GeForce G100",
        brand: "NVIDIA",
        category: "GPU"
    });
    partsModel.upsert({
        model: "GeForce GT 120",
        brand: "NVIDIA",
        category: "GPU"
    });
    partsModel.upsert({
        model: "GeForce GT 130",
        brand: "NVIDIA",
        category: "GPU"
    });
    partsModel.upsert({
        model: "GeForce GT 140",
        brand: "NVIDIA",
        category: "GPU"
    });
    partsModel.upsert({
        model: "GeForce GTS 150",
        brand: "NVIDIA",
        category: "GPU"
    });
    partsModel.upsert({
        model: "GeForce 205",
        brand: "NVIDIA",
        category: "GPU"
    });
    partsModel.upsert({
        model: "GeForce 210",
        brand: "NVIDIA",
        category: "GPU"
    });
    partsModel.upsert({
        model: "GeForce GT 220",
        brand: "NVIDIA",
        category: "GPU"
    });
    partsModel.upsert({
        model: "GeForce GT 230",
        brand: "NVIDIA",
        category: "GPU"
    });
    partsModel.upsert({
        model: "GeForce GT 240",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTS 240",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTS 250",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 260",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 275",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 280",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 285",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 295",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce 310",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce 315",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 320",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 330",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 340",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce 405",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 420",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 430",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 440",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTS 450",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 460 SE",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 460",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 465",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 470",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 480",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce 510",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 520",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 530",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 545",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 550 Ti",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 555",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 560 SE",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 560",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 560 Ti",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 570",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 580",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 590",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce 605",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 610",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 620",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 625",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 630",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 635",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 640",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 645",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 650",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 650 Ti",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 650 Ti Boost",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 660",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 660 Ti",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 670",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 680",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 690",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 705",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 710",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 720",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 730",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 740",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 745",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 750",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 750 Ti",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 760",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 760 Ti",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 770",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 780",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 780 Ti",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX TITAN",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX TITAN Black",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX TITAN Z",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 945A",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 950",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 960",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 970",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 980",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 980 Ti",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX TITAN X",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GT 1030",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 1050",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 1050 Ti",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 1060",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 1070",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 1070 Ti",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 1080",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX 1080 Ti",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX TITAN X",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "GeForce GTX TITAN Xp",
        brand: "NVIDIA",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4350",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4550",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4570",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4580",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4650",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4670",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4730",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4750",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4770",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4810",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4830",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4850",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4860",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4870",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4890",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4850 X2",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 4870 X2",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 5450",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 5550",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 5570",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 5610",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 5670",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 5750",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 5770",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 5830",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 5850",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 5870",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 5870 Eyefinity Edition",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 5970",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6350",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6450",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6570",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6670",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6750",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6770",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6790",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6850",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6870",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6930",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6950",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6970",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 6990",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7350",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7450",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7470",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7510",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7570",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7670",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7730",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7750",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7770",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7790",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7850",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7870 GHz Edition",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7870 XT",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7950",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7950 Boost",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7970",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7970 GHz Edition",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 7990",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8350",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8450",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8470",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8490",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8570",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8670",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8730",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8760",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8770",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8870",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8950",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8970",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon HD 8990",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R5 210",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R5 220",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R5 230",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R5 235",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R5 235X",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 240",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 250",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 250E",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 250X",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 260",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 260X",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 265",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 270",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 270X",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 270X",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 280",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 280X",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 285",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 290",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 295X",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 295X2",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R5 330",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R5 340",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 340",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 350",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 360",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 360",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 370",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 370X",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 380",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 380X",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 390",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 390X",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 Fury",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 Nano",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 Fury X",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R9 Pro Duo",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R5 430",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R5 435",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 430",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 435",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon R7 450",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon RX 455",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon RX 460",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon RX 470D",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon RX 470",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon RX 480",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon 520",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon 530",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon RX 540",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon RX 550",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon RX 560D",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon RX 560",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon RX 570",
        brand: "AMD",
        category: "GPU",
    });
    partsModel.upsert({
        model: "Radeon RX 580",
        brand: "AMD",
        category: "GPU",
    });

    //CPU
    partsModel.upsert({
        model: "Intel® Core™ i3-530 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-540 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-550 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-560 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-650 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-655K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-660 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-661 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-670 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-680 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-750 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-750S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-760 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-860 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-860S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-870 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-870S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-875K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-880 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-920 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-930 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-940 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-950 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-960 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-970 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-980 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-2100 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-2100T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-2102 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-2105 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-2120 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-2120T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-2125 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-2130 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2300 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2310 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2320 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2380P Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2390T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2400 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2400S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2405S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2450P Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2500 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2500K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2500S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2500T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-2550K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-2600 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-2600K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-2600S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-2700K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-3210 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-3220 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-3220T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-3225 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-3240 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-3240T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-3245 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-3250 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-3250T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3330 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3330S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3340 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3340S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3350P Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3450 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3450S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3470 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3470S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3470T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3475S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3550 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3550S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3570 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3570K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3570T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-3570S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-3770 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-3770K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-3770S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-3770T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4130 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4130T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4150 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4150T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4160 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4160T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4170 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4170T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4370T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4370 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4360T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4360 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4350T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4350 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4340 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4330T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-4330 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4430 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4430S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4440 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4440S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4460 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4460S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4460T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4590T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4590S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4590 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4570T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4570S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4570R Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4570 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4690T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4690S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4690K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4690 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4670T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4670S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4670R Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4670K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-4670 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-4790T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-4790S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-4790 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-4785T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-4771 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-4770T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-4770S Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-4770R Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-4770 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-4765T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-4770K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-4790K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-5005U Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-5010U Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-5015U Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-5020U Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-5157U Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-5200U Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-5250U Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-5257U Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-5287U Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-5300U Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-5350H Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-5350U Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-5575R Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-5675C Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-5675R Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-5775C Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-5775R Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-6098P Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-6100T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-6100 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-6320 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-6300T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-6300 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-6400T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-6400 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-6402P Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-6500T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-6500 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-6585R Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-6600T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-6600K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-6685R Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-6600 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-6700 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-6700T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-6700K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-6785R Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-7100 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-7100T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-7101TE Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-7101E Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-7300T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-7300 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-7320 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-7350K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-7400 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-7400T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-7500T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-7500 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-7600 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-7600T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-7600K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-7700T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-7700K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-7700 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-8100T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-8100 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-8300T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-8300 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i3-8350K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-8400 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-8400T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-8500 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-8500T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-8600 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-8600K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i5-8600T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-8086K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-8700 Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-8700K Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "Intel® Core™ i7-8700T Processor",
        brand: "Intel",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 2300 Black Edition",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 4050e",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon 64 X2 3800+",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon 64 X2 4000+",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 BE-2400",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 4200+",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 4400+",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 4600+",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 4450e/b",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 6500",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 6550",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon 64 X2 4800+",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon 64 X2 5000+",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon 64 X2 5200+",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon 64 X2 5400+",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 4850e/b",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 5050e",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 7450",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 7550",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X4 9100e",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X4 9150e",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon 64 X2 5600+",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon 64 X2 6000+",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 7750",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X2 7850",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X2 240",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X2 245",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X2 250",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X3 8250e",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X3 8400",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X3 8450",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X3 8450e",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X3 8550",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X3 8600",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X3 8650",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X4 9350e",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X4 9450e",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X4 9500",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X4 9550",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon 64 X2 6400+",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Sempron 2650",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A4-3300",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A4-3400",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A4-4000",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A4-4400",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A4-5300",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A4-5400K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A4-6300",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A4-6400K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A4-7300",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A6-5400K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A6-5500K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X2 255",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X2 260",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X2 265",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X2 370K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X3 8750",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X3 8850",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X4 9600",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X4 9650",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X4 9750",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X4 9850",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X3 425",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X3 435",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X3 440",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X3 445",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X3 450",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X3 455",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom X4 9950",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X2 545",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X2 550 Black Edition",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X2 555 Black Edition",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X2 560 Black Edition",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X2 565 Black Edition",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X3 705e",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X3 710",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 805",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 905e",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X3 460",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X4 620",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X4 631",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 810",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 910e",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 910",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X4 630",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon II X4 635",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A6-3650",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A6-3670K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A6-6400K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A6-7400K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A8-5500",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A8-6500",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X3 720 Black Edition",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X3 740",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 920",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 940",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 945",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X6 1045T",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X6 1055T",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-4100",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-4130",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-6100",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X4 640",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X4 641",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X4 645",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X4 651K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X4 740",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X4 750K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X4 860K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X4 870K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Athlon X4 880K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A8-3850",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A8-3870",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A8-3870K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A8-5600K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A8-6600K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A8-7600",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A8-7650K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A10-5700",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A10-5800K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A10-6700",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A10-6790K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A10-6800K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A10-7700K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A10-7800",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A10-7850K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A10-7860K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A10-7870K Black Edition",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD A10-7890K",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 955",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 965",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 970 Black Edition",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X6 1075T",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-4170",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-4300",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-6200",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-6300",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-8120",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-8320E",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-8370E",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 Black Edition 975",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X4 Black Edition 980",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X6 1090T Black Edition",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Phenom II X6 1100T Black Edition",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-4350",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-6350",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-8150",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-8300",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-8320",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-8350",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-8370",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 5 1600",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD FX-9590",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 3 1200",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 3 1300X",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 5 1400",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 5 1500X",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 5 1600",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 5 1600X",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 7 1700",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 7 1700X",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen Threadripper 1900X",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 7 1800X",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen Threadripper 1920X",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen Threadripper 1950X",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 3 2200G",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 3 2200GE",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 5 2400G",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 5 2400GE",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 5 2600",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 5 2600X",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 5 2700",
        brand: "AMD",
        category: "CPU",
    });

    partsModel.upsert({
        model: "AMD Ryzen 5 2700X",
        brand: "AMD",
        category: "CPU",
    });

})

module.exports = sequelizeInstance.model('partsModel', partsModel);
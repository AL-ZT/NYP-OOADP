var fs = require("fs");
var mime = require("mime");
var gravatar = require("gravatar");

var IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

var Images = require("../models/images");
var myDatabase = require("./database");
var sequelize = myDatabase.sequelize;

//show images gallery
exports.show = function (req, res) {

    sequelize.query("select i.id, i.title, i.imageName, u.email AS user_id from Images i join Users u on i.user_id = u.id", { model: Images }).then((images) => {
        res.render("images-gallery", {
            title: "images-gallery",
            images: images,
            gravatar: gravatar.url(images.user_id, { s: "80", r: "x", d: "retro" }, true)
        });
    }).catch((err) => {
        return res.status(400).send({
            message: err
        });
    });
};

//Image upload
exports.uploadImage = function (req, res) {
    var src;
    var dest;
    var targetPath;
    var targetName;
    var tempPath = req.file.path;
    console.log(req.file);
    var type = mime.lookup(req.file.mimetype);
    var extension = req.file.path.split(/[. ]+/).pop();
    if (IMAGE_TYPES.indexOf(type) == -1) {
        return res.status(415).send("Supported image formats: jpeg, jpg, jpe, png.");
    }

    targetPath = "./public/images/" + req.file.originalname;
    src = fs.createReadStream(tempPath);
    dest = fs.createWriteStream(targetPath);
    src.pipe(dest);

//show error
src.on("error", function (err) {
    if (err) {
        return res.status(500).send({
            message: error
        });
    }
});

//Save file process
src.on("end", function () {

    var imageData = {
        title: req.body.title,
        imageName: req.file.originalname,
        user_id: req.user.id
    }

    Images.create(imageData).then((newImage, created) => {
        if (!newImage) {
            return res.send(400, {
                message: "error"
            });
        }
        res.redirect("images-gallery");
    })

    fs.unlink(tempPath, function (err) {
        if (err) {
            return res.status(500).send("Something bad happened here");
        }

        res.redirect('images-gallery');
    });
});
};

exports.hasAuthorization = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirct('/login');

};
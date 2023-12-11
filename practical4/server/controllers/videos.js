var fs = require("fs");
var mime = require("mime");
var gravatar = require("gravatar");
var VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/ogg', 'video/ogv'];
var Videos = require('../models/videos');
var myDatabase = require('./database');
var sequelize = myDatabase.sequelize;

//list videos
exports.show = function (req, res) {
    sequelize.query('select v.id, v.title, v.videoName, u.email AS user_id from videos v join Users u on v.user_id = u.id', { model: Videos }).then((videos) => {
        res.render('videos', {
            title: "Videos Page",
            videos: videos,
            gravatar: gravatar.url(videos.user_id, { s: '80', r: 'x', d: 'retro' }, true)
        });
    }).catch((err) => {
        return res.status(400).send({
            message: err
        });
    });
};

//create videos
exports.uploadVideo = function (req, res) {
    var src;
    var dest;
    var targetPath;
    var targetName;
    console.log(req);
    var tempPath = req.file.path;
    var type = mime.lookup(req.file.mimetype);
    var extension = req.file.path.split(/[.] +/).pop();
    if (VIDEO_TYPES.indexOf(type) == -1) {
        return res.status(415).send('Supported video formats: mp4, webm, ogg, ogv');
    }
    //set new path to images
    targetPath = './public/videos/' + req.file.originalname;
    src = fs.createReadStream(tempPath);
    dest = fs.createWriteStream(targetPath);
    src.pipe(dest);

    //show error
    src.on('error', function (error) {
        if (error) {
            return res.status(500).send({
                message: error
            });
        }
    });

//save file process
src.on('end', function () {
    var videoData = {
        title: req.body.title,
        videoName: req.file.originalname,
        user_id: req.user.id
    }

    Videos.create(videoData).then((newVideo, created) => {
        if (!newVideo) {
            return res.send(400, {
                message: "error"
            });
        }
        res.redirect('videos');
    })

    fs.unlink(tempPath, function (err) {
        if (err) {
            return res.status(500).send({
                message: error
            });
        }
        res.redirect('videos');
    });
});
};

//videos authorization middleware
exports.hasAuthorization = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
};
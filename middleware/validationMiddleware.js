const fileUpload = require('express-fileupload');

module.exports = (req, res, next) => {
    if(req.files.image == null || req.body.title == null || req.body.body == null) {
        res.redirect('/post/new');
    }
    next();
}
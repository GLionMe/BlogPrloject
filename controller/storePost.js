const path = require('path');
const BlogPost = require('../model/BlogPost');
const fileUpload = require('express-fileupload');

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '/public/assets/img', image.name), async (error) => {
        await BlogPost.create({
            ...req.body,
            image: '/assets/img/' + image.name
        });
        res.redirect('/');
    });
}
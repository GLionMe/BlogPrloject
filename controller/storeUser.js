const User = require('../model/User');
const path = require('path');

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        console.log(error, user);

        if(error) {
            return res.redirect('/auth/register');
        }
        res.redirect('/');
    });
}
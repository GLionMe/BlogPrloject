const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
//body parser has been depricated to use with express. Express natively implements the
//funtionalities of body-parser middleware

//connecto to the mongodb database
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const app = new express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.listen(4000, () => {
    console.log('App Listening on port 4000');
});

app.get('/',(req, res) => {
    res.render('index');
});

app.get('/about',(req, res) => {
    res.render('about');
});

app.get('/post',(req, res) => {
    res.render('post');
});

app.get('/contact',(req, res) => {
    res.render('contact');
});

app.get('/posts/new', (req, res) => {
    res.render('create');
});

app.post('/posts/store', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});
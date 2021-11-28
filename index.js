const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const BlogPost = require('./model/BlogPost');
const fileUpload = require('express-fileupload');

//connect to mongodb database
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const app = new express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.listen(4000, () => {
    console.log('App Listening on port 4000');
});

app.get('/',async (req, res) => {
    const blogposts = await BlogPost.find({});
    res.render('index', { blogposts });
});

app.get('/about',(req, res) => {
    res.render('about');
});

app.get('/post/:id',async (req, res) => {
    console.log(req.params.id);
    const blogpost = await BlogPost.findById(req.params.id);
    res.render('post', {
        blogpost
    });
});

app.get('/contact',(req, res) => {
    res.render('contact');
});

app.get('/posts/new', (req, res) => {
    res.render('create');
});

app.post('/posts/store', (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/assets/img', image.name), async (error) => {
        await BlogPost.create({
            ...req.body,
            image: '/assets/img/' + image.name
        });
        res.redirect('/');
    });
});
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
// const validateMiddleware = require('./middleware/validationMiddleware');

//controllers
const newPostController = require('./controller/newPost');
const contactController = require('./controller/contact');
const homeController = require('./controller/home');
const aboutController = require('./controller/about');
const getPostController = require('./controller/getPost');
const storePostController = require('./controller/storePost');

//connect to mongodb database
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const app = new express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());
// app.use(validateMiddleware());

app.set('view engine', 'ejs');

app.listen(4000, () => {
    console.log('App Listening on port 4000');
});

app.get('/', homeController);

app.get('/about', aboutController);

app.get('/post/:id', getPostController);

app.get('/contact', contactController);

app.get('/posts/new', newPostController);

app.post('/posts/store', storePostController);
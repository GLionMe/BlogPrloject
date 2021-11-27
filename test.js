const mongoose = require('mongoose');
const BlogPost = require('./model/BlogPost');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

//To create a new blog post
BlogPost.create({
    title: 'This is My Second Blog',
    body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite moneytopics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:"
}, (error, blogpost) => {
    console.log(error, blogpost);
});


//To fetch the data from database
BlogPost.find({}, (error, blogspot) => {
    console.log(error, blogspot);
});

const id = '61a2819041ad3fd948058caa';

//To find a document with its id
BlogPost.findById(id, (error, blogpost) => {
    console.log(error, blogpost);
})


//To Updata a document
BlogPost.findByIdAndUpdate(id, {title: "This is written by Gaurav Kumar"}, (error, blogpost) => { console.log(error, blogpost)});


//To delete a document
BlogPost.findByIdAndDelete(id, (error, blogpost) => {
    console.log(error, blogpost);
})
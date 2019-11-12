const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db configuration

const db=require('./client/keys');

//mongodb connection
mongoose.connect(db)
        .then(()=>{ console.log('mongodb connected'); })
        .catch(err=>{console.log(err);});

//passport initialization
app.use(passport.initialize());
app.use('./config/passport')(passport);

//



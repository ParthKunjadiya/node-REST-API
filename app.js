const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // use this for => x-www-urlencoded <form> data
app.use(bodyParser.json()); // use this for => application/json name in header
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode;
    const message = error.message;
    res.status(status).json({ message: message });
});

mongoose.connect('mongodb+srv://Parth:%40Parth45%40@cluster0.tajycs5.mongodb.net/Messages?retryWrites=true&w=majority&appName=Cluster0')
    .then(result => {
        app.listen(8080);
    })
    .catch((err) => {
        console.log(err);
    });
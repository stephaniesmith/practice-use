const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('first app use');
    next();
});

const noStrawberry = (req, res, next) => {
    if(req.query.flavor === 'strawberry') {
        res.send('Reall?');
    }
    next();
};

app.get('/icecream', noStrawberry, (req, res, next) => {
    res.send('yum');
});

app.use('/melt', (req, res, next) => {
    res.send('sorry');
    next();
});

app.use((req, res) => {
    res.sendFile('404.html');
});

app.listen(3000);
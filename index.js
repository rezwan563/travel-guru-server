const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const destinations = require('./data/destination.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send("hello  world from server")
})

app.get('/destinations', (req, res) =>{
    res.send(destinations);
})

app.listen(port, () =>{
    console.log('example app listening on port: ', port);
})
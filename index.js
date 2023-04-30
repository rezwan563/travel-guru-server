const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const destinations = require('./data/destination.json')
const details = require('./data/details.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send("hello  world from server")
})

app.get('/destinations', (req, res) =>{
    res.send(destinations);
})

app.get('/booking', (req, res) =>{
    res.send(details);
})

app.get('/booking/:id', (req, res) =>{
    const id = req.params.id;
    const selectedLocation = details.find(n => n.id == id);
    res.send(selectedLocation);
    console.log(id)
})

app.listen(port, () =>{
    console.log('example app listening on port: ', port);
})
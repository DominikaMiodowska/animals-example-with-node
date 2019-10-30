// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
// const cors = require("cors");
// app.use(cors());

// Initialize the main project folder
app.use(express.static('animals'));


// Setup Server
const port = 8080;
const server = app.listen(port, listening);

function listening(){
    console.log('Server is running');
    console.log(`Running on localhost: ${port}`);
};

// Initialize the main project folder
const fakeData = {
    animal: 'lion',
    fact: 'lion are fun'
}

app.get('/fakeAnimalData', getFakeData)

function getFakeData(req, res){
    res.send(fakeData)
}
const animalData = [];
app.get('/all', getData)
function getData(req, res){
    res.send(animalData)
}

//POST Route

app.post('/addAnimal', addAnimal);

function addAnimal(req, res){
    newEntry= {
        animal: req.body.animal,
        fact: req.body.fact,
        fav: req.body.fav
    }
    animalData.push(newEntry)
    res.send(animalData)
}


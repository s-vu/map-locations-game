const express = require('express');
const app = express();
const port = 8000;
const colleges = require('./Data/Colleges');
const stadiums = require('./Data/SportsVenues');
const parks = require('./Data/NationalParks')

app.get('/', (req, res) => {
    res.send(colleges.collegeDesc);
    
  });

app.get('/game', (request, response) => {
    const id = parseInt(request.query['id']);
    var title;
    var gameDesc;
    var mask;
    var answers;
    var coordinates;
    var maxZoom = 11;
    var minZoom = 4;
    var maxBounds = [[10, -65.0],[78, -172]];
    // Top 50 Colleges/Unis
    if (id === 1) {
        title = colleges.collegeTitle;
        gameDesc = colleges.collegeDesc;
        mask = colleges.collegeMask;
        answers = colleges.colleges;
        coordinates = colleges.collegesCoordinates;
    }
    // All 30 NFL Stadiums
    else if (id === 2) {
        title = stadiums.nflTitle;
        gameDesc = stadiums.nflDesc;
        answers = stadiums.nflStadiums;
        coordinates = stadiums.nflStadiumCoordinates;
    }

    //National Parks
    else if (id === 3) {
        title = parks.parksTitle;
        gameDesc = parks.parksDesc;
        answers = parks.nationalParks;
        coordinates = parks.parksCoordinates;
        maxZoom=7;
        minZoom=4;
        maxBounds = [[-15, -60.0],[78, -172]];
    }

    const gameData = {
        title: title,
        gameDesc: gameDesc,
        answers: Object.fromEntries(answers),
        coordinates: Object.fromEntries(coordinates),
        maxZoom: maxZoom,
        minZoom: minZoom,
        maxBounds: maxBounds,
        title: title,
        gameDesc: gameDesc
    };

    response
      .type('json')
      .send(gameData);
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

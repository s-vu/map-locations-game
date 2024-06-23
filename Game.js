
import './Game.css';
import "leaflet/dist/leaflet.css";
import { useParams, useNavigate  } from 'react-router-dom';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle
} from 'react-leaflet';
import React, { useState } from "react";
import { colleges, collegesCoordinates, collegeTitle, collegeDesc, collegeMask } from './Data/Colleges.js';
import { nflStadiums, nflStadiumCoordinates, nflTitle, nflDesc } from './Data/SportsVenues.js'

  


//-------------Website text setup-------------

// Found keeps track of all answers that user has already inputted
var found = new Set();
// Score = # of elements in found
var score = 0;

function Game() {
    // Value represents text in text input box
    var { id } = useParams();
    id = parseInt(id);
    const [value, setValue] = useState("");
   
    // Represents all answers that have been found so far. Each item in markers is the name of answer,
    // which is used as a key to get the Lon/Lat coordinates in coordinates map
    const [markers, setMarkers] = useState([])
    function updateMarker(x) {
        setMarkers((old => [...old, x]))
    }

    // Circles is similar to markers, but is only used when giveUp() is called, and represents all answers 
    // not found by user to display when they give up.
    const [circles, setCircles] = useState([])
    function updateCircle(x) {
        setCircles((old => [...old, x]))
    }

    
    var title;
    var gameDesc;
    function mask(x) {
        return x;
    }

    // answers: all possible answers, coordinates Map([Answer, [Lon, Lat]])
    var answers;
    var coordinates;

    // Top 50 Colleges/Unis
    if (id === 1) {
        title = collegeTitle;
        gameDesc = collegeDesc;
        mask = collegeMask;
        answers = colleges;
        coordinates = collegesCoordinates;
    }
    // All 30 NFL Stadiums
    else if (id === 2) {
        title = nflTitle;
        gameDesc = nflDesc;
        answers = nflStadiums;
        coordinates = nflStadiumCoordinates;
    }

    /**
     * Game logic for answers being typed into input text box
     * @param e the input that user typed into text box
     * If the input matches an answer that is not in found:
     *      -> Gets key from matching answer text
     *      -> Adds key to found
     *      -> Adds key to coordinates, which creates a coordinate on map, 
     *         and text in answers text box below input text box
     *      -> Clears input text box
     */
    function handleChange(e) {
        setValue(e.target.value);
        let val = e.target.value;
        val = val.toLowerCase().replaceAll(' ', '');
        val = val.replace(/[\s,&-]/g, '');
        val = mask(val);

        if (answers.has(val)) {
            let key = answers.get(val);
            if(!found.has(key)) {
                updateMarker(key);
                found.add(key);
                setValue("");
                score = score + 1;
            }
        }
    }

    /**
     * If user clicks the "Give Up" option
     * Gets all answers not in found, and adds a small red circle to its coordinates
     * Adds text to answers text box, but in red text
     */
    function giveUp() {

        for (let val of answers) {
            let key = val[1]
            if (!found.has(key)) {
                updateCircle(key);
                found.add(key);
            }
        }
    }

    const navigate = useNavigate();

    /**
     * Goes back to home page
     */
    const returnToHome = () => {
        found = new Set();
        navigate('/');
        score = 0;
    };

    return (

    <body>
    <h2 id="quiz_title"> {title} </h2>
    
    <div id="map">
    <MapContainer 
          center={[39.5, -98.3]}
          zoom={4}
          maxZoom={11}
          minZoom={4}
          maxBounds={[[10, -65.0],
            [78, -172]]}
      >
       
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
            {markers.map((x) => 
            <Marker key={x} 
                position={[coordinates.get(x)[0], 
                coordinates.get(x)[1]]}> 
                <Popup>{x}</Popup>
            </Marker>)}
            {circles.map((x) => 
            <Circle key={x} 
                center={[coordinates.get(x)[0], coordinates.get(x)[1]]}
                color="red"
                radius={500}>
                <Popup>{x}</Popup>
            </Circle>)}
    </MapContainer>
    </div>

    <div id="textbox">
        <input id="input" name="input"
        value={value}
        onChange={handleChange}
        placeholder="Enter your answer"
        ></input>


    </div>
    <div id="desc">
        <p id="desc_text"> {gameDesc} </p>
    </div>
    <div class="container">
        <div id="listbox" class="gridbutton">
            <div id="scroll">
                <ul id="listtext">
                    {markers.map(x => <li key={x}>{x}</li> )}
                    {circles.map(x => <li key={x} style={{color:"red"}}>{x}</li> )}
                </ul>
            </div>
        </div>
        <div id="scorebox" class="gridbutton">
            <div class="middle">
                <h3>Score</h3>
                <p id="score">{score}/{coordinates.size}</p>
            </div>
        </div>
        <div id="switchGame" onClick={returnToHome} class="gridbutton">
            <h3>Home</h3>
        </div>
        <div onClick={giveUp} id="giveup" class="gridbutton">
            <h3>Give Up</h3>
        </div>
    </div>
    <script src="Data/Colleges.js"></script>
    <script src="Data/SportsVenues.js"></script>
    <script src="Map.js"></script>
    
    
</body>

    )
}

export default Game;
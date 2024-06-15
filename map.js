//Data initialization

//https://github.com/ip2location/ip2location-iata-icao/blob/master/README.md

//Map of valid phrases -> their associated key value, a key can have multiple valid phrases for alternate spellings
var valid = colleges;

// 1 = colleges, 2 = nfl stadiums
var mode = 1;

//List of values already found  
var found = new Set();

var mask = collegeMask;

//Coordinates: Key -> [Lat, Long]
var coordinates = collegesCoordinates; 

//-------------Website text setup-------------

document.getElementById('quiz_title').innerHTML = collegeTitle;
document.getElementById('desc_text').innerHTML = collegeDesc;

var amt = 0;

document.getElementById('score').innerHTML = `${amt}/${coordinates.size}`

//-------------Map setup-------------

var map = L.map('map').setView([39.5, -98.3], 4);

var openstreet = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
L.tileLayer(openstreet, {
    maxZoom: 11,
    minZoom: 4,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.setMaxBounds([
    [10, -65.0],
    [78, -172]
]);

markers = [];

//-------------Map game typing/display implementation-------------

//https://github.com/ip2location/ip2location-iata-icao/blob/master/README.md

/**
 * Receives answer from text box and adds marker to map, answer to text box
 */
function test() {

    let val = document.getElementById("input").value;
    val = val.toLowerCase().replaceAll(' ', '');
    //val = val.replaceAll(',', '');
    //val = val.replaceAll('-', '');
    //val = val.replaceAll('&', '');
    val = val.replace(/[\s,&-]/g, '');
    //console.log(val);
    val = mask(val);
    
    if (valid.has(val)) {
        let key = valid.get(val);
        if(!found.has(key)) {
            let marker = L.marker(coordinates.get(key)).addTo(map);
            marker.bindPopup(key).openPopup();
            markers.push(marker);

            found.add(key);

            document.getElementById("input").value = "";

            amt += 1;
            document.getElementById('score').innerHTML = `${amt}/${coordinates.size}`;
            
            let new_li = document.createElement("li");
            new_li.appendChild(document.createTextNode(key));
            document.getElementById("listtext").appendChild(new_li);
        }

    }

}

/**
 * Changes modes if switch mode button is selected
 */
function switchModes() {
    found = new Set();
    if ( mode === 1) {
        valid = nflStadiums;
        mask = ((x) => x)
        coordinates = nflStadiumCoordinates;
        document.getElementById('quiz_title').innerHTML = nflTitle;
        document.getElementById('desc_text').innerHTML = nflDesc;
        mode = 2;

    }
    else {
        document.getElementById('quiz_title').innerHTML = collegeTitle;
        document.getElementById('desc_text').innerHTML = collegeDesc;
        valid = colleges;
        mask = collegeMask;
        coordinates = collegesCoordinates;
        mode = 1;
    }
    amt = 0;
    document.getElementById('score').innerHTML = `${amt}/${coordinates.size}`;
    document.getElementById("listtext").innerHTML = "";
    for (marker of markers) {
        map.removeLayer(marker);
    }
    markers = [];

}

/**
 * Shows all answers if give up button is pressed
 */
function giveup() {

    var circle_settings = {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    };

    for (val of valid) {
        let key = val[1]
        if (!found.has(key)) {
            found.add(key);
            let marker = L.circle(coordinates.get(key), circle_settings).addTo(map);
            marker.bindPopup(key).openPopup();
            markers.push(marker);

            let new_li = document.createElement("li");
            new_li.appendChild(document.createTextNode(key));
            new_li.style.color="red";
            document.getElementById("listtext").appendChild(new_li);
        }
    }
}
//Data initialization

//https://github.com/ip2location/ip2location-iata-icao/blob/master/README.md

//Map of valid phrases -> their associated key value, a key can have multiple valid phrases for alternate spellings
var valid = colleges;

//List of values already found  
var found = new Set();

var mask = collegeMask;

//Coordinates: Key -> [Lat, Long]
var coordinates = schoolcoordinates; 

//-------------Website text setup-------------

document.getElementById('quiz_title').innerHTML = quiz_title;
document.getElementById('desc_text').innerHTML = desc_text;

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


//-------------Map game typing/display implementation-------------

//https://github.com/ip2location/ip2location-iata-icao/blob/master/README.md

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
            console.log(coordinates.get(key));
            let marker = L.marker(coordinates.get(key)).addTo(map);
            marker.bindPopup(key).openPopup();

            found.add(key);
            console.log('found', found);

            document.getElementById("input").value = "";

            amt += 1;
            document.getElementById('score').innerHTML = `${amt}/${coordinates.size}`;
            
            let new_li = document.createElement("li");
            new_li.appendChild(document.createTextNode(key));
            document.getElementById("listtext").appendChild(new_li);
        }

    }

}

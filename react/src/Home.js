import { useNavigate } from 'react-router-dom';
import React from 'react';
import { LineUtil } from 'leaflet';

function Home() {
    const navigate = useNavigate();

    const handleNavigate = (gameId) => {
      navigate(`/game/${gameId+1}`);
    };
    
    const games = ["Top 50 Colleges and Universities", "All 30 NFL Stadiums", "All 63 US National Parks"];

    return (

<body>
    <div id="titles">
        <h2>Choose one of the categories to play a quiz game.</h2>
        <h3>In each quiz, try to name as many items in that category as you can think of. 
            Each time you correctly name one, a marker at its location will appear on the map.
            There may be multiple alternate spellings for each item.
        </h3>

    </div>



    <div class="gameoptionlist">
        {games.map((txt, i) => <button onClick={() => handleNavigate(i)} class="gameoption">{txt}</button>)}
    </div>  
    
    </body>

    );
}


export default Home;

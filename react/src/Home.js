import { useNavigate } from 'react-router-dom';
import React from 'react';

function Home() {
    const navigate = useNavigate();

    const handleNavigate = (gameId) => {
      navigate(`/game/${gameId}`);
    };
    
    return (

<body>
    <div id="titles">
        <h2>Choose one of the categories to play a quiz game.</h2>
        <h3>In each quiz, try to name as many items in that category as you can think of. 
            Each time you correctly name one, a marker at its location will appear on the map.
            There may be multiple alternate spellings for each item.
        </h3>

    </div>



    <div class="container">
        <div id="game1" onClick={() => handleNavigate(1)} class="gridbutton">
        <h3>Top 50 Colleges & Universitie</h3>
        </div>
        <div id="game2" onClick={() => handleNavigate(2)} class="gridbutton">
            <h3>All 30 NFL Stadiums</h3>
            </div>
    </div>  
    
    </body>

    );
}


export default Home;

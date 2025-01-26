import {useEffect, useState} from "react";
import OneGame from "./OneGame.jsx"



function Games(){

    const [games, setGames] = useState([]);

    useEffect(() => {

        async function fetchGames() {
            try
            {
                const response = await fetch('http://145.24.223.173:8001/games/', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    }
                });

                const data = await response.json();
                console.log(data);
                setGames(data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchGames();

    },[]);

    if(!games) {
        return <div>Booting up the drivers...</div>;
    }


    return (
      <div className="container mx-auto p-4">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {games.map((oneGame) => (
                  <OneGame key={oneGame.id} oneGame={oneGame}/>
              )

          )}
          </ul>
      </div>
    );

}

export default Games;
import {useEffect, useState} from "react";


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

      </div>
    );

}

export default Games;
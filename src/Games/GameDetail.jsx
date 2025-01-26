import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";


function GameDetail() {
    const { id } = useParams(); //Extract relevant Game ID from the URL
    const [game, setGame] = useState(null); //Initial state for th Game

    useEffect(() => {
        async function fetchGame() {
            try
            {
                const response = await fetch(`https://145.24.223.173:8001/games/${id}`, {
                    method: "GET",
                    headers: {
                        'Accept': "application/json",
                    }
                });

                if(!response.ok) {
                    throw new Error("Failed to fetch game");
                }

                const data = await response.json();
                setGame(data);

            } catch (e) {
                console.error(' Error fetching game:', e);
            }
        }

        fetchGame();

    },[id]);

    if(!game) {
        return <div>Loading game data...</div>
    }

    return (
        <article className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
            <h3 className="text-gray-700 mb-4 font-semibold">Genre: {game.genre}</h3>
            <h3 className="text-gray-700 mb-4 font-semibold">Release date: {game.releaseDate}</h3>
            <p className="text-gray-700 mb-4 ">{game.description}</p>
            <h4 className="text-gray-700 mb-4">Rating: {game.rating}</h4>
            <Link to="/games" className="">
                Back to Games list
            </Link>
        </article>
    );
}

export default GameDetail;
import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";


function GameDetail() {
    const { id } = useParams(); //Extract relevant Game ID from the URL
    const [game, setGame] = useState(null); //Initial state for th Game

    useEffect(() => {
        async function fetchGame() {
            try
            {
                const response = await fetch(`http://145.24.223.173:8001/games/${id}`, {
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

    const createdAt = new Date(game.createdAt).toLocaleString();
    const updatedAt = new Date(game.updatedAt).toLocaleString();

    return (
        <article className="container mx-auto p-4">
            <h1 className="text-5xl font-bold mb-4 underline">{game.title}</h1>
            <h3 className="text-black mb-4 font-bold text-2xl">Genre: {game.genre}</h3>
            <h3 className="text-black mb-4 font-bold text-2xl">Release date: {game.releaseDate}</h3>
            <p className="text-black mb-4 text-lg font-semibold">{game.description}</p>
            <h4 className="text-black mb-4 text-lg font-semibold">Rating: {game.rating}</h4>
            <p className="ttext-black mb-4 text-lg font-semibold">Created at: {createdAt}</p>
            <p className="text-black mb-4 text-lg font-semibold">Last updated at: {updatedAt}</p>
            <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-green-500 hover:text-black transition">
                <Link to="/games">
                    Back to Games list
                </Link>
            </button>
        </article>
    );
}

export default GameDetail;
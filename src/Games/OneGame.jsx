import {Link} from "react-router";


function OneGame({oneGame}) {
    return (
        <article className="border rounded-xl border-blue-500 p-4 bg-gray-300 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-black">{oneGame.title}</h2>
            <Link to={`/games/${oneGame.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-gray-300 rounded hover:bg-red-500 transition"
            >
                Game Details
            </Link>
            <Link to={`/games/edit/${oneGame.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-gray-300 rounded hover:bg-red-500 transition"
            >
                Edit Game
            </Link>
            <Link to={`/games/delete/${oneGame.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-gray-300 rounded hover:bg-red-500 transition"
            >
                Delete Game
            </Link>
        </article>
    );
}

export default OneGame;
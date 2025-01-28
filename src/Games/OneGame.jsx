import {Link} from "react-router";


function OneGame({oneGame}) {
    return (
        <article className="border rounded-xl border-blue-500 p-4 bg-gray-300 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-black">{oneGame.title}</h2>
            <div className="flex flex-wrap gap-2 mt-4">
                <Link to={`/games/${oneGame.id}`}
                      className="flex-1 text-center mt-4 inline-block px-4 py-2 bg-blue-600 text-gray-300 rounded hover:bg-red-500 transition"
                >
                    Game Details
                </Link>
                <Link to={`/games/edit/${oneGame.id}`}
                      className="flex-1 text-center mt-4 inline-block px-4 py-2 bg-blue-600 text-gray-300 rounded hover:bg-red-500 transition"
                >
                    Update Game
                </Link>
                <Link to={`/games/delete/${oneGame.id}`}
                      className="flex-1 text-center mt-4 inline-block px-4 py-2 bg-red-700 text-gray-300 rounded hover:bg-pink-900 transition"
                >
                    Delete Game
                </Link>
            </div>
        </article>
    );
}

export default OneGame;
import {Link, useNavigate, useParams} from "react-router";


function DeleteGame() {
    const {id} = useParams();
    const navigate = useNavigate();

    const handleDelete = async (e) => {
        e.preventDefault();
        try
        {
            await fetch(`http://145.24.223.173:8001/games/${id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            });

            navigate('/games');

        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4"> Delete Game?</h1>
            <p className="mb-6">Are you sure you want to remove this game from the list?</p>
            <div className="flex gap-4 flex-wrap">
                <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 hover:text-white transition"
                >
                    Delete
                </button>
                <button

                    className="bg-gray-400 text-gray-800 px-4 py-2 rounded"
                >
                    <Link to="/games" className="">
                        Back to Games list
                    </Link>
                </button>
            </div>

        </div>
    );

}

export default DeleteGame;
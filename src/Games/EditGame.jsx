import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";


function EditGame() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        genre: "",
        releaseDate: "",
        description: "",
        rating: "",
    });

    useEffect(() => {
        async function fetchGame() {
            try
            {
                const response = await fetch(`http://145.24.223.173:8001/games/${id}`, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                    },
                });
                const game = await response.json();
                setFormData({
                    title: game.title,
                    genre: game.genre,
                    releaseDate: game.releaseDate,
                    description: game.description,
                    rating: game.rating,
                });

            } catch (e) {
                console.error(e);
            }
        }
        fetchGame();
    },[id]);

    const handleInputState = (e) => {
        const { name, value } = e.target;
        setFormData({
                ...formData,
                [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try
        {
            await fetch(`http://145.24.223.173:8001/games/${id}`, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            navigate('/games')

        } catch (e) {
            console.error(e);
        }
    };
    return(
        <form onSubmit={handleSubmit} className="border border-blue-400 rounded-lg p-4 bg-gray-100 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Add a new game to the list!</h2>
            <div className="mb-4">
                <label htmlFor="title" className="block font-medium mb-1">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputState}
                    className="w-full border border-blue-500 rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="genre" className="block font-medium mb-1">Genre</label>
                <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputState}
                    className="w-full border border-blue-500 rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="releaseDate" className="block font-medium mb-1">Release date</label>
                <input
                    type="text"
                    id="releaseDate"
                    name="releaseDate"
                    value={formData.releaseDate}
                    onChange={handleInputState}
                    className="w-full border border-blue-500 rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block font-medium mb-1">Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputState}
                    className="w-full border border-blue-500 rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="rating" className="block font-medium mb-1">Rating</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputState}
                    className="w-full border border-blue-500 rounded px-3 py-2"
                />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-green-600 hover:text-white transition">
                Update Game
            </button>

        </form>
    );

}

export default EditGame;
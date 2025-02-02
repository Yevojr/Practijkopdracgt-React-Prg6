import {useState} from "react";
import {useNavigate} from "react-router";



function CreateGame({handleGameAddition}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        genre: "",
        releaseDate: "",
        description: "",
        rating: "",
    });

    const handleInputState = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value},
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.genre || !formData.description) {
            alert("Title, Genre and Description fields is not allowed to be empty!");
            return;
        }

        try
        {
            const response = await fetch(`http://145.24.223.173:8001/games/`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const addedGame = await response.json();
            if(handleGameAddition) {
                handleGameAddition(addedGame);
            }

            console.log(addedGame);

            setFormData({
                title: "",
                genre: "",
                releaseDate: "",
                description: "",
                rating: "",
            });
            navigate("/games");

        } catch (e) {
            console.error("Error creating game", e);
        }
    };

    return(
        <form onSubmit={handleSubmit} className="border border-blue-400 rounded-lg p-4 bg-gray-200 shadow-lg">
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
            <button type="submit" className="w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-red-600 hover:text-white transition">
                    Add to Game List
            </button>

        </form>
    );

}

export default CreateGame;
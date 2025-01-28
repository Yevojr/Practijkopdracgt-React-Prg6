import {useEffect, useState} from "react";
import OneGame from "./OneGame.jsx"



function Games(){

    const [games, setGames] = useState([]);
    const [currentpage, setCurrentpage] = useState(1);
    const [totalpages, setTotalpages] = useState(1);

    const limit = 15;

    async function fetchGames(page= 1) {
        try
        {
            const response = await fetch(`http://145.24.223.173:8001/games?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            });

            const data = await response.json();
            console.log(data);
            setGames(data.items);
            setCurrentpage(data.pagination.currentPage)
            setTotalpages(data.pagination.totalPages)

        } catch (e) {
            console.error(e);
        }
    }



    useEffect(() => {
        fetchGames(currentpage)
    },[currentpage])

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalpages) {
            setCurrentpage(page);
        }
    }

    if(!games) {
        return <div>Booting up the drivers...</div>;
    }


    return (
      <div className="container mx-auto p-4">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {games.map((oneGame) => (
                  <OneGame key={oneGame.id} oneGame={oneGame}/>
              ))}
          </ul>

          <div className="flex justify-center mt-4">
              {currentpage > 1 && (
                  <button
                      onClick={() => {handlePageChange(currentpage - 1)}}
                      className="px-4 py-2 bg-blue-500 mx-1 text-white rounded hover:bg-blue-700 hover:text-white"
                  >
                      Previous
                  </button>
              )}
              {Array.from({length: totalpages}, (_, i) => i + 1).map((page) => (
                  <button
                      key={page}
                      className={`px-4 py-2 mx-1 rounded ${
                          page === currentpage
                              ? "bg-teal-400 text-gray-800 rounded"
                              : "bg-blue-500 text-white rounded"
                      }`}
                      onClick={() => handlePageChange(page)}
                  >
                      {page}
                  </button>
              ))}
              {currentpage < totalpages && (
                  <button
                      onClick={() => {handlePageChange(currentpage + 1)}}
                      className="px-4 py-2 bg-blue-500 mx-1 text-white rounded hover:bg-blue-700 hover:text-white"

                  >
                      Next
                  </button>
              )}

          </div>


      </div>


    );

}

export default Games;
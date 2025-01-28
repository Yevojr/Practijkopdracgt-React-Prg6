import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Games from "./Games/Games.jsx";
import GameDetail from "./Games/GameDetail.jsx";
import CreateGame from "./Games/CreateGame.jsx";
import DeleteGame from "./Games/DeleteGame.jsx";
import EditGame from "./Games/EditGame.jsx";


const router = createBrowserRouter([{
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/games",
      element: <Games />
    },
    {
      path: "/games/:id",
      element: <GameDetail/>
    },
    {
      path: "/games/create",
      element: <CreateGame/>
    },
    {
      path: "/games/delete/:id",
      element: <DeleteGame/>
    },
    {
      path: "/games/edit/:id",
      element: <EditGame/>
    },

  ]
}])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

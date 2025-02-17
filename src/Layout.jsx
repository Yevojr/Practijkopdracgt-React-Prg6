import {Link, Outlet} from "react-router";


function Layout () {
    return (
        <>
            <header className="font-bold mx-auto px-4 pb-3 py-2 justify-center flex text-4xl bg-blue-300">
                <h1>My Game List</h1>
            </header>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-green-200 flex justify-center pb-2">
                <Link to={"/"} className="px-4 text-xl font-semibold underline">Home</Link>
                <Link to={"/games"} className="px-4 text-xl font-semibold underline">Game List</Link>
                <Link to={"/games/create"} className="px-4 text-xl font-semibold underline">Add Game</Link>
            </nav>

            <body className="bg-purple-300 min-h-screen">
            <main >
                <Outlet/>
            </main>

            </body>



        </>
    )
}

export default Layout;
import {Link, Outlet} from "react-router";


function Layout () {
    return (
        <>
            <header>
                <h1>My Game List</h1>
            </header>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={"/"}>Home</Link>
                <Link to={"/games"}>Game List</Link>
                <Link to={"/games/create"}>Add Game</Link>
            </nav>

            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;
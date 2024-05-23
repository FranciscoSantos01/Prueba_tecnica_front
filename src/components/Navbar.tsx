import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../context/context"


function Navbar(){
    const{user}=useContext(AppContext)
    return(
        <header className="flex justify-between w-full p-3 bg-black">
            <Link to={'/'} className="text-5xl text-green-700 font-semibold">Rick & Morty</Link>
            <nav className="flex items-center gap-4 text-white font-bold">
                <Link to={'/favorites'}>Favorite</Link>
                <Link to={'/locations'}>Location</Link>
                { user === null && <Link to={'/signIn'}>Sign In</Link>}
                {user !== null && <button className="py-2 px-2 bg-green-500 text-white">Log out</button>}            
                </nav>
        </header>
    )
}


export default Navbar
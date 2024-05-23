import { useContext } from "react"
import Navbar from "../components/Navbar"
import { AppContext } from "../context/context"
import CharacterCard from "../components/CharacterCard"
import LocationCard from "../components/LocationCard"


function Favorites(){
    const{favorites,user}=useContext(AppContext)

    return(
        <>
         <Navbar/>
          <section className="p-3">
            {user !== null && <h2 className="text-green-500 font-bold text-xl">Hi {user?.username}!</h2> }
            {favorites?.length === 0 && <h3 className="text-2xl font-bold">Add Your favorite characters or locations</h3>}
             <div className="card-container w-full h-full">
            {favorites.length > 0 && favorites.map(fav=>{
              if('status' in fav){
                return(
                    <CharacterCard isFavorite={true} key={fav.id} character={fav} />
                )
              }else{
                return(
                  <LocationCard key={fav.id} isFavorite={true} location={fav} />
                )
              }
            })}
              </div>
          </section>
        </>
    )
}

export default Favorites
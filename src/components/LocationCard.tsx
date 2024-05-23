import { useContext } from "react"
import { Locations } from "../types/api"
import { AppContext } from "../context/context"

type props={
    location:Locations,
    isFavorite?:boolean
}
function LocationCard({location,isFavorite=false}:props){
    const{addToFavorite,deleteFavorite}=useContext(AppContext)
    return(
        <div className="w-[26rem] p-2 h-fit flex flex-col gap-8">
            <h2 className="font-bold text-lg">{location.name}</h2>
             <div className="flex items-center justify-between w-[65%]">
                <span>Residents:{location.residents.length}</span>
                <span>{location.dimension}</span>
             </div>
             {isFavorite &&  <button onClick={()=>deleteFavorite(location)} className="px-3 py-2 w-[15rem] rounded-md bg-red-500 text-white font-bold ">Delete</button> }
             {!isFavorite && <button onClick={()=>addToFavorite(location)} className="py-2 px-3 w-[15rem] rounded-md bg-black text-white font-bold">Add To favorite</button>}
        </div>
    )
}


export default LocationCard
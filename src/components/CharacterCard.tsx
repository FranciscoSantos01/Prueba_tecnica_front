import { useContext } from "react"
import { Result } from "../types/api"
import { AppContext } from "../context/context"


type CharacterCardProps={
    character:Result,
    isFavorite?:boolean
}

function CharacterCard({character,isFavorite=false}:CharacterCardProps) {
  const{addToFavorite,deleteFavorite}=useContext(AppContext)
  return (
    <div className="w-[23rem] p-2 h-fit flex flex-col gap-4">
        <img src={character.image} alt="" className="w-20 h-20 rounded-full object-cover" />
        <h2>{character.name}</h2>
        <div className="flex items-center justify-between w-[65%] ">
            <span>{character.species}</span>
            <span>{character.status}</span>
        </div>
        {isFavorite &&  <button onClick={()=>deleteFavorite(character)} className="px-3 py-2 w-[15rem] rounded-md bg-red-500 text-white font-bold ">Delete</button> }
        {!isFavorite && <button onClick={()=>addToFavorite(character)} className="py-2 px-3 w-[15rem] rounded-md bg-black text-white font-bold">Add To favorite</button>}
    </div>
  )
}

export default CharacterCard
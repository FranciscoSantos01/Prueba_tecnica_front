
import {Result } from "./types/api"
import CharacterCard from "./components/CharacterCard"
import LoadMore from "./components/LoadMore"
import useFetch from "./hooks/useFetch"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function App(){
  const{data}=useFetch<Result[]>(1,"https://rickandmortyapi.com/api/character/?page=")
  return (
    <>
      <Navbar />
      <main className="w-full">
      <section className="card-container p-3 w-full">
      {data !== null && data.map(character=>(
        <CharacterCard key={character.id} character={character} />
      ))}
      </section>
      {data !== null && <LoadMore />}
      </main>
      <Outlet />
    </>
  )
}

export default App
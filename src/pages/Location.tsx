import LoadLocations from "../components/LoadLocations"
import LocationCard from "../components/LocationCard"
import Navbar from "../components/Navbar"
import useFetch from "../hooks/useFetch"
import { Locations as TypeLocations } from "../types/api" 


function Locations(){
    const{data}=useFetch<TypeLocations[]>(1,"https://rickandmortyapi.com/api/location?page=")
    return(
        <>
        <Navbar />
        <main className="w-full">
      <section className="card-container p-3 w-full">
        {data !== null && data.map(location=>(
            <LocationCard key={location.id} location={location} />
        ))}
        </section>
        {data !== null && <LoadLocations />}
       </main>
        </>
    )
}

export default Locations
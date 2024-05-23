import { useEffect } from "react";
import LocationCard from "./LocationCard";
import { useInView } from "react-intersection-observer";
import useLoadData from "../hooks/useLoadData";
import { Locations } from "../types/api";

let page = 2
function LoadLocations(){
    const{ref,inView}=useInView({delay:200});
    const{data,loadMoreData}=useLoadData<Locations[]>({url:"https://rickandmortyapi.com/api/location/?page="})
    
    useEffect(()=>{
        if(inView){
          loadMoreData(page)
          page++
        }
    },[inView])
    return(
        <div className="flex flex-col items-center justify-center w-full">
            <section className="card-container w-full">
             {data!== null && data?.map(location=>(
                <LocationCard key={location.id} location={location} />
             ))}
            </section>
          <div ref={ref} className="loader"/>   
        </div>
    )
}


export default LoadLocations
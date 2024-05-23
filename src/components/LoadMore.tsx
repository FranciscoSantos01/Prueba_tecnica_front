import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import { Result } from "../types/api"
import CharacterCard from "./CharacterCard"
import useLoadData from "../hooks/useLoadData"

let page = 2
function LoadMore(){
    const{ref,inView}=useInView({delay:200});
    const{data,loadMoreData}=useLoadData<Result[]>({url:"https://rickandmortyapi.com/api/character/?page="})
    
    useEffect(()=>{
        if(inView){
          loadMoreData(page)
          page++
        }
    },[inView])
    return(
        <div className="flex flex-col items-center justify-center w-full">
            <section className="card-container w-full">
             {data!== null && data?.map(charcter=>(
                <CharacterCard key={charcter.id} character={charcter} />
             ))}
            </section>
          <div ref={ref} className="loader"/>   
        </div>
    )
}


export default LoadMore
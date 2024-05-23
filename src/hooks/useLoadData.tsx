import { useState } from "react"
import axios from "axios"

type props={
    url:string,
}

function useLoadData<T,>({url}:props){
    const[data,setData]=useState<T|[]>([])

    const loadMoreData=async(page:number)=>{
        try {
            const res = await axios.get(url+page)
            const moreData = res.data.results
            setData(prevState=>[...prevState,...moreData])
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
            }
        }
    }

    return{data,loadMoreData}
}


export default useLoadData
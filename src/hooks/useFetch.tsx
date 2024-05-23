import axios from "axios";
import { useEffect, useState } from "react";


function useFetch<T,>(page:Number,url:string){
   const[data,setData]=useState<T|null>(null)
   const fetchData = async()=>{
    const response = await  axios.get(url + page)
    const data = await response.data.results
    setData(data)
  }
   
  useEffect(()=>{
    fetchData();
  },[])


  return {data}
}

export default useFetch
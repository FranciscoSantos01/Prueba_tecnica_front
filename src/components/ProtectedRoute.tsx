import { ReactNode, useContext, useEffect } from "react"
import { AppContext } from "../context/context"
import { useNavigate } from "react-router-dom"

type props = {
    children:ReactNode
}
function ProtectedRoute({children}:props){
      const{user}=useContext(AppContext)
      const navigate = useNavigate()

      useEffect(()=>{
          if(user === null){
            navigate('/signIn',{replace:true})
          }
      },[navigate,user])

      return children
}



export default ProtectedRoute
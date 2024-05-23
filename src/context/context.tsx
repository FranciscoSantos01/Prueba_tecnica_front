import {ReactNode, createContext, useState } from "react";
import { Locations, Result } from "../types/api";


type context={
  user:User|null,
  favorites: (Result|Locations)[],
  addToFavorite: (favorite: Result | Locations) => void,
  signIn:(user: User) => void,
  deleteFavorite: (favorite: Result | Locations) => void
}

const defaultContext: context = {
  user: null,
  favorites: [],
  addToFavorite: () => {},
  signIn: () => {},
  deleteFavorite:()=>{}
};

 export const AppContext = createContext<context>(defaultContext)



 type AppProviderType = {
    children:ReactNode
 }

 type User = {
  username:string,
  email:string,
  password:string
 }
 
 export const AppProvider = ({children}:AppProviderType) => {
   const[user,setUser]=useState<User|null>(null)
   const[favorites,setFavorites]=useState<(Result|Locations)[]>([])


   const addToFavorite=(favorite:Result|Locations)=>{
         setFavorites([...favorites,favorite])
   }
   
   const deleteFavorite=(favorite:Result|Locations)=>{
      const newFavorite = structuredClone(favorites).filter(fav=> fav.name !== favorite.name)
      setFavorites(newFavorite)
   }
   const signIn = (user:User)=>{
      setUser(user)
   }

   return (
     <AppContext.Provider value={{
      user,
      favorites,
      addToFavorite,
      signIn,
      deleteFavorite
     }}>
         {children}
     </AppContext.Provider>
   )
 }
 
import { createContext, useContext, useState } from "react";

export const ScrollContext = createContext()


export default function ScrollContextProvider({children}){


    const [page,setPage] = useState(null)

    const handlePage=(id)=>{
        setPage(id)
    }


    return <ScrollContext.Provider value={{page,handlePage}}>{children}</ScrollContext.Provider>
}
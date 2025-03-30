'use client'
//

import { createContext, useState } from "react"


export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

  const [ nome , setNome ] = useState("samuel");



  return(
    <GlobalContext.Provider value={{
      nome,
      setNome
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

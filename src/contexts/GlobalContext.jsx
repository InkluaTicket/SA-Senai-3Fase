'use client'
//

import { createContext, useState } from "react"


export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

  const [settings, setSettings] = useState({
    textSize: false,
    lineHeight: false,
    letterSpacing: false,
    dyslexiaFont: false,
    highlightHeadings: false,
    invertColors: false,
    highSaturation: false,
    lowSaturation: false,
    highContrastDark: false,
    highContrastLight: false,
    monochrome: false,
    daltonismFilters: false,
    largeCursor: false,
    highlightLinks: false,
    focusReading: false,
    readingGuide: false,
  })

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }
  


  return(
    <GlobalContext.Provider value={{
      toggleSetting
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

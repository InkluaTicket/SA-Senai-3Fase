'use client'
//

import { createContext, useState } from "react"


export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

  const [sidebarActive, setSidebarActive] = useState(false)

  const [readSettings, setReadSettings] = useState([
    {title: 'Tamanho do Texto', idSetting: 'textSize', icon: 'TamanhoTexto.svg', iconInvert: 'TamanhoTextoBranco.svg', isActive: false},
    {title: 'Altura da Linha', idSetting: 'lineHeight', icon: 'AlturaLetra.svg', iconInvert: 'AlturaLetraBranco.svg', isActive: false},
    {title: 'Espaçamento entre Letras', idSetting: 'letterSpacing', icon: 'EspacamentoLetra.svg', iconInvert: 'EspacamentoLetraBranco.svg', isActive: false},
    {title: 'Fonte para Dislexia', idSetting: 'dyslexiaFont', icon: 'FonteDislexa.svg', iconInvert: 'FonteDislexaBranco.svg', isActive: false},
    {title: 'Cabeçalhos Destacados', idSetting: 'highlightHeadings', icon: 'CabecalhosDestaque.svg', iconInvert: 'CabecalhosDestaqueBranco.svg', isActive: false},
  ])
  const [colorsSettings, setcClorsSettings] = useState([
    {title: 'Inverter Cores', idSetting: 'invertColors', icon: 'InverteCores.svg', iconInvert: 'InverteCoresBranco.svg', isActive: false},
    {title: 'Alta Saturação', idSetting: 'highSaturation', icon: 'AltaSaturacao.svg', iconInvert: 'AltaSaturacaoBranco.svg', isActive: false},
    {title: 'Baixa Saturação', idSetting: 'lowSaturation', icon: 'BaixaSaturacao.svg', iconInvert: 'BaixaSaturacaoBranco.svg', isActive: false},
    {title: 'Alto Contraste Escuro', idSetting: 'highContrastDark', icon: 'ContrasteEscuro.svg', iconInvert: 'ContrasteEscuroBranco.svg', isActive: false},
    {title: 'Alto Contraste Claro', idSetting: 'highContrastLight', icon: 'ContrasteClaro.svg', iconInvert: 'ContrasteClaroBranco.svg', isActive: false},
    {title: 'Monocromático', idSetting: 'monochrome', icon: 'Monocromatico.svg', iconInvert: 'MonocromaticoBranco.svg', isActive: false},
    {
      title: "Filtros para Daltonismo",
      idSetting: "colorBlindness",
      options: [
        { label: "Nenhum", value: null },
        { label: "Protanopia", value: "protanopia" },
        { label: "Deuteranopia", value: "deuteranopia" },
        { label: "Tritanopia", value: "tritanopia" }
      ]
    },
  ])
  const [navSettings, setNavSettings] = useState([
    {title: 'Cursor Grande', idSetting: 'largeCursor', icon: 'CursorGrande.svg', iconInvert: 'CursorGrandeBranco.svg', isActive: false},
    {title: 'Links Destacados', idSetting: 'highlightLinks', icon: 'LinksDestaque.svg', iconInvert: 'LinksDestaqueBranco.svg', isActive: false},
    {title: 'Leitura em Foco', idSetting: 'focusReading', icon: 'LeituraFoco.svg', iconInvert: 'LeituraFocoBranco.svg', isActive: false},
    {title: 'Guia de Leitura', idSetting: 'readingGuide', icon: 'GuiaLeitura.svg', iconInvert: 'GuiaLeituraBranco.svg', isActive: false},
  ])
  const settings = [...readSettings, ...colorsSettings, ...navSettings]

  const toggleSetting = (idSetting) => {
    const newSettings = settings.map(setting => {
      if(setting.idSetting === idSetting) {
        setting.isActive = !setting.isActive
      }
      return setting
    })
    setReadSettings(newSettings.slice(0, 5))
    setcClorsSettings(newSettings.slice(5, 12))
    setNavSettings(newSettings.slice(12, 16))
  }
  


  return(
    <GlobalContext.Provider value={{
      toggleSetting,
      readSettings,
      colorsSettings,
      navSettings,
      sidebarActive, setSidebarActive,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

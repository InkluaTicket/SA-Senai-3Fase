'use client'

import { GlobalContextProvider } from "@/contexts/GlobalContext"
import AccesibilitySidebar from "@/components/accessibility/AccessibilitySidebar"
import { useContext } from "react"
import { GlobalContext } from "@/contexts/GlobalContext"
import "./globals.css"
import ToggleAccesibility from "@/components/accessibility/ToggleAccessibility"

export default function RootLayout({ children }) {
  return (
    <GlobalContextProvider>
      <LayoutContent>{children}</LayoutContent>
    </GlobalContextProvider>
  )
}

function LayoutContent({ children }) {
  const { sidebarActive } = useContext(GlobalContext) // Agora está dentro do Provider

  return (
    <html lang="pt-br">
      <body className="bg-cinza-principal-50 2xl font-principal">
        <ToggleAccesibility />
        {sidebarActive && <AccesibilitySidebar />}
        {children}
      </body>
    </html>
  )
}

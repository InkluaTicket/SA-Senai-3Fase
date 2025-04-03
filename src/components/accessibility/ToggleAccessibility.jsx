"use client"

import { GlobalContext } from "@/contexts/GlobalContext"
import { motion } from "framer-motion"
import { useContext, useState, useRef } from "react"

export default function ToggleAccessibility() {
    const { sidebarActive, setSidebarActive} = useContext(GlobalContext)
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef(null) // Ref do container que define os limites

    return (
        <div ref={containerRef} className="fixed inset-0">
            <motion.div
                drag
                dragConstraints={containerRef} // 🔥 Define os limites dinamicamente
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setTimeout(() => setIsDragging(false), 200)}
                onClick={() => {
                    if (!isDragging) setSidebarActive(!sidebarActive)
                }}
                whileHover={{ scale: 1.1 }} // Efeito ao passar o mouse
                whileTap={{ scale: 0.9 }} // Efeito ao clicar
                className="bg-laranja-principal-500 rounded-full cursor-pointer fixed bottom-4 right-4 w-12 h-12 flex items-center justify-center shadow-lg"
            >
                <img
                    src="/icons/accessibility.svg"
                    alt="Ícone de acessibilidade"
                    className="w-7 h-8 "
                    draggable={false} // 🚀 Impede o navegador de puxar a imagem
                />
            </motion.div>
        </div>
    )
}

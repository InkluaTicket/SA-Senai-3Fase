"use client"

import { motion } from "framer-motion"
import { useDragControls } from "framer-motion"
import { useContext, useEffect, useState, useRef } from "react"
import { GlobalContext } from "@/contexts/GlobalContext"

export default function ToggleAccessibility() {
    const { sidebarActive, setSidebarActive } = useContext(GlobalContext)
    const controls = useDragControls()
    const [isDragging, setIsDragging] = useState(false)
    const [constraints, setConstraints] = useState(null)
    const containerRef = useRef(null)

    useEffect(() => {
        if (typeof window !== "undefined" && containerRef.current) {
            setConstraints({
                left: 0,
                right: window.innerWidth - 60,
                top: 0,
                bottom: window.innerHeight - 60,
            })
        }
    }, [])

    return (
        <motion.div
            drag
            dragControls={controls}
            dragConstraints={constraints}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setTimeout(() => setIsDragging(false), 200)}
            onClick={() => {
                if (!isDragging) setSidebarActive(!sidebarActive)
            }}
            ref={containerRef}
            className="bg-laranja-principal-500 rounded-full cursor-pointer fixed bottom-4 right-4 w-14 h-14 flex items-center justify-center shadow-lg"
        >
            <img 
                src="/icons/accessibility.svg" 
                alt="Ícone de acessibilidade" 
                className="w-8 h-8"
                draggable={false} // 🚀 Impede o navegador de puxar a imagem
            />
        </motion.div>
    )
}

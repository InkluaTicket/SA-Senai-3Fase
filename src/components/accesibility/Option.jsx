'use client'

import { GlobalContext } from "@/contexts/GlobalContext"
import { useContext } from "react"

export default function Option({ title, icon, onClick, value }) {
    const { readSettings, colorsSettings, navSettings } = useContext(GlobalContext)
    const settings = [...readSettings, ...colorsSettings, ...navSettings]
    const isActive = settings.find(setting => setting.idSetting === value).isActive

    return (
        <button
            className={`flex flex-col rounded-xl border-2 items-start ${isActive ? 'border-laranja-principal-500 bg-laranja-principal-100' : 'border-[#CDD1DB] bg-white'} p-4 gap-4 cursor-pointer`}
            onClick={() => onClick(value)}
        >
            <div className={`${isActive ? 'bg-laranja-principal-500' : 'bg-[#F4F5F7]'} rounded-full w-12 h-12 flex justify-center items-center`}>
                <img src={`/icons/${icon}`} alt="" className="w-7" />
            </div>
            <p className={`text-[14px] font-medium ${isActive ? 'text-laranja-principal-500' : 'text-azul-principal-950'} text-start`}>{title}</p>
        </button>
    )
}

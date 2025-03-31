'use client'

import { useContext, useState } from "react"

export default function Option({ title, icon, onClick, value }) {

    const [bgActive, setBgActive] = useState(false)


    return (
        <button
            className={`flex flex-col rounded-xl border-2 items-start ${bgActive ? 'border-laranja-principal-500' : ' border-[#CDD1DB]'}  ${bgActive ? 'bg-laranja-principal-100' : ' bg-white'} p-4 gap-4 cursor-pointer`}
            onClick={() => { onClick(value) }}
        >
            <div className={`${bgActive ? 'bg-laranja-principal-500' : ' bg-[#F4F5F7]'} rounded-full gap-4 w-12 h-12 flex justify-center items-center`}>
                <img src={`/icons/${icon}`} alt="" className="w-7" />
            </div>
            <p className={`text-[14px] font-medium text-azul-principal-950 ${bgActive ? 'text-laranja-principal-500' : 'text-azul-principal-950'} text-start`}>{title}</p>
        </button>
    )
}

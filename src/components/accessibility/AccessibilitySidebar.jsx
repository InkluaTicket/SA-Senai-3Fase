'use client'

import { useContext } from 'react'
import OutButton from './OutButton'
import Option from './Option'
import { GlobalContext } from '@/contexts/GlobalContext'
import SelectAccebility from './SelectAccessibility'

export default function AccesibilitySidebar() {

    const { toggleSetting, readSettings, colorsSettings, navSettings } = useContext(GlobalContext)

    return (
        <div className='w-6/18 2xl:w-5/18 h-screen bg-white absolute top-0 left-0 flex flex-col'>
            <div className="bg-roxo-principal-600 w-full flex justify-between items-center p-4 pl-6 ">
                <p className='text-white text-[18px]'>
                    Preferências
                </p>
                <OutButton />
            </div>
            <div className=" flex flex-col gap-6 px-6 py-11 overflow-auto">
                <div className="flex flex-col gap-6">
                    <p className='text-azul-principal-950 font-medium text-[18px]'>Leitura e Texto</p>
                    <div className="grid grid-cols-2 gap-3">
                        {readSettings.map((setting) => (
                            <Option key={setting.idSetting} onClick={toggleSetting} value={setting.idSetting} icon={setting.isActive ? setting.iconInvert : setting.icon} title={setting.title} />
                        ))}
                    </div>
                    <hr className='text-[#CDD1DB] border-1' />
                </div>
                <div className="flex flex-col gap-6">
                    <p className='text-azul-principal-950 font-medium text-[18px]'>Leitura e Texto</p>
                    <div className="grid grid-cols-2 gap-3">
                        {colorsSettings.map((setting) => {
                            if(setting.idSetting === 'colorBlindness') {
                                return <SelectAccebility onChange={console.log('oi')} key={setting.idSetting} />
                            }else{
                                return <Option key={setting.idSetting} onClick={toggleSetting} value={setting.idSetting} icon={setting.isActive ? setting.iconInvert : setting.icon} title={setting.title} />
                            }
                        })}
                    </div>
                    <hr className='text-[#CDD1DB] border-1' />
                </div>
                <div className="flex flex-col gap-6">
                    <p className='text-azul-principal-950 font-medium text-[18px]'>Leitura e Texto</p>
                    <div className="grid grid-cols-2 gap-3">
                        {navSettings.map((setting) => (
                            <Option key={setting.idSetting} onClick={toggleSetting} value={setting.idSetting} icon={setting.isActive ? setting.iconInvert : setting.icon} title={setting.title} />
                        ))}
                    </div>
                    <hr className='text-[#CDD1DB] border-1' />
                </div>

            </div>
        </div>
    )
}


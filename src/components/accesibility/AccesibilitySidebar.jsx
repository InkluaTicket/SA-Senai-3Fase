import React from 'react'
import OutButton from './OutButton'
import Option from './Option'

export default function AccesibilitySidebar() {
    return (
        <div className='w-6/18 h-screen bg-white absolute top-0 left-0 flex flex-col'>
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
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                        <Option icon={'AlturaTexto.svg'} title={'Altura da Linha'}/>
                        <Option icon={'EspacamentoLetra.svg'} title={'Espaçamento entre Letras'}/>
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                    </div>
                    <hr className='text-[#CDD1DB] border-1' />
                </div>
                <div className="flex flex-col gap-6">
                    <p className='text-azul-principal-950 font-medium text-[18px]'>Leitura e Texto</p>
                    <div className="grid grid-cols-2 gap-3">
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                    </div>
                    <hr className='text-[#CDD1DB] border-1' />
                </div>
                <div className="flex flex-col gap-6">
                    <p className='text-azul-principal-950 font-medium text-[18px]'>Leitura e Texto</p>
                    <div className="grid grid-cols-2 gap-3">
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                        <Option icon={'TamanhoTexto.svg'} title={'Tamanho do Texto'}/>
                    </div>
                    <hr className='text-[#CDD1DB] border-1' />
                </div>

            </div>
        </div>
    )
}


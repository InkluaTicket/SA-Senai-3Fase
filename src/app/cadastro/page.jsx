import React from 'react'

function page() {
    return (
        <div className="bg-laranja-principal-500 h-screen flex">
            <div className="bg-cinza-principal-50 w-2/5 px-40 flex items-center">
                <div className=" w-full flex flex-col gap-10">
                    <div className="">
                        <div className="flex items-center gap-4">
                            <h1 className='font-semibold text-roxo-pincipal-600 text-5xl font-principal'>Cadastre-se</h1>
                            <img src="./icons/ticket-vazado.svg" alt="" />
                        </div>
                        <p className='font-principal text[16px]'>Todos merecem viver grandes eventos</p>
                    </div>
                    <div className="">
                        <div className="container-input">
                            <label htmlFor="" className='label-crud'>E-mail</label>
                            <input type="text" className='input-crud' />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="container-input">
                                <label htmlFor="" className='label-crud'>Nome</label>
                                <input type="text" className='input-crud' />
                            </div>
                            <div className="container-input">
                                <label htmlFor="" className='label-crud'>Sobrenome</label>
                                <input type="text" className='input-crud' />
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="" className='label-crud'>Senha</label>
                            <input type="text" className='input-crud' />
                        </div>

                        <div className="container-input">
                            <label htmlFor="" className='label-crud'>Confirmar Senha</label>
                            <input type="text" className='input-crud' />
                        </div>
                    </div>
                    <div className="">
                    <button className='bg-roxo-pincipal-600'>
                        Continuar
                    </button>
                    <p>Já possui uma conta?</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end px-6 py-11">
                <img src="./icons/logo-icon-roxo.svg" alt="" />

                <img src="mulher-vazado.svg" alt="" className='w-full' />
            </div>
        </div>
    )
}

export default page
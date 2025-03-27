import React from 'react'

function page() {
    return (
        <div className="bg-laranja-principal-500 h-screen flex">
            <div className="bg-cinza-principal-50 w-3/5 px-40 flex items-center">
                <img src="voltar.svg" className="fixed top-9 left-6 w-10 h-10 " />
                <div className=" w-full flex flex-col gap-7">
                    <div className="gap-3">
                        <div className="flex items-center ">
                            <h1 className='font-semibold text-roxo-principal-600 text-4xl font-principal'>Cadastre-se</h1>
                            <img src="./icons/ticket-vazado.svg" className="w-15 h-15" />
                        </div>
                        <p className='font-principal text[16px]'>Torne seu evento acessível e alcance um novo público. Junte-se à Inklua e faça a diferença!</p>
                    </div>
                    <div className="">
                        <div className="container-input">
                            <label htmlFor="" className='label-crud'>E-mail</label>
                            <input type="text" className='input-crud' />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="container-input">
                                <label htmlFor="" className='label-crud'>Nome da empresa</label>
                                <input type="text" className='input-crud' />
                            </div>
                            <div className="container-input">
                                <label htmlFor="" className='label-crud'>CNPJ</label>
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
                        <button className='btns'>
                            Continuar
                        </button>
                        <p className='bg-white border border-borda-input rounded-lg p-1 h-8  text-center'>Já possui uma conta ?</p>
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
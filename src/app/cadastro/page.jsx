function page() {
    //comentario
    return (
        <div className="bg-laranja-principal-500 h-screen flex font-principal">
            <div className="bg-[#F9FAFC] w-1/2 px-35 flex items-center">


                <div className=" w-full flex flex-col gap-12">
                    <div className="">
                        <div className="flex items-center">
                            <h1 className='font-semibold text-roxo-principal-600 text-6xl flex-nowrap font-principal'>Cadastre-se</h1>
                            <img src="./icons/ticket-vazado.svg" alt="" />
                        </div>
                        <p className='font-principal font-medium text[16px]'>Todos merecem viver grandes eventos</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="container-input">
                            <label htmlFor="" className='label-crud'>E-mail</label>
                            <input type="text" className='input-crud'  placeholder="seunome@exemplo.com"/>
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
                            <input type="password" className='input-crud' />
                        </div>

                        <div className="container-input">
                            <label htmlFor="" className='label-crud'>Confirmar Senha</label>
                            <input type="password" className='input-crud' />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <button className='btn-crud'>
                            Continuar
                        </button>
                        <p className="text-roxo-principal-600 font-semibold text-sm">Já possui uma conta?</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center px-6 py-11 gap-16">
                <div className="w-full flex justify-end">
                    <img src="./icons/logo-icon-roxo.svg" alt="" className='items-end' />
                </div>
                    <img src="mulher-vazado.svg" alt="" className='w-12/16' />
            </div>
        </div>
    )
}

export default page
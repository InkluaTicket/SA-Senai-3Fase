import React from 'react'

function page() {
    return (
        <div className="bg-laranja-principal-500 h-screen flex">
            <div className="bg-cinza-principal-50">
                <div className="">
                    <div className="">
                        <div className="">
                            <h1>Cadastre-se</h1>
                            <img src="./icons/ticket-vazado.svg" alt="" />
                        </div>
                        <p>Todos merecem viver grandes eventos</p>
                    </div>
                    <div className="">
                        <div className="">
                            <label htmlFor="">E-mail</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <label htmlFor="">Nome</label>
                            <input type="text" />
                        </div>
                        <div className="">
                            <label htmlFor="">Sobrenome</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <label htmlFor="">Senha</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <label htmlFor="">Confirmar Senha</label>
                            <input type="text" />
                        </div>
                    </div>
                    <button className='bg-roxo-pincipal-600'>
                        Continuar
                    </button>
                    <p>Já possui uma conta?</p>
                </div>
            </div>
            <div className="">
                <img src="mulher-vazado.svg" alt="" />
            </div>
        </div>
    )
}

export default page
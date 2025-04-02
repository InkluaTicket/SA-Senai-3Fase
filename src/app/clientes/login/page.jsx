"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { use, useContext } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { GlobalContext } from "@/contexts/GlobalContext"

// Esquema de validação com Zod
const schema = z.object({
    email: z.string().email("E-mail inválido"),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
})

function Page() {

    const {nome} = useContext(GlobalContext)

    // Configuração do formulário com react-hook-form e Zod
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    // Função de envio do formulário (será usada para chamar a API futuramente)
    const onSubmit = (data) => {
        localStorage.setItem('cliente-login', JSON.stringify(data))
        // Aqui será feita a requisição para a API de cadastro
    }

    return (
        <div className="bg-laranja-principal-500 h-screen flex font-principal">
            {/* Container do formulário */}
            <div className="bg-[#F9FAFC] w-1/2 flex flex-col items-center p-6">
                <div className="w-full flex justify-start items-center">
                    <img src="/icons/out_icon.svg" alt="Ícone de saída" className="h-8 2xl:h-7 cursor-pointer" />
                </div>

                {/* Formulário de cadastro */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-6/10 flex flex-col gap-10 2xl:gap-24            my-auto">
                    <div>
                        <div className="flex justify-start items-center">
                            <h1 className='font-semibold text-roxo-principal-600 text-6xl 2xl:text-5xl font-principal flex-nowrap'>
                                É bom te ver Novamente
                            </h1>
                        </div>
                        <p className='font-principal font-medium text-[16px]'>
                            Seu lugar está reservado
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        {/* Campo de E-mail */}
                        <div className="container-input">
                            <label htmlFor="email" className='label-crud'>E-mail</label>
                            <input id="email" type="text" className='input-crud' placeholder="seunome@exemplo.com" {...register("email")} />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        {/* Campo de Senha */}
                        <div className="container-input">
                            <label htmlFor="senha" className='label-crud'>Senha</label>
                            <input id="senha" type="password" className='input-crud' {...register("senha")} />
                            {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
                        </div>

                        {/* Botão de envio */}
                        <div className="flex flex-col justify-center items-center gap-3 mt-5">
                            <button type="submit" className='btn-crud'>
                                Continuar
                            </button>
                            <Link href="/cadastro" className="text-roxo-principal-600 font-semibold text-sm cursor-pointer">
                                Não possui uma conta?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>

            {/* Seção da imagem lateral */}
            <div className="flex flex-col justify-start items-center px-6 py-11 gap-16 w-1/2">
                <div className="w-full flex justify-end">
                    <img src="/icons/logo-icon-roxo.svg" alt="Logo" className='h-6' />
                </div>
                <div className="flex-grow">
                    <img src="/mulher-vazado.svg" alt="Imagem de mulher" className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default Page

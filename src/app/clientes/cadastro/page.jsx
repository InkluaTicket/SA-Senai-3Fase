"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"


function Page() {
    // Esquema de validação com Zod
    const schema = z.object({
        email: z.string().email("E-mail inválido"),
        // Validação de e-mail único (exemplo, não implementado)
        // email: z.string().email("E-mail inválido").refine(async (value) => {
        //     const response = await fetch(`/api/validar-email?email=${value}`);
        nome: z.string().min(2, "Nome muito curto"),
        sobrenome: z.string().min(2, "Sobrenome muito curto"),
        senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
        confirmarSenha: z.string()
    }).refine((data) => data.senha === data.confirmarSenha, {
        message: "As senhas não coincidem",
        path: ["confirmarSenha"]
    })

    // Configuração do formulário com react-hook-form e Zod
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    // Função de envio do formulário (será usada para chamar a API futuramente)
    const onSubmit = (data) => {
        localStorage.setItem('cliente', JSON.stringify(data))
        // Aqui será feita a requisição para a API de cadastro
    }

    return (
        <div className="bg-laranja-principal-500 h-screen flex font-principal">
            {/* Container do formulário */}
            <div className="bg-[#F9FAFC] w-1/2 flex flex-col items-center p-6">
                <div className="w-full flex justify-start items-center">
                    <img src="/icons/out_icon.svg" alt="Ícone de saída" className="h-6 2xl:h-7 cursor-pointer" />
                </div>

                {/* Formulário de cadastro */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-6/10 flex flex-col gap-10 2xl:gap-12 my-auto">
                    <div>
                        <div className="flex justify-start items-center">
                            <h1 className='font-semibold text-roxo-principal-600 text-4xl 2xl:text-6xl font-principal'>
                                Cadastre-se
                            </h1>
                            <img src="/icons/ticket-vazado.svg" alt="Ícone de ticket" className="h-16" />
                        </div>
                        <p className='font-principal font-medium text-[14px] 2xl:text-[16px]'>
                            Todos merecem viver grandes eventos
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        {/* Campo de E-mail */}
                        <div className="container-input">
                            <label htmlFor="email" className='label-crud'>E-mail</label>
                            <input id="email" type="text" className='input-crud' placeholder="seunome@exemplo.com" {...register("email")} />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        {/* Campos de Nome e Sobrenome */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="container-input">
                                <label htmlFor="nome" className='label-crud'>Nome</label>
                                <input id="nome" type="text" className='input-crud' {...register("nome")} />
                                {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
                            </div>
                            <div className="container-input">
                                <label htmlFor="sobrenome" className='label-crud'>Sobrenome</label>
                                <input id="sobrenome" type="text" className='input-crud' {...register("sobrenome")} />
                                {errors.sobrenome && <p className="text-red-500 text-sm">{errors.sobrenome.message}</p>}
                            </div>
                        </div>

                        {/* Campo de Senha */}
                        <div className="container-input">
                            <label htmlFor="senha" className='label-crud'>Senha</label>
                            <input id="senha" type="password" className='input-crud' {...register("senha")} />
                            {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
                        </div>

                        {/* Campo de Confirmação de Senha */}
                        <div className="container-input">
                            <label htmlFor="confirmarSenha" className='label-crud'>Confirmar Senha</label>
                            <input id="confirmarSenha" type="password" className='input-crud' {...register("confirmarSenha")} />
                            {errors.confirmarSenha && <p className="text-red-500 text-sm">{errors.confirmarSenha.message}</p>}
                        </div>

                        {/* Botão de envio */}
                        <div className="flex flex-col justify-center items-center gap-3 mt-5">
                            <button type="submit" className='btn-crud'>
                                Continuar
                            </button>
                            <Link href="/login" className="text-roxo-principal-600 font-semibold text-sm 2xl:text-base cursor-pointer">
                                Já possui uma conta?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>

            {/* Seção da imagem lateral */}
            <div className="flex flex-col justify-start items-center px-6 py-11 w-1/2">
                <div className="w-full h-1/16 flex justify-end">
                    <img src="/icons/logo-icon-roxo.svg" alt="Logo" className='h-4 2xl:h-6' />
                </div>
                <div className="flex justify-center items-center w-4/5  h-15/16">
                    <img src="/mulher-vazado.svg" alt="Imagem de mulher" className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default Page

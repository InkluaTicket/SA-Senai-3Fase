'use client'

export default function PaidTickets() {


    return (

        <>

            <div className="flex justify-center items-center h-screen">

                <div className="flex flex-col items-center shadow-[0px_4px_10px_rgba(0,0,0,0.2)] w-[600px] h-[700px] p-6 bg-white rounded-lg" >



                    <div className="flex items-center space-x-2">

                        <h1 className="text-xl">Criar ingresso <span className="text-roxo-principal-600 font-bold">pago</span></h1>
                        <img className=" h-[20px]" src="/icons/IngressoRoxo.svg" alt="" />

                    </div>


                    <div className="py-1 px-1 mt-3 text-center text-[11px]  border-2 border-gray-300 w-10/10 bg-cinza-principal-100 rounded-[3px]">

                        <p className="text-gray-700"> A <span className="font-semibold">taxa de serviço é repassada ao comprador</span>, sendo exibida junto com o valor do ingresso </p>

                    </div>

                    <div className="">

                      <div className="">
                        
                        <input type="text" name="" id="" />

                      </div>

                      <div className="">

                       <input type="text" name="" id="" />
                         
                      </div>

                    </div>

                </div>

            </div>





        </>

    )

}
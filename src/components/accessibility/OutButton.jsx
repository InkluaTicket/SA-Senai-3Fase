import { GlobalContext } from '@/contexts/GlobalContext'
import { useContext } from 'react'

export default function OutButton() {
  const { sidebarActive, setSidebarActive } = useContext(GlobalContext)
  return (
    <button className='bg-roxo-principal-500 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
    onClick={() => setSidebarActive(!sidebarActive)}
    >
      <img src="/icons/x.svg" alt="" className='h-3'/>
    </button>
  )
}

import React from 'react'
import Menu from '../Menu'
import userImg from '../../assets/363282815_1339483236651947_5676470148020067127_n.jpg'

export default function Header() {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <button variant="ghost" size="icon" className="mr-2">
          {/* <ArrowLeft className="h-6 w-6" /> */}
        </button>
        <span className="text-lg font-semibold">Details</span>
      </div>

      <div className="flex flex-col text-center gap-4 items-center mb-6">
       <img className='rounded-[20px]' src={userImg} alt="" />
        <div>
          <h2 className="text-xl font-bold">DAVID ILES</h2>
          <p className="text-gray-400">Barbero</p>
        </div>
      </div>
    
    <Menu/>

      {/* <div className="grid grid-cols-3 gap-4 text-gray-500">
        <button variant="outline" className="flex flex-col items-center py-2  ">
      
          <span className="">Disponibilidad ahora: </span>
        </button>
        <button variant="outline" className="flex flex-col items-center py-2">
      
          <span className="">Agenda</span>
        </button>
        <button variant="outline" className="flex flex-col items-center py-2">
         
          <span className="">Gallery</span>
        </button>
      </div> */}
      
    </div>
  )
}
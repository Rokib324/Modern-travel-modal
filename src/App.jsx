import React, { useState } from 'react'
import Bg from './components/Bg'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <Bg />
    <div className='h-screen centerChild'>
      {/* Button */}
      <button onClick={() => setShowModal(true)} className='relative cursor-pointer group overflow-hidden py-3 perspective-midrange'>
        <div className='bg-zinc-700 px-7 py-3 border-dotted border-[3px] border-cyan-500 bg-clip-padding rounded-lg hover:-rotate-y-[25deg] duration-500 transition-transform'>
          <span className='text-white text-2xl group-hover:opacity-0 group-hover:-translate-y-24 transition-all duration-300 block group-hover:delay-75 delay-300'>Book a flight</span>
          <span className='absolute h-[2px] w-full border border-dashed border-white left-0 top-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-right group-hover:delay-200'/>
          <img src="/plane.png" alt="plane" className='absolute top-1/2 -left-28 -translate-y-1/2 group-hover:left-20 group-hover:transition-all group-hover:delay-500 group-hover:duration-500'/>
        </div>
      </button>
      <div className={`centerChild absolute w-full h-full bg-fuchsia-200/50 -z-10 opacity-0 invisible transition-opacity ${showModal && '!opacity-100 !visible !z-10'}`}>
      {/* Modal */}
      <div className='relative w-[730px] h-[600px] bg-white rounded-3xl'>
        {/* close button */}
        <button onClick={() => setShowModal(false)} className='absolute top-4 right-5 cursor-pointer hover:scale-110 transition-transform duration-300'>
          <img src="/cancel.png" alt="close" width={25} />
        </button>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
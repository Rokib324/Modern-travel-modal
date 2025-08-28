import React from 'react'
import Bg from './components/Bg'

const App = () => {
  return (
    <>
    <Bg />
    <div className='h-screen centerChild'>
      <button className='relative cursor-pointer group overflow-hidden py-3 perspective-midrange'>
        <div className='bg-zinc-700 px-7 py-3 border-dotted border-[3px] border-cyan-500 bg-clip-padding rounded-lg hover:-rotate-y-[25deg] duration-500 transition-transform'>
          <span className='text-white text-2xl group-hover:opacity-0 group-hover:-translate-y-24 transition-all duration-300 block group-hover:delay-75 delay-300'>Book a flight</span>
          <span className='absolute h-[2px] w-full border border-dashed border-white left-0 top-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-right group-hover:delay-200'/>
          <img src="/plane.png" alt="plane" className='absolute top-1/2 -left-28 -translate-y-1/2 group-hover:left-20 group-hover:transition-all group-hover:delay-500 group-hover:duration-500'/>
        </div>
      </button>
    </div>
    </>
  )
}

export default App
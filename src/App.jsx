import React, { useState, useRef, useEffect } from 'react'
import Bg from './components/Bg'
import { images, flightOffers } from './data'

const getRandomNumber = () => Math.floor(Math.random() * 41)-20;

const App = () => {
  const modalWrapperRef = useRef(null)
  const [showModal, setShowModal] = useState(false)

  const handleClickOutside = (event) => {
    if(modalWrapperRef.current === event.target) {
      setShowModal(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  },[])

  return (
    <>
    <Bg />
    <div className='h-screen centerChild'>
      {/* Button */}
      <button onClick={() => setShowModal(true)} className={`relative cursor-pointer group overflow-hidden py-3 perspective-midrange ${showModal ? 'overflow-visible -rotate-y-[25deg]' : 'overflow-hidden'}`}>
        <div className='bg-zinc-700 px-7 py-3 border-dotted border-[3px] border-cyan-500 bg-clip-padding rounded-lg hover:-rotate-y-[25deg] duration-500 transition-transform'>
          <span className= {`text-white text-2xl group-hover:opacity-0 group-hover:-translate-y-24 transition-all duration-300 block group-hover:delay-75 ${showModal ? 'delay-0' : 'delay-300'}`}>Book a flight</span>
          <span className='absolute h-[2px] w-full border border-dashed border-white left-0 top-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-right group-hover:delay-200'/>
          <img src="/plane.png" alt="plane" className={`absolute top-1/2 -left-28 -translate-y-1/2 group-hover:left-20 group-hover:transition-all group-hover:delay-500 group-hover:duration-500 ${showModal && 'transition-all !left-44 !scale-200 !opacity-0 !delay-[0s]'}`}/>
        </div>
      </button>
      {/* Modal wrapper */}
      <div ref={modalWrapperRef} className={`centerChild absolute w-full h-full bg-fuchsia-200/50 -z-10 opacity-0 invisible transition-opacity ${showModal && '!opacity-100 !visible !z-10 delay-500'}`}>
      {/* Modal */}
      <div className='centerChild flex-col gap-y-8 relative w-[730px] h-[600px] bg-white rounded-3xl'>
        {/* close button */}
        <button onClick={() => setShowModal(false)} className='absolute top-4 right-5 cursor-pointer hover:scale-110 transition-transform duration-300'>
          <img src="/cancel.png" alt="close" width={25} />
        </button>
        {/* Modal content */}
        <h1 className='centerChild gap-x-3 text-3xl font-semibold'>Book your trip around the { " "}
        <div className='globewrapper relative'>
          <div className='globe'></div>
          <img src="/plane.png" alt="plane" className={`absolute top-1/2 right-52 -translate-y-1/2 scale-40 ${showModal && '!right-2 !scale-100 transition-all duration-500 delay-500 opacity-100'}`}/>
        </div>
        </h1>
        {/* Gallery */}
        <div className='centerChild gap-6'>
          {images.map((img, index) => (
            <img src={img} alt="gallery" key={index} className='w-32 aspect-square object-cover rounded-3xl opacity-80 hover:z-10 hover:opacity-100 hover:scale-125 border-[3px] border-cyan-500 border-dotted transition-all duration-300' style={{transform:`rotate(${getRandomNumber()}deg)`}}/>
          ))}
        </div>
        {/* Flight offers */}
        <div className='grid grid-cols-2 gap-3 w-full px-10'>
          {flightOffers.map((offer, index) => (
            <p key={index} className='text-xl font-medium text-gray-600'>
              {offer}
            </p>
          ))}
        </div>
        {/* Buttons */}
        <div className='absolute bottom-4 right-4 space-x-2'>
          <button className='bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-all duration-300'>Book now</button>
          <button onClick={() => setShowModal(false)} className='bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-all duration-300'>Cancel</button>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='min-w-[20rem] max-w-[20rem] border-2 border-white/30 hover:border-blue-600 backdrop-blur-sm rounded-xl p-6 flex flex-col items-start space-y-4'>
        <Image src="/closeup-cinematic-film-frame.png" alt="if" width={300} height={300} />
        <h1 className='text-white font-anton text-2xl'>Hello</h1>
        <p className='text-white font-sans '>This is a description of the card.</p>
    </div>
  )
}

export default Card
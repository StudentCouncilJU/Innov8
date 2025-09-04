import Image from 'next/image'
import React from 'react'

interface CardProps {
  name: string;
  description: string;
  link: string;
  image: string;
}

const Card = ({name, description, link, image}: CardProps) => {
  return (
    <div className='min-w-[20rem] max-w-[20rem] border-2 border-white/30 hover:border-blue-600 backdrop-blur-sm rounded-xl p-6 flex flex-col items-start space-y-4'>
        <Image src={image} alt={name} width={300} height={300} />
        <h1 className='text-white font-anton text-2xl uppercase'>{name}</h1>
        {/* <p className='text-white font-sans '>{description}</p> */}
        <div className='w-full flex justify-between'>
          <button className='bg-blue-600 text-white border-blue-600 border-2 hover:bg-transparent hover:border-white duration-300 cursor-pointer font-anton tracking-wide py-2 px-5 rounded-full'>Register</button>
          <button className='bg-blue-600 text-white border-blue-600 border-2 hover:bg-transparent hover:border-white duration-300 cursor-pointer font-anton tracking-wide py-2 px-5 rounded-full'>Learn More</button>
        </div>
    </div>
  )
}

export default Card
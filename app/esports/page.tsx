import Card from '@/components/domainscomponents/Card'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full pt-8 flex flex-col items-center h-screen bg-black'>
            <h1 className='text-white uppercase font-anton text-[20rem]  '>Esports</h1>
             <div className="w-full bg-[#23D3ED] p-4 flex gap-3 items-center justify-between">
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider">
            BGMI
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider">
            Valorant
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider">
            Tekken
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider">
            Fifa
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
        </div>
<div className='w-full px-8 py-4 flex mt-20 flex-wrap gap-7'>
    <Card name="BGMI" description="Description for Card 1" link="#" image="/posters/2.jpg" />
    <Card name="Valorant" description="Description for Card 2" link="#" image="/posters/3.jpg" />
    <Card name="Tekken" description="Description for Card 3" link="#" image="/posters/5.jpg" />
    <Card name="Fifa" description="Description for Card 4" link="#" image="/posters/8.jpg" />
</div>
        </div>

    </div>
  )
}

export default page
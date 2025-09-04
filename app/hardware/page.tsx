import Card from '@/components/domainscomponents/Card'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full pt-8 flex flex-col items-center h-screen bg-black'>
            <h1 className='text-white uppercase font-anton text-[20rem]  '>Hardware</h1>
             <div className="w-full bg-[#23D3ED] p-4 flex gap-3 items-center justify-between">
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider">
            Robo War (3lbs, 8kg, 15kg)
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider">
            Robo Soccer
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider">
            Robo Rush
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider">
            Go-Karting
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
        </div>
<div className='w-full px-8 py-4 flex mt-20 flex-wrap gap-7'>
    <Card name="Robo War (3lbs, 8kg, 15kg)" description="Description for Card 1" link="#" image="/sections/software.jpeg" />
    <Card name="Robo Soccer" description="Description for Card 2" link="#" image="/sections/hardware.jpeg" />
    <Card name="Robo Rush" description="Description for Card 3" link="#" image="/sections/esports.jpeg" />
    <Card name="Go-Karting" description="Description for Card 4" link="#" image="/sections/other.jpeg" />
</div>
        </div>

    </div>
  )
}

export default page
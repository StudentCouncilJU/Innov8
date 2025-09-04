import Card from '@/components/domainscomponents/Card'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full pt-8 flex flex-col items-center h-screen bg-black'>
            <h1 className='text-white uppercase font-anton text-[20rem]  '>Hardware</h1>
<div className='w-full px-8 py-4 flex flex-wrap gap-7'>
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
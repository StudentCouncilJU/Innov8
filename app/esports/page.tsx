import Card from '@/components/domainscomponents/Card'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full pt-8 flex flex-col items-center h-screen bg-black'>
            <h1 className='text-white uppercase font-anton text-[20rem]  '>Esports</h1>
<div className='w-full px-8 py-4 flex flex-wrap gap-7'>
    <Card name="BGMI" description="Description for Card 1" link="#" image="/posters/2.png" />
    <Card name="Valorant" description="Description for Card 2" link="#" image="/posters/3.png" />
    <Card name="Tekken" description="Description for Card 3" link="#" image="/posters/4.png" />
    <Card name="Fifa" description="Description for Card 4" link="#" image="/posters/5.png" />
</div>
        </div>

    </div>
  )
}

export default page
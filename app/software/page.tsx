import Card from '@/components/domainscomponents/Card'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full pt-8 flex flex-col items-center h-screen bg-black'>
            <h1 className='text-white uppercase font-anton text-[20rem]  '>Software</h1>
<div className='w-full px-8 py-4 flex flex-wrap gap-7'>
    <Card />
    <Card />
    <Card />
    <Card />
</div>
        </div>

    </div>
  )
}

export default page
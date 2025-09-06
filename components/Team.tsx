import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div className='min-h-screen w-full relative bg-[#0227F0] pt-28 md:pt-8 text-white overflow-visible'>
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Text at top for mobile */}
        <div className="text-center mb-8">
          <h1 className="font-extrabold uppercase font-anton leading-none tracking-wide text-[30vw] md:text-[20vw]">Team</h1>
        </div>
        
        {/* Team members in vertical column for mobile */}
        <div className="flex flex-col items-center gap-6 px-4">
          <div className="flex flex-col items-center">
            <Image 
              src="/team/bhagvanth_dance.gif" 
              alt="Team Member 1" 
              width={120} 
              height={200}
              className="w-[40vw] h-[60vw] object-contain"
            />
            <p className="text-white text-lg font-semibold mt-2">Bhagvanth</p>
          </div>
          <div className="flex flex-col items-center">
            <Image 
              src="/team/bhagvanth_dance.gif" 
              alt="Team Member 2" 
              width={120} 
              height={200}
              className="w-[40vw] h-[60vw] object-contain"
            />
            <p className="text-white text-lg font-semibold mt-2">Member 2</p>
          </div>
          <div className="flex flex-col items-center">
            <Image 
              src="/team/rahil_dance.gif" 
              alt="Team Member 3" 
              width={120} 
              height={200}
              className="w-[40vw] h-[60vw] object-contain"
            />
            <p className="text-white text-lg font-semibold mt-2">Rahil</p>
          </div>
          <div className="flex flex-col items-center">
            <Image 
              src="/team/sabika_dance.gif" 
              alt="Team Member 4" 
              width={120} 
              height={200}
              className="w-[40vw] h-[60vw] object-contain"
            />
            <p className="text-white text-lg font-semibold mt-2">Sabika</p>
          </div>
          <div className="flex flex-col items-center">
            <Image 
              src="/team/rahil_dance.gif" 
              alt="Team Member 5" 
              width={120} 
              height={200}
              className="w-[40vw] h-[60vw] object-contain"
            />
            <p className="text-white text-lg font-semibold mt-2">Praveen</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-end items-center min-h-screen">
        {/* Team Images positioned above each letter */}
        <div className="absolute right-0 w-full flex justify-end items-end overflow-visible">
          <div className="relative flex items-end justify-center gap-[3vw] lg:gap-[5vw] pr-2 md:pr-4 lg:pr-8">
            {/* Image above T */}
            <div className="flex flex-col items-center">
              <Image 
                src="/team/bhagvanth_dance.gif" 
                alt="Team Member 1" 
                width={120} 
                height={200}
                className="w-[9vw] sm:h-[15vw] md:w-[30vw] md:h-[45vw] object-contain"
              />
              <p className="text-white text-sm md:text-base lg:text-lg font-semibold mt-1">Bhagvanth</p>
            </div>
            
            {/* Image above E */}
            <div className="flex flex-col items-center">
              <Image 
                src="/team/bhagvanth_dance.gif" 
                alt="Team Member 2" 
                width={120} 
                height={200}
                className="w-[9vw] sm:h-[15vw] md:w-[30vw] md:h-[45vw] object-contain"
              />
              <p className="text-white text-sm md:text-base lg:text-lg font-semibold mt-1">Member 2</p>
            </div>
            
            {/* Image above A */}
            <div className="flex flex-col items-center">
              <Image 
                src="/team/rahil_dance.gif" 
                alt="Team Member 3" 
                width={120} 
                height={200}
                className="w-[9vw] sm:h-[15vw] md:w-[30vw] md:h-[45vw] object-contain"
              />
              <p className="text-white text-sm md:text-base lg:text-lg font-semibold mt-1">Rahil</p>
            </div>
            
            {/* Images above M (2 people side by side) */}
            <div className="flex flex-col items-center">
              <Image 
                src="/team/sabika_dance.gif" 
                alt="Team Member 4" 
                width={120} 
                height={200}
                className="w-[9vw] sm:h-[15vw] md:w-[30vw] md:h-[45vw] object-contain"
              />
              <p className="text-white text-sm md:text-base lg:text-lg font-semibold mt-1">Sabika</p>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src="/team/rahil_dance.gif" 
                alt="Team Member 5" 
                width={120} 
                height={200}
                className="w-[9vw] sm:h-[15vw] md:w-[30vw] md:h-[45vw] object-contain"
              />
              <p className="text-white text-sm md:text-base lg:text-lg font-semibold mt-1">Praveen</p>
            </div>
          </div>
        </div>
        
        <h1 className="font-extrabold uppercase font-anton leading-none tracking-wide text-[44vw]">Team</h1>

        {/* team members */}
        {/* <div className=" space-y-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 w-64">
            <div className="w-12 h-12 bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
              <Image 
                src="/team/bhagvanth_dance.gif" 
                alt="Member 1" 
                width={48} 
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">John Doe</h3>
              <p className="text-white/70 text-xs">Developer</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 w-64">
            <div className="w-12 h-12 bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
              <Image 
                src="/team/rahil_dance.gif" 
                alt="Member 2" 
                width={48} 
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Jane Smith</h3>
              <p className="text-white/70 text-xs">Designer</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 w-64">
            <div className="w-12 h-12 bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
              <Image 
                src="/team/sabika_dance.gif" 
                alt="Member 3" 
                width={48} 
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Mike Johnson</h3>
              <p className="text-white/70 text-xs">Manager</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 w-64">
            <div className="w-12 h-12 bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
              <Image 
                src="/team/praveen_dance.gif" 
                alt="Member 4" 
                width={48} 
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Sarah Wilson</h3>
              <p className="text-white/70 text-xs">Coordinator</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Team
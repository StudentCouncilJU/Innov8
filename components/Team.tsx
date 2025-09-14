import Image from 'next/image'
import React from 'react'

const Team = () => {
  const teamMembers = [
    { name: "Bhagvanth", position: "President", image: "/team/bhagvanth_dance.gif", isCore: true },
    { name: "Rahil", position: "Vice President", image: "/team/rahil_dance.gif", isCore: true },
    { name: "Sabika", position: "Secretary", image: "/team/sabika_dance.gif", isCore: true },
    { name: "Praveen", position: "Technical Lead", image: "/team/praveen_dance.gif", isCore: true },
    { name: "Aman", position: "Creative Head", image: "/team/bhagvanth_dance.gif", isCore: true },
    { name: "Member 6", position: "Developer", image: "/team/rahil_dance.gif", isCore: false },
    { name: "Member 7", position: "Designer", image: "/team/sabika_dance.gif", isCore: false },
    { name: "Member 8", position: "Coordinator", image: "/team/praveen_dance.gif", isCore: false },
    { name: "Member 9", position: "Manager", image: "/team/bhagvanth_dance.gif", isCore: false },
    { name: "Member 10", position: "Volunteer", image: "/team/rahil_dance.gif", isCore: false },
  ];

  return (
    <div className='min-h-screen w-full relative bg-[#0227F0] pt-28 md:pt-8 text-white overflow-visible'>
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Text at top for mobile */}
        <div className="text-center mb-8">
          <h1 className="font-extrabold uppercase font-anton leading-none tracking-wide text-[30vw] md:text-[20vw]">Team</h1>
        </div>
        
        {/* Team members cards for mobile */}
        <div className="flex flex-col items-center gap-4 px-4 pb-8">
          {/* Core team members - bigger cards */}
          {teamMembers.filter(member => member.isCore).map((member, index) => (
            <div key={index} className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-4">
              <Image 
                src={member.image} 
                alt={member.name} 
                width={100} 
                height={120}
                className="w-24 h-32 rounded-xl object-cover border-2 border-white/30"
              />
              <div className="flex-1">
                <h3 className="text-white font-anton text-xl uppercase tracking-wide">{member.name}</h3>
                <p className="text-white/80 text-sm mt-1">{member.position}</p>
              </div>
            </div>
          ))}
          
          {/* Regular team members - smaller cards */}
          {teamMembers.filter(member => !member.isCore).map((member, index) => (
            <div key={index} className="w-full max-w-xs bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-3">
              <Image 
                src={member.image} 
                alt={member.name} 
                width={80} 
                height={100}
                className="w-20 h-28 rounded-lg object-cover border-2 border-white/30"
              />
              <div className="flex-1">
                <h3 className="text-white font-anton text-lg uppercase tracking-wide">{member.name}</h3>
                <p className="text-white/80 text-xs mt-1">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Large TEAM title */}
        <div className="text-center mb-12">
          <h1 className="font-extrabold uppercase font-anton leading-none tracking-wide text-[44vw]">Team</h1>
        </div>
        
        {/* Team Cards */}
        <div className="flex items-center justify-center pb-8">
          <div className="grid grid-cols-2 lg:grid-cols-5  gap-6  mx-auto px-8">
            {/* Core team members - bigger cards (first 5) */}
            {teamMembers.filter(member => member.isCore).map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={160} 
                  height={200}
                  className="w-40 h-52 rounded-2xl object-cover border-4 border-white/30 mb-4"
                />
                <h3 className="text-white font-anton text-2xl uppercase tracking-wide mb-2">{member.name}</h3>
                <p className="text-white/80 text-base">{member.position}</p>
              </div>
            ))}
            
            {/* Regular team members - smaller cards */}
            {teamMembers.filter(member => !member.isCore).map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={120} 
                  height={140}
                  className="w-28 h-36 rounded-xl object-cover border-2 border-white/30 mb-3"
                />
                <h3 className="text-white font-anton text-lg uppercase tracking-wide mb-1">{member.name}</h3>
                <p className="text-white/80 text-sm">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
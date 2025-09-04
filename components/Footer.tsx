import React from 'react'

const Footer = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        style={{
          minWidth: '100vw',
          minHeight: '100vh',
          width: '100vw',
          height: '100vh',
        }}
      >
        <source src="/if.mp4" type="video/mp4" />
        {/* <source src="/vid2.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-end justify-between min-h-screen px-6">
        <div className='text-white/40 stroke-2 stroke-amber-300 text-3xl md:text-[10rem] uppercase -mb-15  font-big-shoulders-extrabold tracking-wider'>
            Ju Innov8'25
        </div>
        {/* Collaboration Form */}
        <div className="bg-white/30 backdrop-blur-sm rounded-t-full p-8 md:p-12 max-w-[25rem] w-full shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-3xl  uppercase font-impact tracking-wide text-white mb-6">
              Find US!
            </h1>
            
            {/* Google Maps */}
            <div className="mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2139788935817!2d77.70644431482252!3d12.956673990859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11b5f6b4e7a7%3A0x4c9f8b4c4c8b0e5d!2s60%20Feet%20Rd%2C%20OMBR%20Layout%2C%20Banaswadi%2C%20Bengaluru%2C%20Karnataka%20560043!5e0!3m2!1sen!2sin!4v1693401234567!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>

            {/* Instagram Links */}
            <div className="space-y-3">
              <a 
                href="https://instagram.com/your_account_1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white font-impact tracking-widest text-center py-3 px-4 font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                @your_account_1
              </a>
              <a 
                href="https://instagram.com/your_account_2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white font-impact tracking-widest text-center py-3 px-4 font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                @your_account_2
              </a>
              <a 
                href="https://instagram.com/your_account_3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white font-impact tracking-widest text-center py-3 px-4 font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                @your_account_3
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
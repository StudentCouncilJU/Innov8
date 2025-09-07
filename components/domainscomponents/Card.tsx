// import Image from 'next/image'
// import React from 'react'

// interface CardProps {
//   name: string;
//   description: string;
//   link: string;
//   image: string;
// }

// const Card = ({name}: CardProps) => {
//   return (
//     <div className='min-w-[20rem] max-w-[20rem] border-2 border-white/30 hover:border-blue-600 backdrop-blur-sm rounded-xl p-6 flex flex-col items-start space-y-4'>
//         <Image src={"/posters/2.jpg"} alt={name} width={300} height={300} />
//         <h1 className='text-white font-anton text-2xl uppercase'>{name}</h1>
//         {/* <p className='text-white font-sans '>{description}</p> */}
//         <div className='w-full flex justify-between'>
//           <button className='bg-blue-600 text-white border-blue-600 border-2 hover:bg-transparent hover:border-white duration-300 cursor-pointer font-anton tracking-wide py-2 px-5 rounded-full'>Register</button>
//           <button className='bg-blue-600 text-white border-blue-600 border-2 hover:bg-transparent hover:border-white duration-300 cursor-pointer font-anton tracking-wide py-2 px-5 rounded-full'>Learn More</button>
//         </div>
//     </div>
//   )
// }

// export default Card
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface CardProps {
  name: string;
  description: string;
  link: string;
  image: string;
}

const Card = ({ name, description, link, image }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        className="min-w-[16rem] sm:min-w-[20rem] max-w-[16rem] sm:max-w-[20rem] border-2 border-white/30 hover:border-blue-600 backdrop-blur-sm rounded-xl p-4 sm:p-6 flex flex-col items-start space-y-3 sm:space-y-4"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={image || "/posters/2.jpg"}
          alt={name}
          width={300}
          height={300}
          className="rounded-lg w-full object-cover"
        />
        <h1 className="text-white font-anton text-xl sm:text-2xl uppercase">{name}</h1>

        <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between">
          <Link
            href={"https://pages.razorpay.com/innovate25"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="bg-blue-600 text-white border-blue-600 border-2 hover:bg-transparent hover:border-white duration-300 cursor-pointer font-anton tracking-wide py-2 px-4 sm:px-5 rounded-full text-sm sm:text-base w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.button>
          </Link>
          <motion.button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="bg-blue-600 text-white border-blue-600 border-2 hover:bg-transparent hover:border-white duration-300 cursor-pointer font-anton tracking-wide py-2 px-4 sm:px-5 rounded-full text-sm sm:text-base w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsModalOpen(false);
              }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-black backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-8 max-w-sm sm:max-w-2xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-y-auto mx-2 sm:mx-0"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => {
                  setIsModalOpen(false);
                }}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white/70 hover:text-white text-xl sm:text-2xl font-bold w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>

              {/* Modal Header */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="mb-4 sm:mb-6"
              >
                <h2 className="text-white font-anton text-2xl sm:text-3xl uppercase mb-3 sm:mb-4">
                  {name}
                </h2>
                <div className="w-full h-48 sm:h-64 relative rounded-lg overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src={image || "/posters/2.jpg"}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Modal Body */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-blue-400 font-anton text-lg sm:text-xl mb-2">
                    Description
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                    {"Coming Soon..."}
                  </p>
                </div>

                {/* <div>
                  <h3 className="text-blue-400 font-anton text-xl mb-2">Event Details</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Duration: Full Day Event</li>
                    <li>• Registration Required</li>
                    <li>• Certificates Provided</li>
                    <li>• Networking Opportunities</li>
                  </ul>
                </div> */}

                {/* {link && (
                  <div>
                    <h3 className="text-blue-400 font-anton text-xl mb-2">More Information</h3>
                    <Link
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Visit Event Page →
                    </Link>
                  </div>
                )} */}
              </motion.div>

              {/* Modal Footer */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
              >
                <Link
                  href={"https://pages.razorpay.com/innovate25"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="bg-blue-600 text-white border-blue-600 border-2 hover:bg-transparent hover:border-white duration-300 cursor-pointer font-anton tracking-wide py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now
                  </motion.button>
                </Link>
                <motion.button
                  onClick={closeModal}
                  className="bg-transparent text-white border-white/30 border-2 hover:border-white duration-300 cursor-pointer font-anton tracking-wide py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;

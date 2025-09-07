import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
          width: "100vw",
          height: "100vh",
        }}
      >
        <source src="/innov8.webm" type="video/webm" />
        {/* <source src="/vid2.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div className="relative z-10 flex items-end justify-between md:items-end md:justify-center min-h-screen px-6">
        <div className="text-white/40 hidden md:block stroke-2 stroke-amber-300 text-3xl md:text-[10rem] uppercase -mb-15  font-big-shoulders-extrabold tracking-wider">
          Ju Innov8 3.0
        </div>
        {/* Collaboration Form */}
        <div className="bg-white/30 backdrop-blur-sm mx-auto rounded-t-full px-8 md:px-12 pt-8 md:pt-12 max-w-[25rem] w-full shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8 flex flex-col gap-3 h-full justify-between items-center">
            <h1 className="text-xl md:text-3xl w-full  uppercase font-anton tracking-wide text-white mb-6">
              Find US!
            </h1>

            {/* Google Maps */}
            <div className="mb-6 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7188.9312881326605!2d75.87389800094068!3d26.776580151088893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc892b8f05399%3A0x43fbca7105eca800!2sJECRC%20University!5e0!3m2!1sen!2sin!4v1757135014600!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>

            {/* Instagram Links */}
            <div className="space-y-3 w-full">
              <a
                href="https://www.instagram.com/student_council_ju/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white font-anton tracking-widest text-center py-3 px-4 font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                @Student_Council_JU
              </a>
              <a
                href="https://www.instagram.com/jecrcuniversity/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white font-anton tracking-widest text-center py-3 px-4 font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                @jecrcuniversity
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="-space-y-1 mt-5 w-full">
              {/* Phone 1 - Left aligned */}
              <div className="text-left">
                <a
                  href="tel:+1234567890"
                  className="text-white hover:text-white/80 transition-colors duration-200 font-anton tracking-wide"
                >
                  +91 96643 30564
                </a>
              </div>

              {/* Phone 2 - Right aligned */}
              <div className="text-right">
                <a
                  href="tel:+9876543210"
                  className="text-white hover:text-white/80 transition-colors duration-200 font-anton tracking-wide"
                >
                 +91 861 996 4199
                </a>
              </div>

              {/* Phone 3 - Left aligned */}
              <div className="text-left">
                <a
                  href="tel:+1122334455"
                  className="text-white hover:text-white/80 transition-colors duration-200 font-anton tracking-wide"
                >
                  +91 80031 50294
                </a>
              </div>
            </div>
            <div className="w-full">
              {/* copyright */}
              <p className="text-sm text-center text-white font-anton ">
                &copy; {new Date().getFullYear()} Ju Innov8 . All rights
                reserved.
              </p>
            </div>
            <div className="w-full">
              {/* copyright */}
              <p className="text-sm text-center text-white font-anton ">
                Build by <Link className="text-blue-600" href="https://amanjanwani.me">Aman Janwani</Link> and designed by Saksham Saraogi
              </p>
            </div>
        <div className="text-white/40 md:hidden  stroke-2 stroke-amber-300 text-5xl uppercase -mb-12  font-big-shoulders-extrabold tracking-wider">
          Ju Innov8 3.0
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

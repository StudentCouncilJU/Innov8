import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-start z-50 items-center gap-3 w-full py-4 px-5 md:px-10 max-w-screen fixed top-0  ">
      <Link
        href="/"
        className=" flex justify-start w-1/3 items-center flex-1 stroke-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>
      <div className="flex justify-center w-1/3 items-center flex-1">
        {/* Logo */}

        <Link href="/">
          <Image 
            src="/logo.gif" 
            alt="Logo" 
            width={150} 
            height={150} 
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </Link>
      </div>
      <div className="flex gap-5 min-w-1/3 items-center justify-end">
        {/* Links */}
        <Link
          href="/sponsers"
          className="text-white hover:text-white/80 transition-colors duration-200 font-anton tracking-wide"
        >
          Sponsors
        </Link>
        <div className="gap-1 hidden md:flex">
          <Link href="https://www.instagram.com/student_council_ju/">
            <Image
              src="/images/icons/insta.svg"
              alt="instagram"
              width={35}
              height={35}
              className="text-white stroke-white"
              loading="lazy"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/student-council-jecrc-university/posts/?feedView=all">
            <Image
              src="/images/icons/linkedin.svg"
              alt="linkedin"
              width={35}
              height={35}
              className="text-white stroke-white"
              loading="lazy"
            />
          </Link>
        </div>
        <button 
          onClick={() => {
            const footerElement = document.getElementById('footer');
            if (footerElement) {
              footerElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="hidden md:block bg-[#0227F0] text-white hover:bg-transparent border-2 border-[#0227F0] hover:border-white duration-300 cursor-pointer  px-6 py-2 rounded-full font-anton  transition"
        >
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default Navbar;

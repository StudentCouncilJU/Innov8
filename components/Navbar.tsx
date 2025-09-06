import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-start z-50 items-center gap-3 w-full py-4 px-5 md:px-10 max-w-screen fixed top-0  ">
      <div className="flex justify-start w-1/2 items-center flex-1">
        {/* Logo */}

        <Link href="/"><Image src="/logo.gif" alt="Logo" width={150} height={150} /></Link>
      </div>
      <div className="flex gap-5 min-w-1/2 items-center justify-end">
        {/* Links */}
        <div className="flex gap-1">
          <Link href="https://www.instagram.com/studentcouncil_ju/">
          <Image
            src="/images/icons/insta.svg"
            alt="instagram"
            width={35}
            height={35}
            className="text-white stroke-white"
          />
        </Link>
        <Link href="https://www.linkedin.com/company/student-council-jecrc-university/posts/?feedView=all">
          <Image
            src="/images/icons/linkedin.svg"
            alt="linkedin"
            width={35}
            height={35}
            className="text-white stroke-white"
          />
        </Link>
        </div>
        <button className="bg-[#0227F0] text-white hover:bg-transparent border-2 border-[#0227F0] hover:border-white duration-300 cursor-pointer  px-6 py-2 rounded-full font-anton  transition">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default Navbar;

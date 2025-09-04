import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-start z-50 items-center w-full py-4 px-10  fixed top-0  ">
      <div className="min-w-1/3">{/* Audio */}
      <div className="text-white aspect-square w-10 h-10 flex justify-center items-center bg-[#0227F0] rounded-full">A</div></div>
      <div className="flex justify-center items-center flex-1">
        {/* Logo */}
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <div className="flex gap-5 min-w-1/3 items-center justify-end">
        {/* Links */}
        <div className="flex gap-1">
          <Link href="https://www.instagram.com">
          <Image
            src="/images/icons/insta.svg"
            alt="instagram"
            width={35}
            height={35}
            className="text-white stroke-white"
          />
        </Link>
        <Link href="https://www.linkedin.com">
          <Image
            src="/images/icons/linkedin.svg"
            alt="linkedin"
            width={35}
            height={35}
            className="text-white stroke-white"
          />
        </Link>
        </div>
        <button className="bg-[#0227F0] text-white px-6 py-2 rounded-full font-impact hover:bg-blue-700 transition">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default Navbar;

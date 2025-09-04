"use client"

export default function RotatingBorder() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a] gap-12">
      <h1 className="text-white text-3xl font-bold">
        CSS Rotating Border Animation
      </h1>

      {/* Box 1 */}
      <div className="relative w-52 h-52 rounded-xl overflow-hidden">
        {/* rotating gradient border */}
        <div className="absolute inset-0 before:absolute before:top-1/2 before:left-1/2 before:w-[600px] before:h-[200px] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[conic-gradient(from_0deg,transparent,#ff6b6b,transparent)] before:animate-spin"></div>
        
        {/* inner content */}
        <div className="absolute inset-[2px] rounded-lg bg-[#1a1a1a] flex items-center justify-center text-white text-lg">
          Animated Border
        </div>
      </div>

      {/* Box 2 */}
      <div className="relative w-52 h-52 rounded-xl overflow-hidden">
        <div className="absolute inset-0 before:absolute before:top-1/2 before:left-1/2 before:w-[600px] before:h-[200px] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[conic-gradient(from_90deg,transparent,#4ecdc4,transparent)] before:animate-spin before:[animation-delay:-1s]"></div>

        <div className="absolute inset-[2px] rounded-lg bg-[#1a1a1a] flex items-center justify-center text-white text-lg">
          Cool Effect
        </div>
      </div>
    </div>
  )
}

"use client";

import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Animated Glowing Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#d4af37]/50 via-transparent to-transparent animate-[spin_20s_linear_infinite_reverse]"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#d4af37]/50 via-transparent to-transparent animate-[spin_20s_linear_infinite]"></div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
            ⭐ Premium Registration Plates
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight leading-tight">
            Luxury Number Plates
            <br />
            <span className="text-[#d4af37]">Designed For Every Vehicle</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
            We manufacture premium-quality registration number plates with precision, durability, and elegant finishing.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="#contact" className="inline-block bg-[#d4af37] text-black px-8 py-3 rounded-md font-semibold uppercase tracking-wider transition-transform duration-300 hover:scale-105 shadow-lg shadow-[#d4af37]/20">
              Order Now
            </Link>
            <Link href="#gallery" className="inline-block border-2 border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-md font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#d4af37] hover:text-black">
              View Gallery
            </Link>
          </div>
        </div>

        {/* Right Content - 3D Plate Showcase */}
        <div className="hidden lg:flex justify-center items-center [perspective:1000px]">
          <div className="relative w-[440px] h-[110px] [transform-style:preserve-3d] [transform:rotateY(-30deg)_rotateX(10deg)] transition-transform duration-500 ease-in-out hover:[transform:rotateY(-5deg)_rotateX(2deg)]">
            
            <div className="absolute inset-0 bg-yellow-400 p-1.5 rounded-lg shadow-2xl shadow-black/50">
              <div className="w-full h-full bg-black rounded-md flex items-center justify-between px-2">
                <div className="h-full bg-blue-800 flex flex-col items-center justify-center p-2 rounded-l-sm w-12 text-center">
                  <div className="text-white font-bold text-[10px]">IND</div>
                </div>
                <div className="flex-grow text-center">
                  <span className="text-white text-4xl tracking-[0.15em]" style={{ fontFamily: 'var(--font-geist-mono)' }}>
                    F1 NUMBER PLATES
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <div className="absolute -top-1/4 left-0 w-1/2 h-full bg-white/10 [transform:skewX(-30deg)] opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
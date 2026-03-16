"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo LEFT */}
            <div className="text-2xl font-bold text-black flex items-center">
              SecondBr@in<span className="ml-1 text-sm bg-white-600 text-white px-2 py-1 rounded-full"></span>
            </div>
            
            {/* Nav Links + Button RIGHT SIDE */}
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-black hover:text-blue-600 font-medium">Home</Link>
<Link href="/about" className="text-black hover:text-blue-600 font-medium">About</Link>

              </div>
              <Link href="/main" className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg whitespace-nowrap">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-purple-900 to-indigo-900 animate-pulse-slow"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-xl animate-float"></div>
            <div className="absolute top-1/2 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-2xl animate-float-delayed"></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-500/30 rounded-full blur-xl animate-pulse"></div>
          </div>
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/40 rounded-full animate-float-particle"
                style={{
                  left: `${(i * 17.3) % 100}%`,
                  top: `${(i * 23.7) % 100}%`,
                  animationDelay: `${(i * 0.4) % 10}s`,
                  animationDuration: `${8 + (i % 5)}s`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
            @nothermind
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-black font-serif tracking-wide drop-shadow-md">
  A human mind knows some things, but our Second Brain remembers everything.
  <br />
  Ready to expand your knowledge?Then start now...
</h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
           Thinkless about remembering. Focus more on creating.
          </p>
        </div>
      </section>
    </div>
  );
}

"use client";
import Link from "next/link";

export default function MainPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen gap-6 bg-linear-to-br from-blue-50 to-indigo-100 overflow-hidden">
      
      {/* Navbar at Top */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-lg border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">SecondBr@in</div>
            <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="absolute inset-0 opacity-10 pt-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/50 rounded-3xl blur-xl"></div>
        <div className="absolute top-1/2 right-20 w-80 h-80 bg-indigo-200/50 rounded-3xl blur-xl translate-y-10"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200/50 rounded-3xl blur-xl -translate-x-20"></div>
      </div>
      
      <div className="text-center relative z-10 pt-32">
        <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 drop-shadow-lg">
          Start a Conversation
        </h1>
        <p className="text-xl text-gray-700 max-w-md mx-auto bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl">
          Welcome to your AI-powered knowledge hub
        </p>
      </div>
      
      <div className="space-y-4 relative z-10">
        <Link href="/create" className="block w-64 bg-white/90 backdrop-blur-sm border border-blue-200 hover:border-blue-300 text-blue-700 px-6 py-4 rounded-2xl text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg hover:scale-105">
          ➕ Add Knowledge
        </Link>
        <Link href="/dashboar" className="block w-64 bg-white/90 backdrop-blur-sm border border-green-200 hover:border-green-300 text-green-700 px-6 py-4 rounded-2xl text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg hover:scale-105">
          📊 View Dashboard
        </Link>
      </div>
    </div>
  );
}

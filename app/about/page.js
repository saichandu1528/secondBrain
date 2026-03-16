"use client";
import Link from "next/link";
  import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-black">SecondBr@in</h1>

          <Link
            href="/"
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        
          <div className="relative w-full h-64 md:h-80">
            {" "}
            {/* Fixed aspect ratio */}
            <Image
              src="/ai.jpg"
              alt="AI Knowledge"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority // Optional: for above-the-fold images
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About Second Brain
            </h1>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed font-serif">
              Second Brain is an AI-powered knowledge management platform
              designed to help users capture, organize, and retrieve information
              easily. In today’s digital world, we consume a huge amount of
              information every day, and remembering everything becomes
              difficult.
            </p>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed font-serif">
              This platform acts like your personal digital memory where you can
              store important notes, ideas, and knowledge. It allows users to
              create structured notes with titles, descriptions, and tags so
              information can be accessed quickly whenever needed.
            </p>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed font-serif">
              Our goal is simple: let your brain focus on creativity and
              problem-solving while your Second Brain safely stores and manages
              your knowledge.
            </p>

            <ul className="text-lg text-black mb-4 leading-relaxed font-serif">
              <li>• Store and manage notes easily</li>
              <li>• Organize information with tags</li>
              <li>• Retrieve knowledge instantly</li>
              <li>• AI-powered search and assistance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

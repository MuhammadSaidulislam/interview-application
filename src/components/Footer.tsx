import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-white text-gray-800 py-12">
      {/* Top links */}
      <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm font-medium">
        <a href="/login" className="hover:text-blue-600 transition">Login</a>
        <a href="/register" className="hover:text-blue-600 transition">Register</a>
        <a href="#" className="hover:text-blue-600 transition">FAQ</a>
        <a href="#" className="hover:text-blue-600 transition">Contact</a>
        <a href="#" className="hover:text-blue-600 transition">Twitter ↗</a>
        <a href="#" className="hover:text-blue-600 transition">LinkedIn ↗</a>
      </div>

      {/* Privacy Policy */}
      <div className="text-center text-gray-400 text-xs mb-12">
       saidul islam
      </div>

      {/* Bottom large text with diagonal lines */}
      <div className="text-center">
        <h1 className="text-[2rem] sm:text-[8rem] font-extrabold text-gray-200 leading-none tracking-tight relative">
          Interview Master
          <span className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#fff, #fff 1px,transparent 1px, transparent 4px)] opacity-20 mix-blend-overlay"></span>
        </h1>
      </div>
    </footer>
  )
}

export default Footer
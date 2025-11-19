'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen font-sans text-gray-800">
      {/* Sticky Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo with transition */}
          <div className={`font-bold tracking-wide transition-all duration-300 ${
            isScrolled ? 'text-base' : 'text-lg'
          }`}>
            
            <span className={`ml-2 transition-all duration-300 overflow-hidden ${
              isScrolled ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
            }`}>
              The Company
            </span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm items-center">
            <a className="text-gray-700 hover:text-indigo-600 transition duration-300" href="#">Home</a>
            <a className="text-gray-700 hover:text-indigo-600 transition duration-300" href="#features">Services</a>
            <a className="text-gray-700 hover:text-indigo-600 transition duration-300" href="#work">Work</a>
            <a className="text-gray-700 hover:text-indigo-600 transition duration-300" href="#">Journal</a>
          </nav>
         
          <button className="md:hidden px-3 py-2 bg-gray-100 rounded text-gray-700 hover:bg-gray-200 transition" type="button">Menu</button>
        </div>
      </header>

      {/* Static Hero with subtle zoom on scroll */}
      <section
        className="relative h-[72vh] md:h-[68vh] bg-center bg-cover flex items-center pt-20 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,11,13,0.4) 0%, rgba(10,11,13,0.6) 50%, rgba(10,11,13,0.8) 100%), url('https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=')",
          backgroundPosition: `center calc(50% + ${scrollY * 0.3}px)`,
        }}
      >
        {/* content */}
        <div className="relative z-10 w-full animate-fade-in">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <div className="mb-4 text-sm uppercase tracking-widest text-white/75 animate-slide-up" style={{ animationDelay: '0.1s' }}>we are</div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>THE COMPANY</h1>
            <p className="max-w-2xl mx-auto text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Design • Development • Success — We craft elegant digital experiences for modern brands.
            </p>
            <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a href="#features" className="px-6 py-3 bg-white text-black rounded shadow hover:scale-105 hover:shadow-lg transition-all duration-300">Learn More</a>
              <a href="#work" className="px-6 py-3 border border-white/30 rounded text-white/90 hover:bg-white/10 hover:scale-105 transition-all duration-300">View Work</a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + features with stagger animation */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-2 hover:text-indigo-600 transition duration-300">We design digital products.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your brand, your product, your big idea — we help bring it to life with user-first design and robust engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['💡', '🎨', '⚙️', '📈'].map((icon, idx) => (
            <div
              key={idx}
              className="p-6 border rounded text-center group hover:border-indigo-600 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{
                transitionDelay: `${idx * 50}ms`,
              }}
            >
              <div className="mb-3 text-3xl group-hover:scale-125 transition-transform duration-300">{icon}</div>
              <h4 className="font-semibold">
                {['Idea', 'Design', 'Development', 'Success'][idx]}
              </h4>
              <p className="text-sm text-gray-600">
                {['Concepting and strategy to validate product‑market fit.', 'Pixel‑perfect interfaces and accessible interactions.', 'Robust front‑end and back‑end engineering.', 'Product launches and growth support.'][idx]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners / dark band with fade in on scroll */}
      <section className="mt-12 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold hover:text-indigo-400 transition duration-300">We design delightful digital experiences</h3>
            <p className="text-gray-300 mt-3">We help organisations improve their websites and create exciting new digital products.</p>
            <a className="inline-block mt-4 px-4 py-2 border rounded border-white/20 hover:border-indigo-400 hover:text-indigo-400 hover:scale-105 transition-all duration-300" href="#contact">Contact us</a>
          </div>
          <div className="md:col-span-2 grid grid-cols-3 sm:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-3 bg-white/5 rounded hover:bg-white/10 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <div className="w-20 h-8 bg-white/10 rounded flex items-center justify-center text-xs">Logo {i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial with fade effect */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center hover:bg-gray-50 rounded-lg transition duration-300 p-4">
        <blockquote className="italic text-gray-600 hover:text-gray-900 transition duration-300">"Surround yourself with the dreamers and the doers — greatness is within you."</blockquote>
        <div className="mt-4 text-sm text-gray-500">— Edmund Lee</div>
      </section>

      {/* Recent work with stagger and hover effects */}
      <section id="work" className="max-w-5xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold mb-6 text-center hover:text-indigo-600 transition duration-300">Recent work</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <article
              key={i}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600 transition-all duration-300">Project {i + 1}</div>
              <div className="p-4">
                <h4 className="font-semibold mb-1 group-hover:text-indigo-600 transition duration-300">Project title</h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition duration-300">Short description that outlines the project's focus.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500 hover:text-gray-700 transition duration-300">
        © 2025 The Company All rights reserved.
      </footer>

      {/* Global animations */}
      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in forwards;
        }
      `}</style>
    </main>
  )
}

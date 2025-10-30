"use client"
import Link from "next/link";
import About from "./components/about";
import Skills from "./components/skills";
import Education from "./components/education";
import Project from "./components/project";
import Contact from "./components/contact";

export default function Home() {
  
  return (
    <div className="overflow-hidden"> 

    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white font-[Open_Sans] min-h-screen scroll-smooth overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-gray-950/70 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="flex flex-col md:flex-row items-center justify-between px-2 md:px-16 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-500 flex items-center justify-center rounded">
              <h1 className="font-extrabold text-white text-2xl">I</h1>
            </div>
            <h1 className="font-sans text-2xl font-black">Ilsa Fatima</h1>
          </div>

          <nav className="mt-4 md:mt-0">
            <ul className="flex  justify-center md:justify-end gap-3 md:gap-6 text-gray-300 font-semibold text:sm md:text-lg">
              <Link href="#about" className="hover:text-white">About</Link>
              <Link href="#education" className="hover:text-white">Education</Link>
              <Link href="#skills" className="hover:text-white">Skills</Link>
              <Link href="#projects" className="hover:text-white">Projects</Link>
              <Link href="#contact" className="hover:text-white">Contact</Link>
            </ul>
          </nav>
        </div>
      </header>

<section className="flex flex-col-reverse  md:flex-row items-center justify-between px-2 md:px-20 pt-32 md:pt-44 pb-0 md:pb-10">
       
        {/* Right Side - Intro */}
        <div className=" md:px-40 md:max-w-5xl md:py-5 py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-indigo-400">Ilsa Fatima</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mt-4">
            As a developer, I’m dedicated to turning my ideas into innovative projects.
          </p>
            <div className=" px-2 md:px-0 flex py-12 md:py-0 gap-4 md:gap-7">

          <Link href="#contact">
            <button className="mt-8 bg-linear-to-br from-gray-900 via-blue-800 to-purple-800
              text-white font-semibold px-6 py-3 rounded-lg border border-indigo-800
              hover:bg-indigo-900 hover:scale-105 text-sm transition-all duration-300 hover:shadow-[0_0_10px_#6366F1]">
              Contact Me
            </button>
            </Link>
            <Link href="/IlsaFatima.pdf " download>
            <button className="mt-8 bg-linear-to-br text-sm from-gray-900 via-blue-800 to-purple-800
              text-white font-semibold px-4 py-3 rounded-lg border border-indigo-800
              hover:bg-indigo-900 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_10px_#6366F1]">
              Download Resume
            </button>
                </Link>
                </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Skills />
      <Education />
      <Project />
      <Contact />

      {/* Remove bottom spacing */}
      <div className="h-0 m-0 p-0"></div>
    </div>
     </div>
  );
}
import Image from "next/image";
import html from "../assist/html.png";
import css from "../assist/css-3.png";
import typescript from "../assist/WhatsApp Image 2025-10-29 at 8.22.32 PM (6).jpeg";
import github from "../assist/github-logo.png"
import git from "../assist/social.png"
import sanity from "../assist/WhatsApp Image 2025-10-29 at 8.22.32 PM (11).jpeg";
import nextjs from "../assist/Next.js.png";
import nodejs from "../assist/Node.js.png";
import python from "../assist/Python.png";
import tailwindcss from "../assist/icons8-tailwind-css-48.png";
import vercel from "../assist/Vercel.png";
import react from "../assist/React.png";
import Stream from "../assist/Streamlit.png";

export default function Skills() {
  const skills = [
    { name: "HTML", img: html, bg: "bg-orange-700/30", text: "text-orange-400" },
    { name: "CSS", img: css, bg: "bg-blue-700/30", text: "text-blue-400" },
    { name: "TypeScript", img: typescript, bg: "bg-blue-700/30", text: "text-blue-400" },
    { name: "Github", img: github, bg: "bg-gray-700/30", text: "text-gray-400" },
    { name: "Git", img: git, bg: "bg-red-700/30", text: "text-red-400" },
    { name: "Tailwind CSS", img: tailwindcss, bg: "bg-sky-700/30", text: "text-sky-400" },
    { name: "Next.js", img: nextjs, bg: "bg-gray-700/30", text: "text-gray-400" },
    { name: "Node.js", img: nodejs, bg: "bg-green-700/30", text: "text-green-400" },
    { name: "Python", img: python, bg: "bg-yellow-300/30", text: "text-yellow-400" },
    { name: "Sanity", img: sanity, bg: "bg-orange-700/30", text: "text-orange-400" },
    { name: "Vercel", img: vercel, bg: "bg-black/30", text: "text-black" },
    { name: "React", img: react, bg: "bg-blue-700/30", text: "text-blue-400" },
    {name: "Streamlit", img: Stream, bg: "bg-red-700/30", text: "text-red-400"}
  ];

  return (
    <section id="skills" className="py-16 px-2  md:py-38 md:px-24">
      <h1  className="text-4xl sm:text-5xl md:text-6xl font-black pb-8">Technical Skills</h1>
      <header className="flex  flex-wrap gap-2 md:gap-5  text-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`border-2 border-gray-400 ${skill.bg}  backdrop-brightness-75 transition-all flex-col flex-wrap duration-300 hover:scale-105 px-6 py-6 w-[160px] h-[90px] md:w-[200px] md:h-[120px] md:rounded-2xl rounded-xl  items-center justify-center`}
          >
            <div className="md:pl-14 pl-9">

            <Image className="hidden md:block " src={skill.img} alt={skill.name} width={40} height={40} />
            
            <Image className="md:hidden " src={skill.img} alt={skill.name} width={30} height={30} />
            </div>
            <h1 className={`text-sm font-mono ${skill.text} mt-2`}>{skill.name}</h1>
          </div>
        ))}
      </header>
    </section>
  );
}
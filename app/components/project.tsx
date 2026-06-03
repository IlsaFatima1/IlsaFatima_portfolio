import Image from "next/image";
import Link from "next/link";
import furniture from "../assist/WhatsApp Image 2025-10-29 at 8.22.32 PM (14).jpeg";
import web from "../assist/WhatsApp Image 2025-10-29 at 8.22.32 PM (15).jpeg";
import unit from "../assist/WhatsApp Image 2025-10-29 at 8.22.32 PM (18).jpeg";
import data from "../assist/WhatsApp Image 2025-10-29 at 8.22.32 PM (19).jpeg";
import html from "../assist/WhatsApp Image 2025-10-29 at 8.22.32 PM (16).jpeg"
import password from "../assist/WhatsApp Image 2025-10-29 at 8.22.32 PM (17).jpeg";
import todo from "../assist/WhatsApp Image 2026-05-22 at 12.04.24 AM.jpeg"
import book from "../assist/WhatsApp Image 2026-06-03 at 11.23.38 PM.jpeg"
export default function Projects() {
  const image = [
    { src: todo, alt: "Todo App", text: "Todo App", link: "https://todo-app1-eosin.vercel.app" },
    { src: book, alt: "Physical AI Textbook", text: "Physical AI Textbook", link: "https://physical-ai-textbook-eight.vercel.app/" },
    { src: furniture, alt: "Furniture Buy Project", text: "Furniture Buy", link: "https://online-furniture-1.vercel.app/" },
    { src: web, alt: "Dynamic Ecommerce website", text: "Dynamic Ecommerce Store", link: "https://dynamic-ecommerce-store-01.vercel.app/" },
    { src: html, alt: "HTML Project", text: "Online Shopping Center", link: "https://dynamic-online-shopping-center.vercel.app/" },
    { src: unit, alt: "Unit Converter Project", text: "Unit Converter", link: "https://ilsafatima1-unit-convertor-unit-convertor-ziboza.streamlit.app/" },
    { src: password, alt: "Password Strength Meter Project", text: "Password Strength Meter", link: "https://ilsafatima1-password-strength-meter-passwordchecker-8czgpm.streamlit.app/" },
    { src: data, alt: "Data Sweeper Project", text: "Data Sweeper", link: "https://ilsafatima1-data-sweeper-data-sweeper-app-agoboy.streamlit.app/" },
  ];

  return (
<section id="projects" className="py-16 px-2 md:py-0 md:px-24 m-3 md:mt-0 md:pt-0 text-white bg-gray-800">

    <h2  className="text-4xl md:text-6xl font-black pb-12  text-center md:text-left">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {image.map((item) => (
          <Link key={item.text} href={item.link} target="_blank" rel="noopener noreferrer"
            className="group border border-gray-800 bg-gray-900 hover:bg-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03] shadow-lg">
            <div className="relative h-56 w-full">
              <Image src={item.src} alt={item.alt} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-purple-400">{item.text}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
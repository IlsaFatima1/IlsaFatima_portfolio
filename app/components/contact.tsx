"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import logo from "../assist/github-logo.png"
import email from "../assist/email.png"
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2";
import linkedin from "../assist/linkedin.png"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        Swal.fire({ icon: "success", title: "Message Sent!", text: "Your message has been sent successfully 🎉", confirmButtonColor: "#4f46e5" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        Swal.fire({ icon: "error", title: "Oops!", text: "Something went wrong. Please try again 😢" });
      });
  };

  return (
    <>
    <section id="contact" className="flex justify-center pt-20 md:pt-44 pb-0 px-2">
      <div className="w-full max-w-lg">
        <h1  className="text-4xl sm:text-5xl md:text-6xl font-black pb-12 text-center md:text-left">
          Contact
        </h1>

        <form onSubmit={handleSubmit} className="pb-6 space-y-6">
          <div>
            <h2 className="text-xl pb-2">Your Name</h2>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-indigo-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
            />
          </div>

          <div>
            <h2 className="text-xl pb-2">Your Email</h2>
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-indigo-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
            />
          </div>

          <div>
            <h2 className="text-xl pb-2">Your Message</h2>
            <textarea
              name="message"
              placeholder="What you want to say?"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 h-40 bg-indigo-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
            />
          </div>

          <button type="submit" className="bg-indigo-800  hover:scale-105 duration-300 shadow-2xl w-32 h-10 rounded-xl text-white">
            Send
          </button>
        </form>
        

      </div>
    </section>
         <div className=" items-center flex justify-center  w-full h-7 bg-gray-800 md:gap-4 gap-2 py-7 md:py-6 md:mb-0">
          <Link href="https://github.com/IlsaFatima1" target="_blank">
            <Image src={logo} alt="GitHub" width={30} height={30} className="hover:scale-110 transition-all" />
          </Link>
          <Link href="mailto:ilsafatima799@gmail.com" target="_blank">
            <Image src={email} alt="Email" width={40} height={40} className="hover:scale-110 transition-all" />
          </Link>
          
            <Link href="https://www.linkedin.com/in/ilsa-fatima-107381380" target="_blank">
              <Image src={linkedin} alt="LinkedIn" width={30} height={30} className="hover:scale-110 transition-all"/>
            </Link>
          
        </div>
      </>
  );
}
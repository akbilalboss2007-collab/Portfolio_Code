"use client";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { FaCode } from "react-icons/fa6";
import { LuMonitorCheck } from "react-icons/lu";
import { MdPalette, MdImportantDevices } from "react-icons/md";
import { MdMessage } from "react-icons/md";

const Page = () => {
  // 🔹 React state for form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  // 🔹 handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      if (res.ok) {
        setSuccess('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await res.json();
        setSuccess(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setSuccess('Failed to send message.');
      console.error(err);
    }
  };

  return (
    <div className="">
     
       <nav className="sticky top-0 z-10 flex justify-between items-center shadow-md md:shadow-2xl shadow-black md:px-20 py-5 border-b border-b-gray-600 bg-gray-900 text-gray-300 font-semibold text-sm">
  <strong className="text-xl relative md:left-3 font-semibold left-10 text-white ">
    Muhammad <span className="font-extrabold text-orange-600 ">Bilal</span>
    <span className="font-extrabold text-xl text-blue-500">.</span>
  </strong>
  
  <ul className="hidden md:flex gap-10 items-center">
    <li className="hover:text-blue-500 duration-300"><a href="#home">Home</a></li>
    <li className="hover:text-blue-500 duration-300"><a href="#about">About</a></li>
    <li className="hover:text-blue-500 duration-300"><a href="#projects">Projects</a></li>
    <li className="hover:text-blue-500 duration-300"><a href="#contact">Contact</a></li>
  </ul>
  <a className="block mr-3 md:hidden" href="#contact"><MdMessage className="size-8 text-white" /></a>
</nav>
      
      <section
        id="home"
        className="px-10 md:px-20  py-15 bg-gray-300  overflow-hidden rounded-b-xs rounded-t-xl"
      >
        {/* Container ko flex-row kiya aur items-center taake alignment sahi rahe */}
        <div className="flex flex-col md:flex-row ">
          {/* Left Side: Text Content */}
          <div className="flex-1">
            <span className="text-blue-700 bg-blue-200 px-4 rounded-xl py-1 font-extrabold text-sm">
              Available for Work
            </span>

            <h1 className="text-5xl  font-extrabold md:text-6xl tracking-tight md:tracking-tighter leading-[1.3] md:leading-[1.3] mt-3 text-blue-950">
              Hi, I'm Bilal. <br />
              <div className="flex items-baseline whitespace-nowrap gap-3">
                <span>Building</span>
                {/* Niche wali span line ko dhyan se dekhein, isme maine filter: hue-rotate use kiya hai */}

          <span className="animate-shine-text bg-gradient-to-l from-gray-putple00 via-indigo-950  to-yellow-100 bg-[length:250%_auto] bg-clip-text text-transparent">
                <Typewriter
  onInit={(typewriter) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    if (isMobile) {
      typewriter
        .typeString("Modern")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Website")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Scalable")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Database")
        .pauseFor(1000)
        .deleteAll()
        .start();
        
    } else {
      typewriter
        .typeString("Modern Web")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Scalable")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Database")
        .pauseFor(1000)
        .deleteAll()
        .start();
    }
  }}
  options={{
    autoStart: true,
    loop: true,
    delay: 100,
    deleteSpeed: 100,
  }}
/>
                </span>
              </div>
              Solutions.
            </h1>

            {/* Ye chota sa block bas component ke end mein paste kar dein */}
           <style jsx global>{`
    @keyframes shine {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    .animate-shine-text {
      animation: shine 3s linear infinite;
    }
  `}</style>
            <p className="text-gray-500 font-semibold mt-5 leading-6 md:leading-7 md:tracking-normal tracking-tighter">
              I build fast and responsive web applications. <br />
              Expert in modern frontend frameworks with basic backend proficiency. <br /> 
              Including mysql2 & Database connection
              to 
              bridge the gap between design & data.
            </p>

            <div className="gap-10 md:gap-5 flex items-center mt-5">
              <a href="#projects" className="font-semibold  cursor-pointer py-2 hover:bg-gray-100 duration-300 px-5  rounded-xl text-black bg-white">
                View Work
              </a>
               
              <a href ="https://github.com/akbilalboss2007-collab/portfolio-code" className="bg-black/90  cursor-pointer px-5 py-2  hover:bg-gray-950 duration-300 rounded-xl text-white font-semibold">
              View Code </a>
              
            </div>
          </div>

      
          <div className=" md:justify-end left-15 md:mr-15 md:top-10 top-10 relative">
            <div className="relative w-55  h-50 md:w-60 md:h-65  flex  items-center justify-center rounded-full rotate-3">
             
             
             <img
  src="/image.jpg"
  alt="image"
  className="
    w-50 h-50
            
    sm:w-50 sm:h-28
    md:w-60 md:h-60
    rounded-full
    -rotate-3
  "
/>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className=" md:py-25 py-20 overflow-hidden bg-gray-200">
        <div className="">
          <h1 className="text-xl animate-pulse font-extrabold italic  text-center md:text-3xl text-blue-900 md:text-blue-950">
            Expertise <span className="text-red-500">&</span> Skills
          </h1>

          <div className="  grid-cols-2 grid md:grid-cols-4 md:mt-20 gap-5 text-black md:text-indigo-950  mt-10 justify-center md:flex  ">
            <button className="md:px-10 md:py-6 animate-bounce [animation-delay:100ms] md:[animation-delay:100ms] mx-10 md:mx-3 rounded-xl hover:shadow-xl py-3 pl-3 font-extrabold cursor-pointer  md:text-xl italic flex items-center gap-3 duration-500 bg-black/25 shadow-2xl ">Frontend<LuMonitorCheck className="text-2xl" /></button>
            <button className="md:px-10 md:py-5 animate-bounce [animation-delay:150ms] md:[animation-delay:200ms] mx-10 md:mx-3 rounded-xl hover:shadow-xl pl-3 font-extrabold cursor-pointer  md:text-xl flex items-center gap-3 italic duration-500 bg-black/25 shadow-2xl ">Backend<FaCode className="text-2xl" /></button>
            <button className="md:px-10 md:py-5 animate-bounce [animation-delay:200ms] md:[animation-delay:300ms] mx-10 pl-3 md:mx-3 rounded-xl hover:shadow-xl py-3 font-extrabold cursor-pointer md:text-xl italic duration-500 gap-3 flex items-center bg-black/25 shadow-2xl ">UI Design<MdPalette className="text-2xl" /></button>
            <button className="md:px-5 md:py-5 animate-bounce [animation-delay:250ms] md:[animation-delay:400ms] mx-3 pl-3 md:mx-3 rounded-xl hover:shadow-xl font-extrabold  cursor-pointer md:text-xl italic duration-500 bg-black/25 shadow-2xl flex items-center gap-3 ">Responsive Web<MdImportantDevices className="text-2xl" /></button>
          </div>
        </div>

      </section>

       <section id="projects" className="bg-gray-300 py-10 md:py-25 ">

        <h1 className="bg-linear-to-l animate-pulse from-blue-950 to-indigo-900 bg-clip-text text-transparent font-extrabold text-xl px-10   md:text-3xl italic md:px-20 md:font-extrabold">Featured Projects</h1>

<div className="md:grid md:grid-cols-3 gap-25 md:mt-15 md:px-15 mt-10 px-10 grid-rows-3 md:grid-rows-none grid">

 

 <div className=" cursor-pointer 
                duration-500 
                hover:shadow-2xl hover:shadow-black/90 rounded-4xl hover:scale-[1.03]">

  <div className="md:py-25 py-25 rounded-t-4xl shadow-xl shadow-black bg-black/30 "></div>

  <div className="bg-white shadow-xl shadow-black/25 md:py-8 md:px-5 py-5 px-5  rounded-b-4xl
                   ">

    <h1 className="text-blue-950 font-extrabold italic text-lg md:text-xl">
      E-Commerce Website
    </h1>

    <p className="text-black/50 font-extrabold italic md:text-sm mt-3 md:mb-5 mb-3 text-md md:mt-3">
      A simple and fully functional online store <br />
      designed for smooth shopping.
    </p>

    <a href="#" className=" font-extrabold italic md:text-md text-blue-500 ">
      Visit Project
    </a>

  </div>
  
</div>
<div className=" cursor-pointer 
                duration-500 
                hover:shadow-2xl hover:shadow-black/90 rounded-4xl hover:scale-[1.03]">

  <div className="md:py-25 py-25 rounded-t-4xl shadow-xl shadow-black bg-black/30 "></div>

  <div className="bg-white shadow-xl shadow-black/25 md:py-8 md:px-5 py-5 px-5  rounded-b-4xl
                   ">

    <h1 className="text-blue-950 font-extrabold italic text-lg md:text-xl">
      E-Commerce Website
    </h1>

    <p className="text-black/50 font-extrabold italic md:text-sm mt-3 md:mb-5 mb-3 text-md md:mt-3">
      A simple and fully functional online store <br />
      designed for smooth shopping.
    </p>

    <a href="#" className=" font-extrabold italic md:text-md text-blue-500 ">
      Visit Project
    </a>

  </div>
  
</div>
<div className=" cursor-pointer 
                duration-500 
                hover:shadow-2xl hover:shadow-black/90 rounded-4xl hover:scale-[1.03]">

  <div className="md:py-25 py-25 rounded-t-4xl shadow-xl shadow-black bg-black/30 "></div>

  <div className="bg-white shadow-xl shadow-black/25 md:py-8 md:px-5 py-5 px-5  rounded-b-4xl
                   ">

    <h1 className="text-blue-950 font-extrabold italic text-lg md:text-xl">
      E-Commerce Website
    </h1>

    <p className="text-black/50 font-extrabold italic md:text-sm mt-3 md:mb-5 mb-3 text-md md:mt-3">
      A simple and fully functional online store <br />
      designed for smooth shopping.
    </p>

    <a href="#" className=" font-extrabold italic md:text-md text-blue-500 ">
      Visit Project
    </a>

  </div>
  
</div>


</div>  
      </section> 
      <section id="contact" className="bg-indigo-950 py-30  md:py-50">

        <div className=" justify-center flex ">
        

     <form method="post" action="https://formspree.io/f/mbdavlng" className="text-center shadow-black px-5 md:border shadow-2xl rounded-xl py-15 md:py-25 outline-green-800 outline-1 md:px-5 ">
        <h1 className=" font-extrabold text-3xl bottom-10 relative shadow-2xl  text-emerald-800 md:relative md:bottom-20">Let's Talk</h1>
<div className="md:relative bottom-5">
<label htmlFor="Name"  className="text-green-800 font-extrabold italic md:relative relative right-30 md:right-30 ">Full Name:</label><br />
<input  id="name" type="text" name="Enter your name"  placeholder="Enter Your Name" required className="md:w-sm px-10 py-3 w-85 placeholder:italic placeholder:font-extrabold  md:relative font-semibold text-green-950 bg-white/40 shadow-2xl rounded-xl outline-emerald-500 outline-1 md:py-3" />
</div>
<div className="md:relative md:top-5 relative top-3 ">
<label htmlFor="Email" className="text-green-800 font-extrabold italic md:relative md:bottom-2 relative right-35 md:right-35">Email:</label><br />
<input id="email" type="Email" name="Email" placeholder="Enter Your Email" required className="md:w-sm w-85 px-10 py-3 font-semibold shadow-2xl md:relative md:bottom-2 text-green-950 bg-white/40 placeholder:italic placeholder:font-extrabold  rounded-xl md:py-3 outline-emerald-500 outline-1 " />
</div>
<div className="md:relative md:top-10  relative top-5 ">
<label htmlFor="Message" className="text-green-800 font-extrabold relative right-32 italic md:relative md:right-33">Message:</label><br />
<textarea  id="message" name="Message" placeholder="Enter Your Message"  rows={5} required className="  shadow-2xl md:w-sm w-85 md:placeholder:right-20 placeholder:relative placeholder:italic placeholder:right-15 placeholder:top-3 placeholder:font-extrabold text-center outline-emerald-500 outline-1 text-green-950 bg-white/40 rounded-xl" ></textarea>
</div>
<button type="submit" className="md:text-xl bg-green-500 relative top-10 text-xl px-25 py-3 md:px-25  hover:scale-105 cursor-pointer   rounded-xl text-emerald-950 md:relative md:top-20 hover:bg-green-300 duration-300 outline-2 outline-emerald-700  hover:text-cyan-800 shadow-2xl shadow-black font-extrabold italic">Send Message</button>      
     </form>
        </div>

      </section>

      <div className=" bg-stone-400 md:py-15 py-10 px-5 ">
<pre className="md:tracking-tighter md:text-xl items-center justify-center text-xs font-extrabold italic text-neutral-800 md:text-gray-500  md:flex">© 2026 Muhammad Bilal Developer.All rights reserved.</pre>
      </div>
    </div>
  );
};

export default Page;
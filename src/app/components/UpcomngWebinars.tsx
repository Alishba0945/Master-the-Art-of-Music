'use client'
//import React from 'react'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomngWebinars() {
 
  const items = [
    {
      title: "Classical Symphony",
      description: "Experience the timeless beauty of orchestral compositions.",
      link: "/music/classical",
    },
    {
      title: "Jazz Vibes",
      description: "Smooth rhythms and soulful tunes that move your spirit.",
      link: "/music/jazz",
    },
    {
      title: "Pop Hits",
      description: "The latest chart-toppers and popular tracks around the world.",
      link: "/music/pop",
    },
    {
      title: "Lo-fi Chill",
      description: "Relax and study with calming lo-fi beats.",
      link: "/music/lofi",
    },
    {
      title: "Instrumental Magic",
      description: "Let the instruments speak — no lyrics, just emotions.",
      link: "/music/instrumental",
    },
    {
      title: "Bollywood Melodies",
      description: "Dive into the colorful world of Bollywood songs.",
      link: "/music/bollywood",
    },
  ];

  return (
    <div className='p-12 bg-gray-900 '>
      <div className='max-w-7xl max-auto px-4 sm:px-6 '>
      <div className="text-center">
           <h2  className="  font-medium text-base text-teal-400 tracking-wide uppercase flex justify-center">FEATURED WEBINARS</h2>
           <p className="mt-20 md:mt-5 text-2xl md:text-bold font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-50 " >Enhance Your Musical Journey</p>
      </div>
   <div className='mt-10'>
   <HoverEffect
 
  items={items.map(webinar => (
    {
      title: webinar.title,
      description: webinar.description,
      link: webinar.link
    }
  ))}
/>
  
   </div>
      <div className='mt-10' ><Link href={"/"} className="px-4 py-2 rounded-full border border-neutral-600 text-slate-800 bg-white hover:bg-teal-400  translate duration-200 font-sans flex justify-center" >View All Webinars</Link></div>
      </div>
    </div>
  )
}

export default UpcomngWebinars;

"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Music Jamming",
    description:
      "Jam together in real-time with your bandmates or producers. Share tracks, layer instruments, and co-create musical pieces from anywhere in the world. Our platform empowers artists to connect and create seamlessly.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Jam Together Live
      </div>
    ),
  },
  {
    title: "Live Mixing Adjustments",
    description:
      "Make real-time changes to your tracks during sessions. Adjust EQ, effects, and levels as your collaborators hear it. This allows you to stay in sync creatively and refine your sound without delays.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
      </div>
    ),
  },
  {
    title: "Track Version History",
    description:
      "Keep every version of your audio files organized. Easily revert back to a previous mix or compare alternate takes. With our platform, you’ll never lose your best idea or favorite draft.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Track History
      </div>
    ),
  },
  {
    title: "Never Run Out of Inspiration",
    description:
      "Access samples, loops, and sound packs directly within your workflow. Discover new ideas, remix others’ work, and stay inspired even when creativity stalls. Your next hit is just a beat away.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Music Resources
      </div>
    ),
  },
];


export default function WhyChooseUs() {
   return <div className="mt-15 py-4 border-spacing-0">
   <StickyScroll content={content} />
 </div>
} 
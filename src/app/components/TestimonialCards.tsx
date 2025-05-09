'use client'
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import { cn } from "@/app/lib/utils";

const testimonials = [
  {
    quote: "Learning music transformed my life. It gave me confidence, discipline, and a new way to express myself.",
    name: "Sara Malik",
    title: "Vocal Student – Classical Music"
  },
  {
    quote: "The instructors here are not only talented but deeply passionate. Their love for music is contagious!",
    name: "Ali Zafar",
    title: "Guitar Student – Intermediate Level"
  },
  {
    quote: "I started piano classes three months ago, and I already feel a deep connection with the instrument. Highly recommended!",
    name: "Mehwish Khan",
    title: "Piano Student – Beginner"
  },
  {
    quote: "Joining this music school was the best decision of my year. Every class is full of inspiration and growth.",
    name: "Hamza Ahmed",
    title: "Drum Student – Advanced"
  },
  {
    quote: "Music used to feel complicated, but now it's become my comfort zone. These lessons are powerful.",
    name: "Zainab Fatima",
    title: "Online Vocal Student – Sufi Genre"
  }
];


export default function  MusicTestimonialCards() {
 return <div className="h-[40rem] w-full dark:bg-gray-900 dark:bg-grid-white/[o.2] relative flex flex-col items-center justify-center overflow-hidden"><div
 className={cn(
   "absolute inset-0",
   "[background-size:40px_40px]",
   "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
   "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
 )}>

<h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-teal-300 flex justify-center mt-16 sm:mt-24 md:mt-28 mb-16 sm:mb-24 md:mb-28 text-center px-4">
  Hear our Harmony: Voices of Success
</h2>

 <div className="w-full max-w-6xl flex justify-center overflow-hidden px-4 sm:px-6 lg:px-8 ">
   <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
 </div>
</div></div>
}


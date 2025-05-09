import Spotlight from '@/app/components/ui/Spotlight'
import { Button } from "./ui/moving-border";
import Link from "next/link";

function HeroPage ()  {
  return  <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
    <Spotlight className="absolute left-500 w-50 h-50 opacity-30 z-0" />
   <div className="p-4 relative z-10 w-full text-center">
       <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-200 "
       >Master the Art of Music</h1>
       <p
        className="mt-4 font-normal text-base md:text-lg text-gray-300 max-w-lg mx-auto font-inhartial"
       >Dive into our comperhensive music courses and transformal you musical journey today , whether you are a beginner or looking to refine your skill join us to unlock your true potential.</p>
   </div>
   <div className="mt-4 flex justify-center"><link href={"/courses"}></link>
    <Button><Link href={"https://www.karachisnob.com/music-classes-karachi.htm?utm_source=chatgpt.com"}>Explore Courses</Link></Button>
   </div>
   
  </div>
   
}

export default HeroPage;
'use client'
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "../data/music_courses.json";

interface Course{
  id : number , 
  title : string,
  slug : string,
  description : string,
  price : number,
 instructor : string,
  isFeatured : boolean
}

export default function Feature () {
  const feature = courseData.courses.filter((course: Course) => course.isFeatured);


   return <div className="py-12 bg-gray-900">
    <div>
      <div className="text-center">
           <h2  className="  font-medium text-base text-teal-400 tracking-wide uppercase flex justify-center">FEATURE COURSES</h2>
           <p className="mt-20 md:mt-5 text-2xl md:text-bold font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-50 " >Learn with the best</p>
      </div>
    </div>
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      {feature && feature.map((course: Course) => (
    <div key={course.id}>
      <div className="p-4 sm:p-6 flex flex-col item-center text-center flex-grow">
        <BackgroundGradient>
          <div className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm text-white pl-1 pr-1 ">
          <p className="text-xl font-semibold text-teal-300 mt-6 font-sans">{course.title}</p>
      <p className="text-gray-500 font-sans mt-6 mb-6">{course.description}</p>
    <Link
    href={`/course/${course.slug}`}
    className="inline-block mt-2 from-neutral-50 to-neutral-50  hover:text-gray-500 font-medium transition mb-4"
  >
    Learn more →
  </Link>
  </div>
        </BackgroundGradient>
      </div>
    </div>
    ))}

      </div>
    </div>

    <div className="mt-20 text-center"><Link href={"https://www.skillshare.com/en/browse/music-production"} className="px-4 py-2 rounded-full border border-neutral-600 text-slate-800 bg-white hover:bg-teal-400  translate duration-200 font-sans"  >View All courses</Link> </div>
   
   </div>

}
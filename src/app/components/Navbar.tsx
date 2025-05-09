'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/app/lib/utils";
//import Link from "next/link";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
  <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>

<Menu setActive={setActive}>
  <MenuItem setActive={setActive} active={active} item="Services">
    <div className="flex flex-col space-y-4 text-sm">
      <HoveredLink href="https://online.berklee.edu/music-production">Music Production</HoveredLink>
      <HoveredLink href="https://www.skillshare.com/en/browse/music-production">Audio Engineering</HoveredLink>
      <HoveredLink href="https://www.udemy.com/course/music-production-in-fl-studio/">Mixing & Mastering</HoveredLink>
      <HoveredLink href="/sound-design">Sound Design</HoveredLink>
      <HoveredLink href="https://online.berklee.edu/music-production">Film Scoring</HoveredLink>
    </div>
  </MenuItem>

  <MenuItem setActive={setActive} active={active} item="Our Courses">
    <div className="text-sm grid grid-cols-2 gap-10 p-4">
    <ProductItem
  title="Berklee Online"
  href="https://online.berklee.edu/music-production"
  src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc"
  description="Top-rated online courses in music production, mixing, DAWs, and more."
/>

<ProductItem
  title="Coursera: Music Production"
  href="https://www.coursera.org/specializations/music-production"
  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
  description="Learn from top instructors at Berklee and Michigan on Coursera."
/>

<ProductItem
  title="Udemy: FL Studio Masterclass"
  href="https://www.udemy.com/course/music-production-in-fl-studio/"
  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
  description="Create your own beats and music from scratch using FL Studio."
/>

<ProductItem
  title="Skillshare: Beat Making Basics"
  href="https://www.skillshare.com/en/browse/music-production"
  src="https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=80"
  description="Explore a wide range of music classes from beatmaking to mixing."
/>

    </div>
  </MenuItem>

  <MenuItem setActive={setActive} active={active} item="Contact">
    <div className="flex flex-col space-y-4 text-sm">
      <HoveredLink href="http://localhost:3000/contact">Contact for any design</HoveredLink>
      
    </div>
  </MenuItem>
</Menu>

  </div>
)
};

export default Navbar;

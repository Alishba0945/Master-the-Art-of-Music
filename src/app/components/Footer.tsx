import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-400 shadow-inner border-t border-teal-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white font-sans">

          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">About Me</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
  I am <span className="font-semibold text-white">Alishba</span>, the creator of 
  <span className="text-pink-400 font-bold tracking-wide"> NEXT-GTS</span> — a high-performance development style powered by 
  <span className="text-teal-400 font-medium ml-2">Next.js</span>, 
  <span className="text-teal-400 font-medium">TypeScript</span>, 
  <span className="text-teal-400 font-medium">Tailwind CSS</span>, 
  <span className="text-teal-400 font-medium">GSAP</span>, and 
  <span className="text-teal-400 font-medium ml-2">SEO optimization</span>. I transform code into impactful experiences with precision, purpose, and passion.
</p>

          </div>

          {/* Follow Me */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Follow Me</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FaGithub className="text-lg text-gray-400" />
                <a href="https://github.com/yourusername" target="_blank" className="hover:text-white transition">GitHub</a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-lg text-gray-400" />
                <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-white transition">LinkedIn</a>
              </li>
              <li className="flex items-center gap-2">
                <FaTwitter className="text-lg text-gray-400" />
                <a href="https://twitter.com/yourusername" target="_blank" className="hover:text-white transition">Twitter</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Contact</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="block mb-1">Email: <a href="hpic6511@gmail.com" className="underline hover:text-white">alishbashahzad.com</a></span>
              <span>Phone: <span className="block mt-1">+92-300-XXXXXXX</span></span>
            </p>
          </div>

          {/* My Purpose */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">My Purpose</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
            I build responsive and animated websites using modern technologies — fully optimized for performance and <span className="font-semibold text-white">SEO</span>, absolutely free.  
  Don’t just take my word for it — explore this website as proof of my skills.  
  <span className="text-teal-400 font-bold">Take action now</span> and let’s bring your ideas to life!
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-sm mt-12 text-gray-500">
          © {new Date().getFullYear()} Alishba Shahzad — All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

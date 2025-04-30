import React from 'react'
import { Mail, Linkedin, GitlabIcon as GitHub } from 'lucide-react'

function Footer() {
  return (
   <footer className="bg-neutral-800 text-white py-8">
   <div className="container mx-auto px-4">
     <div className="flex flex-col md:flex-row justify-between items-center">
       <div className="mb-4 md:mb-0">
         <a href="#home" className="text-xl font-bold text-teal-400">
           <i>Asmat ullah</i>
         </a>
         <p className="text-neutral-400 mt-2">&copy; {new Date().getFullYear()} Asmat Ullah. All rights reserved.</p>
       </div>
       <div className="flex space-x-4">
         <a
           href="https://github.com/Asmatbangash"
           target="_blank"
           rel="noopener noreferrer"
           className="text-neutral-400 hover:text-teal-400 transition-colors"
         >
           <GitHub size={20} />
         </a>
         <a
           href="https://www.linkedin.com/in/asmat-ullah-218529337/"
           target="_blank"
           rel="noopener noreferrer"
           className="text-neutral-400 hover:text-teal-400 transition-colors"
         >
           <Linkedin size={20} />
         </a>
         <a href="mailto:bangashasmat877@gmail.com" className="text-neutral-400 hover:text-teal-400 transition-colors">
           <Mail size={20} />
         </a>
       </div>
     </div>
   </div>
 </footer>
  )
}

export default Footer
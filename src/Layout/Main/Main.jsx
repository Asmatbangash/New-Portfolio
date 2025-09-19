import React from "react";
import { assets } from "../../assets/index.js";
import {
  SkillCatogry,
  ProjectCatogry,
  EducationCatogry,
  Experience,
  Contact,
} from "../../components/index.js";

function Main({ motion, GitHub, Linkedin, Mail }) {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-800">
                Hi, I'm <span className="text-teal-600">Asmat Ullah</span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-neutral-600">
                Full Stack | MERN Stack Web Developer
              </h2>
              <p className="text-neutral-600 mb-8 max-w-lg">
                Motivated Full Stack Developer with expertise in the MERN stack
                (MongoDB, Express.js, React.js, Node.js) and modern frontend
                technologies. Skilled in building responsive, scalable, and
                user-friendly web applications, with hands-on experience from my
                role at MK Smart Technologies. Passionate about clean code,
                performance optimization, and delivering seamless digital
                solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/923356976877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Contact Me
                </a>

                <a
                  href="https://github.com/Asmatbangash"
                  className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-md transition-colors"
                  target="_blank"
                >
                  View Work
                </a>
              </div>
              <div className="flex mt-8 space-x-4">
                <a
                  href="https://github.com/Asmatbangash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-teal-600 transition-colors"
                >
                  <GitHub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/asmat-ullah-218529337/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-teal-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#all?compose=new"
                  className="text-neutral-600 hover:text-teal-600 transition-colors"
                  target="_blank"
                >
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-100">
                <img
                  src={assets.asmatImg}
                  alt="asmat ullah"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SkillCatogry />
      <ProjectCatogry />
      <Experience />
      <EducationCatogry />
      <Contact />
    </main>
  );
}

export default Main;

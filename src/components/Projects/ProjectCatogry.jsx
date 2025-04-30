import React from 'react'
import ProjectCard from './Projects'
import { motion } from 'framer-motion'
import { ntgLineImg, blogImg, youtubeImg } from '../../assets'
import {ChevronRight} from 'lucide-react'

function ProjectCatogry() {
  return (
    <section id="projects" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project reflects my passion for building intuitive and
                impactful web applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Nadra Token web Application"
                description="A web-based system designed to streamline the token generation process for NADRA offices. It allows users to book tokens online,helping to reduce long waiting times and improve service efficiency. The application features a user-friendly interface, real-time updates, and secure data handling."
                tags={["React.js", "Node.js", "Express.js", "MongoDB",]}
                image={ntgLineImg}
                delay={0}
              />
              <ProjectCard
                title="Blogging App"
                description="Blogging BaaS (Backend as a Service) App is a modern web application built with Appwrite, designed to simplify blog management. It provides user authentication, secure database handling, and real-time content management, allowing users to create, edit, and publish blog posts effortlessly without managing their own server backend."
                tags={["React.js", "Tailwind CSS", "Appwrite"]}
                image={blogImg}
                delay={0.2}
              />
              <ProjectCard
                title="Backend Of YouTube"
                description="The backend code for the YouTube Clone powers core functionalities like user authentication, avatar and cover image uploads, vedio uploads, video streaming, comments, likes, subscriptions, and notifications. Built with scalable technologies (such as Node.js, Express, and MongoDB), it ensures secure, efficient, and real-time data handling to deliver a smooth video-sharing experience."
                tags={["Node.js", "Express.js", "MongoDb", "Multer", "Cloudinary"]}
                image={youtubeImg}
                delay={0.4}
              />
            </div>

            <div className="text-center mt-12">
              <a
                href="https://github.com/Asmatbangash?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors"
              >
                View more projects on GitHub
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </section>
  )
}

export default ProjectCatogry
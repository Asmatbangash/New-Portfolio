import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { assets } from "../../assets";
import { ChevronRight } from "lucide-react";

function ProjectCatogry() {
  const projectsDetail = [
    {
      title: "Nadra Token Web Application",
      desc: "A web-based system built with the MERN stack to streamline token generation in NADRA offices. Users can book tokens online, reducing long queues and wait times. It features a clean interface, real-time updates, and secure data handling.",
      tags: "MERN + Tailwind CSS",
      image: assets.NTG,
      href: "#",
      gitHub: "",
    },
    {
      title: "JobSiteRoute",
      desc: "A modern job portal developed using React.js and Tailwind CSS. It helps users explore job opportunities, learn about services, get referrals, and easily connect through the contact page. Designed with a responsive and user-friendly interface for a smooth experience across devices.",
      tags: "React + Tailwind CSS",
      image: assets.jobSiteRoute,
      href: "https://jobsiteroute.netlify.app/",
      gitHub: "https://github.com/Asmatbangash/JobSite",
    },
    {
      title: "Tracking Site",
      desc: "A responsive tracking application built with React.js and Tailwind CSS. It provides real-time tracking, route history, and optimized performance for users on any device. Focused on delivering a clean UI and seamless experience with reusable components.",
      tags: "React + Tailwind CSS",
      image: assets.Tracking,
      href: "https://trackingsitemk.netlify.app/",
      gitHub: "https://github.com/Asmatbangash/Tracking",
    },
  ];

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
            Here are some of my recent projects. Each project reflects my
            passion for building intuitive and impactful web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsDetail.map((data) => (
            <ProjectCard data={data} />
          ))}
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
  );
}

export default ProjectCatogry;

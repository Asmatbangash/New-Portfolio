import React from "react";
import Timeline from "../Timeline/Timeline";
import TimelineItem from "../Timeline/TimelineItem";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            My professional journey in web development and software engineering.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Timeline>
            <TimelineItem
              title="web developer"
              company="MK Smart Technologies"
              period="Apr-2025 - Present"
              description="Developed multiple web applications using html, css, bootstrap, tailwind css, javascript, React, Node.js, and MongoDB. Collaborated with designers and product managers to deliver high-quality products."
              delay={0}
            />
            <TimelineItem
              title="web developer inter"
              company="p92 software house"
              period="June-2024 - Sep-2024"
              description="Developed multiple web applications using html, css, bootstrap, tailwind css, javascript, React, Node.js, and MongoDB. Collaborated with designers and product managers to deliver high-quality products."
              delay={0}
            />
            <TimelineItem
              title="MERN Developer"
              company="Techsol lab"
              period="1-Nov-2024 - 1-Dec-2025"
              description="Developed multiple web applications using React, Node.js, and MongoDB. Collaborated with designers and product managers to deliver high-quality products."
              delay={0.2}
            />
            <TimelineItem
              title="Web Developer"
              company="Self Employee"
              period="1-jan-2025 - Present"
              description="Created responsive website Worked with HTML, CSS,Bootstrap, Tailwind CSS, JavaScript, Reactjs, React-Router, React-Redux, Nodejs, Expressjs, MongoDb."
              delay={0.4}
            />
          </Timeline>
        </div>
      </div>
    </section>
  );
}

export default Experience;

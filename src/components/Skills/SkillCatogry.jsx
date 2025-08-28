import React from "react";
import Skills from "./Skills";
import { motion } from "framer-motion";

function SkillCatogry() {
  return (
    <section id="skills" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the Frontend web
            development and basic understand of backend world. Here are my main
            areas of expertise:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Skills
            title="Frontend Development"
            skills={[
              "HTML",
              "CSS",
              "JavaScript (ES6+)",
              "React.js  (React-Redux)  (React Router)",
              "Bootstrap",
              "Tailwind CSS",
              "Responsive Design",
            ]}
            icon="🎨"
            delay={0}
          />
          <Skills
            title="Backend Development"
            skills={["Node.js", "Express", "MongoDB", "RESTful APIs"]}
            icon="⚙️"
            delay={0.2}
          />
          <Skills
            title="Tools & Others"
            skills={["Git & GitHub", "vs-code", "postman"]}
            icon="🛠️"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

export default SkillCatogry;

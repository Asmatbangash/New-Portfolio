import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, GitlabIcon as GitHub } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-16 bg-neutral-100">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="text-teal-600 mr-3 mt-1" size={20} />
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:contact@example.com"
                  className="text-neutral-600 hover:text-teal-600 transition-colors"
                >
                  bangashasmat877@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Linkedin className="text-teal-600 mr-3 mt-1" size={20} />
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/asmat-ullah-218529337/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-teal-600 transition-colors"
                >
                  linkedin.com/asmat-ullah
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <GitHub className="text-teal-600 mr-3 mt-1" size={20} />
              <div>
                <h4 className="font-medium">GitHub</h4>
                <a
                  href="https://github.com/Asmatbangash?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-teal-600 transition-colors"
                >
                  github.com/asmat-ullah
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Available For</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                Full-time positions
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                Freelance projects
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                Consulting
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                Remote work
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default Contact
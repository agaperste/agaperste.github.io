'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold mb-8">About Me</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-6xl">
              🐠
            </div>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            Hi! I'm Jackie Zhang, a writer, tinkerer, and explorer documenting life one page at a time.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm passionate about technology, creativity, and learning new things. This website is my
            digital space where I share my thoughts, projects, and experiences.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">What I Do</h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I enjoy working on various creative and technical projects, from writing and storytelling
            to building interactive web experiences. I believe in continuous learning and love
            exploring new technologies and ideas.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Get in Touch</h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Feel free to reach out! You can find me on:
          </p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Twitter:</strong>{' '}
              <a
                href="https://twitter.com/agaperste"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                @agaperste
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{' '}
              <a
                href="https://instagram.com/pepperjackieee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                @pepperjackieee
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://linkedin.com/in/jackieyingzhuzhang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                jackieyingzhuzhang
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/agaperste"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                agaperste
              </a>
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:agapehumilduro@gmail.com"
                className="text-blue-500 hover:text-blue-600"
              >
                agapehumilduro@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

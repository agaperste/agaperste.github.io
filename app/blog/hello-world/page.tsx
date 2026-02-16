'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HelloWorld() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to blog
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-lg dark:prose-invert max-w-none"
      >
        <header className="mb-8">
          <h1 className="text-5xl font-bold mb-4">Hello World</h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <time dateTime="2026-02-16">February 16, 2026</time>
            <span>•</span>
            <span>Jackie Zhang</span>
          </div>
        </header>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="text-xl">
            Welcome to my newly redesigned website! I'm excited to share this space with you.
          </p>

          <p>
            After spending some time thinking about what I wanted my personal website to be, I decided
            to rebuild it from scratch with modern technologies. The result is what you're seeing now -
            a fast, interactive, and beautiful site that I'm proud to call my digital home.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">What's New?</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Modern Tech Stack:</strong> Built with Next.js 14, React, and TypeScript for
              blazing fast performance
            </li>
            <li>
              <strong>Dark Mode:</strong> Smooth theme toggle that respects your system preferences
            </li>
            <li>
              <strong>Interactive Elements:</strong> Fun games and animations to make the experience
              more engaging
            </li>
            <li>
              <strong>Optimized for Vercel:</strong> Lightning-fast deployment and excellent performance
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-8 mb-4">What's Next?</h2>

          <p>
            I'm planning to write more regularly about my experiences, projects, and things I'm learning.
            Topics will range from technology and programming to personal reflections and creative projects.
          </p>

          <p>
            If you want to stay updated, feel free to follow me on{' '}
            <a
              href="https://twitter.com/agaperste"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Twitter
            </a>{' '}
            or connect with me on{' '}
            <a
              href="https://linkedin.com/in/jackieyingzhuzhang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              LinkedIn
            </a>
            .
          </p>

          <p>Thanks for visiting, and I hope you enjoy exploring the site!</p>

          <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-8">
            — Jackie
          </p>
        </div>
      </motion.article>
    </div>
  )
}

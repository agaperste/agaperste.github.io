'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const blogPosts = [
  {
    slug: 'hello-world',
    title: 'Hello World',
    date: '2026-02-16',
    excerpt: 'Welcome to my new blog! This is my first post on my newly redesigned website.',
    tags: ['meta', 'personal'],
  },
]

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Thoughts, stories, and ideas
        </p>
      </motion.div>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                  <time dateTime={post.date}>{post.date}</time>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500 dark:text-gray-400">
            No blog posts yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  )
}

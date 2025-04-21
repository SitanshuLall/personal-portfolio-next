"use client"
import React from 'react'
import { File, ArrowDown } from 'lucide-react'

const Hero = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen pt-16 bg-white dark:bg-black transition-colors duration-300 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
          Hello, World! 👋🏽
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
          I'm Sitanshu <span className="text-red-400">Lall</span>
        </h1>
        <h2 className="text-2xl md:text-3xl max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
          An 🇮🇳 Software Engineer. <br />
          Code, football, and fast cars — in that order.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1ZNh2VedaLQLHPOIgtkjnQVlJVgv9uthf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 w-48 h-14 border border-gray-300 dark:border-gray-300 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-transparent hover:text-red-400 dark:hover:text-red-400 transition-colors duration-300"
          >
            <File className="w-5 h-5 mr-2 flex-shrink-0" />
            <span className="text-center whitespace-nowrap">View Resume</span>
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "#projects")}
            className="flex items-center justify-center px-6 py-3 w-48 h-14 border border-gray-300 dark:border-gray-300 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-transparent hover:text-red-400 dark:hover:text-red-400 transition-colors duration-300"
          >
            <ArrowDown className="w-5 h-5 mr-2 flex-shrink-0" />
            <span className="text-center whitespace-nowrap">View Projects</span>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Hero

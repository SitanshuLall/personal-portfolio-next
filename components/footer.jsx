"use client";
import React from 'react'
import { useTheme } from 'next-themes'
import { Github, Twitter, Linkedin, Mail, Heart, Coffee, Copyright } from 'lucide-react'

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer className="w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center">
            <p className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
              <Copyright className="w-4" />
              {new Date().getFullYear()}
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
            Made with{" "}
            <Heart className="w-5 hover:text-red-400 dark:hover:text-red-400 transition-colors" />{" "}
            &{" "}
            <Coffee className="w-5 hover:text-red-400 dark:hover:text-red-400 transition-colors" />{" "}
            by{" "}
            <span className="text-red-400 dark:text-red-400 transition-colors duration-300">
              Sitanshu Lall
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/SitanshuLall/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-300"
              aria-label="Github"
            >
              <Github />
            </a>
            <a
              href="https://x.com/SitanshuLall"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
            <a
              href="https://linkedin.com/in/sitanshulall"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:sitanshulall.work@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-300"
              aria-label="Mail"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

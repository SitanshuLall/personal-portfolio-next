"use client";

import React from "react";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiPrisma,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "C", icon: SiC },
    { name: "C++", icon: SiCplusplus },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Redux", icon: SiRedux },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Firebase", icon: SiFirebase },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Prisma ORM", icon: SiPrisma },
    { name: "MySQL", icon: SiMysql },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
  ];

  // Create multiple sets of skills for seamless infinite scroll
  const skillSets = [...skills, ...skills, ...skills, ...skills];

  return (
    <main
      id="skills"
      className="min-h-screen bg-white dark:bg-black transition-colors duration-300 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
            My Skills
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            What I Work With
          </h1>
        </div>
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll">
            {skillSets.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="group flex-shrink-0 mx-8 flex flex-col items-center justify-center h-32"
              >
                <div className="relative">
                  <skill.icon className="w-16 h-16 text-gray-900 dark:text-white transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-2" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 4));
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
};

export default Skills;

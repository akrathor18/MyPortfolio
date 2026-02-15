'use client';

import { Code, Server, Database, Wrench, Globe } from 'lucide-react';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiExpress,
  SiRender,
  SiPostgresql ,
  SiPrisma ,
} from "react-icons/si";
import { useState } from 'react';
export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillIcons = {
    React: FaReact,
    'Next.js': SiNextdotjs,
    'Tailwind CSS': SiTailwindcss,
    JavaScript: SiJavascript,

    'Node.js': FaNodeJs,
    Express: SiExpress ,
    'REST APIs': Globe,
    'JWT Authentication': Wrench,

    MongoDB: SiMongodb,
    MySQL: SiMysql,
    Mongoose: Database,
    PostgreSQL:   SiPostgresql ,
    prisma: SiPrisma ,
    Git: FaGitAlt,
    GitHub: FaGithub,
    'VS Code': Code,
    Postman: SiPostman,
    "Firebase Hosting": RiFirebaseFill,
    "Render": SiRender ,

  };

  const skillDescriptions = {
  // Frontend
  React: 'UI library for building interactive web applications',
  'Next.js': 'React framework with server-side rendering and routing',
  'Tailwind CSS': 'Utility-first CSS framework for rapid UI development',
  JavaScript: 'Core language for web development',

  // Backend
  'Node.js': 'JavaScript runtime for building backend services',
  Express: 'Minimalist web framework for Node.js',
  'JWT Authentication': 'Token-based authentication for securing APIs',
  'REST APIs': 'RESTful architecture for client–server communication',

  // Database
  MongoDB: 'NoSQL document-based database',
  MySQL: 'Relational database management system',
  Mongoose: 'ODM library for MongoDB schema modeling',
  PostgreSQL: 'Advanced open-source relational database',
  prisma: 'Next-generation ORM for Node.js and TypeScript',

  // Tools & Deployment
  Git: 'Distributed version control system',
  GitHub: 'Code hosting and collaboration platform',
  'VS Code': 'Source code editor for development',
  Postman: 'API testing and debugging tool',
  'Firebase Hosting': 'Frontend hosting and deployment platform',
  Render: 'Cloud platform for deploying backend services',
};

  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
    },

    {
      category: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express', "JWT Authentication", 'REST APIs'],
    },
    {
      category: 'Database',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Mongoose', 'PostgreSQL', 'prisma'],
    },
    {
      category: 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', "Postman","Firebase Hosting","Render"],
    },
  ];


  return (
    <section className="py-20 px-6 bg-background relative">
      {/* Section Separator Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Skills
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group hover:shadow-lg hover:scale-105 cursor-default transform"
              >
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <IconComponent className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <li className="flex items-center gap-3 text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300 opacity-90 group-hover:opacity-100 cursor-pointer">
                        {/* Skill Icon */}
                        <div
                          className={`w-7 h-7 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 transition-all duration-300 ${hoveredSkill === skill
                              ? 'scale-110 rotate-6 border-primary/50 bg-primary/20 shadow-lg'
                              : ''
                            }`}
                        >
                          {skillIcons[skill] && (
                            (() => {
                              const Icon = skillIcons[skill];
                              return <Icon className="w-4 h-4 text-primary" />;
                            })()
                          )}
                        </div>

                        <span className={`transition-all duration-300 ${hoveredSkill === skill ? 'font-semibold' : ''}`}>
                          {skill}
                        </span>
                      </li>

                      {/* Hover Tooltip */}
                      {hoveredSkill === skill && (
                        <div className="absolute left-0 top-full mt-2 z-10 bg-card text-primary-foreground text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg animate-fade-in">
                          {skillDescriptions[skill]}
                          <div className="absolute bottom-full left-3 w-2 h-2 bg-primary transform rotate-45"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>


      </div>

      {/* Section Separator Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
}

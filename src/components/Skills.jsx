'use client';

import { Code, Server, Database, Wrench, Globe, Star } from 'lucide-react';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import { RiFirebaseFill } from 'react-icons/ri';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiExpress,
  SiRender,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
} from 'react-icons/si';
import { useState } from 'react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillIcons = {
    React: FaReact,
    'Next.js': SiNextdotjs,
    'Tailwind CSS': SiTailwindcss,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    'Node.js': FaNodeJs,
    Express: SiExpress,
    'REST APIs': Globe,
    'JWT Authentication': Wrench,
    WebSockets: Globe,
    'Socket.io': SiSocketdotio,
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    Mongoose: Database,
    PostgreSQL: SiPostgresql,
    Prisma: SiPrisma,
    Git: FaGitAlt,
    GitHub: FaGithub,
    'VS Code': Code,
    Postman: SiPostman,
    'Firebase Hosting': RiFirebaseFill,
    Render: SiRender,
  };

  const skillDescriptions = {
    React: 'UI library for building interactive web applications',
    'Next.js': 'React framework with server-side rendering and routing',
    'Tailwind CSS': 'Utility-first CSS framework for rapid UI development',
    JavaScript: 'Core language for web development',
    TypeScript: 'Superset of JavaScript with static typing for better code quality',
    'Node.js': 'JavaScript runtime for building backend services',
    Express: 'Minimalist web framework for Node.js',
    'JWT Authentication': 'Token-based authentication for securing APIs',
    'REST APIs': 'RESTful architecture for client–server communication',
    WebSockets: 'Protocol enabling real-time bidirectional communication between client and server',
    'Socket.io': 'Library for building real-time applications using WebSockets',
    MongoDB: 'NoSQL document-based database',
    MySQL: 'Relational database management system',
    Mongoose: 'ODM library for MongoDB schema modeling',
    PostgreSQL: 'Advanced open-source relational database',
    Prisma: 'Next-generation ORM for Node.js and TypeScript',
    Git: 'Distributed version control system',
    GitHub: 'Code hosting and collaboration platform',
    'VS Code': 'Source code editor for development',
    Postman: 'API testing and debugging tool',
    'Firebase Hosting': 'Frontend hosting and deployment platform',
    Render: 'Cloud platform for deploying backend services',
  };

  // Core skills — large featured cards
  const coreCategories = [
    {
      category: 'Frontend',
      icon: Code,
      label: 'Core',
      description: 'Building modern, responsive UIs',
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      icon: Server,
      label: 'Core',
      description: 'Scalable APIs & real-time systems',
      skills: ['Node.js', 'Express', 'WebSockets', 'Socket.io', 'JWT Authentication', 'REST APIs'],
    },
  ];

  // Secondary skills — compact supporting cards
  const secondaryCategories = [
    {
      category: 'Database',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Mongoose', 'PostgreSQL', 'Prisma'],
    },
    {
      category: 'Tools & Deployment',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Firebase Hosting', 'Render'],
    },
  ];

  const SkillItem = ({ skill, large = false }) => {
    const Icon = skillIcons[skill];
    const isHovered = hoveredSkill === skill;
    return (
      <div
        className="relative"
        onMouseEnter={() => setHoveredSkill(skill)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <li className="flex items-center gap-3 text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 cursor-pointer">
          {/* Icon box — larger for core skills */}
          <div
            className={`flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 transition-all duration-300 flex-shrink-0 ${
              large ? 'w-9 h-9' : 'w-7 h-7'
            } ${isHovered ? 'scale-110 rotate-6 border-primary/60 bg-primary/25 shadow-md shadow-primary/20' : ''}`}
          >
            {Icon && <Icon className={`text-primary ${large ? 'w-5 h-5' : 'w-4 h-4'}`} />}
          </div>
          <span className={`transition-all duration-200 ${isHovered ? 'font-semibold text-foreground' : ''}`}>
            {skill}
          </span>
        </li>

        {/* Tooltip — always above */}
        {isHovered && skillDescriptions[skill] && (
          <div className="absolute left-0 bottom-full mb-2 z-50 bg-card border border-primary/30 text-foreground text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl animate-fade-in pointer-events-none">
            {skillDescriptions[skill]}
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary/30" />
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-20 px-6 bg-background relative">
      {/* Section Separator Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">My Skills</h2>
          <p className="text-lg text-muted-foreground">Technologies and tools I work with</p>
        </div>

        {/* ── CORE SKILLS — Featured large cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {coreCategories.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.category}
                className="relative bg-card border border-primary/25 rounded-xl p-6 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group cursor-default overflow-visible"
              >
                {/* Gradient accent bar at top */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    {/* Large icon circle */}
                    <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {group.category}
                      </h3>
                      <p className="text-xs text-muted-foreground">{group.description}</p>
                    </div>
                  </div>
                  {/* Core badge */}
                  <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold bg-primary/10 border border-primary/30 rounded-full text-primary">
                    <Star className="w-3 h-3 fill-primary" />
                    Core
                  </span>
                </div>

                {/* Skills list — larger icons */}
                <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                  {group.skills.map((skill, i) => (
                    <SkillItem key={i} skill={skill} large={true} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* ── SECONDARY SKILLS — Compact cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryCategories.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.category}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-default overflow-visible"
              >
                {/* Header — smaller, muted */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-muted/50 border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                    <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
                  </div>
                  <h3 className="text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {group.category}
                  </h3>
                </div>

                {/* Skills list — standard icons */}
                <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                  {group.skills.map((skill, i) => (
                    <SkillItem key={i} skill={skill} large={false} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Separator Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}

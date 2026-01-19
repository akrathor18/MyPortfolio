'use client';

import Link from 'next/link';
import { Github, ExternalLink, Lightbulb, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'StudyHub',
      description: "A student-focused web platform for sharing notes and practicing MCQ-based quizzes for selected subjects",
      problem: 'Students often struggle to find organized notes and self-assessment tools in one place.',
      solution: 'Built a web application that allows students to access notes, take quizzes, and track learning activity in a simple interface.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Zustand', 'Tailwind CSS'],
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      id: 2,
      title: 'Inventory Management System',
      description: 'A real-time inventory management system built during a hackathon to track stock, sales, and inventory logs.',
      problem: 'Small businesses lack simple tools to track inventory and monitor stock changes in real time.',
      solution: 'Developed a system with role-based access, inventory updates,logs, dashboards, and low-stock alerts.',
      technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'Zustand', 'Prisma'],
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      id: 3,
      title: 'Frontend E-Commerce UI',
      description: 'A modern e-commerce frontend application focused on product browsing,cart management, and a clean shopping experience.',
      problem: 'Many beginner e-commerce projects lack realistic UI flows and proper state handling for cart and product interactions.',
      solution: 'Built a responsive e-commerce frontend that includes product listings,category filtering, cart functionality, and a structured UI layout similar to real-world online stores.',
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'React Router', 'Context API'],
      links: {
        github: '#',
        live: '#',
      },
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background relative">
      {/* Section Separator Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of projects I've built and learned from
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group hover:shadow-xl hover:scale-105 transform"
            >
              {/* Project Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-primary">
                  {String(project.id).padStart(2, '0')}
                </span>
                <Lightbulb className="w-5 h-5 text-primary/40 group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 text-sm">
                {project.description}
              </p>

              {/* Problem & Solution */}
              <div className="space-y-3 mb-6 py-4 border-y border-border">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                    Problem
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                    Solution
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-background border border-border rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <Link
                  href={project.links.github}
                  className="flex-1 px-4 py-2 text-center text-sm font-semibold text-foreground bg-background border border-border rounded hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group/link"
                >
                  <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                  GitHub
                </Link>
                <Link
                  href={project.links.live}
                  className="flex-1 px-4 py-2 text-center text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group/link"
                >
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  View Live
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Separator Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
}

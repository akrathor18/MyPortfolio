'use client';

import Link from 'next/link';
import { ChevronDown, Code2, ArrowRight, Download, Github, Linkedin, Dot } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import { useEffect, useState } from 'react';

const ROLES = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'Next.js Developer',
  'React Developer',
  'Backend Developer',
];

function useTypewriter(words, typingSpeed = 80, deletingSpeed = 45, pauseMs = 1600) {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    const tick = () => {
      if (!isDeleting) {
        setDisplay(current.substring(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseMs);
          return;
        }
      } else {
        setDisplay(current.substring(0, display.length - 1));
        if (display.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
          return;
        }
      }
    };

    const timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [display, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return display;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-background relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <AnimatedBackground />
      <div className="max-w-3xl mx-auto text-center relative z-10">

        {/* Top badges row */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          {/* Welcome badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300 group cursor-default">
            <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            <span>Welcome to my portfolio</span>
          </div>

          {/* Open to work badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Available for opportunities
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Ashish Kumar
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="mb-6 h-10 flex items-center justify-center">
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            <span className="text-primary font-bold">{role}</span>
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle animate-pulse" />
          </p>
        </div>

        {/* Learn · Build · Improve pill */}
        <span className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 text-sm border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-all duration-300 hover:border-primary/50 hover:scale-105">
          Learn • Build • Improve
        </span>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed mt-4">
          I build fast, scalable web applications with modern technologies. Passionate about creating
          seamless user experiences and clean, maintainable code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link
            href="#projects"
            className="group px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-all duration-300 hover:border-primary/50 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </Link>
          <a
            href="https://raw.githubusercontent.com/akrathor18/Resume/main/Ashish%20Kumar%20Resume.pdf"
            download="Ashish Resume.pdf"
            className="group px-8 py-3 bg-primary/10 border border-primary/30 text-primary font-semibold rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/akrathor18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 group"
          >
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            akrathor18
          </a>
          <a
            href="https://www.linkedin.com/in/ashishkumartech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 group"
          >
            <Linkedin className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            ashishkumartech
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <div className="animate-bounce cursor-pointer">
            <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

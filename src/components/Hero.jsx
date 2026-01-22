'use client';

import Link from 'next/link';
import { ChevronDown, Code2, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Code Symbols */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/10 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 border-2 border-primary/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-primary/10 rounded-lg -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated lines */}
        <div className="absolute top-0 left-1/2 w-px h-1/2 bg-gradient-to-b from-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-1/2 bg-gradient-to-t from-primary/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300 group cursor-default">
          <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          <span>Welcome to my portfolio</span>
        </div>
        <br/>
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Ashish Kumar</span>
        </h1>
    <span className='mb-6 inline-flex items-center gap-2 px-3 py-1.5 text-sm border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-all duration-300 hover:border-primary/50 hover:scale-105'>Learn • Build • Improve</span>

        {/* Subheading with Role */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
          Full Stack Web Developer | Building with MERN & Next.js
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          I build fast, scalable web applications with modern technologies. Passionate about creating seamless user experiences and clean, maintainable code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center">
          <div className="animate-bounce hover:pause cursor-pointer">
            <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

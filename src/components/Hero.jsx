'use client';

import Link from 'next/link';
import { ChevronDown, Code2, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 bg-background relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300 group cursor-default">
          <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          <span>Welcome to my portfolio</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Ashish Kumar</span>
        </h1>

        {/* Subheading with Role */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
          Full Stack Web Developer | MERN & Next.js Specialist
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

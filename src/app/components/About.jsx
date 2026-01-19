'use client';

import { Lightbulb, Brain, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background relative">
      {/* Section Separator Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Building innovative solutions with code and creativity
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate full-stack developer with expertise in MERN stack and Next.js. 
              I create web applications that are fast, scalable, and user-focused.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I bridge the gap 
              between design and functionality to deliver exceptional digital experiences.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group hover:shadow-lg hover:scale-105 transform">
              <h4 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Problem Solver
              </h4>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                I approach challenges with logical thinking and creative solutions to deliver results.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group hover:shadow-lg hover:scale-105 transform">
              <h4 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                <Brain className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Continuous Learner
              </h4>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                Always staying updated with latest technologies and best practices in web development.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group hover:shadow-lg hover:scale-105 transform">
              <h4 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Collaborative
              </h4>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                I work effectively in teams and communicate ideas clearly with stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Separator Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
}

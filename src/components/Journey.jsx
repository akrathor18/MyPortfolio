'use client';

import { BookOpen, Code, Lightbulb, Zap, Rocket, Award } from 'lucide-react';

export default function Journey() {
  const journeySteps = [
    {
      id: 1,
      title: 'HTML & CSS Foundations',
      icon: BookOpen,
      description:
        'My curiosity about programming started with learning basic HTML and CSS. I began teaching myself through YouTube and online resources, building simple static webpages and understanding how the web works.',
    },
    {
      id: 2,
      title: 'JavaScript Mastery',
      icon: Code,
      description:
        'As I moved to JavaScript, the learning curve became steeper. Coming from HTML and CSS, JavaScript felt confusing at first, but I stayed consistent and gradually understood core programming concepts by building small projects.',
    },
    {
      id: 3,
      title: 'React & Frontend',
      icon: Lightbulb,
      description:
        'I transitioned to React with its component-based thinking and state management. Initially challenging, but with continuous practice and project-building, I became comfortable building frontend applications using React.',
    },
    {
      id: 4,
      title: 'Backend Development',
      icon: Zap,
      description:
        'I moved into backend development, learning Node.js, Express, and MongoDB. I focused on strengthening fundamentals by creating small backend projects and APIs.',
    },
    {
      id: 5,
      title: 'Full Stack Development',
      icon: Rocket,
      description:
        'I started building full-stack applications using the MERN stack and Next.js, including projects like StudyHub. I also participated in a hackathon with my team, building an inventory management system called InventLab.',
    },
    {
      id: 6,
      title: 'Continuous Learning',
      icon: Award,
      description:
        'All of this learning happened alongside my regular college studies. Everything I know today is the result of self-learning through YouTube, hands-on practice, and consistently building projects.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-background relative">
      {/* Section Separator Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            From curiosity to full-stack development
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="hidden sm:inline relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 md:translate-x--1"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`flex gap-8 relative ${isEven ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="flex md:flex-1 justify-start md:justify-end">
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-16 h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center group hover:scale-125 hover:shadow-lg transition-all duration-300 cursor-default transform">
                        <IconComponent className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="md:flex-1 flex items-center">
                    <div className="w-full bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group hover:shadow-lg hover:scale-105 transform">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-mono text-primary font-bold">
                          {String(step.id).padStart(2, '0')}
                        </span>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sm:hidden inline relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="flex gap-4 md:gap-8 relative"
                >
                  {/* Timeline Dot */}
                  <div className="flex flex-shrink-0">
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center group hover:scale-125 hover:shadow-lg transition-all duration-300 cursor-default transform">
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 flex items-center pb-4 md:pb-0">
                    <div className="w-full bg-card border border-border rounded-lg p-4 md:p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group hover:shadow-lg hover:scale-105 transform">
                      <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                        <span className="text-xs md:text-sm font-mono text-primary font-bold flex-shrink-0">
                          {String(step.id).padStart(2, '0')}
                        </span>
                        <h3 className="text-base md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Journey Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8 hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary/10 transition-all duration-300 hover:shadow-lg text-center">
          <p className="text-base text-muted-foreground leading-relaxed">
            My journey has been shaped by curiosity, persistence, and a commitment to building projects that solve real problems. Every step—from learning HTML to building full-stack applications—has been crucial in becoming the developer I am today.
          </p>
        </div>
      </div>

      {/* Section Separator Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
}

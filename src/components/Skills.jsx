'use client';

import { Code, Server, Database, Wrench, Globe } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code,
      skills: ['React', 'Next.js', , 'Tailwind CSS', 'JavaScript'],
    },
   
    {
      category: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express', , 'REST APIs'],
    },
    {
      category: 'Database',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Mongoose', ],
    },
    {
      category: 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', "Postman"],
    },
  ];

  const languages = ['English', 'Hindi', 'Panjabi'];

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
                <ul className="space-y-2">
                  {group.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300 opacity-90 group-hover:opacity-100"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Languages */}
        <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {languages.map((lang, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-background border border-border rounded-lg text-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 cursor-default transform"
              >
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Separator Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
}

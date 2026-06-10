'use client';

import { Lightbulb, Brain, Users, MapPin, GraduationCap, Rocket } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '2+', label: 'Years Learning' },
  { value: '3', label: 'Full-Stack Apps' },
  { value: '10+', label: 'Technologies' },
];

const traits = [
  {
    icon: Lightbulb,
    title: 'Builder at Heart',
    description:
      "I don't just write code — I build things I'd actually want to use. Every project starts with a real problem and ends with something that works end-to-end.",
  },
  {
    icon: Brain,
    title: 'Depth over Surface',
    description:
      "I like understanding how things work under the hood — whether it's how Socket.IO manages connections, how JWT auth flows work, or how databases handle relations.",
  },
  {
    icon: Rocket,
    title: 'Job-Ready Focus',
    description:
      "I'm a final-year diploma student actively building production-grade projects to bridge the gap between college and industry — ready to contribute from day one.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background relative">
      {/* Section Separator Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            A developer from Chandigarh, building things that matter
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          {/* Left — Personal story */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-5">Who I Am</h3>

            {/* Identity pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-primary/10 border border-primary/25 rounded-full text-primary">
                <MapPin className="w-3.5 h-3.5" />
                Chandigarh, India
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-card border border-border rounded-full text-muted-foreground">
                <GraduationCap className="w-3.5 h-3.5" />
                Diploma — CS &amp; Engg. · Final Year
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a self-taught full-stack developer from Chandigarh, wrapping up my final year of a
              Diploma in Computer Science &amp; Engineering. Most of what I know didn't come from a
              classroom — it came from late nights debugging, building projects that broke, and
              figuring out why.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I gravitate toward backend systems and real-time communication — things like
              WebSockets, REST API design, and database modeling genuinely excite me. But I care
              just as much about making the frontend feel right, because a product isn't done until
              it's something people actually enjoy using.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Right now I'm focused on becoming industry-ready — building full-stack applications
              that reflect real-world standards, not just tutorial projects. I graduate in about a
              month and I'm actively looking for my first role where I can contribute, learn fast,
              and grow.
            </p>
          </div>

          {/* Right — Trait cards */}
          <div className="space-y-4">
            {traits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group hover:shadow-lg hover:scale-105 transform"
              >
                <h4 className="text-base font-semibold text-primary mb-1.5 flex items-center gap-2">
                  <Icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  {title}
                </h4>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group hover:scale-105 transform"
            >
              <p className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                {value}
              </p>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Separator Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}

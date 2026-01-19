'use client';

import Link from 'next/link';
import { Mail, Github, Linkedin, Twitter, ArrowRight, Send } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      value: 'ashishk.codes@gmail.com',
      href: 'mailto:ashishk.codes@gmail.com',
      icon: Mail,
    },
    {
      label: 'GitHub',
      value: 'github.com/akrathor18',
      href: 'https://github.com/akrathor18',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      value: '/in/ashishkumartech',
      href: 'https://www.linkedin.com/in/ashishkumartech',
      icon: Linkedin,
    },
    {
      label: 'Twitter',
      value: '@iam_ashish_dev',
      href: 'https://x.com/iam_ashish_dev',
      icon: Twitter,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background relative">
      {/* Section Separator Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's collaborate and build something amazing together
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactLinks.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Link
                key={index}
                href={contact.href}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group hover:shadow-lg hover:scale-105 transform"
              >
                <div className="flex items-start gap-4">
                  <IconComponent className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">
                      {contact.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Direct Message */}
        <div className="flex flex-col justify-center items-center bg-linear-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 hover:bg-linear-to-r hover:from-primary/15 hover:to-primary/10 transition-all duration-300 hover:shadow-lg">
          <p className="text-muted-foreground mb-4">
            Interested in working together? I'm always open to discussing new projects.
          </p>
          <Link
            href="mailto:your.email@example.com"
            className=" flex items-center gap-2 justify-center w-fit px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 "
          >
          <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            Send me an Email
          </Link>
        </div>
      </div>

      {/* Section Separator Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
}

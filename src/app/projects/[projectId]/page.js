import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Code, Eye, AlertCircle, Lightbulb } from 'lucide-react';
import { projectsData } from '../../../data/projects.js';
import Projecet404 from '@/components/Projecet404.jsx';
export default function ProjectDetail({ params }) {
    const { projectId } = use(params);
    console.log(projectId);
    const project = projectsData.find(
        (p) => p.id === projectId
    );
    if (!project) {
        return (
            <Projecet404 />
        );
    }

    return (
        <main className="bg-background text-foreground min-h-screen">
            {/* Navigation Back */}
            <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        Back to Projects
                    </Link>
                </div>
            </div>

            {/* Project Header */}
            <section className="relative py-12 md:py-20 px-6 border-b border-border">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            {project.title}
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            {project.description}
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div className="bg-card border border-border rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Duration</p>
                            <p className="text-lg font-semibold text-primary">{project.stats.duration}</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Team Size</p>
                            <p className="text-lg font-semibold text-primary">{project.stats.teamSize}</p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-4">
                            <p className="text-sm text-muted-foreground mb-1">Status</p>
                            <p className="text-lg font-semibold text-primary">{project.stats.status}</p>
                        </div>
                    </div>

                    {/* CTA Links */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            traget="_blank"
                            href={project.links.github}
                            className="flex-1 px-6 py-3 bg-background border border-border text-foreground font-semibold rounded-lg hover:border-primary/50 hover:bg-card transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                        >
                            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            View Code
                        </Link>
                        <Link
                            traget="_blank"
                            href={project.links.live}
                            className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                        >
                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            Live Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-12 md:py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-6">About this project</h2>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                {project.longDescription}
                            </p>

                            {/* Problem & Solution */}
                            <div className="space-y-6">
                                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                                    <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                                        <Code className="w-5 h-5" />
                                        The Problem
                                    </h3>
                                    <p className="text-muted-foreground">{project.problem}</p>
                                </div>

                                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                                    <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                                        <Eye className="w-5 h-5" />
                                        The Solution
                                    </h3>
                                    <p className="text-muted-foreground">{project.solution}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div>
                            {/* Features */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
                                <ul className="space-y-3">
                                    {project.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
                                        >
                                            <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300">
                                                <span className="w-2 h-2 bg-background rounded-full"></span>
                                            </span>
                                            <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-4">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg text-sm font-semibold hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges & Learnings Section */}
            <section className="py-12 md:py-20 px-6 border-t border-border relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Challenges & Learnings</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Challenges */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <AlertCircle className="w-6 h-6 text-primary" />
                                <h3 className="text-2xl font-bold text-foreground">Challenges Faced</h3>
                            </div>
                            <ul className="space-y-4">
                                {project.challenges.map((challenge, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
                                    >
                                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm group-hover:bg-primary/40 transition-colors duration-300">
                                            {index + 1}
                                        </span>
                                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                            {challenge}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Learnings */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Lightbulb className="w-6 h-6 text-primary" />
                                <h3 className="text-2xl font-bold text-foreground">Key Learnings</h3>
                            </div>
                            <ul className="space-y-4">
                                {project.learnings.map((learning, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-4 p-4 bg-card border border-primary/20 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                                    >
                                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm group-hover:bg-primary/40 transition-colors duration-300 group-hover:scale-125 transition-transform duration-300">
                                            ✓
                                        </span>
                                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                            {learning}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            </section>

            {/* Bottom CTA */}
            <section className="py-12 md:py-20 px-6 border-t border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Interested in my work?</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Feel free to reach out or explore more of my projects
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#contact"
                            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            Get In Touch
                        </Link>
                        <Link
                            href="/#projects"
                            className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

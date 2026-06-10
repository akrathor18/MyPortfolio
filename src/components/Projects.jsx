'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ExternalLink, Lightbulb, Zap, LayoutGrid, Clock, X } from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectTimeline from './ProjectTimeline';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [view, setView] = useState('grid'); // 'grid' | 'timeline'

    // Collect all unique tech tags across all projects
    const allTechs = useMemo(() => {
        const set = new Set();
        projectsData.forEach((p) => p.technologies.forEach((t) => set.add(t)));
        return ['All', ...Array.from(set).sort()];
    }, []);

    // Filtered project list
    const filtered = useMemo(() => {
        if (activeFilter === 'All') return projectsData;
        return projectsData.filter((p) => p.technologies.includes(activeFilter));
    }, [activeFilter]);

    return (
        <section id="projects" className="py-20 px-6 bg-background relative">
            {/* Section Separator Top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                            My Projects
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            A collection of projects I've built and learned from
                        </p>
                    </div>

                    {/* View Toggle */}
                    <div className="flex items-center gap-1 bg-card border border-border rounded-lg p-1 self-start sm:self-auto flex-shrink-0">
                        <button
                            onClick={() => setView('grid')}
                            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                view === 'grid'
                                    ? 'bg-primary text-primary-foreground shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            <LayoutGrid className="w-4 h-4" />
                            Grid
                        </button>
                        <button
                            onClick={() => setView('timeline')}
                            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                view === 'timeline'
                                    ? 'bg-primary text-primary-foreground shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            <Clock className="w-4 h-4" />
                            Timeline
                        </button>
                    </div>
                </div>

                {/* Tech Filter Bar */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                        {allTechs.map((tech) => (
                            <button
                                key={tech}
                                onClick={() => setActiveFilter(tech)}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                                    activeFilter === tech
                                        ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20'
                                        : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                                }`}
                            >
                                {tech}
                                {activeFilter === tech && tech !== 'All' && (
                                    <X className="w-3 h-3" />
                                )}
                            </button>
                        ))}
                    </div>
                    {activeFilter !== 'All' && (
                        <p className="mt-3 text-sm text-muted-foreground">
                            Showing{' '}
                            <span className="text-primary font-semibold">{filtered.length}</span>{' '}
                            project{filtered.length !== 1 ? 's' : ''} using{' '}
                            <span className="text-primary font-semibold">{activeFilter}</span>
                        </p>
                    )}
                </div>

                {/* Views */}
                {view === 'timeline' ? (
                    <ProjectTimeline projects={filtered} />
                ) : (
                    <>
                        {filtered.length === 0 ? (
                            <div className="text-center py-24 text-muted-foreground">
                                <p className="text-lg">No projects match this filter.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {filtered.map((project) => (
                                    <div
                                        key={project.id}
                                        className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group hover:shadow-xl hover:scale-105 transform flex flex-col"
                                    >
                                        {/* Project Number + Role */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-mono text-primary">
                                                    {project.year}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="px-3 py-1 text-xs font-semibold bg-primary/10 border border-primary/30 rounded-full text-primary">
                                                    {project.role}
                                                </span>
                                                <Lightbulb className="w-5 h-5 text-primary/40 group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
                                            </div>
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

                                        {/* Technologies — highlight active filter */}
                                        <div className="mb-6">
                                            <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                                Tech Stack
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setActiveFilter(tech)}
                                                        className={`px-2 py-1 text-xs rounded border transition-all duration-200 cursor-pointer ${
                                                            activeFilter === tech
                                                                ? 'bg-primary/20 border-primary/50 text-primary font-semibold'
                                                                : 'bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                                                        }`}
                                                    >
                                                        {tech}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Links */}
                                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                            <Link
                                                href={`/projects/${project.id}`}
                                                className="flex-1 px-4 py-2 text-center text-sm font-semibold text-foreground bg-background border border-border rounded hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group/link"
                                            >
                                                <Zap className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                                                Details
                                            </Link>
                                            <Link
                                                target="_blank"
                                                href={project.links.live}
                                                className="flex-1 px-3 sm:px-6 sm:py-3 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 text-center hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                                            >
                                                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                                Live Demo
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Section Separator Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}

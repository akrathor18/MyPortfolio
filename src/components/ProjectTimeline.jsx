'use client';

import Link from 'next/link';
import { ExternalLink, Zap, Calendar, Clock, Github } from 'lucide-react';

export default function ProjectTimeline({ projects }) {
    // Group projects by year (newest first)
    const sorted = [...projects].sort((a, b) => {
        const yearA = parseInt((a.year || '0').split('–').pop());
        const yearB = parseInt((b.year || '0').split('–').pop());
        return yearB - yearA;
    });

    // Build year groups
    const groups = [];
    sorted.forEach((project) => {
        const year = project.year || 'Unknown';
        const last = groups[groups.length - 1];
        if (last && last.year === year) {
            last.projects.push(project);
        } else {
            groups.push({ year, projects: [project] });
        }
    });

    if (projects.length === 0) {
        return (
            <div className="text-center py-24 text-muted-foreground">
                <p className="text-lg">No projects match this filter.</p>
            </div>
        );
    }

    return (
        <div className="relative">
            {groups.map((group, gi) => (
                <div key={group.year} className="mb-12">
                    {/* Year Label */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-primary font-mono">{group.year}</span>
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                    </div>

                    {/* Projects in this year group */}
                    <div className="relative ml-4 md:ml-8">
                        {/* Vertical line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

                        <div className="space-y-6">
                            {group.projects.map((project, pi) => (
                                <div key={project.id} className="relative flex gap-6 md:gap-8 pl-8 md:pl-12">
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-6 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background shadow-[0_0_8px] shadow-primary/50 -translate-x-[4px]" />

                                    {/* Card */}
                                    <div className="flex-1 bg-card border border-border rounded-xl p-5 md:p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">

                                        {/* Top row */}
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <span className="px-2.5 py-1 text-xs font-semibold bg-primary/10 border border-primary/30 rounded-full text-primary whitespace-nowrap">
                                                    {project.role}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>{project.stats?.duration}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-0.5 text-xs bg-background border border-border rounded text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex flex-wrap gap-2">
                                            <Link
                                                href={`/projects/${project.id}`}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-foreground bg-background border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300"
                                            >
                                                <Zap className="w-3.5 h-3.5" />
                                                Details
                                            </Link>
                                            {project.links?.live && (
                                                <Link
                                                    href={project.links.live}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-all duration-300"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                    Live Demo
                                                </Link>
                                            )}
                                            {project.links?.github && (
                                                <Link
                                                    href={project.links.github}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-muted-foreground bg-background border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300"
                                                >
                                                    <Github className="w-3.5 h-3.5" />
                                                    GitHub
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

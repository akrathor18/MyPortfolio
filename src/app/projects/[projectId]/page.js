import { use } from 'react';
import Link from 'next/link';
import { projectsData, projects } from '@/data/projects';
import Projecet404 from '@/components/Projecet404.jsx';
import { ArrowLeft, Github, ExternalLink, Code, Eye, AlertCircle, Lightbulb, UserCheck, CheckCircle2, Heart, Monitor, X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import ImagesPreview from '@/components/projectDetails/ImagesPreview.jsx';
export function generateStaticParams() {
    return projects.map((project) => ({
        projectId: project.id,
    }));
}

const SITE_URL = 'https://ashish-codes.web.app';

// Official docs links for technology badges
const techLinks = {
    'React': 'https://react.dev',
    'Next.js': 'https://nextjs.org/docs',
    'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'TypeScript': 'https://www.typescriptlang.org/docs',
    'Tailwind CSS': 'https://tailwindcss.com/docs',
    'Node.js': 'https://nodejs.org/en/docs',
    'Express.js': 'https://expressjs.com',
    'Express': 'https://expressjs.com',
    'MongoDB': 'https://www.mongodb.com/docs',
    'MySQL': 'https://dev.mysql.com/doc',
    'PostgreSQL': 'https://www.postgresql.org/docs',
    'Prisma ORM': 'https://www.prisma.io/docs',
    'Prisma': 'https://www.prisma.io/docs',
    'Socket.IO': 'https://socket.io/docs',
    'JWT Authentication': 'https://jwt.io/introduction',
    'Google OAuth': 'https://developers.google.com/identity/protocols/oauth2',
    'GitHub OAuth': 'https://docs.github.com/en/apps/oauth-apps/building-oauth-apps',
    'Zustand': 'https://zustand-demo.pmnd.rs',
    'Mongoose': 'https://mongoosejs.com/docs',
    'SQLite': 'https://www.sqlite.org/docs.html',
    'Razorpay': 'https://razorpay.com/docs',
    'REST APIs': 'https://restfulapi.net',
    'WebSockets': 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
    'Firebase Hosting': 'https://firebase.google.com/docs/hosting',
    'Render': 'https://render.com/docs',
    'Git': 'https://git-scm.com/doc',
    'GitHub': 'https://docs.github.com',
    'Postman': 'https://learning.postman.com/docs',
    'VS Code': 'https://code.visualstudio.com/docs',
};

export async function generateMetadata({ params }) {
    const { projectId } = await params;
    const project = projectsData.find((p) => p.id === projectId);

    if (!project) {
        return {
            title: 'Project Not Found | Ashish Kumar',
            description: 'The project you are looking for does not exist.',
        };
    }

    // Keep title under 60 chars for Google
    const title = `${project.title} | Ashish Kumar`;
    const description = project.description; // concise, already short
    const pageUrl = `${SITE_URL}/projects/${project.id}`;
    const ogImage = `${SITE_URL}/og-image.png`; // always use the proper 1200x630 OG image

    return {
        title,
        description,
        keywords: [
            project.title,
            ...project.technologies,
            'Ashish Kumar',
            'Full Stack Developer',
            'Portfolio Project',
        ],
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            type: 'article',
            url: pageUrl,
            siteName: 'Ashish Kumar — Portfolio',
            title,
            description,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: `${project.title} — Ashish Kumar`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@iam_ashish_dev',
            creator: '@iam_ashish_dev',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function ProjectDetail({ params }) {
    const { projectId } = use(params);
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
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.links.github}
                            className="flex-1 px-6 py-3 bg-background border border-border text-foreground font-semibold rounded-lg hover:border-primary/50 hover:bg-card transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                        >
                            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            View Code
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.links.live}
                            className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                        >
                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            Live Demo
                        </a>
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
                                    {project.technologies.map((tech, index) => {
                                        const href = techLinks[tech];
                                        const Wrapper = href ? 'a' : 'span';
                                        return (
                                            <Wrapper
                                                key={index}
                                                {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                                                className="group inline-flex items-center gap-1.5 px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg text-sm font-semibold hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                                            >
                                                {tech}
                                                {href && (
                                                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -mt-0.5" />
                                                )}
                                            </Wrapper>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why I Built This Section */}
            <section className="py-12 md:py-20 px-6 border-t border-border relative bg-primary/5">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <Heart className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold text-foreground">Why I Built This</h2>
                    </div>

                    <div className="bg-card border border-primary/20 rounded-lg sm:p-8 p-4 hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {project.whyBuilt}
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            </section>
            <ImagesPreview project={project} />
            {/* My Role Section */}
            <section className="py-12 md:py-20 px-6 border-t border-border relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <UserCheck className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold text-foreground">My Role</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Role Overview */}
                        <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
                            <div className="flex flex-col items-start gap-3 mb-4">
                                <div className="flex items-center align-baseline gap-3">
                                    <UserCheck className="w-6 h-6 text-primary flex-shrink-0" />
                                    <h3 className="text-xl font-bold text-foreground ">{project.role}</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.roleDescription}
                                </p>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="space-y-4">
                            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group">
                                <p className="text-sm text-muted-foreground mb-2">Team Setup</p>
                                <p className="text-xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                                    {project.stats.teamSize}
                                </p>
                            </div>
                            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group">
                                <p className="text-sm text-muted-foreground mb-2">Project Duration</p>
                                <p className="text-xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                                    {project.stats.duration}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                            Key Responsibilities
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.responsibilities.map((responsibility, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
                                >
                                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm group-hover:bg-primary/40 group-hover:scale-125 transition-all duration-300">
                                        ✓
                                    </span>
                                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                        {responsibility}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
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

            {/* Prev / Next Project Navigation */}
            {(() => {
                const allProjects = projectsData;
                const currentIndex = allProjects.findIndex((p) => p.id === project.id);
                const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
                const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;
                return (
                    <section className="px-6 border-t border-border">
                        <div className="max-w-4xl mx-auto">
                            <div className={`grid gap-4 py-8 ${ prevProject && nextProject ? 'grid-cols-2' : 'grid-cols-1' }`}>
                                {/* Previous */}
                                {prevProject ? (
                                    <Link
                                        href={`/projects/${prevProject.id}`}
                                        className="group flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:-translate-x-1 transition-all duration-300">
                                            <ChevronLeft className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide font-medium">Previous</p>
                                            <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 truncate">{prevProject.title}</p>
                                            <p className="text-xs text-muted-foreground truncate">{prevProject.role}</p>
                                        </div>
                                    </Link>
                                ) : <div />}

                                {/* Next */}
                                {nextProject ? (
                                    <Link
                                        href={`/projects/${nextProject.id}`}
                                        className="group flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 justify-end text-right"
                                    >
                                        <div className="min-w-0">
                                            <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide font-medium">Next</p>
                                            <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 truncate">{nextProject.title}</p>
                                            <p className="text-xs text-muted-foreground truncate">{nextProject.role}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:translate-x-1 transition-all duration-300">
                                            <ChevronRight className="w-5 h-5 text-primary" />
                                        </div>
                                    </Link>
                                ) : <div />}
                            </div>
                        </div>
                    </section>
                );
            })()}

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

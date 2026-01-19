import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Code, Eye } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory management and payment integration.',
        problem: 'Traditional e-commerce solutions were too complex and expensive for small businesses.',
        solution: 'Built a scalable, user-friendly platform with secure payment processing and admin dashboard.',
        longDescription: 'This is a comprehensive e-commerce platform built with modern web technologies. It features a responsive design, real-time inventory tracking, secure payment processing with Stripe integration, and an intuitive admin dashboard for managing products, orders, and customers.',
        features: [
            'Product catalog with advanced filtering',
            'Real-time inventory management',
            'Secure payment processing (Stripe)',
            'Admin dashboard with analytics',
            'User authentication and profiles',
            'Order tracking and notifications',
            'Responsive design for all devices',
            'Search and recommendation engine',
        ],
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
        links: {
            github: '#',
            live: '#',
        },
        stats: {
            duration: '3 months',
            teamSize: 'Solo',
            status: 'Live',
        },
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates and team collaboration features.',
        problem: 'Teams needed a simple way to manage projects without complex setup and learning curves.',
        solution: 'Created an intuitive app with drag-and-drop, real-time sync, and team workspace features.',
        longDescription: 'A modern task management application designed for teams to collaborate efficiently. Features real-time updates using WebSockets, drag-and-drop interface for kanban boards, and comprehensive project management tools.',
        features: [
            'Kanban board with drag-and-drop',
            'Real-time collaboration',
            'Team workspaces',
            'Task assignments and deadlines',
            'Activity tracking and notifications',
            'File attachments support',
            'Comments and discussions',
            'Project templates',
        ],
        technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
        links: {
            github: '#',
            live: '#',
        },
        stats: {
            duration: '2 months',
            teamSize: 'Solo',
            status: 'Live',
        },
    },
    {
        id: 3,
        title: 'Analytics Dashboard',
        description: 'Real-time analytics dashboard with data visualization and custom reporting tools.',
        problem: 'Companies struggled to visualize and understand their data metrics effectively.',
        solution: 'Developed an interactive dashboard with advanced charts, filters, and export capabilities.',
        longDescription: 'An advanced analytics dashboard that transforms raw data into actionable insights. With interactive charts, custom filters, and real-time data updates, it helps businesses make data-driven decisions.',
        features: [
            'Interactive data visualization',
            'Real-time metrics and KPIs',
            'Custom report generation',
            'Data filtering and drilling',
            'Export to PDF/CSV',
            'User behavior tracking',
            'Trend analysis',
            'Performance benchmarking',
        ],
        technologies: ['Next.js', 'PostgreSQL', 'D3.js', 'Recharts'],
        links: {
            github: '#',
            live: '#',
        },
        stats: {
            duration: '4 months',
            teamSize: '3 members',
            status: 'In Development',
        },
    },
    {
        id: 4,
        title: 'Social Media Feed',
        description: 'Social media platform with real-time notifications, messaging, and user interactions.',
        problem: 'Existing solutions lacked seamless real-time communication and engaging UI.',
        solution: 'Built a full-featured social platform with WebSocket integration and modern design.',
        longDescription: 'A complete social media platform with real-time features, messaging capabilities, and an engaging user interface. Built with the MERN stack for scalability and performance.',
        features: [
            'Real-time feed updates',
            'User authentication and profiles',
            'Post creation and editing',
            'Like, comment, and share functionality',
            'Direct messaging',
            'Notifications system',
            'User discovery and recommendations',
            'Media upload support',
        ],
        technologies: ['MERN Stack', 'WebSocket', 'Tailwind CSS', 'JWT Auth'],
        links: {
            github: '#',
            live: '#',
        },
        stats: {
            duration: '5 months',
            teamSize: '2 members',
            status: 'Completed',
        },
    },
];

export default function ProjectDetail({ params }) {
    const { projectId } = use(params);
  console.log(projectId);
   const project = projectsData.find(
    (p) => p.id === Number(projectId)
  );
    if (!project) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>
                </div>
            </div>
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
                            href={project.links.github}
                            className="flex-1 px-6 py-3 bg-background border border-border text-foreground font-semibold rounded-lg hover:border-primary/50 hover:bg-card transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                        >
                            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            View Code
                        </Link>
                        <Link
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

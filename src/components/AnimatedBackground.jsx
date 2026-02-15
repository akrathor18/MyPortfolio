'use client';

import { useEffect, useRef, useCallback } from 'react';
import {
    FaDatabase,
    FaGitAlt,
    FaGithub,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";
import { Code2 } from "lucide-react";
import { RiFirebaseFill } from "react-icons/ri";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiJavascript,
    SiMysql,
    SiPostman,
    SiExpress,
    SiRender,
} from "react-icons/si";

const symbols = [
    { type: 'icon', value: FaReact, label: 'React', color: '#61DAFB' },
    { type: 'icon', value: FaGithub, label: 'Github', color: '#181717' },
    { type: 'icon', value: RiFirebaseFill, label: 'Firebase', color: '#FFCA28' },
    { type: 'icon', value: SiRender, label: 'Render', color: '#46E3B7' },
    { type: 'icon', value: SiPostman, label: 'Postman', color: '#FF6C37' },
    { type: 'icon', value: SiExpress, label: 'Express', color: '#000000' },
    { type: 'icon', value: SiMysql, label: 'MySQL', color: '#4479A1' },
    { type: 'icon', value: SiNextdotjs, label: 'Next.js', color: '#000000' },
    { type: 'icon', value: FaNodeJs, label: 'Node.js', color: '#68A063' },
    { type: 'icon', value: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
    { type: 'icon', value: Code2, label: 'Code', color: '#3B82F6' },
    { type: 'icon', value: SiTailwindcss, label: 'Tailwind', color: '#38B2AC' },
    { type: 'icon', value: FaDatabase, label: 'Database', color: '#336791' },
    { type: 'icon', value: FaGitAlt, label: 'Git', color: '#F1502F' },
];

export default function AnimatedBackground() {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);
    const raf = useRef(null);
    const frameCount = useRef(0);
    const lastUpdateTime = useRef(0);

    const mouse = useRef({
        x: 0,
        y: 0,
        tx: 0,
        ty: 0,
        vx: 0,
        vy: 0,
        lastMoveTime: 0,
    });

    /* ---------- INIT ITEMS ---------- */
    useEffect(() => {
        const { innerWidth, innerHeight } = window;

        mouse.current.x = innerWidth / 2;
        mouse.current.y = innerHeight / 2;
        mouse.current.tx = innerWidth / 2;
        mouse.current.ty = innerHeight / 2;

        itemsRef.current = Array.from(containerRef.current?.children || []).map(
            (el, index) => {
                const symbol = symbols[index % symbols.length];
                const x = Math.random() * innerWidth;
                const y = Math.random() * innerHeight;
                const rotation = Math.random() * 360;
                const scale = 0.85 + Math.random() * 0.15;
                const opacity = 0.4 + Math.random() * 0.3;

                // Set initial position immediately
                el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotation}deg)`;
                el.style.opacity = opacity;

                return {
                    el,
                    x,
                    y,
                    vx: 0,
                    vy: -0.3 - Math.random() * 0.4,
                    strength: 0.12 + Math.random() * 0.18,
                    rotation,
                    rotationSpeed: -0.8 + Math.random() * 1.6,
                    scale,
                    baseScale: scale,
                    opacity,
                    originalOpacity: opacity,
                    floatPhase: Math.random() * Math.PI * 2,
                    floatSpeed: 0.0005 + Math.random() * 0.0003,
                    color: symbol.color,
                };
            }
        );
    }, []);

    /* ---------- MOUSE TRACKING ---------- */
    useEffect(() => {
        let lastX = 0;
        let lastY = 0;
        let lastTime = performance.now();

        const move = (e) => {
            const now = performance.now();
            const dt = Math.max(now - lastTime, 1);

            mouse.current.tx = e.clientX;
            mouse.current.ty = e.clientY;
            mouse.current.vx = (e.clientX - lastX) / dt * 16;
            mouse.current.vy = (e.clientY - lastY) / dt * 16;
            mouse.current.lastMoveTime = now;

            lastX = e.clientX;
            lastY = e.clientY;
            lastTime = now;
        };

        window.addEventListener('mousemove', move, { passive: true });
        return () => window.removeEventListener('mousemove', move);
    }, []);

    /* ---------- ANIMATION LOOP ---------- */
    useEffect(() => {
        const startTime = performance.now();
        const TARGET_FPS = 60;
        const FRAME_TIME = 1000 / TARGET_FPS;

        const animate = (now) => {
            // Frame rate throttling
            if (now - lastUpdateTime.current < FRAME_TIME) {
                raf.current = requestAnimationFrame(animate);
                return;
            }

            const deltaTime = now - lastUpdateTime.current;
            lastUpdateTime.current = now;
            frameCount.current++;

            // Smooth mouse tracking with easing
            const mouseEasing = 0.1;
            mouse.current.x += (mouse.current.tx - mouse.current.x) * mouseEasing;
            mouse.current.y += (mouse.current.ty - mouse.current.y) * mouseEasing;

            // Decay mouse velocity
            const timeSinceMove = now - mouse.current.lastMoveTime;
            const velocityDecay = Math.max(0, 1 - timeSinceMove / 1000);
            mouse.current.vx *= velocityDecay;
            mouse.current.vy *= velocityDecay;

            const idle = Math.abs(mouse.current.vx) + Math.abs(mouse.current.vy) < 0.5;

            itemsRef.current.forEach((item, idx) => {
                // Enhanced floating motion
                const floatX = Math.sin(now * item.floatSpeed + item.floatPhase) * 15;
                const floatY = Math.cos(now * item.floatSpeed * 0.7 + item.floatPhase) * 10;

                if (!idle) {
                    const speed = Math.hypot(mouse.current.vx, mouse.current.vy);
                    if (speed > 0.1) {
                        const dirX = mouse.current.vx / speed;
                        const dirY = mouse.current.vy / speed;

                        // Predict ahead of cursor based on velocity
                        const predictionFactor = Math.min(speed * 0.8, 100);
                        const targetX = mouse.current.x + dirX * predictionFactor;
                        const targetY = mouse.current.y + dirY * predictionFactor;

                        const dx = targetX - item.x;
                        const dy = targetY - item.y;
                        const dist = Math.hypot(dx, dy);
                        const radius = 250;

                        if (dist < radius && dist > 5) {
                            const influence = Math.pow(1 - dist / radius, 2) * 0.4;
                            const force = influence * item.strength * (speed * 0.1);

                            item.vx += (dx / dist) * force;
                            item.vy += (dy / dist) * force;

                            // Enhanced glow on proximity
                            const proximityFactor = 1 - dist / radius;
                            item.opacity = Math.min(
                                item.originalOpacity + proximityFactor * 0.5,
                                1
                            );
                            item.scale = item.baseScale + proximityFactor * 0.3;

                            // Faster rotation when near cursor
                            item.rotationSpeed = (-0.8 + Math.random() * 1.6) * (1 + proximityFactor * 2);
                        } else {
                            item.scale += (item.baseScale - item.scale) * 0.12;
                            item.opacity += (item.originalOpacity - item.opacity) * 0.12;
                        }
                    }
                } else {
                    // Idle state - return to base values
                    item.scale += (item.baseScale - item.scale) * 0.08;
                    item.opacity += (item.originalOpacity - item.opacity) * 0.08;
                    item.rotationSpeed += ((-0.8 + Math.random() * 1.6) - item.rotationSpeed) * 0.05;
                }

                // Apply velocity with improved damping
                item.vx *= 0.94;
                item.vy *= 0.94;

                // Update position with floating effect
                item.x += item.vx + floatX * 0.01;
                item.y += item.vy + floatY * 0.01;

                // Rotation
                item.rotation += item.rotationSpeed;

                // Wrap around bounds
                const { innerWidth, innerHeight } = window;

                if (item.y < -150) {
                    item.y = innerHeight + 150;
                    item.x = Math.random() * innerWidth;
                    item.vx = 0;
                    item.vy = -0.3 - Math.random() * 0.4;
                    item.rotation = Math.random() * 360;
                }

                if (item.x < -150) item.x = innerWidth + 150;
                if (item.x > innerWidth + 150) item.x = -150;

                // Optimized DOM updates - update every 2 frames
                if (frameCount.current % 2 === 0) {
                    const x = Math.round(item.x * 10) / 10;
                    const y = Math.round(item.y * 10) / 10;
                    const rotation = Math.round(item.rotation);
                    const scale = Math.round(item.scale * 100) / 100;
                    const opacity = Math.round(item.opacity * 100) / 100;

                    item.el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotation}deg)`;
                    item.el.style.opacity = opacity;
                }
            });

            raf.current = requestAnimationFrame(animate);
        };

        raf.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf.current);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
            {/* Enhanced background gradients with animation */}
            <div
                className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl opacity-40 animate-pulse"
                style={{ animationDuration: '8s' }}
            />
            <div
                className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse"
                style={{ animationDuration: '10s', animationDelay: '2s' }}
            />
            <div
                className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary/4 rounded-full blur-3xl opacity-25 animate-pulse"
                style={{ animationDuration: '12s', animationDelay: '4s' }}
            />

            <div ref={containerRef} className="relative w-full h-full">
                {Array.from({ length: 12 }).map((_, i) => {
                    const s = symbols[i % symbols.length];
                    const Icon = s.value;

                    return (
                        <div
                            key={i}
                            className="absolute flex items-center justify-center will-change-transform"
                            style={{
                                opacity: 1, // Changed: make immediately visible
                                transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
                            }}
                        >
                            <div className="relative flex items-center justify-center">
                                {/* Animated glow effect */}
                                <div
                                    className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 blur-xl"
                                    style={{
                                        width: '64px',
                                        height: '64px',
                                        background: `radial-gradient(circle, ${s.color}20, transparent)`,
                                    }}
                                />

                                {/* Icon container with enhanced styling */}
                                <div className="relative flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/25 backdrop-blur-md hover:from-primary/20 hover:to-primary/10 hover:border-primary/40 transition-all duration-300 shadow-xl shadow-primary/5">
                                    <Icon
                                        size={36}
                                        className="text-primary/80 drop-shadow-lg filter"
                                        style={{
                                            filter: 'drop-shadow(0 2px 8px rgba(var(--primary-rgb), 0.3))',
                                        }}
                                        aria-label={s.label}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
'use client';

import { useEffect, useRef } from 'react';
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
    { type: 'icon', value: FaGithub, label: 'Github', color: '#61DAFB' },
    { type: 'icon', value: RiFirebaseFill, label: 'Firebase', color: '#61DAFB' },
    { type: 'icon', value: SiRender, label: 'Render', color: '#61DAFB' },
    { type: 'icon', value: SiPostman, label: 'Postman', color: '#61DAFB' },
    { type: 'icon', value: SiExpress, label: 'Express', color: '#61DAFB' },
    { type: 'icon', value: SiMysql, label: 'MySQL', color: '#61DAFB' },
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

    const mouse = useRef({
        x: 0,
        y: 0,
        tx: 0,
        ty: 0,
        vx: 0,
        vy: 0,
    });

    /* ---------- INIT ITEMS ---------- */
    useEffect(() => {
        const { innerWidth, innerHeight } = window;

        mouse.current.x = innerWidth / 2;
        mouse.current.y = innerHeight / 2;
        mouse.current.tx = innerWidth / 2;
        mouse.current.ty = innerHeight / 2;

        itemsRef.current = Array.from(containerRef.current?.children || []).map(
            (el, index) => ({
                el,
                x: Math.random() * innerWidth,
                y: innerHeight + Math.random() * 200,
                vx: 0,
                vy: -0.5 - Math.random() * 0.3,
                strength: 0.1 + Math.random() * 0.15,
                rotation: Math.random() * 360,
                rotationSpeed: -1 + Math.random() * 2,
                scale: 0.9,
                opacity: 0.35 + Math.random() * 0.25,
                originalOpacity: 0.35 + Math.random() * 0.25,
                floatOffset: Math.sin(index * 0.5) * 20,
            })
        );
    }, []);

    /* ---------- MOUSE TRACKING ---------- */
    useEffect(() => {
        let lastX = mouse.current.x;
        let lastY = mouse.current.y;

        const move = (e) => {
            mouse.current.tx = e.clientX;
            mouse.current.ty = e.clientY;
            mouse.current.vx = e.clientX - lastX;
            mouse.current.vy = e.clientY - lastY;
            lastX = e.clientX;
            lastY = e.clientY;
        };

        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    /* ---------- ANIMATION LOOP ---------- */
    useEffect(() => {
        const startTime = performance.now();

        const animate = () => {
            frameCount.current++;
            const now = performance.now();
            const introFactor = Math.min((now - startTime) / 3000, 1);

            // Smooth mouse tracking
            mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.12;
            mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.12;

            const idle =
                Math.abs(mouse.current.vx) + Math.abs(mouse.current.vy) < 0.2;

            itemsRef.current.forEach((item, idx) => {
                // Gentle bobbing animation
                const bobSpeed = 0.015;
                const bobAmount = Math.sin(now * 0.0008 + idx) * 0.15;
                item.vy = -0.35 + bobAmount;

                // Subtle rotation
                item.rotation += item.rotationSpeed * 0.5;

                if (!idle) {
                    const speed = Math.hypot(mouse.current.vx, mouse.current.vy) || 1;
                    const dirX = mouse.current.vx / speed;
                    const dirY = mouse.current.vy / speed;

                    const targetX = mouse.current.x - dirX * 50;
                    const targetY = mouse.current.y - dirY * 50;

                    const dx = targetX - item.x;
                    const dy = targetY - item.y;
                    const dist = Math.hypot(dx, dy);
                    const radius = 220;

                    if (dist < radius && dist > 10) {
                        const influence = (1 - dist / radius) * 0.3;
                        item.vx += (dx / dist) * influence * item.strength;
                        item.vy += (dy / dist) * influence * item.strength;

                        // Glow effect on proximity
                        item.opacity =
                            item.originalOpacity +
                            (1 - dist / radius) * 0.4;
                        item.scale = 0.9 + (1 - dist / radius) * 0.2;
                    } else {
                        item.scale += (0.9 - item.scale) * 0.1;
                        item.opacity += (item.originalOpacity - item.opacity) * 0.1;
                    }
                } else {
                    // Idle state with subtle float
                    item.scale += (0.9 - item.scale) * 0.08;
                    item.opacity += (item.originalOpacity - item.opacity) * 0.08;
                }

                // Smooth damping
                item.vx *= 0.93;
                item.vy *= 0.93;

                item.x += item.vx;
                item.y += item.vy + Math.sin(now * 0.0006 + idx * 0.3) * 0.1;

                // Respawn
                if (item.y < -100) {
                    item.y = window.innerHeight + 100;
                    item.x = Math.random() * window.innerWidth;
                    item.vx = 0;
                    item.vy = -0.4 - Math.random() * 0.2;
                }

                // Batch update DOM every 3 frames for performance
                if (frameCount.current % 4 === 0) {
                    const x = Math.round(item.x);
                    const y = Math.round(item.y);

                    item.el.style.transform =
                        `translate(${x}px, ${y}px) scale(${item.scale.toFixed(2)}) rotate(${item.rotation | 0}deg)`;
                    item.el.style.opacity = item.opacity.toFixed(2);
                }

            });

            raf.current = requestAnimationFrame(animate);
        };

        raf.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf.current);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
            {/* Subtle background gradient orbs */}
            <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ animationDelay: '2s' }}></div>

            <div ref={containerRef} className="relative w-full h-full">
                {Array.from({ length: 9 }).map((_, i) => {
                    const s = symbols[i % symbols.length];
                    const Icon = s.value;

                    return (
                        <div
                            key={i}
                            className="absolute flex items-center justify-center will-change-transform"
                            style={{
                                opacity: 0.4,
                            }}
                        >
                            <div className="relative flex items-center justify-center">
                                {/* Outer glow ring */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-md opacity-0 transition-opacity duration-300" style={{ width: '56px', height: '56px' }}></div>

                                {/* Icon container with enhanced visibility */}
                                <div className="relative flex items-center justify-center p-3 rounded-lg bg-primary/8 border border-primary/20 backdrop-blur-sm hover:bg-primary/15 hover:border-primary/40 transition-all duration-200 shadow-lg shadow-primary/10">
                                    <Icon
                                        size={32}
                                        className="text-primary/70 drop-shadow-md"
                                        aria-hidden="true"
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

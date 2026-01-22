"use client";
import { useEffect, useState } from "react";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa6";

const symbols = [
    { type: "text", value: "< />" },
    { type: "text", value: "{ }" },
    { type: "text", value: "( )" },
    { type: "text", value: "()=>" },

    { type: "icon", value: FaReact },
    { type: "icon", value: FaJs },
    { type: "icon", value: FaNodeJs },
    { type: "icon", value: SiNextdotjs },
    { type: "icon", value: IoLogoCss3 },
    { type: "icon", value: BiLogoMongodb },
    { type: "icon", value: FaDatabase },
];

export default function AnimatedBackground() {
    const [items, setItems] = useState([]);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const generated = Array.from({ length: 18 }).map((_, i) => {
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];

            return {
                id: i,
                symbol,
                left: Math.random() * 100,
                delay: Math.random() * 0,
                duration: 18 + Math.random() * 12,
                size:
                    symbol.type === "icon"
                        ? 32 + Math.random() * 24
                        : 14 + Math.random() * 24,
                opacity:
                    symbol.type === "icon"
                        ? 0.18 + Math.random() * 0.48
                        : 0.06 + Math.random() * 0.46,
            };
        });

        setItems(generated);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
            {items.map((item) => {
                const isIcon = item.symbol.type === "icon";
                const Icon = isIcon ? item.symbol.value : null;

                const elementX = (item.left / 100) * window.innerWidth;
                const elementY = window.innerHeight - 200;

                const dx = elementX - mouse.x;
                const dy = elementY - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const maxDistance = 180;
                const maxForce = 40;

                const force =
                    distance < maxDistance
                        ? Math.pow((maxDistance - distance) / maxDistance, 2)
                        : 0;

                const angle = Math.atan2(dy, dx);

                const offsetX = Math.cos(angle) * force * maxForce;
                const offsetY = Math.sin(angle) * force * maxForce;

                const scale = 1 + force * 0.25;

                return (
                    <span
                        key={item.id}
                        className={`absolute animate-float ${isIcon ? "text-primary/40" : "text-primary/25"
                            }`}
                        style={{
                            left: `${item.left}%`,
                            bottom: "-5vh",
                            animationDelay: `${item.delay}s`,
                            animationDuration: `${item.duration}s`,
                            opacity: item.opacity + force * 0.3,
                        }}
                    >
                        {/* INNER LAYER → hover interaction */}
                        <span
                            className="block transition-transform duration-700 ease-out"
                            style={{
                                transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
                            }}
                        >
                            {Icon ? <Icon size={item.size} /> : item.symbol.value}
                        </span>
                    </span>
                );

            })}

        </div>
    );
} 
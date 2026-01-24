"use client";

import { useEffect, useRef } from "react";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
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
  { type: "text", value: "{ }" },
  { type: "text", value: "( )" },
  { type: "icon", value: FaReact },
  { type: "icon", value: Code2 },
  { type: "icon", value: FaNodeJs },
  { type: "icon", value: SiNextdotjs },
  { type: "icon", value: IoLogoCss3 },
  { type: "icon", value: BiLogoMongodb },
  { type: "icon", value: FaDatabase },
  { type: "icon", value: SiTailwindcss },
  { type: "icon", value: SiMysql },
  { type: "icon", value: SiExpress },
  { type: "icon", value: SiRender },
  { type: "icon", value: SiPostman },
  { type: "icon", value: FaGitAlt },
  { type: "icon", value: FaGithub },
  { type: "icon", value: RiFirebaseFill },
  { type: "icon", value: SiJavascript },
];

export default function AnimatedBackground() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const raf = useRef(null);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    tx: window.innerWidth / 2,
    ty: window.innerHeight / 2,
    vx: 0,
    vy: 0,
  });

  /* ---------- INIT ---------- */
  useEffect(() => {
    itemsRef.current = Array.from(
      containerRef.current.children
    ).map((el) => ({
      el,
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random() * 300,
      vx: 0,
      vy: -0.4 - Math.random() * 0.6, // 🔥 base upward flow
      strength: 0.12 + Math.random() * 0.2,
    }));
  }, []);

  /* ---------- MOUSE ---------- */
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

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ---------- LOOP ---------- */
  useEffect(() => {
    const animate = () => {
      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.12;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.12;

      itemsRef.current.forEach((item) => {
        // Direction behind cursor
        const speed =
          Math.hypot(mouse.current.vx, mouse.current.vy) || 1;
        const dirX = mouse.current.vx / speed;
        const dirY = mouse.current.vy / speed;

        const targetX = mouse.current.x - dirX * 40;
        const targetY = mouse.current.y - dirY * 40;

        const dx = targetX - item.x;
        const dy = targetY - item.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const radius = 260;

        if (dist < radius) {
          const pull = (1 - dist / radius) * item.strength;
          item.vx += dx * pull * 0.04;
          item.vy += dy * pull * 0.04;
        }

        // Natural upward drift
        item.vy -= 0.02;

        // Damping
        item.vx *= 0.85;
        item.vy *= 0.85;

        item.x += item.vx;
        item.y += item.vy;

        // 🔁 Respawn from bottom
        if (item.y < -60) {
          item.y = window.innerHeight + 60;
          item.x = Math.random() * window.innerWidth;
          item.vx = 0;
          item.vy = -0.4 - Math.random() * 0.6;
        }

        item.el.style.transform = `translate(${item.x}px, ${item.y}px)`;
      });

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div ref={containerRef}>
        {Array.from({ length: 18 }).map((_, i) => {
          const s = symbols[Math.floor(Math.random() * symbols.length)];
          const Icon = s.type === "icon" ? s.value : null;

          return (
            <span
              key={i}
              className="absolute text-primary/40"
              style={{ willChange: "transform" }}
            >
              {Icon ? <Icon size={30} /> : s.value}
            </span>
          );
        })}
      </div>
    </div>
  );
}

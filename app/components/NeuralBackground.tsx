"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const NODE_COUNT = 48;
const MAX_DIST = 140;
const SPEED = 0.35;

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const root = document.documentElement;

    const readVar = (name: string, fallback: string) => {
      const value = getComputedStyle(root).getPropertyValue(name).trim();
      return value || fallback;
    };

    let nodeRgb = readVar("--theme-accent-2-rgb", "139 92 246");
    let lineRgb = readVar("--theme-accent-3-rgb", "99 102 241");
    let aiEnabled = root.dataset.ai !== "off";

    const updateColors = () => {
      nodeRgb = readVar("--theme-accent-2-rgb", nodeRgb);
      lineRgb = readVar("--theme-accent-3-rgb", lineRgb);
    };
    const updateAiMode = () => {
      aiEnabled = root.dataset.ai !== "off";
    };

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    const mouse = { x: 0, y: 0, active: false };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const nodes: Node[] = Array.from({ length: NODE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const offsetX = mouse.active ? (mouse.x - width / 2) * 0.02 : 0;
      const offsetY = mouse.active ? (mouse.y - height / 2) * 0.02 : 0;

      const speedFactor = aiEnabled ? 1 : 0;
      for (const node of nodes) {
        node.x += node.vx * speedFactor;
        node.y += node.vy * speedFactor;

        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        ctx.beginPath();
        ctx.fillStyle = `rgba(${nodeRgb}, 0.6)`;
        ctx.arc(a.x + offsetX, a.y + offsetY, 1.6, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = 1 - dist / MAX_DIST;
            ctx.strokeStyle = `rgba(${lineRgb}, ${alpha * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x + offsetX, a.y + offsetY);
            ctx.lineTo(b.x + offsetX, b.y + offsetY);
            ctx.stroke();
          }
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    draw();

    const handleMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = true;
    };

    const handleLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseleave", handleLeave);

    const observer = new MutationObserver(() => {
      updateColors();
      updateAiMode();
    });
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme", "data-ai"],
    });

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", handleLeave);
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
    />
  );
}

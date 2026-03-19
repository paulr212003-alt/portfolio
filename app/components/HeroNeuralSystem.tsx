"use client";

import { useEffect, useRef } from "react";

type HeroNeuralSystemProps = {
  boost?: boolean;
};

type NodePoint = {
  x: number;
  glow: number;
};

type Packet = {
  x: number;
  active: boolean;
};

type Pathway = {
  yOffset: number;
  amplitude: number;
  frequency: number;
  phase: number;
  color: string;
  nodes: NodePoint[];
  packets: Packet[];
  spawnTimer: number;
};

export default function HeroNeuralSystem({ boost }: HeroNeuralSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boostRef = useRef(Boolean(boost));

  useEffect(() => {
    boostRef.current = Boolean(boost);
  }, [boost]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const root = document.documentElement;
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastTime = 0;
    let aiEnabled = root.dataset.ai !== "off";

    const readVar = (name: string, fallback: string) => {
      const value = getComputedStyle(root).getPropertyValue(name).trim();
      return value || fallback;
    };

    let accent = readVar("--theme-accent-rgb", "59 130 246");
    let accent2 = readVar("--theme-accent-2-rgb", "139 92 246");
    let accent3 = readVar("--theme-accent-3-rgb", "99 102 241");

    const updateTheme = () => {
      accent = readVar("--theme-accent-rgb", accent);
      accent2 = readVar("--theme-accent-2-rgb", accent2);
      accent3 = readVar("--theme-accent-3-rgb", accent3);
    };

    const updateAiMode = () => {
      aiEnabled = root.dataset.ai !== "off";
    };

    const maxLines = 8;
    const baseLines = 5;
    let pathways: Pathway[] = [];

    const createPathway = (index: number, total: number): Pathway => {
      const baseY = (height / (total + 1)) * (index + 1);
      const yOffset = baseY + (Math.random() * 18 - 9);
      const amplitude = Math.random() * 14 + 6;
      const frequency = Math.random() * 0.002 + 0.001;
      const phase = Math.random() * Math.PI * 2;
      const colors = [accent, accent2, accent3];
      const nodes: NodePoint[] = [];
      const packets: Packet[] = [];
      const nodeCount = 6;
      const spacing = width / (nodeCount + 1);

      for (let i = 1; i <= nodeCount; i += 1) {
        nodes.push({
          x: spacing * i + (Math.random() * 40 - 20),
          glow: 0,
        });
      }

      return {
        yOffset,
        amplitude,
        frequency,
        phase,
        color: colors[index % colors.length],
        nodes,
        packets,
        spawnTimer: Math.random() * 1.2 + 0.6,
      };
    };

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pathways = Array.from({ length: maxLines }, (_, index) =>
        createPathway(index, maxLines)
      );
    };

    init();
    const resizeObserver = new ResizeObserver(init);
    resizeObserver.observe(container);

    const getY = (path: Pathway, x: number) =>
      path.yOffset + Math.sin(x * path.frequency + path.phase) * path.amplitude;

    const drawPath = (path: Pathway, glowMultiplier: number) => {
      ctx.beginPath();
      for (let x = 0; x <= width; x += 12) {
        ctx.lineTo(x, getY(path, x));
      }
      ctx.strokeStyle = `rgba(${path.color}, ${0.24 * glowMultiplier})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      path.nodes.forEach((node) => {
        const ny = getY(path, node.x);
        ctx.beginPath();
        ctx.arc(node.x, ny, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${path.color}, ${0.3 * glowMultiplier})`;
        ctx.fill();

        if (node.glow > 0.02) {
          ctx.beginPath();
          ctx.arc(node.x, ny, 3.6 + node.glow * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255, ${node.glow * 0.7})`;
          ctx.shadowBlur = 14;
          ctx.shadowColor = `rgba(${path.color}, ${0.9 * glowMultiplier})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      path.packets.forEach((packet) => {
        if (!packet.active) return;
        const py = getY(path, packet.x);
        let opacity = 1;
        if (packet.x < 120) opacity = packet.x / 120;
        if (packet.x > width - 120) opacity = (width - packet.x) / 120;
        ctx.beginPath();
        ctx.arc(packet.x, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255, ${opacity})`;
        ctx.shadowBlur = 12 * glowMultiplier;
        ctx.shadowColor = `rgba(${path.color}, ${0.9 * glowMultiplier})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    const update = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const delta = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      ctx.clearRect(0, 0, width, height);

      const boosted = boostRef.current;
      const speedMultiplier = aiEnabled ? (boosted ? 1.6 : 1) : 0;
      const glowMultiplier = aiEnabled ? (boosted ? 1.3 : 1) : 0.65;
      const activeLines = boosted ? maxLines : baseLines;

      const packetSpeed = width / (boosted ? 2.6 : 3.4);

      pathways.forEach((path, index) => {
        if (index >= activeLines) return;

        if (aiEnabled) {
          path.spawnTimer -= delta * speedMultiplier;
          if (path.spawnTimer <= 0) {
            path.packets.push({ x: -40, active: true });
            path.spawnTimer = 0.5 + Math.random() * 0.7;
          }
        }

        path.packets.forEach((packet) => {
          if (!packet.active) return;
          packet.x += packetSpeed * delta * speedMultiplier;
          if (packet.x > width + 40) {
            packet.active = false;
          }

          path.nodes.forEach((node) => {
            if (Math.abs(packet.x - node.x) < 6) {
              node.glow = 1;
            }
          });
        });

        path.packets = path.packets.filter((packet) => packet.active);
        path.nodes.forEach((node) => {
          node.glow = Math.max(0, node.glow - delta * 2.2);
        });

        drawPath(path, glowMultiplier);
      });

      animationFrame = window.requestAnimationFrame(update);
    };

    animationFrame = window.requestAnimationFrame(update);

    const observer = new MutationObserver(() => {
      updateTheme();
      updateAiMode();
    });
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme", "data-ai"],
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0">
      <svg
        viewBox="0 0 600 400"
        className="absolute left-1/2 top-1/2 h-56 w-80 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] blur-[1px] md:h-64 md:w-[360px]"
        fill="none"
      >
        <path
          d="M180 190c-30-18-50-46-50-78 0-53 48-96 108-96 38 0 72 17 92 43 20-26 54-43 92-43 60 0 108 43 108 96 0 32-20 60-50 78 22 12 36 33 36 56 0 37-36 68-80 68-30 0-56-14-70-34-14 20-40 34-70 34-44 0-80-31-80-68 0-23 14-44 36-56z"
          stroke="rgb(var(--theme-accent-rgb) / 0.7)"
          strokeWidth="2"
        />
        <path
          d="M300 76v240M220 118h160M210 200h180M230 260h140"
          stroke="rgb(var(--theme-accent-2-rgb) / 0.5)"
          strokeWidth="1"
        />
      </svg>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

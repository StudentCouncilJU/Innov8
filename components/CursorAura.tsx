"use client";
import { useEffect, useRef } from "react";

type CursorAuraProps = {
  color?: string;
  maxPoints?: number;
  pointSize?: number;
  decay?: number;
  blur?: number;
  hideNativeCursor?: boolean;
};

type Point = { x: number; y: number; age: number };

export default function CursorAura({
  color = "rgba(173,216,230,0.15)", // soft light blue
  maxPoints = typeof window !== 'undefined' && window.innerWidth < 768 ? 30 : 50,  // Drastically reduced
  pointSize = 20,                   // smaller base particle
  decay = 0.05,                      // faster fade for better performance
  blur = 50,                         // more blur for misty feel
}: CursorAuraProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const pointsRef = useRef<Point[]>([]);
  const lastPosRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    function pushPoint(x: number, y: number) {
      const last = lastPosRef.current;
      const smoothX = last.x + (x - last.x) * 0.2; // smoother, slower follow
      const smoothY = last.y + (y - last.y) * 0.2;
      lastPosRef.current = { x: smoothX, y: smoothY };

      pointsRef.current.push({ x: smoothX, y: smoothY, age: 0 });
      if (pointsRef.current.length > maxPoints) {
        pointsRef.current.splice(0, pointsRef.current.length - maxPoints);
      }
    }

    function onPointerMove(e: PointerEvent) {
      pushPoint(e.clientX, e.clientY);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      ctx.filter = `blur(${blur}px)`;

      for (let i = 0; i < pointsRef.current.length; i++) {
        const p = pointsRef.current[i];
        p.age += decay;
        const t = i / pointsRef.current.length;

        // softer alpha for smoky look
        const alpha = Math.max(0, 0.12 - p.age * 0.08 - (1 - t) * 0.05);
        if (alpha <= 0) continue;

        const radius = pointSize * (0.6 + t * 2.0);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        grad.addColorStop(0, withAlpha(color, alpha));
        grad.addColorStop(0.7, withAlpha(color, alpha * 0.2));
        grad.addColorStop(1, withAlpha(color, 0));

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.filter = "none";
      ctx.globalCompositeOperation = "source-over";

      pointsRef.current = pointsRef.current.filter((p) => p.age <= 3);

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [color, maxPoints, pointSize, decay, blur]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] select-none"
      aria-hidden="true"
    />
  );
}

// Helper: apply alpha to rgba/rgb/hex
function withAlpha(baseColor: string, alpha: number): string {
  if (baseColor.startsWith("rgba")) {
    return baseColor.replace(/rgba\(([^)]+)\)/, (_, inside) => {
      const parts = inside.split(",").map((s: string) => s.trim());
      const [r, g, b, a = "1"] = parts;
      return `rgba(${r},${g},${b},${Math.min(1, parseFloat(a) * alpha)})`;
    });
  }
  if (baseColor.startsWith("rgb")) {
    return baseColor.replace(/rgb\(([^)]+)\)/, (_, inside) => {
      const [r, g, b] = inside.split(",").map((s: string) => s.trim());
      return `rgba(${r},${g},${b},${alpha})`;
    });
  }
  return baseColor + Math.round(alpha * 255).toString(16).padStart(2, "0");
}

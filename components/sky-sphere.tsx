"use client"

import * as React from "react"

type Vec3 = { x: number; y: number; z: number }

export interface SkySphereProps {
  className?: string
  particleCount?: number
  sphereRadius?: number // in pixels
  rotationSpeed?: number // radians/sec around Y
  color?: string // sky-blue hex
  minSeparationAngle?: number // radians; controls spacing between points on sphere
  baseDotSize?: number // px before depth scaling
  jitter?: number // random +/- size variance
  background?: string // canvas background fill
}

function hexToRgb(hex: string) {
  const s = hex.replace("#", "")
  const full =
    s.length === 3
      ? s
          .split("")
          .map((c) => c + c)
          .join("")
      : s
  const n = Number.parseInt(full, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}
function rgba(hex: string, a: number) {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, a))})`
}
function randomPointOnSphere(): Vec3 {
  const u = Math.random() * 2 - 1
  const phi = Math.random() * Math.PI * 2
  const s = Math.sqrt(1 - u * u)
  return { x: s * Math.cos(phi), y: u, z: s * Math.sin(phi) }
}
function dot(a: Vec3, b: Vec3) {
  return a.x * b.x + a.y * b.y + a.z * b.z
}

// Poisson-like rejection sampling on unit sphere
function generateSpacedPoints(count: number, minSepAngle: number): Vec3[] {
  const pts: Vec3[] = []
  if (count <= 0) return pts
  let attempts = 0
  let minDot = Math.cos(minSepAngle)
  while (pts.length < count && attempts < 20000) {
    attempts++
    const p = randomPointOnSphere()
    let ok = true
    for (let i = 0; i < pts.length; i++) {
      if (dot(p, pts[i]) > minDot) {
        ok = false
        break
      }
    }
    if (ok) pts.push(p)
    if (attempts % 2000 === 0 && pts.length < count) {
      // relax spacing gradually
      minDot = Math.cos(Math.max(0.02, Math.acos(minDot) * 0.93))
    }
  }
  while (pts.length < count) pts.push(randomPointOnSphere())
  return pts
}

export default function SkySphere({
  className,
  particleCount = 900,
  sphereRadius = 520,
  rotationSpeed = 0.35,
  color = "#6fd7ff",
  minSeparationAngle = 0.14,
  baseDotSize = 1.6,
  jitter = 1.2,
  background = "#05090e",
}: SkySphereProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const pointsRef = React.useRef<Vec3[]>([])
  const angleRef = React.useRef(0)
  const rafRef = React.useRef<number | null>(null)
  const dprRef = React.useRef(1)

  React.useEffect(() => {
    pointsRef.current = generateSpacedPoints(particleCount, minSeparationAngle)
  }, [particleCount, minSeparationAngle])

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      const parent = canvas.parentElement
      const rect = parent?.getBoundingClientRect()
      const w = Math.max(1, Math.floor(rect?.width || window.innerWidth))
      const h = Math.max(1, Math.floor(rect?.height || window.innerHeight))
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      dprRef.current = dpr
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement || document.body)
    return () => ro.disconnect()
  }, [])

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let last = performance.now()
    const haloFactor = 2.6
    const alphaNear = 0.95
    const alphaFar = 0.45

    const animate = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      angleRef.current += rotationSpeed * dt // rotate only around Y

      const { width, height } = canvas
      const dpr = dprRef.current
      const cx = width / 2
      const cy = height / 2

      // clear and paint background
      ctx.globalCompositeOperation = "source-over"
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.fillStyle = background
      ctx.fillRect(0, 0, width, height)

      const R = sphereRadius * dpr
      const fov = R * 3

      const cosY = Math.cos(angleRef.current)
      const sinY = Math.sin(angleRef.current)

      type D = { sx: number; sy: number; z: number; size: number; alpha: number }
      const list: D[] = []

      for (const p of pointsRef.current) {
        const x = p.x * R,
          y = p.y * R,
          z = p.z * R
        // Y-axis rotation only
        const xr = x * cosY + z * sinY
        const yr = y
        const zr = -x * sinY + z * cosY

        const depth = fov / (fov - zr)
        const sx = cx + xr * depth
        const sy = cy + yr * depth

        const nz = (zr + R) / (2 * R) // 0..1
        const alpha = alphaFar + (alphaNear - alphaFar) * nz
        const size = (baseDotSize + (Math.random() - 0.5) * jitter) * dpr * (0.7 + 0.6 * nz)
        list.push({ sx, sy, z: zr, size, alpha })
      }

      // sort far -> near
      list.sort((a, b) => a.z - b.z)

      for (const it of list) {
        const haloR = it.size * haloFactor
        const grad = ctx.createRadialGradient(it.sx, it.sy, 0, it.sx, it.sy, haloR)
        grad.addColorStop(0, rgba(color, Math.min(1, 0.85 * it.alpha)))
        grad.addColorStop(0.45, rgba(color, 0.35 * it.alpha))
        grad.addColorStop(1, rgba(color, 0))
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(it.sx, it.sy, haloR, 0, Math.PI * 2)
        ctx.fill()

        // core
        ctx.fillStyle = rgba(color, Math.min(1, 0.95 * it.alpha))
        ctx.beginPath()
        ctx.arc(it.sx, it.sy, Math.max(0.8, it.size), 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [rotationSpeed, sphereRadius, color, baseDotSize, jitter, background])

  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas ref={canvasRef} style={{ display: "block" }} aria-label="sky-sphere" />
    </div>
  )
}

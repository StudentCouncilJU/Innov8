// "use client"

// import { cn } from "@/lib/utils"
// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"

// interface VortexProps {
//   children?: any
//   className?: string
//   containerClassName?: string
//   particleCount?: number
//   rangeY?: number
//   baseHue?: number
//   baseSpeed?: number // re-purposed as rotation speed (radians per frame)
//   rangeSpeed?: number
//   baseRadius?: number
//   rangeRadius?: number
//   backgroundColor?: string
//   palette?: string[] // when provided, particles use these colors (e.g. ["#ffffff", "hsl(220 100% 60%)"])
//   sphereScale?: number // 0..1 factor of viewport min dimension, default 0.35
//   saturation?: number // % for HSL when palette not provided (default 100)
//   lightness?: number // % for HSL when palette not provided (default 60)
//   sphereRadius?: number // explicit sphere radius option in pixels; takes precedence over sphereScale when provided
//   minSeparationAngle?: number // radians; prevents dots from being too close; default ~0.09
// }

// export const Vortex = (props: VortexProps) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const containerRef = useRef<HTMLDivElement>(null)
//   // const animationFrameId = useRef<number>()

//   const particleCount = props.particleCount || 700
//   const particlePropCount = 5
//   const particlePropsLength = particleCount * particlePropCount

//   const baseRadius = props.baseRadius || 1
//   const rangeRadius = props.rangeRadius || 2
//   const baseHue = props.baseHue || 220
//   const rangeHue = 100
//   const backgroundColor = props.backgroundColor || "#000000"
//   const saturation = props.saturation ?? 100
//   const lightness = props.lightness ?? 60

//   const rotationSpeed = props.baseSpeed !== undefined ? props.baseSpeed : 0.003

//   let tick = 0
//   let particleProps = new Float32Array(particlePropsLength)
//   const center: [number, number] = [0, 0]

//   const TAU: number = 2 * Math.PI
//   const rand = (n: number): number => n * Math.random()

//   const fadeDepth = (z: number, r: number): number => {
//     const t = Math.max(0, Math.min(1, (z + r) / (2 * r)))
//     return 0.3 + 0.7 * t
//   }

//   const setup = () => {
//     const canvas = canvasRef.current
//     const container = containerRef.current
//     if (canvas && container) {
//       const ctx = canvas.getContext("2d")
//       if (ctx) {
//         resize(canvas, ctx)
//         initParticles()
//         draw(canvas, ctx)
//       }
//     }
//   }

//   const initParticles = () => {
//     particleProps = new Float32Array(particlePropsLength)

//     const N = particleCount
//     const minSep = props.minSeparationAngle ?? 0.09 // ~5.15 degrees
//     const maxAttemptsPerPoint = 50

//     // helper: random unit vector on sphere
//     const randomUnitVec = () => {
//       const z = Math.random() * 2 - 1 // [-1, 1]
//       const t = Math.random() * TAU
//       const r = Math.sqrt(Math.max(0, 1 - z * z))
//       const x = r * Math.cos(t)
//       const y = z
//       const zz = r * Math.sin(t)
//       return [x, y, zz] as const
//     }

//     for (let i = 0, k = 0; k < N; k++, i += particlePropCount) {
//       // vary separation slightly per-particle to avoid rigid spacing
//       const localAngle = minSep * (0.9 + 0.2 * Math.random())
//       const cosThresh = Math.cos(localAngle)

//       let x = 0,
//         y = 0,
//         z = 0
//       let attempts = 0

//       while (attempts < maxAttemptsPerPoint) {
//         const [tx, ty, tz] = randomUnitVec()
//         let ok = true

//         // check against already placed points
//         for (let j = 0; j < k; j++) {
//           const ox = particleProps[j * particlePropCount + 0]
//           const oy = particleProps[j * particlePropCount + 1]
//           const oz = particleProps[j * particlePropCount + 2]
//           const dot = ox * tx + oy * ty + oz * tz
//           if (dot > cosThresh) {
//             ok = false
//             break
//           }
//         }

//         if (ok) {
//           x = tx
//           y = ty
//           z = tz
//           break
//         }

//         attempts++
//       }

//       // if we failed to find a separated point in time, accept the last candidate
//       if (attempts >= maxAttemptsPerPoint) {
//         const [tx, ty, tz] = randomUnitVec()
//         x = tx
//         y = ty
//         z = tz
//       }

//       const radius = baseRadius + rand(rangeRadius)
//       const hue = baseHue + rand(rangeHue)

//       particleProps.set([x, y, z, radius, hue], i)
//     }
//   }

//   const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
//     tick++

//     ctx.clearRect(0, 0, canvas.width, canvas.height)

//     ctx.fillStyle = backgroundColor
//     ctx.fillRect(0, 0, canvas.width, canvas.height)

//     drawParticles(canvas, ctx)
//     renderGlow(canvas, ctx)
//     renderToScreen(canvas, ctx)

//     // animationFrameId.current = window.requestAnimationFrame(() => draw(canvas, ctx))
//   }

//   const rotateY = (x: number, y: number, z: number, a: number) => {
//     const cos = Math.cos(a),
//       sin = Math.sin(a)
//     return [cos * x + sin * z, y, -sin * x + cos * z] as const
//   }

//   const rotateX = (x: number, y: number, z: number, a: number) => {
//     const cos = Math.cos(a),
//       sin = Math.sin(a)
//     return [x, cos * y - sin * z, sin * y + cos * z] as const
//   }

//   const project = (x: number, y: number, z: number, cx: number, cy: number, fov: number, zOffset: number) => {
//     const zp = z + zOffset
//     const s = fov / Math.max(1, fov + zp)
//     return [cx + x * s, cy + y * s, s] as const
//   }

//   const drawParticles = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
//     const sphereR = props.sphereRadius ?? Math.min(canvas.width, canvas.height) * (props.sphereScale ?? 0.35)
//     const fov = 800
//     const zOffset = sphereR * 1.5

//     const angleYPrev = rotationSpeed * (tick - 1)
//     const angleY = rotationSpeed * tick

//     for (let i = 0; i < particlePropsLength; i += particlePropCount) {
//       const bx = particleProps[i]
//       const by = particleProps[i + 1]
//       const bz = particleProps[i + 2]
//       const radius = particleProps[i + 3]
//       const hue = particleProps[i + 4]

//       let [px, py, pz] = rotateY(bx, by, bz, angleYPrev)
//       px *= sphereR
//       py *= sphereR
//       pz *= sphereR

//       const [sx1, sy1] = project(px, py, pz, center[0], center[1], fov, zOffset)

//       let [cx3d, cy3d, cz3d] = rotateY(bx, by, bz, angleY)
//       cx3d *= sphereR
//       cy3d *= sphereR
//       cz3d *= sphereR

//       const [sx2, sy2] = project(cx3d, cy3d, cz3d, center[0], center[1], fov, zOffset)

//       const alpha = fadeDepth(cz3d, sphereR)

//       let strokeColor: string
//       if (props.palette && props.palette.length > 0) {
//         const idx = (i / particlePropCount) | 0
//         strokeColor = props.palette[idx % props.palette.length]!
//       } else {
//         strokeColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
//       }

//       drawStroke(sx1, sy1, sx2, sy2, radius, strokeColor, alpha, ctx)
//     }
//   }

//   const drawStroke = (
//     x1: number,
//     y1: number,
//     x2: number,
//     y2: number,
//     radius: number,
//     strokeColor: string,
//     alpha: number,
//     ctx: CanvasRenderingContext2D,
//   ) => {
//     ctx.save()
//     ctx.lineCap = "round"
//     ctx.lineWidth = radius
//     ctx.globalAlpha = alpha
//     ctx.strokeStyle = strokeColor
//     ctx.beginPath()
//     ctx.moveTo(x1, y1)
//     ctx.lineTo(x2, y2)
//     ctx.stroke()
//     ctx.closePath()
//     ctx.restore()
//   }

//   const resize = (canvas: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) => {
//     const { innerWidth, innerHeight } = window

//     canvas.width = innerWidth
//     canvas.height = innerHeight

//     center[0] = 0.5 * canvas.width
//     center[1] = 0.5 * canvas.height
//   }

//   const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
//     ctx.save()
//     ctx.filter = "blur(8px) brightness(200%)"
//     ctx.globalCompositeOperation = "lighter"
//     ctx.drawImage(canvas, 0, 0)
//     ctx.restore()

//     ctx.save()
//     ctx.filter = "blur(4px) brightness(200%)"
//     ctx.globalCompositeOperation = "lighter"
//     ctx.drawImage(canvas, 0, 0)
//     ctx.restore()
//   }

//   const renderToScreen = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
//     ctx.save()
//     ctx.globalCompositeOperation = "lighter"
//     ctx.drawImage(canvas, 0, 0)
//     ctx.restore()
//   }

//   const handleResize = () => {
//     const canvas = canvasRef.current
//     const ctx = canvas?.getContext("2d")
//     if (canvas && ctx) {
//       resize(canvas, ctx)
//     }
//   }

//   useEffect(() => {
//     setup()
//     window.addEventListener("resize", handleResize)

//     const loop = () => {
//       const canvas = canvasRef.current
//       const ctx = canvas?.getContext("2d")
//       if (!canvas || !ctx) return
//       draw(canvas, ctx)
//     }
//     gsap.ticker.fps(60)
//     gsap.ticker.add(loop)

//     if (containerRef.current) {
//       gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out" })
//     }

//     return () => {
//       window.removeEventListener("resize", handleResize)
//       gsap.ticker.remove(loop)
//     }
//   }, [])

//   return (
//     <div className={cn("relative h-full w-full", props.containerClassName)}>
//       <div
//         ref={containerRef}
//         className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent"
//       >
//         <canvas ref={canvasRef}></canvas>
//       </div>

//       <div className={cn("relative z-10", props.className)}>{props.children}</div>
//     </div>
//   )
// }

"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useCallback } from "react"
import { gsap } from "gsap"

interface VortexProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  particleCount?: number
  rangeY?: number
  baseHue?: number
  baseSpeed?: number // re-purposed as rotation speed (radians per frame)
  rangeSpeed?: number
  baseRadius?: number
  rangeRadius?: number
  backgroundColor?: string
  palette?: string[] // when provided, particles use these colors (e.g. ["#ffffff", "hsl(220 100% 60%)"])
  sphereScale?: number // 0..1 factor of viewport min dimension, default 0.35
  saturation?: number // % for HSL when palette not provided (default 100)
  lightness?: number // % for HSL when palette not provided (default 60)
  sphereRadius?: number // explicit sphere radius option in pixels; takes precedence over sphereScale when provided
  minSeparationAngle?: number // radians; prevents dots from being too close; default ~0.09
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  // const animationFrameId = useRef<number>()

  const particleCount = props.particleCount || 700
  const particlePropCount = 5
  const particlePropsLength = particleCount * particlePropCount

  const baseRadius = props.baseRadius || 1
  const rangeRadius = props.rangeRadius || 2
  const baseHue = props.baseHue || 220
  const rangeHue = 200
  const backgroundColor = props.backgroundColor ?? "transparent"
  const fillBackground = backgroundColor !== "transparent"
  const saturation = props.saturation ?? 100
  const lightness = props.lightness ?? 60

  const rotationSpeed = props.baseSpeed !== undefined ? props.baseSpeed : 0.009

  let tick = 0
  let particleProps = new Float32Array(particlePropsLength)
  const center: [number, number] = [0, 0]

  const TAU: number = 2 * Math.PI
  const rand = (n: number): number => n * Math.random()

  const fadeDepth = (z: number, r: number): number => {
    const t = Math.max(0, Math.min(1, (z + r) / (2 * r)))
    return 0.3 + 0.7 * t
  }

  const resize = useCallback((canvas: HTMLCanvasElement) => {
    const { innerWidth, innerHeight } = window

    canvas.width = innerWidth
    canvas.height = innerHeight

    center[0] = 0.5 * canvas.width
    center[1] = 0.5 * canvas.height
  }, [])

  const initParticles = useCallback(() => {
    particleProps = new Float32Array(particlePropsLength)

    const N = particleCount
    const minSep = props.minSeparationAngle ?? 0.09 // ~5.15 degrees
    const maxAttemptsPerPoint = 50

    // helper: random unit vector on sphere
    const randomUnitVec = () => {
      const z = Math.random() * 2 - 1 // [-1, 1]
      const t = Math.random() * TAU
      const r = Math.sqrt(Math.max(0, 1 - z * z))
      const x = r * Math.cos(t)
      const y = z
      const zz = r * Math.sin(t)
      return [x, y, zz] as const
    }

    for (let i = 0, k = 0; k < N; k++, i += particlePropCount) {
      // vary separation slightly per-particle to avoid rigid spacing
      const localAngle = minSep * (0.9 + 0.2 * Math.random())
      const cosThresh = Math.cos(localAngle)

      let x = 0,
        y = 0,
        z = 0
      let attempts = 0

      while (attempts < maxAttemptsPerPoint) {
        const [tx, ty, tz] = randomUnitVec()
        let ok = true

        // check against already placed points
        for (let j = 0; j < k; j++) {
          const ox = particleProps[j * particlePropCount + 0]
          const oy = particleProps[j * particlePropCount + 1]
          const oz = particleProps[j * particlePropCount + 2]
          const dot = ox * tx + oy * ty + oz * tz
          if (dot > cosThresh) {
            ok = false
            break
          }
        }

        if (ok) {
          x = tx
          y = ty
          z = tz
          break
        }

        attempts++
      }

      // if we failed to find a separated point in time, accept the last candidate
      if (attempts >= maxAttemptsPerPoint) {
        const [tx, ty, tz] = randomUnitVec()
        x = tx
        y = ty
        z = tz
      }

      const radius = baseRadius + rand(rangeRadius)
      const hue = baseHue + rand(rangeHue)

      particleProps.set([x, y, z, radius, hue], i)
    }
  }, [particlePropsLength, particleCount, props.minSeparationAngle, TAU, particlePropCount, baseRadius, rangeRadius, baseHue, rangeHue, rand])

  const rotateY = (x: number, y: number, z: number, a: number) => {
    const cos = Math.cos(a),
      sin = Math.sin(a)
    return [cos * x + sin * z, y, -sin * x + cos * z] as const
  }

  const project = (x: number, y: number, z: number, cx: number, cy: number, fov: number, zOffset: number) => {
    const zp = z + zOffset
    const s = fov / Math.max(1, fov + zp)
    return [cx + x * s, cy + y * s, s] as const
  }

  const drawStroke = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    radius: number,
    strokeColor: string,
    alpha: number,
    ctx: CanvasRenderingContext2D,
  ) => {
    ctx.save()
    ctx.lineCap = "round"
    ctx.lineWidth = radius
    ctx.globalAlpha = alpha
    ctx.strokeStyle = strokeColor
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }

  const drawParticles = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const sphereR = props.sphereRadius ?? Math.min(canvas.width, canvas.height) * (props.sphereScale ?? 0.35)
    const fov = 800
    const zOffset = sphereR * 1.5

    const angleYPrev = rotationSpeed * (tick - 1)
    const angleY = rotationSpeed * tick

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      const bx = particleProps[i]
      const by = particleProps[i + 1]
      const bz = particleProps[i + 2]
      const radius = particleProps[i + 3]
      const hue = particleProps[i + 4]

      let [px, py, pz] = rotateY(bx, by, bz, angleYPrev)
      px *= sphereR
      py *= sphereR
      pz *= sphereR

      const [sx1, sy1] = project(px, py, pz, center[0], center[1], fov, zOffset)

      let [cx3d, cy3d, cz3d] = rotateY(bx, by, bz, angleY)
      cx3d *= sphereR
      cy3d *= sphereR
      cz3d *= sphereR

      const [sx2, sy2] = project(cx3d, cy3d, cz3d, center[0], center[1], fov, zOffset)

      const alpha = fadeDepth(cz3d, sphereR)

      let strokeColor: string
      if (props.palette && props.palette.length > 0) {
        const idx = (i / particlePropCount) | 0
        strokeColor = props.palette[idx % props.palette.length]!
      } else {
        strokeColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
      }

      drawStroke(sx1, sy1, sx2, sy2, radius, strokeColor, alpha, ctx)
    }
  }, [props.sphereRadius, props.sphereScale, props.palette, rotationSpeed, particlePropsLength, particlePropCount, rotateY, project, center, fadeDepth, saturation, lightness, drawStroke])

  const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save()
    ctx.filter = "blur(8px) brightness(200%)"
    ctx.globalCompositeOperation = "lighter"
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()

    ctx.save()
    ctx.filter = "blur(4px) brightness(200%)"
    ctx.globalCompositeOperation = "lighter"
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()
  }

  const renderToScreen = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save()
    ctx.globalCompositeOperation = "lighter"
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()
  }

  const draw = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tick++

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (fillBackground) {
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    drawParticles(canvas, ctx)
    renderGlow(canvas, ctx)
    renderToScreen(canvas, ctx)
  }, [fillBackground, backgroundColor, drawParticles])

  const setup = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (canvas && container) {
      const ctx =
        (canvas.getContext("2d", { alpha: true }) as CanvasRenderingContext2D | null) ||
        (canvas.getContext("2d") as CanvasRenderingContext2D | null)
      if (ctx) {
        resize(canvas)
        initParticles()
        draw(canvas, ctx)
      }
    }
  }, [draw, resize, initParticles])

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current
    if (canvas) {
      resize(canvas)
    }
  }, [resize])

  useEffect(() => {
    setup()
    window.addEventListener("resize", handleResize)

    const loop = () => {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext("2d")
      if (!canvas || !ctx) return
      draw(canvas, ctx)
    }
    gsap.ticker.fps(60)
    gsap.ticker.add(loop)

    if (containerRef.current) {
      gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out" })
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      gsap.ticker.remove(loop)
    }
  }, [setup, handleResize, draw])

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent"
      >
        <canvas ref={canvasRef}></canvas>
      </div>

      <div className={cn("relative z-10", props.className)}>{props.children}</div>
    </div>
  )
}

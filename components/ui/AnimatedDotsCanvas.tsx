"use client"

import React, { useEffect, useRef, useCallback } from "react"

interface Dot {
  x: number
  y: number
  baseColor: string
  targetOpacity: number
  currentOpacity: number
  opacitySpeed: number
  baseRadius: number
  currentRadius: number
}

export default function AnimatedDotsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)
  const dotsRef = useRef<Dot[]>([])
  const gridRef = useRef<Record<string, number[]>>({})
  const canvasSizeRef = useRef({ width: 0, height: 0 })
  const mousePositionRef = useRef({ x: null as number | null, y: null as number | null })

  const DOT_SPACING = 25
  const BASE_OPACITY_MIN = 0.4
  const BASE_OPACITY_MAX = 0.5
  const BASE_RADIUS = 1
  const INTERACTION_RADIUS = 150
  const INTERACTION_RADIUS_SQ = INTERACTION_RADIUS * INTERACTION_RADIUS
  const OPACITY_BOOST = 0.6
  const RADIUS_BOOST = 2.5
  const GRID_CELL_SIZE = Math.max(50, Math.floor(INTERACTION_RADIUS / 1.5))

  const handleMouseMove = useCallback((event: globalThis.MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) {
      mousePositionRef.current = { x: null, y: null }
      return
    }
    const rect = canvas.getBoundingClientRect()
    mousePositionRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top }
  }, [])

  const createDots = useCallback(() => {
    const { width, height } = canvasSizeRef.current
    if (!width || !height) return
    const newDots: Dot[] = []
    const newGrid: Record<string, number[]> = {}
    const cols = Math.ceil(width / DOT_SPACING)
    const rows = Math.ceil(height / DOT_SPACING)
    
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * DOT_SPACING + DOT_SPACING / 2
        const y = j * DOT_SPACING + DOT_SPACING / 2
        const cellKey = `${Math.floor(x / GRID_CELL_SIZE)}_${Math.floor(y / GRID_CELL_SIZE)}`
        newGrid[cellKey] = newGrid[cellKey] || []
        const idx = newDots.length
        newGrid[cellKey].push(idx)
        const baseO = Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) + BASE_OPACITY_MIN
        newDots.push({
          x,
          y,
          baseColor: `rgba(139,92,246,${BASE_OPACITY_MAX})`,
          targetOpacity: baseO,
          currentOpacity: baseO,
          opacitySpeed: Math.random() * 0.005 + 0.002,
          baseRadius: BASE_RADIUS,
          currentRadius: BASE_RADIUS
        })
      }
    }
    dotsRef.current = newDots
    gridRef.current = newGrid
  }, [DOT_SPACING, BASE_OPACITY_MIN, BASE_OPACITY_MAX, BASE_RADIUS, GRID_CELL_SIZE])

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const container = canvas.parentElement
    const width = container ? container.clientWidth : window.innerWidth
    const height = container ? container.clientHeight : window.innerHeight
    
    if (canvas.width !== width || canvas.height !== height || 
        canvasSizeRef.current.width !== width || canvasSizeRef.current.height !== height) {
      canvas.width = width
      canvas.height = height
      canvasSizeRef.current = { width, height }
      createDots()
    }
  }, [createDots])

  const animateDots = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    const { width, height } = canvasSizeRef.current
    const { x: mx, y: my } = mousePositionRef.current
    
    if (!ctx || !width || !height) {
      animationFrameId.current = requestAnimationFrame(animateDots)
      return
    }
    
    ctx.clearRect(0, 0, width, height)
    const active = new Set<number>()
    
    if (mx !== null && my !== null) {
      const cellX = Math.floor(mx / GRID_CELL_SIZE)
      const cellY = Math.floor(my / GRID_CELL_SIZE)
      const r = Math.ceil(INTERACTION_RADIUS / GRID_CELL_SIZE)
      
      for (let i = -r; i <= r; i++) {
        for (let j = -r; j <= r; j++) {
          gridRef.current[`${cellX + i}_${cellY + j}`]?.forEach(idx => active.add(idx))
        }
      }
    }
    
    dotsRef.current.forEach((d, idx) => {
      d.currentOpacity += d.opacitySpeed
      if (d.currentOpacity >= d.targetOpacity || d.currentOpacity <= BASE_OPACITY_MIN) {
        d.opacitySpeed = -d.opacitySpeed
        d.currentOpacity = Math.max(BASE_OPACITY_MIN, Math.min(d.currentOpacity, BASE_OPACITY_MAX))
        d.targetOpacity = Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) + BASE_OPACITY_MIN
      }
      
      let f = 0
      d.currentRadius = d.baseRadius
      
      if (mx !== null && my !== null && active.has(idx)) {
        const dx = d.x - mx
        const dy = d.y - my
        const ds = dx * dx + dy * dy
        if (ds < INTERACTION_RADIUS_SQ) {
          const dist = Math.sqrt(ds)
          f = Math.max(0, 1 - dist / INTERACTION_RADIUS) ** 2
        }
      }
      
      const finalO = Math.min(1, d.currentOpacity + f * OPACITY_BOOST)
      d.currentRadius = d.baseRadius + f * RADIUS_BOOST
      
      const m = d.baseColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
      const [r, g, b] = m ? [m[1], m[2], m[3]] : ["139", "92", "246"]
      
      ctx.beginPath()
      ctx.fillStyle = `rgba(${r},${g},${b},${finalO.toFixed(3)})`
      ctx.arc(d.x, d.y, d.currentRadius, 0, Math.PI * 2)
      ctx.fill()
    })
    
    animationFrameId.current = requestAnimationFrame(animateDots)
  }, [BASE_OPACITY_MIN, BASE_OPACITY_MAX, GRID_CELL_SIZE, INTERACTION_RADIUS, INTERACTION_RADIUS_SQ, OPACITY_BOOST, RADIUS_BOOST])

  useEffect(() => {
    handleResize()
    const handleMouseLeave = () => { mousePositionRef.current = { x: null, y: null } }
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("resize", handleResize)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    animationFrameId.current = requestAnimationFrame(animateDots)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [handleResize, handleMouseMove, animateDots])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-80" />
}

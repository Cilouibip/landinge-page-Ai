"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  className?: string
  showDot?: boolean
}

export default function Badge({ children, className, showDot = false }: BadgeProps) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
      "bg-zinc-900/80 border border-zinc-800 text-zinc-300",
      className
    )}>
      {showDot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </div>
  )
}

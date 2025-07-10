"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView } from "framer-motion"
import {
  ArrowRightIcon,
  RocketIcon,
  ShieldIcon,
  ServerIcon,
  CheckCircleIcon,
  CloudIcon,
  LockIcon,
  RefreshCwIcon,
  BarChart3Icon,
  LineChartIcon,
  AlertTriangleIcon,
  ClockIcon,
  DollarSignIcon,
  TrendingUpIcon,
  PlayIcon,
  SparklesIcon,
  ZapIcon,
  BrainIcon,
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Enhanced star component with better animations
interface StarProps {
  size: number
  top: number
  left: number
  opacity: number
  delay: number
}

const Star: React.FC<StarProps> = ({ size, top, left, opacity, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
        top: `${top}%`,
        left: `${left}%`,
        opacity: opacity,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, opacity, opacity * 1.5, opacity],
        scale: [0, 1, 1.3, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Number.POSITIVE_INFINITY,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  )
}

// Enhanced animated chart component
interface AnimatedChartProps {
  type: "bar" | "line"
  delay: number
  className?: string
}

const AnimatedChart: React.FC<AnimatedChartProps> = ({ type, delay, className }) => {
  const chartVariants = {
    bar: {
      heights: [
        [60, 40, 75, 50, 65, 80, 45, 70, 55, 85, 50, 75],
        [50, 65, 45, 80, 55, 70, 85, 50, 75, 60, 70, 55],
        [70, 50, 85, 60, 75, 45, 65, 80, 50, 70, 60, 80],
      ],
    },
    line: {
      points: [
        "M0,50 C20,30 40,70 60,20 C80,10 100,60 120,30 C140,20 160,80 180,50 C200,40 220,15 240,25",
        "M0,40 C20,70 40,20 60,60 C80,80 100,15 120,25 C140,60 160,30 180,15 C200,25 220,70 240,45",
        "M0,25 C20,60 40,15 60,70 C80,35 100,25 120,80 C140,70 160,15 180,35 C200,80 220,45 240,25",
      ],
    },
  }

  const [chartIndex, setChartIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setChartIndex((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  if (type === "bar") {
    return (
      <motion.div
        className={cn("h-full w-full flex items-end justify-between gap-1", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay }}
      >
        {chartVariants.bar.heights[chartIndex].map((height, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-violet-500 via-purple-500 to-cyan-400"
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{
              duration: 1.2,
              delay: delay + i * 0.08,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    )
  }

  if (type === "line") {
    return (
      <motion.div
        className={cn("h-full w-full relative", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay }}
      >
        <svg width="100%" height="100%" viewBox="0 0 240 100" preserveAspectRatio="none">
          <motion.path
            key={chartIndex}
            d={chartVariants.line.points[chartIndex]}
            fill="none"
            stroke="url(#enhancedLineGradient)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="enhancedLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    )
  }

  return null
}

// Enhanced floating badge component
interface FloatingBadgeProps {
  children: React.ReactNode
  delay?: number
  x?: number
  y?: number
}

const FloatingBadge: React.FC<FloatingBadgeProps> = ({ children, delay = 0, x = 0, y = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="absolute z-10"
      style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Badge
          variant="outline"
          className="backdrop-blur-xl bg-white/10 border-violet-400/40 text-white text-xs py-1.5 px-3 shadow-lg shadow-violet-500/20"
        >
          {children}
        </Badge>
      </motion.div>
    </motion.div>
  )
}

// Enhanced company logo component
interface CompanyLogoProps {
  name: string
  delay: number
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ name, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-400/30 transition-all"
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400/20 to-cyan-400/20 flex items-center justify-center border border-white/10">
        <span className="text-sm font-bold text-white/80">{name.charAt(0)}</span>
      </div>
      <span className="text-sm font-medium text-white/70">{name}</span>
    </motion.div>
  )
}

// Enhanced ROI Metric component
interface ROIMetricProps {
  icon: React.ElementType
  title: string
  value: string
  subtitle: string
  delay?: number
}

const ROIMetric: React.FC<ROIMetricProps> = ({ icon: Icon, title, value, subtitle, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className="flex flex-col items-center text-center group"
    >
      <motion.div
        className="rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-4 mb-4 border border-white/10 group-hover:border-violet-400/30 transition-all"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="h-8 w-8 text-violet-400" />
      </motion.div>
      <motion.div
        className="text-4xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring", stiffness: 200 }}
      >
        {value}
      </motion.div>
      <div className="text-sm font-semibold text-white/90 mt-2">{title}</div>
      <div className="text-xs text-white/60 mt-1">{subtitle}</div>
    </motion.div>
  )
}

export function HeroSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  // Enhanced stars generation
  const stars = Array.from({ length: 150 }).map((_, i) => (
    <Star
      key={i}
      size={Math.random() * 3 + 0.5}
      top={Math.random() * 100}
      left={Math.random() * 100}
      opacity={Math.random() * 0.6 + 0.2}
      delay={Math.random() * 3}
    />
  ))

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-32">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      {/* Enhanced stars */}
      <div className="absolute inset-0 overflow-hidden">{stars}</div>

      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/15 via-transparent to-transparent"></div>
      <div
        className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"
        style={{ left: "70%", top: "30%" }}
      ></div>

      {/* Enhanced blur elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-purple-500/10 blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Enhanced floating feature badges */}
      <FloatingBadge delay={1.5} x={-35} y={-25}>
        <div className="flex items-center gap-2">
          <BrainIcon className="h-4 w-4 text-violet-400" />
          <span>AI-Powered Automation</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={1.8} x={30} y={-20}>
        <div className="flex items-center gap-2">
          <ZapIcon className="h-4 w-4 text-cyan-400" />
          <span>Zero-Touch Deployment</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.1} x={-25} y={20}>
        <div className="flex items-center gap-2">
          <ShieldIcon className="h-4 w-4 text-violet-400" />
          <span>Enterprise Security</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.4} x={35} y={25}>
        <div className="flex items-center gap-2">
          <SparklesIcon className="h-4 w-4 text-cyan-400" />
          <span>Smart Rollbacks</span>
        </div>
      </FloatingBadge>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Enhanced announcement banner */}
          <div className="mb-12 flex justify-center">
            <motion.div
              className="relative rounded-full px-6 py-2.5 text-sm leading-6 text-white ring-1 ring-violet-400/40 backdrop-blur-xl bg-white/10 hover:ring-violet-400/60 transition-all group cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                className="font-semibold flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <RocketIcon className="h-5 w-5 text-violet-400" />
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    DevOps Autopilot
                  </span>
                </div>
                <span className="hidden sm:inline text-white/80">— Patch management reimagined</span>
                <ArrowRightIcon className="h-4 w-4 text-violet-400 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </motion.div>
          </div>

          {/* Enhanced main heading */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            animate={controls}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none"
            >
              <motion.span
                className="block bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent pb-4"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ backgroundSize: "200% 100%" }}
              >
                Autopilot for
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.8 } },
                }}
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ backgroundSize: "200% 100%" }}
              >
                Patches
              </motion.span>
            </motion.h1>

            {/* Enhanced subtitle */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
              }}
              className="mt-8 text-xl sm:text-2xl leading-relaxed text-white/80 max-w-3xl mx-auto font-medium"
            >
              Transform your infrastructure with{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                AI-powered patch automation
              </span>
              . Deploy with confidence, scale with ease, and sleep soundly knowing your systems are secure.
            </motion.p>

            {/* Enhanced ROI Metrics */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.7, duration: 0.8 } },
              }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <ROIMetric icon={ClockIcon} value="85%" title="Time Saved" subtitle="vs. manual patching" delay={0.8} />
              <ROIMetric
                icon={TrendingUpIcon}
                value="99.9%"
                title="Success Rate"
                subtitle="automated deployments"
                delay={0.9}
              />
              <ROIMetric
                icon={DollarSignIcon}
                value="73%"
                title="Cost Reduction"
                subtitle="in operations"
                delay={1.0}
              />
              <ROIMetric icon={ShieldIcon} value="4.2x" title="Security Boost" subtitle="faster response" delay={1.1} />
            </motion.div>

            {/* Enhanced CTA buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: 1.0, duration: 0.8 } },
              }}
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 border border-violet-500/20"
                onClick={() => {}}
              >
                <motion.span
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <PlayIcon className="h-5 w-5" />
                  Watch Demo
                  <ArrowRightIcon className="h-5 w-5" />
                </motion.span>
              </Button>
              <Link
                href="/dashboard"
                className="text-lg font-semibold leading-6 text-white/90 hover:text-violet-400 transition-colors group flex items-center gap-2 px-6 py-4"
              >
                Start Free Trial
                <motion.span
                  aria-hidden="true"
                  className="inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-24 sm:mt-32 relative mx-auto max-w-6xl"
        >
          {/* Enhanced main dashboard */}
          <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl shadow-violet-500/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-cyan-500/10"></div>
            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-400"></div>

            {/* Enhanced window controls */}
            <div className="py-6 px-8 border-b border-white/10 bg-black/60 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  <div className="h-4 w-4 rounded-full bg-red-500 shadow-lg"></div>
                  <div className="h-4 w-4 rounded-full bg-yellow-500 shadow-lg"></div>
                  <div className="h-4 w-4 rounded-full bg-green-500 shadow-lg"></div>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80 font-medium">
                  <RocketIcon className="h-4 w-4 text-violet-400" />
                  Patchonaut Mission Control
                </div>
                <div className="w-16"></div>
              </div>
            </div>

            {/* Enhanced dashboard content */}
            <div className="p-8 relative">
              {/* Enhanced top status bar */}
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="h-3 w-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  ></motion.div>
                  <span className="text-sm font-semibold text-white">All Systems Operational</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">Live</Badge>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-sm text-white/70 flex items-center gap-2">
                    <RefreshCwIcon className="h-4 w-4 text-violet-400" />
                    Last scan: 2 minutes ago
                  </div>
                  <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30">Real-time Data</Badge>
                </div>
              </div>

              {/* Enhanced main dashboard grid */}
              <div className="grid grid-cols-12 gap-6">
                {/* Enhanced left sidebar */}
                <div className="col-span-12 lg:col-span-4 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4"
                  >
                    <div className="text-sm text-white/80 font-semibold flex items-center gap-2">
                      <ServerIcon className="h-4 w-4 text-violet-400" />
                      Infrastructure Overview
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          name: "Production Servers",
                          status: "Healthy",
                          count: "24/24",
                          icon: ServerIcon,
                          color: "green",
                        },
                        {
                          name: "Staging Environment",
                          status: "Healthy",
                          count: "8/8",
                          icon: CloudIcon,
                          color: "green",
                        },
                        { name: "API Gateway", status: "Warning", count: "3/4", icon: LockIcon, color: "yellow" },
                        { name: "Database Cluster", status: "Healthy", count: "6/6", icon: CloudIcon, color: "green" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                          className="flex justify-between items-center py-3 px-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="h-4 w-4 text-white/60" />
                            <div>
                              <div className="text-sm text-white/90 font-medium">{item.name}</div>
                              <div className="text-xs text-white/60">{item.count}</div>
                            </div>
                          </div>
                          <div className={`text-xs font-semibold text-${item.color}-400 flex items-center gap-1.5`}>
                            {item.status === "Healthy" ? (
                              <CheckCircleIcon className="h-3.5 w-3.5" />
                            ) : (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                              >
                                <AlertTriangleIcon className="h-3.5 w-3.5" />
                              </motion.div>
                            )}
                            {item.status}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
                  >
                    <div className="text-sm text-white/80 font-semibold mb-4 flex items-center gap-2">
                      <BarChart3Icon className="h-4 w-4 text-violet-400" />
                      System Health Score
                    </div>
                    <div className="flex justify-center">
                      <div className="relative h-40 w-40">
                        <motion.div
                          className="absolute inset-0 rounded-full border-4 border-white/10"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        ></motion.div>
                        <motion.div
                          className="absolute inset-0 rounded-full border-4 border-violet-400 border-r-transparent"
                          initial={{ rotate: 45, pathLength: 0 }}
                          animate={{ rotate: [45, 405], pathLength: 0.92 }}
                          transition={{
                            rotate: { duration: 2, ease: "easeInOut" },
                            pathLength: { duration: 1.5, delay: 1.9 },
                          }}
                        ></motion.div>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <motion.span
                            className="text-4xl font-bold text-white"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.0, type: "spring", stiffness: 200 }}
                          >
                            92%
                          </motion.span>
                          <motion.span
                            className="text-xs text-white/70 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.1 }}
                          >
                            Excellent
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced main content area */}
                <div className="col-span-12 lg:col-span-8 space-y-6">
                  {/* Enhanced top stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-violet-400/30 transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm text-white/70 font-medium">Critical Patches</div>
                          <div className="text-3xl font-bold text-red-400 mt-2">3</div>
                          <div className="text-xs text-red-400/70 mt-1">Requires attention</div>
                        </div>
                        <div className="p-3 rounded-lg bg-red-500/20">
                          <ShieldIcon className="h-6 w-6 text-red-400" />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.5 }}
                      className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-violet-400/30 transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm text-white/70 font-medium">Servers Protected</div>
                          <div className="text-3xl font-bold text-violet-400 mt-2">156</div>
                          <div className="text-xs text-violet-400/70 mt-1">+12 this week</div>
                        </div>
                        <div className="p-3 rounded-lg bg-violet-500/20">
                          <ServerIcon className="h-6 w-6 text-violet-400" />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                      className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-violet-400/30 transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm text-white/70 font-medium">Success Rate</div>
                          <div className="text-3xl font-bold text-cyan-400 mt-2">99.8%</div>
                          <div className="text-xs text-cyan-400/70 mt-1">Last 30 days</div>
                        </div>
                        <div className="p-3 rounded-lg bg-cyan-500/20">
                          <TrendingUpIcon className="h-6 w-6 text-cyan-400" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Enhanced charts grid */}
                  <div className="grid grid-cols-12 gap-6">
                    {/* Enhanced bar chart */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.7 }}
                      className="col-span-12 lg:col-span-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 h-80"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <BarChart3Icon className="h-5 w-5 text-violet-400" />
                          <div className="text-sm text-white/80 font-semibold">Patch Deployment Timeline</div>
                        </div>
                        <div className="flex gap-3">
                          <Badge
                            variant="outline"
                            className="text-xs bg-violet-500/10 border-violet-500/30 text-violet-400"
                          >
                            This Week
                          </Badge>
                          <Badge variant="outline" className="text-xs bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
                            Last Week
                          </Badge>
                        </div>
                      </div>
                      <div className="h-[calc(100%-40px)]">
                        <AnimatedChart type="bar" delay={1.8} />
                      </div>
                    </motion.div>

                    {/* Enhanced line chart */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="col-span-12 lg:col-span-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 h-80"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <LineChartIcon className="h-5 w-5 text-cyan-400" />
                        <div className="text-sm text-white/80 font-semibold">Success Trend</div>
                      </div>
                      <div className="h-[calc(100%-40px)]">
                        <AnimatedChart type="line" delay={1.9} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced trusted by section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-y-1/2"></div>

            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                className="bg-black/60 backdrop-blur-xl px-8 py-3 rounded-full mb-12 border border-white/10"
              >
                <div className="text-sm font-semibold text-white/80">Trusted by forward-thinking companies</div>
              </motion.div>

              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {[
                  { name: "TechFlow", logo: "T" },
                  { name: "CloudScale", logo: "C" },
                  { name: "DevOps Pro", logo: "D" },
                  { name: "SecureNet", logo: "S" },
                  { name: "InnovateLab", logo: "I" },
                ].map((company, i) => (
                  <CompanyLogo key={company.name} name={company.name} delay={2.7 + i * 0.1} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

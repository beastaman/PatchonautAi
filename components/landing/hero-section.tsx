"use client"

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
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Star component for background
interface StarProps {
    size: number;
    top: number;
    left: number;
    opacity: number;
    delay: number;
}

// Star component for background
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
      initial={{ opacity: 0 }}
      animate={{
        opacity: [opacity, opacity * 1.5, opacity],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Number.POSITIVE_INFINITY,
        delay: delay,
      }}
    />
  )
}

// Animated chart component
interface AnimatedChartProps {
    type: "bar" | "line";
    delay: number;
    className?: string;
}

// Animated chart component
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
        "M0,50 C20,40 40,60 60,30 C80,10 100,50 120,40 C140,30 160,70 180,60 C200,50 220,20 240,30",
        "M0,40 C20,60 40,30 60,50 C80,70 100,20 120,30 C140,50 160,40 180,20 C200,30 220,60 240,50",
        "M0,30 C20,50 40,20 60,60 C80,40 100,30 120,70 C140,60 160,20 180,40 C200,70 220,50 240,30",
      ],
    },
  }

  const [chartIndex, setChartIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setChartIndex((prev) => (prev + 1) % 3)
    }, 5000)
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
            className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500 to-purple-500"
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{
              duration: 1,
              delay: delay + i * 0.05,
              ease: "easeInOut",
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
            stroke="url(#lineGradient)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    )
  }

  return null
}
// Floating badge component
interface FloatingBadgeProps {
    children: React.ReactNode;
    delay?: number;
    x?: number;
    y?: number;
}
// Floating badge component
const FloatingBadge: React.FC<FloatingBadgeProps> = ({ children, delay = 0, x = 0, y = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="absolute"
      style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Badge variant="outline" className="backdrop-blur-md bg-background/30 border-cyan-500/30 text-xs py-1">
          {children}
        </Badge>
      </motion.div>
    </motion.div>
  )
}

// Company logo component
interface CompanyLogoProps {
    name: string;
    delay: number;
}

// Company logo component
const CompanyLogo: React.FC<CompanyLogoProps>  = ({ name, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, opacity: 0.9 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center gap-2 px-4 py-2"
    >
      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
        <span className="text-xs font-bold text-white/70">{name.charAt(0)}</span>
      </div>
      <span className="text-sm font-medium text-white/60">{name}</span>
    </motion.div>
  )
}

// ROI Metric component
interface ROIMetricProps {
    icon: React.ElementType;
    title: string;
    value: string;
    subtitle: string;
    delay?: number;
}

// ROI Metric component
const ROIMetric: React.FC<ROIMetricProps> = ({ icon: Icon, title, value, subtitle, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="rounded-full bg-cyan-500/10 p-3 mb-4">
        <Icon className="h-6 w-6 text-cyan-400" />
      </div>
      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm font-medium mt-1">{title}</div>
      <div className="text-xs text-muted-foreground mt-1">{subtitle}</div>
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

  // Generate stars
  const stars = Array.from({ length: 100 }).map((_, i) => (
    <Star
      key={i}
      size={Math.random() * 2 + 1}
      top={Math.random() * 100}
      left={Math.random() * 100}
      opacity={Math.random() * 0.5 + 0.1}
      delay={Math.random() * 2}
    />
  ))

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-32 pb-24 sm:pt-36 sm:pb-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">{stars}</div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>
      <div
        className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"
        style={{ left: "70%", top: "30%" }}
      ></div>

      {/* Blur elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>

      {/* Floating feature badges */}
      <FloatingBadge delay={1.5} x={-30} y={-20}>
        <div className="flex items-center gap-1">
          <ShieldIcon className="h-3 w-3 text-cyan-500" />
          <span>Vulnerability Scanning</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={1.8} x={25} y={-15}>
        <div className="flex items-center gap-1">
          <ServerIcon className="h-3 w-3 text-purple-500" />
          <span>Multi-Cloud Support</span>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={2.1} x={-20} y={15}>
        <div className="flex items-center gap-1">
          <RefreshCwIcon className="h-3 w-3 text-cyan-500" />
          <span>Automated Rollbacks</span>
        </div>
      </FloatingBadge>

      <div className="container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Announcement banner */}
          <div className="mb-8 flex justify-center">
            <motion.div
              className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-white ring-1 ring-cyan-400/30 backdrop-blur-sm bg-white/5 hover:ring-cyan-400/70 transition-all group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                className="font-medium flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <RocketIcon className="h-4 w-4 text-cyan-400" />
                DevOps on Cruise Control
                <span className="hidden sm:inline">— Launch your patch management into orbit</span>
              </motion.span>
            </motion.div>
          </div>

          {/* Main heading */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate={controls}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight"
            >
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-2"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                Autopilot for Patches
              </motion.span>
              <motion.span
                className="text-white text-3xl sm:text-4xl md:text-5xl"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.2, duration: 0.7 } },
                }}
              >
                Secure. Automated. Reliable.
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.7 } },
              }}
              className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto"
            >
              Patchonaut eliminates manual patching with intelligent automation. Set your patch strategy once, and let
              our AI handle the rest — saving time, reducing errors, and improving security posture.
            </motion.p>

            {/* ROI Metrics */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.6, duration: 0.7 } },
              }}
              className="mt-12 grid grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              <ROIMetric icon={ClockIcon} value="85%" title="Time Saved" subtitle="vs. manual patching" delay={0.7} />
              <ROIMetric
                icon={TrendingUpIcon}
                value="99.9%"
                title="Success Rate"
                subtitle="for automated patches"
                delay={0.8}
              />
              <ROIMetric
                icon={DollarSignIcon}
                value="73%"
                title="Cost Reduction"
                subtitle="in patch operations"
                delay={0.9}
              />
              <ROIMetric icon={ShieldIcon} value="4.2x" title="Security Posture" subtitle="improvement" delay={1.0} />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } },
              }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transition-all duration-300"
                onClick={() => {}}
              >
                <motion.span
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Try Demo <ArrowRightIcon className="ml-2 h-4 w-4" />
                </motion.span>
              </Button>
              <Link
                href="/dashboard"
                className="text-sm font-semibold leading-6 text-white hover:text-cyan-400 transition-colors group flex items-center"
              >
                Learn more{" "}
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

        {/* Dashboard mockup - Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-20 sm:mt-28 relative mx-auto max-w-5xl"
        >
          {/* Main dashboard */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5"></div>
            <div className="absolute top-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>

            {/* Window controls */}
            <div className="py-4 px-6 border-b border-white/10 bg-black/40">
              <div className="flex items-center">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 text-xs text-white/70">
                  <RocketIcon className="h-3.5 w-3.5 text-cyan-400" />
                  Patchonaut Command Center
                </div>
              </div>
            </div>

            {/* Dashboard content - Optimized */}
            <div className="p-6 relative">
              {/* Top status bar */}
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="h-2.5 w-2.5 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  ></motion.div>
                  <span className="text-sm font-medium text-white/90">System Status: Operational</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs text-white/70 flex items-center gap-1">
                    <RefreshCwIcon className="h-3 w-3 text-cyan-400" />
                    Last scan: 5 minutes ago
                  </div>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Live Data</Badge>
                </div>
              </div>

              {/* Main dashboard grid - Optimized */}
              <div className="grid grid-cols-12 gap-4">
                {/* Left sidebar */}
                <div className="col-span-12 md:col-span-3 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-4 space-y-3"
                  >
                    <div className="text-sm text-white/70 font-medium">System Overview</div>
                    <div className="space-y-2">
                      {[
                        { name: "Web Servers", status: "Online", icon: ServerIcon, color: "green" },
                        { name: "Database Clusters", status: "Online", icon: CloudIcon, color: "green" },
                        { name: "API Gateway", status: "Warning", icon: LockIcon, color: "yellow" },
                        { name: "CDN", status: "Online", icon: CloudIcon, color: "green" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 1.3 + i * 0.1 }}
                          className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0"
                        >
                          <span className="text-xs text-white/70 flex items-center gap-1.5">
                            <item.icon className="h-3 w-3 text-white/50" /> {item.name}
                          </span>
                          <span className={`text-xs font-medium text-${item.color}-500 flex items-center gap-1`}>
                            {item.status === "Online" ? (
                              <CheckCircleIcon className="h-3 w-3" />
                            ) : (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                              >
                                <AlertTriangleIcon className="h-3 w-3" />
                              </motion.div>
                            )}{" "}
                            {item.status}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-4"
                  >
                    <div className="text-sm text-white/70 font-medium mb-3">System Health</div>
                    <div className="flex justify-center">
                      <div className="relative h-32 w-32">
                        <motion.div
                          className="absolute inset-0 rounded-full border-4 border-white/10"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        ></motion.div>
                        <motion.div
                          className="absolute inset-0 rounded-full border-4 border-cyan-400 border-r-transparent"
                          initial={{ rotate: 45, pathLength: 0 }}
                          animate={{ rotate: [45, 405], pathLength: 0.86 }}
                          transition={{
                            rotate: { duration: 2, ease: "easeInOut" },
                            pathLength: { duration: 1, delay: 1.8 },
                          }}
                        ></motion.div>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <motion.span
                            className="text-3xl font-bold text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.9 }}
                          >
                            86%
                          </motion.span>
                          <motion.span
                            className="text-xs text-white/70"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.0 }}
                          >
                            Overall Health
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Main content area */}
                <div className="col-span-12 md:col-span-9 space-y-4">
                  {/* Top stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-4"
                    >
                      <div className="flex justify-between">
                        <div>
                          <div className="text-sm text-white/70">Critical Patches</div>
                          <div className="text-2xl font-bold text-red-400">7</div>
                        </div>
                        <ShieldIcon className="h-10 w-10 text-red-500/50" />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                      className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-4"
                    >
                      <div className="flex justify-between">
                        <div>
                          <div className="text-sm text-white/70">Servers Protected</div>
                          <div className="text-2xl font-bold text-cyan-400">128</div>
                        </div>
                        <ServerIcon className="h-10 w-10 text-cyan-500/50" />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                      className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-4"
                    >
                      <div className="flex justify-between">
                        <div>
                          <div className="text-sm text-white/70">Cloud Instances</div>
                          <div className="text-2xl font-bold text-purple-400">56</div>
                        </div>
                        <CloudIcon className="h-10 w-10 text-purple-500/50" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Charts grid */}
                  <div className="grid grid-cols-12 gap-4">
                    {/* Bar chart */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      className="col-span-12 md:col-span-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-4 h-64"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                          <BarChart3Icon className="h-4 w-4 text-cyan-400" />
                          <div className="text-sm text-white/70">Patch Timeline</div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
                            Daily
                          </Badge>
                          <Badge
                            variant="outline"
                            className="text-xs bg-purple-500/10 border-purple-500/30 text-purple-400"
                          >
                            Weekly
                          </Badge>
                        </div>
                      </div>
                      <div className="h-[calc(100%-28px)]">
                        <AnimatedChart type="bar" delay={1.6} />
                      </div>
                    </motion.div>

                    {/* Line chart */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.6 }}
                      className="col-span-12 md:col-span-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-4 h-64"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <LineChartIcon className="h-4 w-4 text-purple-400" />
                        <div className="text-sm text-white/70">Success Rate</div>
                      </div>
                      <div className="h-[calc(100%-28px)]">
                        <AnimatedChart type="line" delay={1.7} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom metrics */}
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: "Total Patches", value: "396", change: "+12%" },
                      { label: "Servers Secured", value: "128", change: "+5%" },
                      { label: "Avg. Patch Time", value: "3.2m", change: "-18%" },
                      { label: "Success Rate", value: "99.8%", change: "+0.5%" },
                    ].map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.9 + i * 0.1 }}
                        className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-3 text-center"
                      >
                        <div className="text-xs text-white/60">{metric.label}</div>
                        <div className="text-xl font-bold text-white mt-1">{metric.value}</div>
                        <div
                          className={`text-xs ${
                            metric.change.startsWith("+") ? "text-green-400" : "text-cyan-400"
                          } mt-1`}
                        >
                          {metric.change}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted by section - Enhanced and more elegant */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 2.2 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-y-1/2"></div>

            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.3 }}
                className="bg-black/50 backdrop-blur-sm px-6 py-2 rounded-full mb-8"
              >
                <div className="text-sm font-medium text-white/60">Trusted by innovative companies</div>
              </motion.div>

              <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6">
                {[
                  { name: "Acme Inc", logo: "A" },
                  { name: "TechCorp", logo: "T" },
                  { name: "Innovate AI", logo: "I" },
                  { name: "CloudSys", logo: "C" },
                  { name: "SecureNet", logo: "S" },
                ].map((company, i) => (
                  <CompanyLogo key={company.name} name={company.name} delay={2.4 + i * 0.1} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { RocketIcon, MenuIcon } from "lucide-react"
import { motion } from "framer-motion"

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Patches",
    path: "/patches",
  },
  {
    name: "Reports",
    path: "/reports",
  },
  {
    name: "Settings",
    path: "/settings",
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "flex h-14 items-center rounded-full border border-white/10 backdrop-blur-xl transition-all duration-300",
          scrolled ? "bg-black/70 px-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]" : "bg-black/40 px-4",
        )}
      >
        <div className="flex items-center gap-2 mr-6">
          <Link href="/" className="flex items-center gap-2 transition-colors hover:text-cyan-400 group">
            <motion.div whileHover={{ rotate: [0, -10, 20, -10, 0] }} transition={{ duration: 0.5 }}>
              <RocketIcon className="h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </motion.div>
            <span className="font-heading text-lg font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Patchonaut
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center space-x-1">
          {routes.map((route) => (
            <Link key={route.path} href={route.path}>
              <motion.div
                className="relative px-3 py-1.5 text-sm font-medium transition-colors hover:text-cyan-400"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <span className={cn("relative z-10", pathname === route.path ? "text-white" : "text-white/70")}>
                  {route.name}
                </span>
                {pathname === route.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 ml-auto">
          <Button
            className="hidden md:flex bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white border-none"
            size="sm"
            variant="outline"
          >
            <motion.span
              className="flex items-center gap-1"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Try Demo <span className="ml-1">→</span>
            </motion.span>
          </Button>
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-black/95 backdrop-blur-lg border-white/10">
              <nav className="flex flex-col space-y-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors hover:text-cyan-400 rounded-md",
                      pathname === route.path
                        ? "bg-cyan-500/10 text-white border-l-2 border-cyan-400"
                        : "text-white/70",
                    )}
                  >
                    {route.name}
                  </Link>
                ))}
                <Button className="mt-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white">
                  Try Demo
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  )
}

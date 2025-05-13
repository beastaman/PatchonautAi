"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Patchonaut has reduced our patching time by 85% and virtually eliminated patch-related downtime. The ROI was evident within the first month of implementation.",
    author: "Sarah Chen",
    title: "DevOps Lead at CloudTech",
    avatar: "SC",
    rating: 5,
  },
  {
    quote:
      "The automation capabilities are incredible. We've gone from firefighting to proactive security. Our team can now focus on innovation rather than maintenance.",
    author: "Michael Rodriguez",
    title: "CTO at DataFlow Systems",
    avatar: "MR",
    rating: 5,
  },
  {
    quote:
      "Our security compliance audits used to take weeks. Now we generate comprehensive reports in minutes. Patchonaut has transformed our security posture.",
    author: "Akira Tanaka",
    title: "Security Engineer at FinSecure",
    avatar: "AT",
    rating: 5,
  },
  {
    quote:
      "The intelligent scheduling feature alone saved us countless hours of downtime. Patches are applied during optimal windows with zero business impact.",
    author: "Elena Petrova",
    title: "Infrastructure Manager at TechGlobal",
    avatar: "EP",
    rating: 5,
  },
  {
    quote:
      "As a financial institution, security is paramount. Patchonaut gives us confidence that our systems are always up-to-date with the latest security patches.",
    author: "James Wilson",
    title: "CISO at SecureBank",
    avatar: "JW",
    rating: 5,
  },
]

const companies = ["TechCorp", "DataSystems", "CloudNative", "InfraTech", "DevSecOps", "SecureBank", "GlobalTech"]

const stats = [
  { value: "85%", label: "Reduction in patching time" },
  { value: "99.9%", label: "Patch success rate" },
  { value: "73%", label: "Cost reduction" },
  { value: "4.2x", label: "Security posture improvement" },
]

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-cyan-400">Testimonials</h2>
          <p className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Trusted by DevOps teams worldwide
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See how teams are transforming their patch management with Patchonaut.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-4xl relative"
        >
          <div className="relative overflow-hidden rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm p-8 md:p-12">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>

            <div className="flex justify-center mb-6">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
            </div>

            <div className="relative min-h-[200px]">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    x: i === activeIndex ? 0 : i < activeIndex ? -100 : 100,
                    display: i === activeIndex ? "block" : "none",
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="relative mb-8">
                    <div className="absolute -top-2 -left-2 text-5xl text-cyan-500/20 font-serif">"</div>
                    <p className="text-xl md:text-2xl text-foreground/90 relative z-10 pt-6 italic">
                      {testimonial.quote}
                    </p>
                    <div className="absolute -bottom-6 -right-2 text-5xl text-cyan-500/20 font-serif rotate-180">"</div>
                  </div>

                  <div className="mt-12 flex flex-col items-center">
                    <Avatar className="h-16 w-16 border-2 border-cyan-500/20 mb-4">
                      <AvatarImage src="/placeholder.svg" alt={testimonial.author} />
                      <AvatarFallback className="bg-muted text-lg">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <p className="text-lg font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full border-border/30 bg-background/50 hover:bg-cyan-500/20 hover:text-cyan-400"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full border-border/30 bg-background/50 hover:bg-cyan-500/20 hover:text-cyan-400"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setAutoplay(false)
                    setActiveIndex(i)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIndex ? "w-6 bg-cyan-400" : "w-2 bg-border/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 mx-auto max-w-4xl"
        >
          <Separator className="mb-8 bg-border/40" />
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {companies.map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-xl font-heading font-bold text-muted-foreground/50"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

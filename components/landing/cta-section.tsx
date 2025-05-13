"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RocketIcon, ArrowRightIcon } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      {/* Blur elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-8 flex justify-center">
            <motion.div
              className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-white ring-1 ring-cyan-400/30 backdrop-blur-sm bg-white/5"
              whileInView={{ scale: [0.9, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-medium flex items-center gap-2">
                <RocketIcon className="h-4 w-4 text-cyan-400" />
                Ready for takeoff?
              </span>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Transform your patch management today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Join hundreds of organizations that have revolutionized their patch management with Patchonaut. Start your
            free trial today and see the difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transition-all duration-300 w-full sm:w-auto"
            >
              <motion.span
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Start Free Trial <ArrowRightIcon className="ml-2 h-4 w-4" />
              </motion.span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 w-full sm:w-auto"
            >
              Schedule Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

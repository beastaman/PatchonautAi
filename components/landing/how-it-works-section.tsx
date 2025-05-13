"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ScanIcon, FilterIcon, PlayIcon, CheckCircleIcon, BarChart3Icon, ArrowRightIcon } from "lucide-react"

const steps = [
  {
    title: "Scan",
    description: "Patchonaut continuously scans your infrastructure for vulnerabilities and available patches.",
    icon: ScanIcon,
    color: "cyan",
  },
  {
    title: "Analyze",
    description: "AI analyzes patches for risk, compatibility, and optimal deployment windows.",
    icon: FilterIcon,
    color: "purple",
  },
  {
    title: "Deploy",
    description: "Patches are automatically deployed during optimal windows with minimal disruption.",
    icon: PlayIcon,
    color: "green",
  },
  {
    title: "Verify",
    description: "Post-deployment tests verify system stability and functionality.",
    icon: CheckCircleIcon,
    color: "orange",
  },
  {
    title: "Report",
    description: "Comprehensive reports are generated for compliance and security audits.",
    icon: BarChart3Icon,
    color: "blue",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-cyan-400">How It Works</h2>
          <p className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Patching simplified in five steps
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our intelligent platform handles the entire patch management lifecycle, from discovery to verification.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline connector */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 transform -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="bg-card/40 backdrop-blur-sm border-border/30 hover:border-cyan-500/30 transition-all h-full">
                  <CardContent className="p-6 text-center">
                    <div className="relative z-10 mb-6 mx-auto">
                      <div
                        className={`rounded-full bg-${step.color}-500/20 p-4 w-16 h-16 mx-auto flex items-center justify-center relative`}
                      >
                        <step.icon className={`h-8 w-8 text-${step.color}-400`} />
                        <div className="absolute -top-2 -right-2 bg-background text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center border border-border">
                          {index + 1}
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                          <ArrowRightIcon className="h-5 w-5 text-muted-foreground/50" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

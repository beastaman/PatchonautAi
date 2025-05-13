"use client"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, BarChart3Icon, ClockIcon, DollarSignIcon, ShieldIcon } from "lucide-react"

const caseStudies = [
  {
    company: "CloudTech Solutions",
    industry: "SaaS",
    challenge:
      "Managing patches across 500+ servers was taking 20+ hours per week and causing frequent downtime during updates.",
    solution:
      "Implemented Patchonaut's automated patch management with custom deployment windows and rollback automation.",
    results: [
      { metric: "85%", label: "Reduction in patching time", icon: ClockIcon },
      { metric: "99.9%", label: "Patch success rate", icon: BarChart3Icon },
      { metric: "$240K", label: "Annual cost savings", icon: DollarSignIcon },
      { metric: "Zero", label: "Security incidents", icon: ShieldIcon },
    ],
    quote:
      "Patchonaut transformed our operations. What used to take a full-time employee now happens automatically with better results.",
    author: "Sarah Chen, DevOps Lead",
  },
  {
    company: "FinSecure Bank",
    industry: "Financial Services",
    challenge:
      "Strict compliance requirements meant lengthy audit processes and documentation for every patch deployment.",
    solution:
      "Deployed Patchonaut with compliance-focused workflows and automated reporting for regulatory requirements.",
    results: [
      { metric: "90%", label: "Reduction in audit prep time", icon: ClockIcon },
      { metric: "100%", label: "Compliance rate", icon: BarChart3Icon },
      { metric: "$380K", label: "Annual cost savings", icon: DollarSignIcon },
      { metric: "4.5x", label: "Faster patch deployment", icon: ShieldIcon },
    ],
    quote:
      "The compliance reporting alone justifies the investment. We've eliminated countless hours of documentation while improving our security posture.",
    author: "James Wilson, CISO",
  },
  {
    company: "HealthTech Innovations",
    industry: "Healthcare",
    challenge:
      "HIPAA compliance and patient data security required rigorous patch management, but their small IT team was overwhelmed.",
    solution:
      "Implemented Patchonaut with healthcare-specific compliance templates and automated vulnerability scanning.",
    results: [
      { metric: "73%", label: "Reduction in vulnerabilities", icon: ShieldIcon },
      { metric: "8 hrs", label: "Time saved weekly", icon: ClockIcon },
      { metric: "$190K", label: "Annual cost savings", icon: DollarSignIcon },
      { metric: "Zero", label: "Compliance violations", icon: BarChart3Icon },
    ],
    quote:
      "As a small team responsible for critical healthcare infrastructure, Patchonaut has been a game-changer for our security and compliance efforts.",
    author: "Elena Petrova, IT Director",
  },
]

export function CaseStudiesSection() {
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
          <h2 className="text-base font-semibold leading-7 text-cyan-400">Case Studies</h2>
          <p className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Real results from real customers
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See how organizations across industries have transformed their patch management with Patchonaut.
          </p>
        </motion.div>

        <Tabs defaultValue="0" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-background/50 backdrop-blur-sm border border-border/30">
              {caseStudies.map((study, i) => (
                <TabsTrigger
                  key={i}
                  value={i.toString()}
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                >
                  {study.company}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {caseStudies.map((study, i) => (
            <TabsContent key={i} value={i.toString()} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <div className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400 mb-4">
                        {study.industry}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{study.company}</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium mb-2">Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-2">Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-2">Results</h4>
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            {study.results.map((result, j) => (
                              <div key={j} className="flex items-start gap-3">
                                <div className="rounded-full bg-cyan-500/10 p-2 mt-1">
                                  <result.icon className="h-4 w-4 text-cyan-400" />
                                </div>
                                <div>
                                  <div className="text-xl font-bold">{result.metric}</div>
                                  <div className="text-sm text-muted-foreground">{result.label}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Button className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                        <span className="flex items-center">
                          Read Full Case Study <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </span>
                      </Button>
                    </div>

                    <div className="md:w-1/3 bg-card/50 rounded-lg p-6">
                      <div className="text-xl italic text-muted-foreground mb-6">"{study.quote}"</div>
                      <div className="font-medium">{study.author}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

"use client"
import { motion } from "framer-motion"
import { ShieldAlert, Clock, BarChart3, Workflow, Server, Cloud, Lock, RefreshCw, CheckCircle, Zap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    name: "Intelligent Patching",
    description:
      "AI-powered patch automation that understands your infrastructure and applies updates with minimal disruption.",
    icon: ShieldAlert,
    color: "cyan",
  },
  {
    name: "Real-time Monitoring",
    description: "Track patch deployment status across your entire fleet in real-time with detailed success metrics.",
    icon: Clock,
    color: "purple",
  },
  {
    name: "Compliance Tracking",
    description: "Automatically generate reports for security and compliance audits with comprehensive patch history.",
    icon: BarChart3,
    color: "green",
  },
  {
    name: "Custom Workflows",
    description: "Design patch deployment workflows that match your infrastructure and business requirements.",
    icon: Workflow,
    color: "orange",
  },
]

const detailedFeatures = {
  security: [
    {
      title: "Vulnerability Scanning",
      description: "Continuously scan your infrastructure for vulnerabilities and prioritize patches based on risk.",
      icon: ShieldAlert,
    },
    {
      title: "Zero-Day Protection",
      description: "Rapid response to zero-day vulnerabilities with automated patch deployment.",
      icon: Zap,
    },
    {
      title: "Compliance Reporting",
      description: "Generate compliance reports for SOC 2, ISO 27001, HIPAA, and other standards.",
      icon: CheckCircle,
    },
  ],
  automation: [
    {
      title: "Intelligent Scheduling",
      description: "AI-powered scheduling that minimizes disruption to your business operations.",
      icon: Clock,
    },
    {
      title: "Automated Testing",
      description: "Pre and post-patch testing to ensure system stability and functionality.",
      icon: RefreshCw,
    },
    {
      title: "Rollback Automation",
      description: "Automatic rollback if patches cause issues, ensuring system reliability.",
      icon: RefreshCw,
    },
  ],
  infrastructure: [
    {
      title: "Multi-Cloud Support",
      description: "Support for AWS, Azure, GCP, and on-premise infrastructure.",
      icon: Cloud,
    },
    {
      title: "Container Integration",
      description: "Seamless integration with Docker, Kubernetes, and other container platforms.",
      icon: Server,
    },
    {
      title: "Zero-Trust Architecture",
      description: "Secure patch deployment with zero-trust principles and least privilege access.",
      icon: Lock,
    },
  ],
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function FeatureSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background/95 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-cyan-400">DevOps Evolved</h2>
          <p className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Patching on autopilot, exactly as it should be
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Let Patchonaut handle the complexity of patch management while you focus on innovation and growth.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={item}
              className="relative rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm p-6 hover:border-cyan-500/30 hover:bg-card/70 transition-all group"
            >
              <div className="absolute -top-3 -left-3">
                <div
                  className={`rounded-xl bg-${feature.color}-500/20 p-2 ring-1 ring-${feature.color}-500/30 backdrop-blur-sm`}
                >
                  <feature.icon className={`h-6 w-6 text-${feature.color}-400`} />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold font-heading">{feature.name}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Features with Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <Tabs defaultValue="security" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-background/50 backdrop-blur-sm border border-border/30">
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                >
                  Security
                </TabsTrigger>
                <TabsTrigger
                  value="automation"
                  className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
                >
                  Automation
                </TabsTrigger>
                <TabsTrigger
                  value="infrastructure"
                  className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
                >
                  Infrastructure
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="security" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {detailedFeatures.security.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-card/40 backdrop-blur-sm border-border/30 hover:border-cyan-500/30 transition-all h-full">
                      <CardContent className="p-6">
                        <div className="rounded-full bg-cyan-500/10 p-2 w-fit mb-4">
                          <feature.icon className="h-5 w-5 text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="automation" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {detailedFeatures.automation.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-card/40 backdrop-blur-sm border-border/30 hover:border-purple-500/30 transition-all h-full">
                      <CardContent className="p-6">
                        <div className="rounded-full bg-purple-500/10 p-2 w-fit mb-4">
                          <feature.icon className="h-5 w-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="infrastructure" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {detailedFeatures.infrastructure.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-card/40 backdrop-blur-sm border-border/30 hover:border-green-500/30 transition-all h-full">
                      <CardContent className="p-6">
                        <div className="rounded-full bg-green-500/10 p-2 w-fit mb-4">
                          <feature.icon className="h-5 w-5 text-green-400" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

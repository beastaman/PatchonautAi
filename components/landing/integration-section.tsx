/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const integrations = [
  {
    name: "AWS",
    category: "Cloud",
    description: "Seamless integration with AWS EC2, ECS, Lambda, and more.",
    logo: "A",
  },
  {
    name: "Azure",
    category: "Cloud",
    description: "Full support for Azure VMs, App Services, and AKS.",
    logo: "Az",
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    description: "Integrate with GCP Compute Engine, GKE, and Cloud Functions.",
    logo: "G",
  },
  {
    name: "Kubernetes",
    category: "Container",
    description: "Native support for Kubernetes clusters across all providers.",
    logo: "K",
  },
  {
    name: "Docker",
    category: "Container",
    description: "Automated container patching and vulnerability scanning.",
    logo: "D",
  },
  {
    name: "Terraform",
    category: "IaC",
    description: "Infrastructure as Code integration for automated deployments.",
    logo: "T",
  },
  {
    name: "Jenkins",
    category: "CI/CD",
    description: "Integrate patch management into your CI/CD pipelines.",
    logo: "J",
  },
  {
    name: "GitHub Actions",
    category: "CI/CD",
    description: "Automate patching workflows with GitHub Actions.",
    logo: "G",
  },
  {
    name: "Slack",
    category: "Notification",
    description: "Real-time alerts and notifications in your Slack channels.",
    logo: "S",
  },
  {
    name: "PagerDuty",
    category: "Notification",
    description: "Incident management integration for critical patches.",
    logo: "P",
  },
  {
    name: "Datadog",
    category: "Monitoring",
    description: "Unified monitoring and observability for patch operations.",
    logo: "D",
  },
  {
    name: "Splunk",
    category: "Monitoring",
    description: "Advanced logging and analytics for patch activities.",
    logo: "S",
  },
]

export function IntegrationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-cyan-400">Integrations</h2>
          <p className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Works with your existing stack
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Patchonaut seamlessly integrates with your favorite tools and platforms, making implementation quick and
            painless.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <Card className="h-full bg-card/40 backdrop-blur-sm border-border/30 hover:border-cyan-500/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                      <span className="text-lg font-bold">{integration.logo}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{integration.name}</h3>
                        <Badge variant="outline" className="text-xs bg-card border-border/50">
                          {integration.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{integration.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Don't see your tool? <span className="text-cyan-400">Contact us</span> for custom integrations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

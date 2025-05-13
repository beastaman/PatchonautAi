/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon, HelpCircleIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const tiers = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small teams getting started with automated patch management.",
    features: [
      "Up to 25 servers",
      "Basic vulnerability scanning",
      "Automated patch deployment",
      "Email notifications",
      "Basic reporting",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$999",
    description: "Ideal for growing teams with more complex infrastructure needs.",
    features: [
      "Up to 100 servers",
      "Advanced vulnerability scanning",
      "Custom deployment windows",
      "Rollback automation",
      "Compliance reporting",
      "API access",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex infrastructure and security requirements.",
    features: [
      "Unlimited servers",
      "Custom integrations",
      "Advanced compliance reporting",
      "Dedicated account manager",
      "SLA guarantees",
      "On-premise deployment option",
      "24/7 premium support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
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
          <h2 className="text-base font-semibold leading-7 text-cyan-400">Pricing</h2>
          <p className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight">Simple, transparent pricing</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <Card
                className={`h-full backdrop-blur-sm transition-all ${
                  tier.popular
                    ? "border-cyan-500/50 bg-card/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    : "border-border/30 bg-card/40"
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-cyan-500 text-white border-none">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.price !== "Custom" && <span className="ml-1 text-muted-foreground">/month</span>}
                  </div>
                  <CardDescription className="mt-4 text-center">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      tier.popular
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                        : "bg-card hover:bg-card/80"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Need a custom plan?
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="link" className="p-0 h-auto text-cyan-400">
                    Contact our sales team <HelpCircleIcon className="h-4 w-4 ml-1" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    Our enterprise plans can be customized to your specific needs and infrastructure requirements.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, TrendingUpIcon, BarChart3Icon, PieChartIcon, LineChartIcon } from "lucide-react"

export function InvestorSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-cyan-400">Investor Information</h2>
          <p className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            A massive market opportunity
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Patchonaut is positioned to disrupt the $4.8B patch management market with our AI-powered approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full bg-card/40 backdrop-blur-sm border-border/30">
              <CardContent className="p-6">
                <div className="rounded-full bg-cyan-500/10 p-2 w-fit mb-4">
                  <TrendingUpIcon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Market Growth</h3>
                <p className="text-muted-foreground mb-4">
                  The global patch management market is projected to grow from $4.8 billion in 2023 to $9.2 billion by
                  2028, at a CAGR of 13.9%.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Increasing cybersecurity threats driving demand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Regulatory compliance requirements expanding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Cloud infrastructure growth creating new opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-card/40 backdrop-blur-sm border-border/30">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-500/10 p-2 w-fit mb-4">
                  <BarChart3Icon className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Traction</h3>
                <p className="text-muted-foreground mb-4">
                  Patchonaut has demonstrated strong growth and product-market fit since our launch.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>215% YoY revenue growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>96% customer retention rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>18-month payback period on CAC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>4.8/5 average customer satisfaction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full bg-card/40 backdrop-blur-sm border-border/30">
              <CardContent className="p-6">
                <div className="rounded-full bg-green-500/10 p-2 w-fit mb-4">
                  <PieChartIcon className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Target Market</h3>
                <p className="text-muted-foreground">
                  Our initial focus is on mid-market and enterprise companies with 100+ servers across cloud and
                  on-premise environments.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full bg-card/40 backdrop-blur-sm border-border/30">
              <CardContent className="p-6">
                <div className="rounded-full bg-orange-500/10 p-2 w-fit mb-4">
                  <LineChartIcon className="h-5 w-5 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Growth Strategy</h3>
                <p className="text-muted-foreground">
                  Our three-pronged approach includes direct sales, channel partnerships, and a self-service platform
                  for SMBs.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="h-full bg-card/40 backdrop-blur-sm border-border/30">
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-500/10 p-2 w-fit mb-4">
                  <TrendingUpIcon className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Competitive Edge</h3>
                <p className="text-muted-foreground">
                  Our AI-powered approach delivers 85% faster patching with 99.9% success rates compared to traditional
                  solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
          >
            <span className="flex items-center">
              Download Investor Deck <ArrowRightIcon className="ml-2 h-4 w-4" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

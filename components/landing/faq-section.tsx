"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Patchonaut's AI-powered patching work?",
    answer:
      "Patchonaut uses machine learning algorithms to analyze your infrastructure, identify optimal patching windows, and predict potential issues. The AI continuously learns from your environment to improve patch success rates and minimize disruption.",
  },
  {
    question: "Is Patchonaut compatible with my existing infrastructure?",
    answer:
      "Yes, Patchonaut is designed to work with a wide range of infrastructure setups. We support all major cloud providers (AWS, Azure, GCP), on-premise servers, and hybrid environments. Our platform integrates with popular tools like Kubernetes, Docker, Ansible, and more.",
  },
  {
    question: "How secure is Patchonaut?",
    answer:
      "Security is our top priority. Patchonaut employs a zero-trust architecture, end-to-end encryption, and follows the principle of least privilege. We undergo regular security audits and penetration testing. Our platform is SOC 2 Type II compliant and helps organizations meet various compliance requirements.",
  },
  {
    question: "Can I customize patch deployment policies?",
    answer:
      "Absolutely. Patchonaut offers granular control over patch deployment policies. You can define custom rules based on server roles, environments, patch criticality, and more. Our platform allows you to create approval workflows and maintenance windows that align with your business needs.",
  },
  {
    question: "What kind of reporting does Patchonaut provide?",
    answer:
      "Patchonaut generates comprehensive reports that cover patch compliance, vulnerability status, deployment success rates, and historical trends. These reports can be customized to meet specific compliance requirements like SOC 2, ISO 27001, HIPAA, and more. All reports can be scheduled and automatically distributed to stakeholders.",
  },
  {
    question: "How long does it take to implement Patchonaut?",
    answer:
      "Most customers are up and running with Patchonaut in less than a day. Our onboarding process includes infrastructure discovery, initial configuration, and integration with your existing tools. For enterprise deployments with complex requirements, our professional services team provides dedicated implementation support.",
  },
  {
    question: "What support options are available?",
    answer:
      "All plans include standard support via email and documentation. Professional and Enterprise plans include priority support with faster response times. Enterprise customers receive 24/7 support and a dedicated account manager. We also offer optional professional services for custom integrations and advanced configurations.",
  },
]

export function FAQSection() {
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
          <h2 className="text-base font-semibold leading-7 text-cyan-400">FAQ</h2>
          <p className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight">Frequently asked questions</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Find answers to common questions about Patchonaut.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              >
                <AccordionItem value={`item-${i}`} className="border-border/30">
                  <AccordionTrigger className="text-left hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

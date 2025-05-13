"use client"
import Link from "next/link"
import { RocketIcon, GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-background border-t border-border/20 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <RocketIcon className="h-6 w-6 text-cyan-400" />
              <span className="font-heading text-xl font-bold">Patchonaut</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Autopilot for your patch management. Secure. Automated. Reliable.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              {["Features", "Security", "Pricing", "Roadmap", "Changelog"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "API Reference", "Guides", "Support", "Status"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Contact", "Partners"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Patchonaut. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

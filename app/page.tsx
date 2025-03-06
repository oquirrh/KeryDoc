"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Code, Database, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [showForm, setShowForm] = useState(false)

  const handleWaitlistClick = () => {
    setShowForm(true)
  }

  return (
    <div className="min-h-screen bg-[#FEF9E1] text-[#C14600] relative">
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#FEF9E1] border-4 border-[#C14600] p-6 rounded-lg w-full max-w-2xl relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-[#C14600] hover:text-[#FF9D23] text-2xl font-bold"
            >
              ×
            </button>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScHjkKQ_AXHj5Fn-h8LT9tZaWiXoBRIUcmxrbXTHAQeAyAE1A/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              className="bg-[#FEF9E1]"
            >
              Loading...
            </iframe>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center border-b-4 border-[#C14600]">
        <div className="font-bold text-4xl text-[#C14600]">KeryDoc</div>
        <div className="flex gap-8">
          <Button variant="ghost" className="text-xl uppercase font-medium" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
            Features
          </Button>
          <Button variant="ghost" className="text-xl uppercase font-medium" onClick={() => document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' })}>
            Use Cases
          </Button>
          <Button variant="ghost" className="text-xl uppercase font-medium" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            About
          </Button>
          <Button
            variant="default"
            className="text-xl uppercase font-bold bg-[#C14600] hover:bg-[#FF9D23] text-[#FEF9E1]"
            onClick={handleWaitlistClick}
          >
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-20 md:py-32 border-b-4 border-[#C14600]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 uppercase">
              Never Let AI Code with <span className="text-[#FF9D23] block mt-2">Outdated Docs</span>
              <span className="text-stroke text-transparent">Again</span>
            </h1>
            <p className="mt-6 text-2xl text-[#C14600] font-medium">
              Empower your IDE&apos;s AI agent with always-updated documentation – scrape, structure, and sync the latest
              APIs, frameworks, and libraries in seconds.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                className="bg-[#C14600] hover:bg-[#FF9D23] text-[#FEF9E1] px-8 py-8 text-2xl uppercase font-bold"
                onClick={handleWaitlistClick}
              >
                Join the Waitlist <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF9D23] -rotate-2"></div>
              <div className="relative bg-[#E5D0AC] p-6 border-4 border-[#C14600] rotate-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#FEF9E1] p-4 border-2 border-[#C14600]">
                    <div className="text-center mb-2 text-[#C14600] font-bold uppercase">Outdated</div>
                    <div className="bg-white p-3 border border-[#C14600] text-sm font-mono">
                      <div className="text-red-500">// Using old API</div>
                      <div>tailwind.config = {"{"}</div>
                      <div className="pl-4">theme: {"{"}</div>
                      <div className="pl-8">extend: {"{"}</div>
                      <div className="pl-12 text-red-500">flexbox: 'flex-1',</div>
                      <div className="pl-8">{"}"},</div>
                      <div className="pl-4">{"}"},</div>
                      <div>{"}"}</div>
                    </div>
                  </div>
                  <div className="bg-[#FEF9E1] p-4 border-2 border-[#C14600]">
                    <div className="text-center mb-2 text-[#C14600] font-bold uppercase">Updated</div>
                    <div className="bg-white p-3 border border-[#C14600] text-sm font-mono">
                      <div className="text-green-500">// Using latest API</div>
                      <div>tailwind.config = {"{"}</div>
                      <div className="pl-4">theme: {"{"}</div>
                      <div className="pl-8">extend: {"{"}</div>
                      <div className="pl-12 text-green-500">justify: 'justify-1',</div>
                      <div className="pl-8">{"}"},</div>
                      <div className="pl-4">{"}"},</div>
                      <div>{"}"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-[#E5D0AC] py-20 border-b-4 border-[#C14600]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#C14600] uppercase">
              Why Outdated Docs Break AI Assistants
            </h2>
            <p className="mt-6 text-2xl text-[#C14600]">
              Large Language Models (LLMs) like GitHub Copilot or Cursor are trained on static datasets, often missing
              critical updates (e.g., Tailwind CSS v4 → v5 changes). This leads to:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Code className="h-16 w-16 text-[#FF9D23]" />,
                title: "Frustrating errors in code suggestions",
                description: "AI tools suggest deprecated methods and outdated syntax patterns.",
              },
              {
                icon: <Database className="h-16 w-16 text-[#FF9D23]" />,
                title: "Wasted hours debugging outdated syntax",
                description: "Developers spend valuable time fixing AI-generated code that doesn't work.",
              },
              {
                icon: <Zap className="h-16 w-16 text-[#FF9D23]" />,
                title: "Limited trust in your AI pair-programmer",
                description: "Confidence in AI tools decreases with each incorrect suggestion.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FEF9E1] p-6 border-4 border-[#C14600]"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-3xl font-bold mb-2 text-[#C14600] uppercase">{item.title}</h3>
                <p className="text-xl text-[#C14600]">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-3xl font-bold text-[#C14600] uppercase">
              The KeryDoc fixes this – dynamically bridging the latest docs to your AI tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Neo-retro Tickertape */}
      <section className="bg-[#C14600] py-8 border-b-4 border-[#FEF9E1] overflow-hidden">
        <div className="container mx-auto mb-4">
          <h3 className="text-3xl font-bold text-[#FEF9E1] uppercase text-stroke-white">Current Tool Documentations</h3>
        </div>
        <div className="tickertape">
          <div className="tickertape-content">
            {[
              "React",
              "Vue",
              "Angular",
              "Svelte",
              "Next.js",
              "Nuxt.js",
              "TailwindCSS",
              "Bootstrap",
              "Material-UI",
              "Chakra UI",
              "TypeScript",
              "JavaScript",
              "Python",
              "Ruby",
              "Go",
              "Rust",
              "Node.js",
              "Django",
              "Flask",
              "Express",
            ].map((tool, index) => (
              <div key={index} className="tickertape-item">
                <div className="h-16 w-16 bg-[#FEF9E1] flex items-center justify-center neo-retro-shadow transform hover:scale-110 transition-transform duration-200">
                  <span className="text-[#C14600] font-bold text-xl">{tool.slice(0, 2)}</span>
                </div>
                <span className="ml-4 text-[#FEF9E1] font-bold text-xl uppercase">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#FEF9E1] border-b-4 border-[#C14600]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#C14600] uppercase">From Docs to AI, in 3 Steps</h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "SCRAPE",
                icon: <Database className="h-20 w-20 text-[#FF9D23]" />,
                description: "Live Documentation Scraping: Pull updates from Tailwind, React, Python, and more.",
              },
              {
                title: "PROCESS",
                icon: <Code className="h-20 w-20 text-[#FF9D23]" />,
                description: "LLM-Friendly Structuring: Convert raw docs into digestible Markdown or JSON.",
              },
              {
                title: "SYNC",
                icon: <Zap className="h-20 w-20 text-[#FF9D23]" />,
                description: "Instant IDE Integration: Your AI agent always references the latest specs.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-[#E5D0AC] border-4 border-[#C14600] p-8 h-full">
                  <div className="bg-[#FEF9E1] border-2 border-[#C14600] p-4 inline-block mb-4">{step.icon}</div>
                  <h3 className="text-4xl font-bold mb-4 text-[#C14600]">{step.title}</h3>
                  <p className="text-xl text-[#C14600]">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-12 w-12 text-[#C14600]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-[#C14600] text-[#FEF9E1] border-b-4 border-[#FEF9E1]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#FEF9E1] uppercase">Why Devs & Teams Love MCP</h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Real-Time Updates",
                description: "Docs refresh hourly, not yearly.",
              },
              {
                title: "IDE-Ready Formats",
                description: "Pre-structured for Cursor, Copilot, and more.",
              },
              {
                title: "Seamless API",
                description: "Integrate with 1 line of code.",
              },
              {
                title: "Multi-Source Support",
                description: "Tailwind, Next.js, OpenAI API – all in one place.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FF9D23] border-4 border-[#FEF9E1] p-6 flex items-start"
              >
                <CheckCircle className="h-8 w-8 text-[#FEF9E1] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-[#FEF9E1] uppercase">{feature.title}</h3>
                  <p className="text-xl text-[#FEF9E1]">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-[#E5D0AC] border-b-4 border-[#C14600]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#C14600] uppercase">Where MCP Shines</h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tailwind CSS v4 → v5 Migration",
                description: "Your AI suggests justify- utilities instead of deprecated flex- classes.",
              },
              {
                title: "Python 3.12's New Type Syntax",
                description: "No more suggesting outdated typing module code.",
              },
              {
                title: "Next.js App Router Updates",
                description: "AI agents reference the latest routing conventions.",
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FEF9E1] border-4 border-[#C14600] p-8"
              >
                <h3 className="text-3xl font-bold mb-4 text-[#C14600] uppercase">{useCase.title}</h3>
                <p className="text-xl text-[#C14600]">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist-cta" className="py-20 bg-[#FF9D23] border-b-4 border-[#C14600]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#C14600] uppercase">Get Ahead of the Curve</h2>
            <p className="mt-6 text-2xl text-[#C14600]">
              Join the waitlist to be among the first to experience MCP's documentation bridge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 max-w-md mx-auto"
          >
            <div className="bg-[#FEF9E1] border-4 border-[#C14600] p-8">
              <div className="space-y-4">
                <div>
                  <p className="mb-4 text-[#C14600] font-bold text-2xl uppercase">Join the waitlist to:</p>
                  <ul className="space-y-4">
                    {[
                      "Beta-test MCP's documentation bridge",
                      "Unlock early pricing",
                      "Shape the future of AI-assisted coding",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-[#C14600] mt-1 mr-2 flex-shrink-0" />
                        <span className="text-xl text-[#C14600]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Input placeholder="Enter your email" className="w-full border-2 border-[#C14600] text-xl p-6" />
                <Button className="w-full bg-[#C14600] hover:bg-[#FF9D23] text-[#FEF9E1] text-xl uppercase font-bold p-6"
                  onClick={handleWaitlistClick}
                >
                  Secure My Spot
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-2xl font-bold text-[#C14600] uppercase">Loved by 5,000+ early devs</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#C14600] text-[#FEF9E1] py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-4xl text-[#FEF9E1] mb-4 uppercase">KeryDoc</div>
              <p className="text-xl">Real-Time Documentation, Supercharged AI</p>
            </div>
            <div>
              <h3 className="font-bold text-2xl text-[#FEF9E1] mb-4 uppercase">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#FF9D23] transition-colors text-xl">
                    <Button 
                      variant="ghost" 
                      className="text-xl uppercase font-medium"
                      onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Features
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF9D23] transition-colors text-xl">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF9D23] transition-colors text-xl">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl text-[#FEF9E1] mb-4 uppercase">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#FF9D23] transition-colors text-xl">
                    <Button 
                      variant="ghost" 
                      className="text-xl uppercase font-medium"
                      onClick={() => document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Use Cases
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF9D23] transition-colors text-xl">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF9D23] transition-colors text-xl">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF9D23] transition-colors text-xl">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl text-[#FEF9E1] mb-4 uppercase">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#FF9D23] transition-colors text-xl">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF9D23] transition-colors text-xl">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t-4 border-[#FEF9E1] text-center">
            <p className="text-xl">
              Want faster access?{" "}
              <a href="#" className="text-[#FF9D23] hover:text-[#FEF9E1] font-bold">
                Refer a friend →
              </a>
            </p>
            <p className="mt-4 text-xl">© 2025 KeryDoc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


{/* About Section */}
<section id="about" className="bg-[#E5D0AC] py-20 border-b-4 border-[#C14600]">
  <div className="container mx-auto">
    <h2 className="text-5xl md:text-6xl font-bold text-[#C14600] uppercase mb-8">About KeryDoc</h2>
    <p className="text-2xl text-[#C14600] max-w-3xl">
      We're revolutionizing AI-assisted development by bridging the documentation gap. 
      Our real-time sync engine ensures your tools always have the latest API references
      and framework updates.
    </p>
  </div>
</section>


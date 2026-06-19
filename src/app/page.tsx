"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  Briefcase,
  Users,
  GraduationCap,
  TrendingUp,
  Target,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Building2,
  UserCheck,
  Presentation,
  Shield,
  BarChart3,
  Handshake,
  ArrowRight,
  Star,
  Zap,
  Globe,
  Menu,
  X,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const LOGO_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL8YD3tB5hgi3dXYkoYjoLarNA0_4dpfDh59PzCz4NuFnUo86Cesytq-PWi8g1W70FhdDjWN8dLcak0bYt3Xgy1GhTqO89sOSRp2EEuVIfMP2dBixqfI6cswP6ZA0V3mENHRC_gHEjxN-ImMuzrQXtK4tDp6nAvGB0XebXBDlrNCXDprfQTgV2TC7W92w/s320/download%20(1)%20(1).png";

const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#ai-skills", label: "AI Skills" },
  { href: "#beyond", label: "Beyond Accounting" },
  { href: "#placement", label: "Placement" },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

    return (
      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <img
                  src={LOGO_URL}
                  alt="SkillHouse"
                  className="h-9 w-auto"
                />
              </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-[#063b2b] transition">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#enroll"
                className="hidden sm:inline-flex items-center gap-2 bg-[#063b2b] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0a825e] transition"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
              >
                <div className="px-4 py-4 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-[#063b2b]/5 hover:text-[#063b2b] transition"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#enroll"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block mt-2 text-center bg-[#063b2b] text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#0a825e] transition"
                  >
                    Enroll Now
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-br from-[#063b2b] via-[#0a825e] to-[#063b2b]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#0a825e] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Finance Upskilling
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Upskill Your Finance Career with{" "}
              <span className="text-[#7df3c4]">AI & Industry Expertise</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed"
            >
              A comprehensive curriculum for accountants and finance
              professionals — from freshers to Chartered Accountants. Master
              AI tools, practical use cases, and industry-specific standards
              to transform your career.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#enroll"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#063b2b] px-8 py-4 rounded-full text-base font-bold hover:bg-[#7df3c4] transition"
              >
                Start Your Journey
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition"
              >
                Explore Programs
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-12 flex flex-wrap gap-8 text-white/70 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7df3c4]" />
                B2B & B2C Programs
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7df3c4]" />
                Placement Assistance
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7df3c4]" />
                Real-World AI Training
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#063b2b] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "500+", label: "Students Trained" },
            { num: "50+", label: "AI Tools Covered" },
            { num: "95%", label: "Placement Rate" },
            { num: "3", label: "Program Tracks" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#7df3c4]">
                {s.num}
              </div>
              <div className="text-white/60 text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#0a825e] font-semibold text-sm uppercase tracking-wider">
              Our Programs
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Tailored for Every Stage of Your Career
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Whether you&apos;re just starting out or a seasoned Chartered Accountant,
              we have a program designed for your growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Fresher Accountants",
                desc: "Build a rock-solid foundation in modern accounting, GST, TDS, and financial reporting with hands-on AI tools from day one.",
                features: [
                  "Core Accounting & Taxation",
                  "AI-Powered Bookkeeping",
                  "Financial Reporting Basics",
                  "Industry-Ready Skills",
                ],
                color: "from-[#0a825e] to-[#063b2b]",
              },
              {
                icon: TrendingUp,
                title: "Experienced Accountants",
                desc: "Elevate your expertise with advanced financial analysis, automation workflows, and AI-driven client management.",
                features: [
                  "Advanced Financial Analysis",
                  "Process Automation with AI",
                  "Client Management Systems",
                  "Strategic Advisory Skills",
                ],
                color: "from-[#063b2b] to-[#0a825e]",
                featured: true,
              },
              {
                icon: GraduationCap,
                title: "Chartered Accountants",
                desc: "Master cutting-edge AI applications for audit, compliance, and advisory services at the highest professional level.",
                features: [
                  "AI in Audit & Compliance",
                  "Advanced Data Analytics",
                  "Strategic Business Advisory",
                  "Leadership & Practice Mgmt",
                ],
                color: "from-[#0a825e] to-[#063b2b]",
              },
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative bg-white rounded-2xl p-8 shadow-sm border ${
                  program.featured
                    ? "border-[#0a825e] ring-2 ring-[#0a825e]/20"
                    : "border-gray-200"
                } hover:shadow-lg transition-shadow`}
              >
                {program.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a825e] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}
                >
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {program.desc}
                </p>
                <ul className="space-y-3">
                  {program.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0a825e] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#enroll"
                  className={`mt-8 block text-center py-3 rounded-xl font-semibold text-sm transition ${
                    program.featured
                      ? "bg-[#063b2b] text-white hover:bg-[#0a825e]"
                      : "bg-gray-100 text-[#063b2b] hover:bg-[#063b2b] hover:text-white"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Skills Section */}
      <section id="ai-skills" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#0a825e] font-semibold text-sm uppercase tracking-wider">
                AI-Powered Learning
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Master AI Tools for{" "}
                <span className="text-[#0a825e]">Real-World Finance</span>
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                The prominent part of our curriculum is empowering you with AI
                tools, practical use cases, and industry-specific standards.
                Learn how to use AI in real-time with the clients you work with.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: BrainCircuit,
                    title: "AI Tool Mastery",
                    desc: "Hands-on training with ChatGPT, Copilot, and finance-specific AI platforms",
                  },
                  {
                    icon: Target,
                    title: "Practical Use Cases",
                    desc: "Apply AI directly to client work — invoicing, reconciliation, tax filing",
                  },
                  {
                    icon: Shield,
                    title: "Industry Standards",
                    desc: "Learn AI integration that meets compliance and regulatory requirements",
                  },
                  {
                    icon: BarChart3,
                    title: "Data-Driven Decisions",
                    desc: "Use AI for financial forecasting, reporting, and strategic insights",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#063b2b]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#0a825e]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#063b2b] to-[#0a825e] rounded-3xl p-8 sm:p-10 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  What You&apos;ll Learn
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "ChatGPT for Finance",
                    "AI Bookkeeping",
                    "Automated Reporting",
                    "Tax Automation",
                    "Data Analysis",
                    "Client Dashboards",
                    "AI Compliance Tools",
                    "Predictive Analytics",
                  ].map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2.5 text-sm"
                    >
                      <Zap className="w-4 h-4 text-[#7df3c4] flex-shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white/10 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-5 h-5 text-[#7df3c4]" />
                    <span className="font-semibold">Real-Time Practice</span>
                  </div>
                  <p className="text-sm text-white/70">
                    Every AI tool is practiced on real client scenarios and
                    industry-standard workflows — not just theory.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beyond Accounting Section */}
      <section id="beyond" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#0a825e] font-semibold text-sm uppercase tracking-wider">
              Beyond Accounting
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Comprehensive Skills for Career Growth
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              We don&apos;t just teach accounting. We empower you with freelancing,
              business strategy, and professional etiquette to succeed everywhere.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Freelancing Skills",
                desc: "Learn how to find clients, price your services, and build a thriving freelance practice in finance.",
              },
              {
                icon: Briefcase,
                title: "Project Management",
                desc: "Master project scoping, timelines, and delivery for accounting and consulting engagements.",
              },
              {
                icon: Presentation,
                title: "Business Plan Building",
                desc: "Create compelling business plans, pitch decks, and financial projections for startups and SMEs.",
              },
              {
                icon: BarChart3,
                title: "Budget Planning",
                desc: "Develop expertise in corporate budgeting, cash flow management, and financial forecasting.",
              },
              {
                icon: TrendingUp,
                title: "Financial & Business Strategy",
                desc: "Think beyond numbers — provide strategic insights that drive business growth and decision-making.",
              },
              {
                icon: UserCheck,
                title: "Professional Etiquette",
                desc: "How to dress, communicate with management, collaborate with teams, and present yourself professionally.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#0a825e]/30 hover:shadow-md transition group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#063b2b]/5 flex items-center justify-center mb-4 group-hover:bg-[#063b2b]/10 transition">
                  <item.icon className="w-6 h-6 text-[#0a825e]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Etiquette Highlight */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-10"
            >
              <h3 className="text-2xl font-bold text-[#063b2b] mb-8">
                Workplace Excellence Training
              </h3>
              <div className="space-y-5">
                {[
                  {
                    title: "Professional Dressing",
                    desc: "Learn industry-appropriate attire for client meetings, office settings, and virtual calls.",
                  },
                  {
                    title: "Communication with Management",
                    desc: "Master the art of concise reporting, upward communication, and stakeholder management.",
                  },
                  {
                    title: "Team Collaboration",
                    desc: "How to work effectively with teams, handle conflicts, and contribute to a positive workplace culture.",
                  },
                  {
                    title: "Client-Facing Skills",
                    desc: "Present findings, negotiate, and build long-term professional relationships with confidence.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#0a825e] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#0a825e] font-semibold text-sm uppercase tracking-wider">
                Soft Skills Matter
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Stand Out with{" "}
                <span className="text-[#0a825e]">Professional Excellence</span>
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Technical skills alone aren&apos;t enough. We train you on the
                personal and employee etiquette that sets top performers apart —
                how to dress, how to speak to management, and how to collaborate
                with your team effectively.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Interview preparation & mock sessions",
                  "Email & business communication",
                  "Presentation & public speaking",
                  "Personal branding & networking",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#0a825e] flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Placement Assistance */}
      <section id="placement" className="py-20 sm:py-28 bg-[#063b2b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#7df3c4] font-semibold text-sm uppercase tracking-wider">
                Placement Assistance
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                Your Career Journey{" "}
                <span className="text-[#7df3c4]">Doesn&apos;t End Here</span>
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                At the end of every workshop, we provide dedicated placement
                assistance to help you land the right role. Whether it&apos;s a
                full-time position, freelance gig, or consulting engagement —
                we&apos;ve got you covered.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: "Company Placements" },
                  { icon: Handshake, label: "Interview Prep" },
                  { icon: Users, label: "Network Access" },
                  { icon: Briefcase, label: "Freelance Guidance" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3"
                  >
                    <item.icon className="w-5 h-5 text-[#7df3c4]" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6">
                Our Placement Process
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Skills Assessment",
                    desc: "We evaluate your strengths and match you with the right opportunities.",
                  },
                  {
                    step: "02",
                    title: "Resume & Portfolio",
                    desc: "Build a compelling professional profile that showcases your AI-enhanced skills.",
                  },
                  {
                    step: "03",
                    title: "Mock Interviews",
                    desc: "Practice with real interview scenarios tailored to finance roles.",
                  },
                  {
                    step: "04",
                    title: "Job Matching",
                    desc: "Get connected with our partner companies and exclusive job opportunities.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-2xl font-bold text-[#7df3c4]/40">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-white/60 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* B2B & B2C Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#0a825e] font-semibold text-sm uppercase tracking-wider">
              For Everyone
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Built for Individuals & Organizations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: "For Individuals (B2C)",
                desc: "Whether you're a fresher looking to break into finance or a CA wanting to stay ahead — our self-paced and workshop-based programs are designed for you.",
                features: [
                  "Self-paced learning modules",
                  "Weekend workshop batches",
                  "1-on-1 mentorship available",
                  "Certification on completion",
                ],
              },
              {
                icon: Building2,
                title: "For Organizations (B2B)",
                desc: "Upskill your entire finance team with customized corporate training programs. AI integration, compliance training, and professional development — all under one roof.",
                features: [
                  "Custom curriculum design",
                  "On-site & virtual delivery",
                  "Team progress tracking",
                  "Dedicated account manager",
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-xl bg-[#063b2b] flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <ul className="space-y-3">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0a825e] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enroll / Tally Form Section */}
        <section
          id="enroll"
          className="py-20 sm:py-28 bg-gradient-to-br from-[#063b2b] via-[#0a825e] to-[#063b2b] text-white"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Join to Access{" "}
                <span className="text-[#7df3c4]">
                  <CountUp target={100} suffix="+" />
                </span>{" "}
                AI Tools
              </h2>
              <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
                Join our next batch and get access to AI-powered training,
                industry mentors, and placement assistance. Limited seats available.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl"
            >
              <iframe
                data-tally-src="https://tally.so/embed/QK5Ajk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="529"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Join the Waitlist"
              ></iframe>
            </motion.div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-[#031f17] text-white/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                  <div className="flex items-center gap-2 mb-4">
                    <img
                      src={LOGO_URL}
                      alt="SkillHouse"
                      className="h-8 w-auto"
                    />
                  </div>
              <p className="text-sm leading-relaxed">
                Empowering finance professionals with AI skills, practical
                expertise, and career support.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#programs" className="hover:text-white transition">Fresher Accountants</a></li>
                <li><a href="#programs" className="hover:text-white transition">Experienced Accountants</a></li>
                <li><a href="#programs" className="hover:text-white transition">Chartered Accountants</a></li>
                <li><a href="#ai-skills" className="hover:text-white transition">AI Skills Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#beyond" className="hover:text-white transition">Freelancing Guide</a></li>
                <li><a href="#beyond" className="hover:text-white transition">Business Strategy</a></li>
                <li><a href="#placement" className="hover:text-white transition">Placement Support</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>hello@skillhouse.in</li>
                <li>+91 98765 43210</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2025 SkillHouse. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/refundpolicy" className="hover:text-white transition">
                Refund Policy
              </a>
              <a href="/termsofservice" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

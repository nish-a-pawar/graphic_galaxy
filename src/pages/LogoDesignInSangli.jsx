import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, Star, Palette, Zap, Sparkles, Download } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../seo/SEO";

import { LOGO_PROJECTS } from "../constants";
import {
  WHATSAPP_LINK,
  PHONE,
  SEO_DATA,
  SERVICES
} from "../constants";

/* ─── Schema ─────────────────────────────────── */
const combinedSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Logo Design in Sangli",
    provider: {
      "@type": "LocalBusiness",
      name: "Graphic Galaxy",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sangli",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      telephone: PHONE,
      url: "https://graphicgalaxy.netlify.app",
    },
    areaServed: "Sangli, Miraj, Kupwad, Maharashtra",
    description: "Professional logo design services in Sangli Maharashtra",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does logo design cost in Sangli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Logo design at Graphic Galaxy in Sangli starts from ₹1,500 for basic logos to ₹6,000 for premium brand identity packages.",
        },
      },
      {
        "@type": "Question",
        name: "How long does logo design take in Sangli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At Graphic Galaxy Sangli, basic logo design takes 2-3 days. Premium packages with multiple revisions take 5-7 days.",
        },
      },
      {
        "@type": "Question",
        name: "What file formats will I receive for my logo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You will receive your logo in PNG, JPG, SVG, PDF and AI formats, suitable for print and digital use.",
        },
      },
      {
        "@type": "Question",
        name: "Do you design logos for all types of businesses in Sangli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Graphic Galaxy designs logos for all business types in Sangli including clinics, restaurants, events, retail shops, and more.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with logo design at Graphic Galaxy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Simply WhatsApp us at ${PHONE} or fill the contact form on our website. We will get back to you within 24 hours.`,
        },
      },
    ],
  },
];

/* ─── Data ───────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn about your business, target audience, and competitors in Sangli to lay a strong creative foundation.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    num: "02",
    title: "Concept",
    desc: "We present 3 unique logo directions — each crafted from scratch. No templates, no stock icons.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    num: "03",
    title: "Refinement",
    desc: "We fine-tune your chosen direction based on your feedback until it's flawless and production-ready.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    num: "04",
    title: "Delivery",
    desc: "You receive all files — PNG, SVG, PDF, AI — ready for web, print, signage, packaging, and social media.",
    icon: <Download className="w-6 h-6" />,
  },
];



const faqs = [
  { q: "How much does logo design cost in Sangli?", a: "Logo design at Graphic Galaxy in Sangli starts from ₹1,500 for basic logos to ₹6,000 for premium brand identity packages. We offer transparent pricing with no hidden charges." },
  { q: "How long does logo design take in Sangli?", a: "At Graphic Galaxy Sangli, basic logo design takes 2-3 days. Premium packages with multiple revisions take 5-7 days. Rush delivery is available on request." },
  { q: "What file formats will I receive for my logo?", a: "You will receive your logo in PNG, JPG, SVG, PDF and AI formats — suitable for all print and digital use including business cards, signage, websites, and social media." },
  { q: "Do you design logos for all types of businesses in Sangli?", a: "Yes! Graphic Galaxy designs logos for clinics, restaurants, events, retail shops, schools, and more in Sangli. We also serve clients across Miraj, Kupwad, and Kolhapur." },
  { q: "How do I get started with logo design at Graphic Galaxy?", a: `Simply WhatsApp us at ${PHONE} or fill our contact form. We respond within 24 hours and kick off with a quick discovery call to understand your brand.` },
];

/* ─── Helpers ────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" } }),
};

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={delay} className={className}>
      {children}
    </motion.div>
  );
}

function FAQItem({ q, a, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? "border-amber-400 bg-amber-400/5" : "border-[#2D3748] bg-[#111827]"}`}>
      <button
        id={`faq-q-${idx}`}
        aria-expanded={open}
        aria-controls={`faq-a-${idx}`}
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer"
      >
        <span className="font-bold text-white text-base md:text-lg">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-amber-400 text-2xl"
        >
          +
        </motion.span>
      </button>
      <motion.div
        id={`faq-a-${idx}`}
        role="region"
        aria-labelledby={`faq-q-${idx}`}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-white/50 text-sm md:text-base leading-relaxed">
          {a}
        </p>
      </motion.div>
    </div>
  );
}

export default function LogoDesignInSangli() {
  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] font-inter overflow-x-hidden">
      <SEO
        title={SEO_DATA.logoDesign.title}
        description={SEO_DATA.logoDesign.description}
        canonical="https://graphicgalaxy.netlify.app/logo-design-in-sangli"
        ogTitle={SEO_DATA.logoDesign.title}
        ogDescription={SEO_DATA.logoDesign.description}
        ogUrl="https://graphicgalaxy.netlify.app/logo-design-in-sangli"
        schema={combinedSchema}
      />

      <Navbar />

      <main>
        {/* ── 1. HERO ── */}
        <section className="relative pt-36 pb-24 px-6 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-bold text-xs md:text-sm mb-8 tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Logo Design · Sangli, Maharashtra
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8"
            >
              Logo Design in <span className="text-gradient-amber">Sangli</span> that Builds Trust
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed font-medium space-y-4"
            >
              <p>
                A strong logo acts as the cornerstone of your entire brand identity, instantly communicating your values to potential customers before they even read a word. Expertly crafted, memorable, and highly professional logos are essential for standing out. As the premier graphic designer spanning the regions of Sangli, Miraj, and Maharashtra, Graphic Galaxy is dedicated to designing distinctive visual identities that truly command attention and drive exponential business growth.
              </p>
              <p>
                We do not just create pretty icons; we develop comprehensive branding solutions tailored to your unique market positioning. By deeply analyzing your industry and audience, we ensure every color, typeface, and shape actively supports your strategic goals. Partner with us to build a powerful, timeless brand logo that consistently resonates with your local and regional customers, establishing unparalleled trust right from their very first glance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="interactive btn-amber px-8 py-4 flex items-center gap-2 text-base md:text-lg">
                <MessageSquare size={20} />
                Get Your Logo Today
              </a>
              <Link to="/portfolio-graphic-designer-sangli" className="interactive px-8 py-4 bg-[#111827] border border-[#2D3748] rounded-full text-white font-bold text-base md:text-lg hover:border-amber-400/50 hover:bg-amber-400/5 transition-all">
                View Portfolio →
              </Link>
            </motion.div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:divide-x md:divide-white/10 max-w-3xl mx-auto">
              {[
                { val: "50+", label: "Logos Designed" },
                { val: "3–5 Days", label: "Fast Delivery" },
                { val: "100%", label: "Satisfaction" },
              ].map((s, i) => (
                <div key={i} className="text-center md:px-4">
                  <p className="text-3xl font-black text-amber-400">{s.val}</p>
                  <p className="text-xs text-white/30 font-bold uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. WHY LOGO MATTERS ── */}
        <section className="py-24 px-6 bg-[#111827]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-4">Why It Matters</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                A great logo isn't decoration — it's your brand's <span className="text-gradient">first impression.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-8">
                In a competitive market like <strong className="text-white">Sangli</strong>, your logo speaks before you do. A professionally designed logo builds credibility and earns customer trust instantly.
              </p>
              <ul className="space-y-4">
                {["Stand out from local competitors", "Build professional authority", "Look bigger and more established"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 font-medium">
                    <CheckCircle2 className="text-amber-400" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="grid grid-cols-1 gap-4">
              {[
                { stat: "7 sec", label: "Time taken for a customer to form a first impression." },
                { stat: "3× more", label: "Brand recall with a consistent, professional logo." },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 2}>
                  <div className="bg-[#0B0F14] border border-[#2D3748] rounded-[2rem] p-8 hover:border-amber-400/30 transition-all group">
                    <p className="text-5xl font-black text-amber-400 mb-4 group-hover:scale-105 transition-transform origin-left">{item.stat}</p>
                    <p className="text-white/40 font-medium leading-relaxed">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. PORTFOLIO PREVIEW ── */}

        <section className="py-24 px-6 bg-[#0B0F14]">
          <div className="max-w-6xl mx-auto">

            <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">
                  Our Work
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-white">
                  Recent Logo Designs
                </h2>

                {/* ✅ SEO BOOST */}
                <p className="text-white/50 mt-4 max-w-2xl">
                  Explore professional logo design projects created for businesses in Sangli, Miraj and Maharashtra.
                  We design logos that build trust, identity and brand recognition.
                </p>
              </div>

              <Link
                to="/portfolio-graphic-designer-sangli"
                className="text-amber-400 font-bold hover:text-white transition-colors"
              >
                View Full Portfolio →
              </Link>
            </Reveal>

            {/* 🔥 GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {LOGO_PROJECTS.map((item, i) => (
                <Reveal key={i} delay={i}>

                  {/* 🔥 CARD */}
                  <div className="group bg-[#111827] border border-[#2D3748] rounded-[2.5rem] overflow-hidden 
          transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/50 
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

                    {/* 🔥 IMAGE */}
                    <div className="h-64 relative overflow-hidden bg-white flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        className="h-full w-full object-contain p-6 bg-white"
                      />

                      {/* premium shadow */}
                      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* 🔥 CONTENT */}
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-2">

                        <h3 className="text-xl font-black text-white">
                          {item.title}
                        </h3>

                        {/* ✅ industry hide if empty */}
                        {item.category && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-1 rounded-md">
                            {item.category}
                          </span>
                        )}
                      </div>

                      <p className="text-white/30 text-sm font-medium">
                        Sangli, Maharashtra
                      </p>

                      {/* 🔥 CTA on hover */}
                      <button className="mt-4 text-amber-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition">
                        View Mockups →
                      </button>
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        {/* ── 4. PROCESS ── */}
        <section className="py-24 px-6 bg-[#111827]">
          <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-16">
              <p className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-4">How We Work</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">Our Logo Design Process</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <Reveal key={i} delay={i}>
                  <div className="bg-[#0B0F14] border border-[#2D3748] rounded-3xl p-8 h-full hover:border-amber-400/40 transition-all flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
                      {s.icon}
                    </div>
                    <p className="text-white/20 text-xs font-black uppercase tracking-widest mb-2">Step {s.num}</p>
                    <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. RELATED SERVICES ── */}
        <section className="py-24 px-6 bg-[#111827]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">Related Services</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">Connect your logo with services that complete the brand.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Link to="/packaging-design-in-sangli" className="rounded-[2rem] border border-white/10 bg-[#0B0F14] p-10 hover:border-amber-400/40 transition-all">
                <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">Packaging Design</p>
                <h3 className="text-2xl font-black text-white mb-4">Packaging design</h3>
                <p className="text-white/50">Bring your logo to shelves with packaging that reinforces your identity.</p>
              </Link>
              <Link to="/brochure-design-sangli" className="rounded-[2rem] border border-white/10 bg-[#0B0F14] p-10 hover:border-amber-400/40 transition-all">
                <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">Brochure Design</p>
                <h3 className="text-2xl font-black text-white mb-4">Brochure design</h3>
                <p className="text-white/50">Use your new logo in brochures that tell your brand story with confidence.</p>
              </Link>
              <Link to="/social-media-design-sangli" className="rounded-[2rem] border border-white/10 bg-[#0B0F14] p-10 hover:border-amber-400/40 transition-all">
                <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">Social Media Design</p>
                <h3 className="text-2xl font-black text-white mb-4">Social media design</h3>
                <p className="text-white/50">Showcase your logo on posts and brand campaigns across social platforms.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 5. FAQ ── */}
        <section className="py-24 px-6 bg-[#0B0F14]">
          <div className="max-w-3xl mx-auto">
            <Reveal className="text-center mb-16">
              <p className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">Logo Common Questions</h2>
            </Reveal>

            <div className="flex flex-col gap-4">
              {faqs.map((f, i) => (
                <Reveal key={i} delay={i * 0.5}>
                  <FAQItem q={f.q} a={f.a} idx={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FINAL CTA ── */}
        <section className="py-24 px-6 bg-[#111827]">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-[3rem] p-12 md:p-20 text-center overflow-hidden border border-amber-400/20 bg-linear-to-br from-[#0B0F14] to-[#111827]">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/5 rounded-full blur-[100px] pointer-events-none" />

              <Reveal>
                <p className="text-sm font-bold text-teal-400 uppercase tracking-[0.3em] mb-8">Let's Build Your Brand</p>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  Need a Logo Designer <br className="hidden md:block" />in Sangli?
                </h2>
                <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto font-medium">
                  Get a free consultation and start building your brand identity today. Serving businesses across Maharashtra.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href={WHATSAPP_LINK} className="interactive btn-amber px-10 py-5 text-lg">
                    💬 WhatsApp Us Now
                  </a>
                  <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-white/70 hover:text-amber-400 font-bold transition-colors">
                    📞 {PHONE}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

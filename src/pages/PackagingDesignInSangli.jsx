import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, Box, Package, Zap, Sparkles, Download, Layers } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../seo/SEO";
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
    name: "Packaging Design in Sangli",
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
    description: "Professional pouch, label, and box packaging design services in Sangli Maharashtra",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide die-lines for packaging design in Sangli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, at Graphic Galaxy Sangli, we provide technical die-lines (templates) for boxes, pouches, and labels that your printer can use directly.",
        },
      },
      {
        "@type": "Question",
        name: "What products do you design packaging for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We design packaging for FMCG, healthcare, food & beverage, cosmetics, and electronics. Our experience includes labels, jars, boxes, and milk pouches.",
        },
      },
      {
        "@type": "Question",
        name: "Do you coordinate with printers in Sangli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we coordinate with local printers in Sangli, Miraj, and Kolhapur to ensure the final print quality matches our design standards.",
        },
      },
    ],
  },
];

/* ─── Data ───────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Structure",
    desc: "We analyze your product dimensions and requirements to create or finalize technical die-lines (templates).",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    num: "02",
    title: "Visual Design",
    desc: "We craft the visual identity—typography, colors, and graphics—that makes your product stand out on the shelf.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    num: "03",
    title: "Prototyping",
    desc: "We provide realistic 3D mockups so you can see exactly how your final product will look in the real world.",
    icon: <Box className="w-6 h-6" />,
  },
  {
    num: "04",
    title: "Final Art",
    desc: "You receive high-resolution, print-ready CMYK files with all necessary bleed and margin technicalities.",
    icon: <Download className="w-6 h-6" />,
  },
];

const portfolioItems = [
  { client: "Shravani Organics", industry: "Organic Spices", initials: "SO", bg: "#0f172a", accent: "#72E0D7" },
  { client: "Radhey Dental Kit", industry: "Medical Kits", initials: "RD", bg: "#1e293b", accent: "#F59E0B" },
  { client: "Fresh Harvest", industry: "Food & Beverage", initials: "FH", bg: "#1e1b4b", accent: "#72E0D7" },
];

const faqs = [
  { q: "Do you design boxes, pouches, or both?",     a: "Both! At Graphic Galaxy Sangli, we design for all formats—monocartons, corrugated boxes, stand-up pouches, shrink sleeves, and label stickers." },
  { q: "Is the design print-ready?",                  a: "Yes. All our packaging designs are delivered in high-resolution, CMYK vector formats (AI, PDF, EPS) with proper bleeds and technical margins ready for zero-error printing." },
  { q: "How long is the project timeline?",           a: "Packaging projects in Sangli typically take 7-10 days depending on the complexity of the structure and the number of variants required." },
  { q: "Do you provide 3D mockups?",                  a: "Every packaging project includes premium 3D digital mockups so you can visualize the product from all angles before it goes into mass production." },
  { q: "Can you help with barcode or QR placement?",  a: "Absolutely. We ensure all legal requirements—including barcodes, FSSAI logos, nutritional facts, and batch details—are placed correctly according to your industry standards." },
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

export default function PackagingDesignInSangli() {
  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] font-inter">
      <SEO
        title={SEO_DATA.services.title}
        description={SEO_DATA.services.description}
        canonical="https://graphicgalaxy.netlify.app/packaging-design-in-sangli"
        ogTitle={SEO_DATA.services.title}
        ogDescription={SEO_DATA.services.description}
        ogUrl="https://graphicgalaxy.netlify.app/packaging-design-in-sangli"
        schema={combinedSchema}
      />

      <Navbar />

      <main>
        {/* ── 1. HERO ── */}
        <section className="relative pt-36 pb-24 px-6 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 font-bold text-xs md:text-sm mb-8 tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Packaging Design · Sangli, Maharashtra
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8"
            >
              Packaging Design in <span className="text-gradient">Sangli</span> that Sells
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
            >
              From milk pouches to premium retail boxes, Graphic Galaxy creates product packaging in <strong className="text-white">Sangli</strong> that stands out on shelves.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="interactive btn-amber px-8 py-4 flex items-center gap-2 text-base md:text-lg">
                <Package size={20} />
                Get a Free Quote
              </a>
              <Link to="/portfolio-graphic-designer-sangli" className="interactive px-8 py-4 bg-[#111827] border border-[#2D3748] rounded-full text-white font-bold text-base md:text-lg hover:border-amber-400/50 hover:bg-amber-400/5 transition-all">
                View Gallery →
              </Link>
            </motion.div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:divide-x md:divide-white/10 max-w-3xl mx-auto">
              {[
                { val: "20+", label: "Brands Served" },
                { val: "100%", label: "Print Ready" },
                { val: "3D", label: "Custom Mockups" },
              ].map((s, i) => (
                <div key={i} className="text-center md:px-4">
                  <p className="text-3xl font-black text-amber-400">{s.val}</p>
                  <p className="text-xs text-white/30 font-bold uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. IMPACT ── */}
        <section className="py-24 px-6 bg-[#111827]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">The Power of Packaging</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                Your product is great. Now make it <span className="text-gradient-amber">impossible to ignore.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-8">
                In stores across <strong className="text-white">Sangli</strong>, customers decide in seconds. Bad packaging hides a great product. Professional packaging design communicates value instantly.
              </p>
              <ul className="space-y-4">
                {["Structural design for exact fit", "Shelf-optimized visual strategy", "Premium 3D visualization mockups"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 font-medium">
                    <CheckCircle2 className="text-teal-400" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="grid grid-cols-1 gap-4">
              {[
                { stat: "72%", label: "Of consumers say packaging design influences purchase decisions." },
                { stat: "Premium", label: "Packaging allow you to command higher prices easily." },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 2}>
                  <div className="bg-[#0B0F14] border border-[#2D3748] rounded-[2rem] p-8 hover:border-teal-400/30 transition-all group">
                    <p className="text-5xl font-black text-teal-400 mb-4 group-hover:scale-105 transition-transform origin-left">{item.stat}</p>
                    <p className="text-white/40 font-medium leading-relaxed">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. PORTFOLIO ── */}
        <section className="py-24 px-6 bg-[#0B0F14]">
          <div className="max-w-6xl mx-auto">
            <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-4">Portfolio</p>
                <h2 className="text-4xl md:text-5xl font-black text-white">Latest Packaging Work</h2>
              </div>
              <Link to="/portfolio-graphic-designer-sangli" className="text-teal-400 font-bold hover:text-white transition-colors">
                View All Projects →
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioItems.map((item, i) => (
                <Reveal key={i} delay={i}>
                  <div className="group bg-[#111827] border border-[#2D3748] rounded-[2.5rem] overflow-hidden hover:border-teal-400/50 transition-all hover:-translate-y-2">
                    <div className="h-64 flex items-center justify-center relative" style={{ backgroundColor: item.bg }}>
                      <div 
                        className="w-24 h-24 rounded-2xl flex items-center justify-center font-black text-2xl shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500"
                        style={{ backgroundColor: '#fff', color: item.accent, border: `3px dashed ${item.accent}` }}
                      >
                        {item.initials}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 pointer-events-none" />
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-black text-white">{item.client}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-400/10 px-2 py-1 rounded-md">{item.industry}</span>
                      </div>
                      <p className="text-white/30 text-sm font-medium">Sangli, Maharashtra</p>
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
              <p className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">How We Work</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">Strategic Packaging Process</h2>
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

        {/* ── 5. FAQ ── */}
        <section className="py-24 px-6 bg-[#0B0F14]">
          <div className="max-w-3xl mx-auto">
            <Reveal className="text-center mb-16">
              <p className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-4">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">Packaging Common Questions</h2>
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
            <div className="relative rounded-[3rem] p-12 md:p-20 text-center overflow-hidden border border-teal-400/20 bg-linear-to-br from-[#0B0F14] to-[#111827]">
               <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/5 rounded-full blur-[100px] pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />
               
               <Reveal>
                 <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-8">Ready to Ship?</p>
                 <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                   Need Packaging Design <br className="hidden md:block" />in Sangli?
                 </h2>
                 <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto font-medium">
                   From box structural design to premium label graphics. Serving businesses in Sangli, Miraj, and Kupwad.
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

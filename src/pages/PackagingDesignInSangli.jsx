import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../seo/SEO";

/* ─── Brand Colors (from Graphic Galaxy logo) ── */
// Coral  : #E8836A  (primary CTA, accents)
// Teal   : #4DC9BB  (labels, icons, badges)
// Charcoal: #3C3C3C (headings, text)

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
      telephone: "+91-8459763568",
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3m18 8v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" strokeLinecap="round" />
        <rect x="3" y="8" width="18" height="8" rx="2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Visual Design",
    desc: "We craft the visual identity—typography, colors, and graphics—that makes your product stand out on the shelf.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Prototyping",
    desc: "We provide realistic 3D mockups so you can see exactly how your final product will look in the real world.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Final Art",
    desc: "You receive high-resolution, print-ready CMYK files with all necessary bleed and margin technicalities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" />
        <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const portfolioItems = [
  { client: "Shravani Organics",    industry: "Organic Spices",    initials: "SO", bg: "#E8F9F7", accent: "#4DC9BB" },
  { client: "Radhey Dental Kit",    industry: "Medical Kits",      initials: "RD", bg: "#FFF4F1", accent: "#E8836A" },
  { client: "Fresh Harvest",        industry: "Food & Beverage",   initials: "FH", bg: "#fef9c3", accent: "#ca8a04" },
];

const faqs = [
  { q: "Do you design boxes, pouches, or both?",     a: "Both! At Graphic Galaxy Sangli, we design for all formats—monocartons, corrugated boxes, stand-up pouches, shrink sleeves, and label stickers." },
  { q: "Is the design print-ready?",                  a: "Yes. All our packaging designs are delivered in high-resolution, CMYK vector formats (AI, PDF, EPS) with proper bleeds and technical marging ready for zero-error printing." },
  { q: "How long is the project timeline?",           a: "Packaging projects in Sangli typically take 7-10 days depending on the complexity of the structure and the number of variants required." },
  { q: "Do you provide 3D mockups?",                  a: "Every packaging project includes premium 3D digital mockups so you can visualize the product from all angles before it goes into mass production." },
  { q: "Can you help with barcode or QR placement?",  a: "Absolutely. We ensure all legal requirements—including barcodes, FSSAI logos, nutritional facts, and batch details—are placed correctly according to your industry standards." },
];

/* ─── Components ────────────────────────────── */
function DotGrid({ color = "#E8836A", opacity = 0.05 }) {
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
      backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
      backgroundSize: "24px 24px", opacity
    }} />
  );
}

function DecorativeShape({ color = "#4DC9BB", size = "300px", top, left, right, bottom, blur = "80px", opacity = 0.1 }) {
  return (
    <div style={{
      position: "absolute", top, left, right, bottom,
      width: size, height: size, borderRadius: "50%",
      background: color, filter: `blur(${blur})`, opacity,
      pointerEvents: "none", zIndex: 0
    }} />
  );
}

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
    <div style={{
      borderRadius: "12px",
      border: `1px solid ${open ? "#E8836A" : "#e5e7eb"}`,
      overflow: "hidden",
      transition: "border-color 0.25s",
      backgroundColor: "#fff",
    }}>
      <button
        id={`faq-q-${idx}`}
        aria-expanded={open}
        aria-controls={`faq-a-${idx}`}
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left", padding: "1.25rem 1.5rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          background: "none", border: "none", cursor: "pointer", gap: "1rem",
        }}
      >
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.975rem", color: "#3C3C3C", flex: 1 }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: "#E8836A", fontSize: "1.5rem", lineHeight: 1, fontWeight: 300, flexShrink: 0 }}
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
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p style={{ padding: "0 1.5rem 1.25rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.75, margin: 0 }}>
          {a}
        </p>
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
export default function PackagingDesignInSangli() {
  return (
    <>
      <SEO
        title="Packaging Design in Sangli | Label & Box Packaging – Graphic Galaxy"
        description="Premium packaging design services in Sangli. We create labels, boxes, pouches, and product packaging that sells. Trusted by Sangli businesses for professional mockups."
        canonical="https://graphicgalaxy.netlify.app/packaging-design-in-sangli"
        ogTitle="Packaging Design in Sangli | Label & Box Packaging – Graphic Galaxy"
        ogDescription="Premium packaging design services in Sangli. We create labels, boxes, pouches, and product packaging that sells."
        ogUrl="https://graphicgalaxy.netlify.app/packaging-design-in-sangli"
        schema={combinedSchema}
      />

      <Header />

      <main style={{ backgroundColor: "#ffffff" }}>

        {/* ══ 1. HERO ══════════════════════════════ */}
        <section
          aria-label="Packaging Design in Sangli – Hero"
          style={{
            position: "relative", overflow: "hidden",
            background: "linear-gradient(135deg, #FFF9F7 0%, #ffffff 50%, #F0FBFA 100%)",
            padding: "8rem 1.5rem 6rem",
          }}
        >
          <DotGrid color="#E8836A" opacity={0.07} />
          
          <DecorativeShape color="#E8836A" top="-100px" right="-100px" size="450px" opacity={0.12} />
          <DecorativeShape color="#4DC9BB" bottom="-80px" left="-80px" size="350px" opacity={0.1} />

          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{ display: "inline-flex", alignItems: "center", marginBottom: "1.75rem" }}
            >
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                backgroundColor: "#F0FBFA", color: "#2aafa0",
                border: "1px solid #b2ece6",
                borderRadius: "999px", padding: "0.35rem 1rem",
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4DC9BB", display: "inline-block" }} />
                PACKAGING DESIGN · SANGLI, MAHARASHTRA
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                fontWeight: 900, color: "#3C3C3C", lineHeight: 1.15, marginBottom: "1.5rem",
              }}
            >
              Packaging Design in{" "}
              <span style={{ color: "#E8836A", borderBottom: "3px solid #E8836A", paddingBottom: "2px" }}>
                Sangli
              </span>{" "}
              that Sells
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem",
                color: "#6b7280", lineHeight: 1.75,
                maxWidth: "600px", margin: "0 auto 2.5rem",
              }}
            >
              From milk pouches to premium retail boxes, Graphic Galaxy creates product packaging in{" "}
              <strong style={{ color: "#3C3C3C" }}>Sangli</strong> that stands out on shelves and speeds up sales.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.32 }}
              style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
            >
              <motion.a
                href="https://wa.me/918459763568?text=Hi%2C%20I%20need%20packaging%20design%20in%20Sangli"
                target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(232,131,106,0.4)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  backgroundColor: "#E8836A", color: "#fff",
                  padding: "0.875rem 1.75rem", borderRadius: "10px",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.975rem",
                  textDecoration: "none", boxShadow: "0 4px 16px rgba(232,131,106,0.3)",
                }}
              >
                📦 Get a Free Quote
              </motion.a>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Link
                  to="/portfolio-graphic-designer-sangli"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    backgroundColor: "#fff", color: "#3C3C3C",
                    border: "1.5px solid #e5e7eb",
                    padding: "0.875rem 1.75rem", borderRadius: "10px",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.975rem",
                    textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  View Packaging Portfolio →
                </Link>
              </motion.div>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.5 }}
              style={{
                marginTop: "4rem", display: "flex", alignItems: "center", justifyContent: "center",
                gap: "3rem", flexWrap: "wrap",
                backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(10px)",
                padding: "1.5rem 2rem", borderRadius: "20px", border: "1px solid rgba(232,131,106,0.1)",
                display: "inline-flex"
              }}
            >
              {[
                { val: "20+",  label: "Brands Served" },
                { val: "100%", label: "Print Ready" },
                { val: "3D",   label: "Custom Mockups" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center", padding: "0 1rem" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#E8836A", margin: 0, lineHeight: 1 }}>
                    {s.val}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#3C3C3C", opacity: 0.6, margin: "6px 0 0", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══ 2. WHY PACKAGING MATTERS ══════════════ */}
        <section
          aria-label="Why professional packaging design matters"
          style={{ backgroundColor: "#fcfdfe", padding: "7rem 1.5rem", position: "relative", overflow: "hidden" }}
        >
          <DecorativeShape color="#4DC9BB" top="10%" left="-5%" size="300px" opacity={0.05} />
          <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>

              {/* Left */}
              <Reveal>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4DC9BB", marginBottom: "1rem" }}>
                  THE POWER OF PACKAGING
                </p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#3C3C3C", lineHeight: 1.25, marginBottom: "1.25rem" }}>
                  Your product is great. Now make it{" "}
                  <em style={{ color: "#E8836A", fontStyle: "italic" }}>impossible to ignore.</em>
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#6b7280", lineHeight: 1.8, marginBottom: "1.75rem" }}>
                  In stores across <strong style={{ color: "#3C3C3C" }}>Sangli</strong>, customers decide in seconds. 
                  Bad packaging hides a great product. Professional packaging design communicates value, 
                  quality, and trust before the customer even opens the box.
                </p>
                <Link
                  to="/contact"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#E8836A", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}
                >
                  Start Your Project →
                </Link>
              </Reveal>

              {/* Right — impact cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { stat: "72%",     label: "Of consumers say packaging design influences their purchasing decisions." },
                  { stat: "Premium", label: "Packaging allows you to command higher prices in the marketplace." },
                  { stat: "Retail",  label: "Optimized for shelf-visibility and competition in Sangli markets." },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 1}>
                    <motion.div
                      whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
                      transition={{ duration: 0.2 }}
                      style={{
                        backgroundColor: "#fff", border: "1px solid #e5e7eb",
                        borderRadius: "14px", padding: "1.375rem 1.5rem",
                        display: "flex", alignItems: "center", gap: "1.25rem",
                        cursor: "default", boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      }}
                    >
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 900, color: "#E8836A", flexShrink: 0, minWidth: "90px" }}>
                        {item.stat}
                      </span>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.65, margin: 0 }}>
                        {item.label}
                      </p>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. PORTFOLIO PREVIEW ═════════════════ */}
        <section
          aria-label="Portfolio of packaging design in Sangli"
          style={{ backgroundColor: "#ffffff", padding: "7rem 1.5rem", position: "relative", overflow: "hidden" }}
        >
          <DotGrid color="#4DC9BB" opacity={0.04} />
          <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <Reveal>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4DC9BB", marginBottom: "0.75rem" }}>
                    OUR WORK
                  </p>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#3C3C3C", margin: 0 }}>
                    Packaging Designer Sangli — Latest Projects
                  </h2>
                </div>
                <Link
                  to="/portfolio-graphic-designer-sangli"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#E8836A", textDecoration: "none", whiteSpace: "nowrap" }}
                >
                  View all projects →
                </Link>
              </div>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.25rem" }}>
              {portfolioItems.map((item, i) => (
                <Reveal key={i} delay={i * 1}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.25 }}
                    style={{ backgroundColor: "#fff", borderRadius: "16px", overflow: "hidden", border: "1px solid #f3f4f6", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                  >
                    {/* Thumbnail placeholder with initial icon */}
                    <div
                      role="img"
                      aria-label={`Packaging for ${item.client} in Sangli by Graphic Galaxy`}
                      style={{ height: "200px", backgroundColor: item.bg, display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <div style={{
                        width: "80px", height: "80px", borderRadius: "12px",
                        border: `2px dashed ${item.accent}`,
                        backgroundColor: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'Playfair Display', serif", fontSize: "1.5rem",
                        fontWeight: 900, color: item.accent,
                        boxShadow: `0 4px 20px ${item.accent}30`,
                      }}>
                        {item.initials}
                      </div>
                    </div>
                    {/* Card footer */}
                    <div style={{ padding: "1.125rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.925rem", fontWeight: 600, color: "#3C3C3C", margin: "0 0 0.2rem" }}>
                          {item.client}
                        </h3>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.775rem", color: "#9ca3af", margin: 0 }}>
                          Sangli, Maharashtra
                        </p>
                      </div>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 600,
                        color: item.accent, backgroundColor: item.bg,
                        border: `1px solid ${item.accent}50`,
                        padding: "0.25rem 0.7rem", borderRadius: "999px", whiteSpace: "nowrap",
                      }}>
                        {item.industry}
                      </span>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 4. OUR PROCESS ═══════════════════════ */}
        <section
          aria-label="Our packaging design process"
          style={{ backgroundColor: "#fcfdfe", padding: "7rem 1.5rem", position: "relative", overflow: "hidden" }}
        >
          <DecorativeShape color="#E8836A" bottom="-5%" right="-5%" size="400px" opacity={0.05} />
          <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4DC9BB", marginBottom: "0.75rem" }}>
                  HOW WE WORK
                </p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#3C3C3C", margin: 0 }}>
                  Strategic Packaging Process in Sangli
                </h2>
              </div>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
              {steps.map((s, i) => (
                <Reveal key={i} delay={i * 1}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.25 }}
                    style={{
                      backgroundColor: "#fff", border: "1px solid #f3f4f6",
                      borderRadius: "16px", padding: "2rem 1.5rem",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.05)", height: "100%",
                    }}
                  >
                    {/* Number + icon */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 800,
                          color: "#E8836A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2px"
                        }}>
                          Step
                        </span>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif", fontSize: "2.5rem", fontWeight: 900,
                          color: "#3C3C3C", lineHeight: 1, opacity: 0.15
                        }}>
                          {s.num}
                        </span>
                      </div>
                      <div style={{
                        width: "48px", height: "48px", borderRadius: "12px",
                        backgroundColor: "rgba(77,201,187,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#4DC9BB", border: "1px solid rgba(77,201,187,0.2)"
                      }}>
                        {s.icon}
                      </div>
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#3C3C3C", marginBottom: "0.625rem" }}>
                      {s.title}
                    </h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.7, margin: 0 }}>
                      {s.desc}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. FAQ ═══════════════════════════════ */}
        <section
          aria-label="Frequently asked questions about packaging design in Sangli"
          style={{ backgroundColor: "#ffffff", padding: "7rem 1.5rem", position: "relative", overflow: "hidden" }}
        >
          <DotGrid color="#E8836A" opacity={0.03} />
          <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4DC9BB", marginBottom: "0.75rem" }}>
                  FAQ
                </p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#3C3C3C", margin: 0 }}>
                  Packaging Expert in Sangli — Common Questions
                </h2>
              </div>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {faqs.map((f, i) => (
                <Reveal key={i} delay={i * 0.5}>
                  <FAQItem q={f.q} a={f.a} idx={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 6. CTA BANNER ════════════════════════ */}
        <section
          aria-label="Contact Graphic Galaxy for packaging design in Sangli"
          style={{
            background: "linear-gradient(135deg, #2e2e2e 0%, #3C3C3C 60%, #4a4a4a 100%)",
            padding: "5rem 1.5rem", textAlign: "center",
            position: "relative", overflow: "hidden",
          }}
        >
          <DecorativeShape color="#E8836A" top="-80px" right="-80px" size="350px" opacity={0.15} />
          <DecorativeShape color="#4DC9BB" bottom="-60px" left="-80px" size="300px" opacity={0.12} />

          <Reveal>
            <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4DC9BB", marginBottom: "1rem" }}>
                READY TO SHIP?
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 4vw, 2.6rem)", fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: "1.125rem" }}>
                Need Professional Packaging Design in Sangli?
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Serving clients in Sangli, Miraj, and Kupwad. 
                From box structural design to premium label graphics. 
                Let's make your product look as good as it works.
              </p>

              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center", marginBottom: "2.5rem" }}>
                <motion.a
                  href="https://wa.me/918459763568?text=Hi%2C%20I%20need%20packaging%20design%20in%20Sangli"
                  target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(232,131,106,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    backgroundColor: "#E8836A", color: "#fff",
                    padding: "0.9rem 1.75rem", borderRadius: "10px",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem",
                    textDecoration: "none", boxShadow: "0 4px 20px rgba(232,131,106,0.35)",
                  }}
                >
                  💬 WhatsApp Us Now
                </motion.a>
                <a
                  href="tel:+918459763568"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    color: "rgba(255,255,255,0.8)", textDecoration: "none",
                    fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 500,
                  }}
                >
                  📞 +91 84597 63568
                </a>
              </div>

              {/* Internal links */}
              <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                {[
                  { to: "/portfolio-graphic-designer-sangli", label: "View Portfolio" },
                  { to: "/logo-design-in-sangli", label: "Logo Design Services" },
                  { to: "/about", label: "About Our Studio" },
                ].map((l) => (
                  <Link
                    key={l.to} to={l.to}
                    style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", fontWeight: 500,
                      color: "rgba(255,255,255,0.5)", textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "1px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "#4DC9BB"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

      </main>

      <Footer />
    </>
  );
}

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
      telephone: "+91-8459763568",
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
          text: "Simply WhatsApp us at +91 84597 63568 or fill the contact form on our website. We will get back to you within 24 hours.",
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Concept",
    desc: "We present 3 unique logo directions — each crafted from scratch. No templates, no stock icons.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Refinement",
    desc: "We fine-tune your chosen direction based on your feedback until it's flawless and production-ready.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeLinecap="round" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Delivery",
    desc: "You receive all files — PNG, SVG, PDF, AI — ready for web, print, signage, packaging, and social media.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" />
        <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const portfolioItems = [
  { client: "Radhey Dental Clinic", industry: "Healthcare", initials: "RD", bg: "#FFF4F1", accent: "#E8836A" },
  { client: "Shravani Organics", industry: "FMCG / Packaging", initials: "SO", bg: "#E8F9F7", accent: "#4DC9BB" },
  { client: "S3 Academy Sangli", industry: "Sports & Events", initials: "S3", bg: "#fef9c3", accent: "#ca8a04" },
];
const faqs = [
  { q: "How much does logo design cost in Sangli?",         a: "Logo design at Graphic Galaxy in Sangli starts from ₹1,500 for basic logos to ₹6,000 for premium brand identity packages. We offer transparent pricing with no hidden charges." },
  { q: "How long does logo design take in Sangli?",         a: "At Graphic Galaxy Sangli, basic logo design takes 2-3 days. Premium packages with multiple revisions take 5-7 days. Rush delivery is available on request." },
  { q: "What file formats will I receive for my logo?",     a: "You will receive your logo in PNG, JPG, SVG, PDF and AI formats — suitable for all print and digital use including business cards, signage, websites, and social media." },
  { q: "Do you design logos for all types of businesses in Sangli?", a: "Yes! Graphic Galaxy designs logos for clinics, restaurants, events, retail shops, schools, and more in Sangli. We also serve clients across Miraj, Kupwad, and Kolhapur." },
  { q: "How do I get started with logo design at Graphic Galaxy?",   a: "Simply WhatsApp us at +91 84597 63568 or fill our contact form. We respond within 24 hours and kick off with a quick discovery call to understand your brand." },
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
export default function LogoDesignInSangli() {
  return (
    <>
      <SEO
        title="Logo Design in Sangli | Professional Logo Designer – Graphic Galaxy"
        description="Looking for a logo designer in Sangli? Graphic Galaxy creates professional, memorable logos for businesses in Sangli, Miraj, Kupwad and across Maharashtra. Get a free quote today."
        canonical="https://graphicgalaxy.netlify.app/logo-design-in-sangli"
        ogTitle="Logo Design in Sangli | Professional Logo Designer – Graphic Galaxy"
        ogDescription="Looking for a logo designer in Sangli? Graphic Galaxy creates professional, memorable logos for businesses in Sangli, Miraj, Kupwad and across Maharashtra. Get a free quote today."
        ogUrl="https://graphicgalaxy.netlify.app/logo-design-in-sangli"
        schema={combinedSchema}
      />

      <Header />

      <main style={{ backgroundColor: "#ffffff" }}>

        {/* ══ 1. HERO ══════════════════════════════ */}
        <section
          aria-label="Logo Design in Sangli – Hero"
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
                backgroundColor: "#E8F9F7", color: "#2aafa0",
                border: "1px solid #b2ece6",
                borderRadius: "999px", padding: "0.35rem 1rem",
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4DC9BB", display: "inline-block" }} />
                LOGO DESIGN · SANGLI, MAHARASHTRA
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
              Logo Design in{" "}
              <span style={{ color: "#E8836A", borderBottom: "3px solid #E8836A", paddingBottom: "2px" }}>
                Sangli
              </span>{" "}
              that Builds Trust
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
              Graphic Galaxy crafts distinctive, professional logos for businesses in{" "}
              <strong style={{ color: "#3C3C3C" }}>Sangli</strong>, Miraj and across Maharashtra —
              identities that command attention from the very first impression.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.32 }}
              style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
            >
              <motion.a
                href="https://wa.me/918459763568?text=Hi%2C%20I%20need%20a%20logo%20design%20in%20Sangli"
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
                💬 Get Your Logo Today
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
                  View Portfolio →
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
                { val: "50+", label: "Logos Designed" },
                { val: "3–5", label: "Day Delivery" },
                { val: "100%", label: "Satisfaction" },
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

        {/* ══ 2. WHY LOGO MATTERS ══════════════════ */}
        <section
          aria-label="Why professional logo design matters for Sangli businesses"
          style={{ backgroundColor: "#fcfdfe", padding: "7rem 1.5rem", position: "relative", overflow: "hidden" }}
        >
          <DecorativeShape color="#4DC9BB" top="10%" left="-5%" size="300px" opacity={0.05} />
          <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>

              {/* Left */}
              <Reveal>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4DC9BB", marginBottom: "1rem" }}>
                  WHY IT MATTERS
                </p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#3C3C3C", lineHeight: 1.25, marginBottom: "1.25rem" }}>
                  A great logo isn't decoration — it's your brand's{" "}
                  <em style={{ color: "#E8836A", fontStyle: "italic" }}>first impression.</em>
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#6b7280", lineHeight: 1.8, marginBottom: "1.75rem" }}>
                  In a competitive market like <strong style={{ color: "#3C3C3C" }}>Sangli</strong>, your logo speaks before you do.
                  A professionally designed logo builds credibility, earns customer trust, and sets your brand apart
                  from the moment someone sees it.
                </p>
                <Link
                  to="/about"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#E8836A", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}
                >
                  About Graphic Galaxy →
                </Link>
              </Reveal>

              {/* Right — stat cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { stat: "7 sec", label: "That's all it takes for a customer to form a first impression of your brand." },
                  { stat: "3× more", label: "Brand recall when businesses use a consistent, professional logo." },
                  { stat: "50+ logos", label: "Designed for Sangli businesses across industries — and counting." },
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
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 900, color: "#E8836A", flexShrink: 0, minWidth: "76px" }}>
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
          aria-label="Portfolio of logo design work in Sangli"
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
                    Business Logo Design Sangli — Recent Work
                  </h2>
                </div>
                <Link
                  to="/portfolio-graphic-designer-sangli"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#E8836A", textDecoration: "none", whiteSpace: "nowrap" }}
                >
                  View all work →
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
                    {/* Thumbnail */}
                    <div
                      role="img"
                      aria-label={`Logo design for ${item.client} in Sangli by Graphic Galaxy`}
                      style={{ height: "180px", backgroundColor: item.bg, display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <div style={{
                        width: "75px", height: "75px", borderRadius: "50%",
                        border: `2px solid ${item.accent}`,
                        backgroundColor: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'Playfair Display', serif", fontSize: "1.4rem",
                        fontWeight: 900, color: item.accent,
                        boxShadow: `0 4px 20px ${item.accent}40`,
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
          aria-label="Our logo design process"
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
                  Our Logo Design Process in Sangli
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
          aria-label="Frequently asked questions about logo design in Sangli"
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
                  Logo Designer in Sangli — Common Questions
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
          aria-label="Contact Graphic Galaxy for logo design in Sangli"
          style={{
            background: "linear-gradient(135deg, #2e2e2e 0%, #3C3C3C 60%, #4a4a4a 100%)",
            padding: "5rem 1.5rem", textAlign: "center",
            position: "relative", overflow: "hidden",
          }}
        >
          {/* Coral glow blob */}
          <div style={{
            position: "absolute", top: "-80px", right: "-80px",
            width: "350px", height: "350px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,131,106,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          {/* Teal glow blob */}
          <div style={{
            position: "absolute", bottom: "-60px", left: "-60px",
            width: "300px", height: "300px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(77,201,187,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <Reveal>
            <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4DC9BB", marginBottom: "1rem" }}>
                LET'S BUILD YOUR BRAND
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 4vw, 2.6rem)", fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: "1.125rem" }}>
                Looking for a Logo Designer in Sangli?
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Serving businesses in Sangli, Miraj, Kupwad and Kolhapur.
                Get a free consultation and start building your brand identity today.
              </p>

              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center", marginBottom: "2.5rem" }}>
                <motion.a
                  href="https://wa.me/918459763568?text=Hi%2C%20I%20need%20a%20logo%20design%20in%20Sangli"
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
                  { to: "/contact", label: "Get in Touch" },
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

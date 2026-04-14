import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Palette,
  Zap,
  Download,
  MapPin,
  Eye,
  Shield,
  Clock,
  Star,
  Store,
  Building2,
  Lightbulb,
  Layers,
  PenTool,
  Printer,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../seo/SEO";
import {
  WHATSAPP_LINK,
  PHONE,
  SEO_DATA,
  SERVICES,
} from "../constants";

/* ─── Schema ─────────────────────────────────── */
const combinedSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Signage Board Design in Sangli",
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
    areaServed: "Sangli, Miraj, Kolhapur, Maharashtra",
    description:
      "Professional signage board design services in Sangli, Maharashtra. Shop boards, glow signs, ACP boards and more.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does signage board design cost in Sangli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signage board design at Graphic Galaxy starts from ₹1,500 for basic shop board designs to ₹8,000+ for premium 3D / glow sign designs with print-ready files.",
        },
      },
      {
        "@type": "Question",
        name: "How long does signage board design take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard signage board design takes 2-4 days at Graphic Galaxy. Complex 3D or multi-board projects may take 5-7 days with revisions.",
        },
      },
      {
        "@type": "Question",
        name: "What file formats do you deliver for signage designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We deliver signage designs in AI, CDR, PDF, and high-resolution PNG/JPG formats — ready for direct printing by any signage fabricator.",
        },
      },
      {
        "@type": "Question",
        name: "Do you also handle signage fabrication and installation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We focus on design. However, we work with trusted signage fabrication partners in Sangli, Miraj, and Kolhapur and can coordinate the entire process for you.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design signage boards for any type of business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We design signage for shops, clinics, restaurants, offices, gyms, schools, and all types of businesses across Sangli, Miraj, and Kolhapur.",
        },
      },
    ],
  },
];

/* ─── Data ───────────────────────────────────── */
const whyChooseUs = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Maximum Visibility",
    desc: "We design signage that catches eyes from a distance — bold typography, high contrast, and strategic color use make your shop impossible to miss.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Print-Ready Precision",
    desc: "Every design is crafted at exact dimensions with proper bleed, CMYK color, and vector formats — ready for direct fabrication without rework.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Turnaround",
    desc: "Most signage board designs are delivered in 2-4 days. Need it sooner? We offer rush delivery so your shop opening stays on schedule.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Local Market Expertise",
    desc: "We understand the Sangli-Miraj market. From busy main roads to mall fronts, we know what works to attract local foot traffic.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Custom Brand Integration",
    desc: "Your signage isn't just a name — it reflects your brand. We integrate your logo, colors, and brand personality into every board design.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Multiple Revision Rounds",
    desc: "We don't stop until you're 100% satisfied. Get up to 3 revision rounds included with every signage design project.",
  },
];

const steps = [
  {
    num: "01",
    title: "Requirement Brief",
    desc: "We understand your shop size, location, board dimensions, and branding needs. Share a photo of your storefront — we'll take it from there.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    num: "02",
    title: "Concept Design",
    desc: "We create 2-3 unique signage concepts with different layouts, typography, and color combinations tailored to your business.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    num: "03",
    title: "Refinement & Mockup",
    desc: "Your chosen concept is refined based on feedback. We provide a realistic mockup showing how the board will look on your storefront.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    num: "04",
    title: "Print-Ready Delivery",
    desc: "Final files delivered in AI, CDR, PDF, and high-res formats — ready to hand over to any signage fabricator for production.",
    icon: <Download className="w-6 h-6" />,
  },
];

const signageTypes = [
  {
    title: "Shop Front Board",
    desc: "Classic flex or vinyl boards for retail shops, medical stores, and restaurants. Bold, readable, and cost-effective.",
    icon: <Store className="w-8 h-8" />,
    accent: "#F59E0B",
  },
  {
    title: "Glow Sign Board",
    desc: "LED backlit signage for maximum night visibility. Perfect for pharmacies, clinics, and businesses on main roads.",
    icon: <Lightbulb className="w-8 h-8" />,
    accent: "#72E0D7",
  },
  {
    title: "ACP Board Design",
    desc: "Premium Aluminium Composite Panel boards for a sleek, modern look. Ideal for offices, showrooms, and corporate setups.",
    icon: <Building2 className="w-8 h-8" />,
    accent: "#7C3AED",
  },
  {
    title: "3D Letter Board",
    desc: "Dimensional acrylic or metal letter signage that adds depth and luxury feel. Great for hotels, salons, and high-end brands.",
    icon: <Layers className="w-8 h-8" />,
    accent: "#EC4899",
  },
  {
    title: "Direction & Wayfinding",
    desc: "Indoor and outdoor directional signage for hospitals, malls, offices, and educational institutions.",
    icon: <MapPin className="w-8 h-8" />,
    accent: "#2563EB",
  },
  {
    title: "Vehicle Branding",
    desc: "Turn your delivery vans and business vehicles into moving billboards with professionally designed vehicle wraps.",
    icon: <PenTool className="w-8 h-8" />,
    accent: "#DC2626",
  },
];

const faqs = [
  {
    q: "How much does signage board design cost in Sangli?",
    a: "Signage board design at Graphic Galaxy starts from ₹1,500 for basic shop board designs. Premium designs with 3D letters, glow effects, or multi-board setups range from ₹3,000 to ₹8,000+. We offer transparent pricing with no hidden charges.",
  },
  {
    q: "How long does signage board design take?",
    a: "Standard signage board designs are completed in 2-4 days at Graphic Galaxy Sangli. Complex 3D or multi-board projects may take 5-7 days including revisions. Rush delivery is available.",
  },
  {
    q: "What file formats do you deliver for signage designs?",
    a: "We deliver in AI (Adobe Illustrator), CDR (CorelDRAW), PDF, and high-resolution PNG/JPG formats. All files are print-ready and can be handed directly to any signage fabricator in Sangli or Miraj.",
  },
  {
    q: "Do you also handle signage fabrication and installation?",
    a: "We specialize in design. However, we partner with trusted signage fabricators in Sangli, Miraj, and Kolhapur. We can coordinate the fabrication and ensure the final output matches our design perfectly.",
  },
  {
    q: "Can you design signage boards for any type of business?",
    a: `Absolutely! We have designed signage for shops, clinics, restaurants, offices, gyms, schools, and more across Sangli, Miraj, and Kolhapur. WhatsApp us at ${PHONE} to discuss your project.`,
  },
];

/* ─── Helpers ────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FAQItem({ q, a, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        open
          ? "border-amber-400 bg-amber-400/5"
          : "border-[#2D3748] bg-[#111827]"
      }`}
    >
      <button
        id={`faq-signage-q-${idx}`}
        aria-expanded={open}
        aria-controls={`faq-signage-a-${idx}`}
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
        id={`faq-signage-a-${idx}`}
        role="region"
        aria-labelledby={`faq-signage-q-${idx}`}
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

export default function SignageBoardDesignInSangli() {
  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] font-inter">
      <SEO
        title={SEO_DATA.signageDesign.title}
        description={SEO_DATA.signageDesign.description}
        canonical="https://graphicgalaxy.netlify.app/signage-design-sangli"
        ogTitle={SEO_DATA.signageDesign.title}
        ogDescription={SEO_DATA.signageDesign.description}
        ogUrl="https://graphicgalaxy.netlify.app/signage-design-sangli"
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-bold text-xs md:text-sm mb-8 tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Signage Board Design · Sangli, Maharashtra
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8"
            >
              Signage Board Design in{" "}
              <span className="text-gradient-amber">Sangli</span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl text-white/80">
                That Commands Attention
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
            >
              Graphic Galaxy designs bold, professional signage boards for
              businesses in{" "}
              <strong className="text-white">
                Sangli, Miraj, and Kolhapur
              </strong>{" "}
              — shop boards that attract customers and build your street
              presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="interactive btn-amber px-8 py-4 flex items-center gap-2 text-base md:text-lg"
              >
                <MessageSquare size={20} />
                Get Your Signage Designed
              </a>
              <Link
                to="/portfolio-graphic-designer-sangli"
                className="interactive px-8 py-4 bg-[#111827] border border-[#2D3748] rounded-full text-white font-bold text-base md:text-lg hover:border-amber-400/50 hover:bg-amber-400/5 transition-all"
              >
                View Portfolio →
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/10 max-w-4xl mx-auto">
              {[
                { val: "100+", label: "Signages Designed" },
                { val: "2–4 Days", label: "Fast Delivery" },
                { val: "100%", label: "Print-Ready" },
                { val: "5.0★", label: "Google Rating" },
              ].map((s, i) => (
                <div key={i} className="text-center md:px-4">
                  <p className="text-3xl font-black text-amber-400">
                    {s.val}
                  </p>
                  <p className="text-xs text-white/30 font-bold uppercase tracking-wider mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Location Signal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 inline-flex items-center gap-2 text-white/30 text-sm font-medium"
            >
              <MapPin size={14} className="text-teal-400" />
              Serving businesses in Sangli, Miraj, Kolhapur, and nearby areas across Maharashtra
            </motion.div>
          </div>
        </section>

        {/* ── 2. WHY CHOOSE US ── */}
        <section className="py-24 px-6 bg-[#111827]">
          <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-16">
              <p className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-4">
                Why Choose Us
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Why Businesses in{" "}
                <span className="text-gradient-amber">Sangli</span> Trust Us
                for Signage Design
              </h2>
              <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
                From busy market streets in Sangli to commercial hubs in Miraj
                and Kolhapur — our signage designs help businesses get noticed
                and drive foot traffic.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, i) => (
                <Reveal key={i} delay={i}>
                  <div className="bg-[#0B0F14] border border-[#2D3748] rounded-3xl p-8 h-full hover:border-amber-400/40 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. OUR PROCESS ── */}
        <section className="py-24 px-6 bg-[#0B0F14]">
          <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-16">
              <p className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-4">
                Our Process
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                How We Design Your Signage Board
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <Reveal key={i} delay={i}>
                  <div className="bg-[#111827] border border-[#2D3748] rounded-3xl p-8 h-full hover:border-amber-400/40 transition-all flex flex-col group">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                      {s.icon}
                    </div>
                    <p className="text-white/20 text-xs font-black uppercase tracking-widest mb-2">
                      Step {s.num}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {s.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Location Signal */}
            <Reveal delay={4}>
              <div className="mt-12 flex items-center justify-center gap-2 text-white/25 text-sm font-medium">
                <MapPin size={14} className="text-teal-400" />
                We serve businesses across Sangli, Miraj, Kolhapur & all of Maharashtra
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 4. TYPES OF SIGNAGE SERVICES ── */}
        <section className="py-24 px-6 bg-[#111827]">
          <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-16">
              <p className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">
                Types of Services
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Signage Solutions for Every Business
              </h2>
              <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
                Whether you need a simple shop board or a premium 3D letter
                sign — we've got you covered. Designed in Sangli, delivered
                across Maharashtra.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {signageTypes.map((type, i) => (
                <Reveal key={i} delay={i}>
                  <div className="group bg-[#0B0F14] border border-[#2D3748] rounded-[2rem] p-8 h-full hover:border-opacity-50 transition-all hover:-translate-y-2 duration-300"
                    style={{ "--hover-border": type.accent }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = type.accent + "80"}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = "#2D3748"}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: type.accent + "15",
                        color: type.accent,
                        border: `1px solid ${type.accent}30`,
                      }}
                    >
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-black text-white mb-3">
                      {type.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {type.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Scrolling Marquee ── */}
        <div className="py-10 bg-[#0B0F14] border-y border-white/5 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[
              "Shop Boards",
              "Glow Signs",
              "ACP Boards",
              "3D Letter Signs",
              "Flex Banners",
              "Vehicle Branding",
              "Direction Signs",
              "Neon Signs",
              "LED Boards",
              "Menu Boards",
              "Window Graphics",
              "Pole Signs",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center mx-10 text-2xl font-bold text-white/40 uppercase tracking-widest gap-4"
              >
                <span className="w-2 h-2 bg-amber-500 rounded-full" />
                {item}
              </div>
            ))}
            {[
              "Shop Boards",
              "Glow Signs",
              "ACP Boards",
              "3D Letter Signs",
              "Flex Banners",
              "Vehicle Branding",
              "Direction Signs",
              "Neon Signs",
              "LED Boards",
              "Menu Boards",
              "Window Graphics",
              "Pole Signs",
            ].map((item, idx) => (
              <div
                key={`dup-${idx}`}
                className="flex items-center mx-10 text-2xl font-bold text-white/40 uppercase tracking-widest gap-4"
              >
                <span className="w-2 h-2 bg-amber-500 rounded-full" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. FAQ ── */}
        <section className="py-24 px-6 bg-[#0B0F14]">
          <div className="max-w-3xl mx-auto">
            <Reveal className="text-center mb-16">
              <p className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">
                FAQ
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Signage Board Questions
              </h2>
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
                <p className="text-sm font-bold text-teal-400 uppercase tracking-[0.3em] mb-8">
                  Let's Build Your Street Presence
                </p>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  Need a Signage Board
                  <br className="hidden md:block" /> Designer in{" "}
                  <span className="text-gradient-amber">Sangli?</span>
                </h2>
                <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto font-medium">
                  Get a free design consultation and make your business the
                  most noticeable on the street. Serving businesses across
                  Sangli, Miraj, Kolhapur, and all of Maharashtra.
                </p>

                {/* Location badges */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {["Sangli", "Miraj", "Kolhapur", "Maharashtra"].map(
                    (loc) => (
                      <span
                        key={loc}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-xs font-bold uppercase tracking-wider"
                      >
                        <MapPin size={12} />
                        {loc}
                      </span>
                    )
                  )}
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href={WHATSAPP_LINK}
                    className="interactive btn-amber px-10 py-5 text-lg"
                  >
                    💬 WhatsApp Us Now
                  </a>
                  <a
                    href={`tel:${PHONE.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-white/70 hover:text-amber-400 font-bold transition-colors"
                  >
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

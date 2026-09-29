import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../seo/SEO";
import { BUSINESS_CARD_TYPES, WHATSAPP_LINK, PHONE, SEO_DATA } from "../constants";

/* ─── Schema ─────────────────────────────────── */
const combinedSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Card Design in Sangli",
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
      url: "https://graphicgalaxystudio.netlify.app",
    },
    areaServed: "Sangli, Miraj, Vishrambag, Kupwad",
    description: "Professional business card and visiting card design services in Sangli, with premium printing options.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a business card design cost in Sangli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our business card design starts from ₹1,500 for standard designs, with premium packages available up to ₹6,000 depending on complexity and printing options.",
        },
      },
      {
        "@type": "Question",
        name: "What printing options are available for business cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer matte, glossy, foil‑stamped, and eco‑friendly card finishes, as well as digital QR‑code cards for modern contact sharing.",
        },
      },
    ],
  },
];

const BusinessCardDesignInSangli = () => {
  const seo = SEO_DATA.businessCardDesign;
  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] font-inter overflow-x-hidden">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={`https://graphicgalaxystudio.netlify.app${seo.url}`}
        ogTitle={seo.title}
        ogDescription={seo.description}
        ogUrl={`https://graphicgalaxystudio.netlify.app${seo.url}`}
        schema={combinedSchema}
      />

      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-36 pb-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-[100px]" />
          </div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-semibold mb-6">
                Business Card Design
              </span>
              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[1.05]">
                Business Card Design in <span className="text-gradient-amber">Sangli</span>
                <br />
                <span className="text-4xl lg:text-6xl text-white/90">
                  Creative, Premium, &amp; Print‑Ready Cards
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Stand out with custom business card designs that reflect your brand identity. From standard cards to premium foil‑stamped sets, we craft high‑quality, print‑ready designs for businesses across Sangli, Miraj, Vishrambag, and Kupwad.
              </p>
              <a
                href={WHATSAPP_LINK}
                className="btn-amber px-8 py-5 flex items-center gap-3 text-lg group"
              >
                <Zap className="fill-current" />
                Design My Business Card
              </a>
            </motion.div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="py-12 bg-[#111827]">
          <div className="max-w-7xl mx-auto overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {BUSINESS_CARD_TYPES.map((type, idx) => (
                <span key={idx} className="text-amber-400 mx-4 text-xl font-medium">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-24 px-6 bg-[#0B0F14] text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and get a custom quote for your business card project.
          </p>
          <Link
            to={WHATSAPP_LINK}
            className="btn-amber px-10 py-5 inline-flex items-center gap-2 text-xl group"
          >
            <Zap className="fill-current" />
            Get Started <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessCardDesignInSangli;

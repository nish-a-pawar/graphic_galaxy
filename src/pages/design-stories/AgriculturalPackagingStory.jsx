import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageSquare } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../seo/SEO";
import { WHATSAPP_LINK } from "../../constants";

const agriSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Agricultural & Cattle Feed Packaging Design Story",
    headline: "Agricultural / Cattle Feed Packaging Design by Graphic Galaxy",
    author: {
      "@type": "LocalBusiness",
      name: "Graphic Galaxy",
      url: "https://graphicgalaxystudio.netlify.app",
      telephone: "+91 84597 63568",
    },
    description:
      "Explore how Graphic Galaxy created an impactful agricultural and cattle feed packaging system in Sangli, combining farmer trust, nutrient hierarchy, and retail shelf presence.",
    image:
      "https://res.cloudinary.com/daxfbjcpc/image/upload/v1776491750/agriSticker_agnikh.webp",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://graphicgalaxystudio.netlify.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Design Stories",
        item: "https://graphicgalaxystudio.netlify.app/design-stories",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Agricultural Packaging Design",
        item: "https://graphicgalaxystudio.netlify.app/design-stories/agricultural-packaging-design",
      },
    ],
  },
];

const COLORS = [
  { name: "Agro Emerald", hex: "#1B7A42", tone: "bg-[#1B7A42]", text: "text-white" },
  { name: "Sunflower Yellow", hex: "#EAB308", tone: "bg-[#EAB308]", text: "text-[#0B0F14]" },
  { name: "Soil Charcoal", hex: "#1E293B", tone: "bg-[#1E293B]", text: "text-white" },
  { name: "Clean White", hex: "#FFFFFF", tone: "bg-[#FFFFFF]", text: "text-[#0B0F14]" },
];

const AgriculturalPackagingStory = () => {
  const whatsappUrl = `${WHATSAPP_LINK}&text=${encodeURIComponent(
    "Hi Graphic Galaxy, I saw the Agricultural Packaging Design Story and want to discuss packaging design for my product."
  )}`;

  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] min-h-screen font-inter selection:bg-amber-400/30 selection:text-amber-200">
      <SEO
        title="Agricultural & Cattle Feed Packaging Story | Graphic Galaxy"
        description="Discover how Graphic Galaxy designed high-impact agricultural and cattle feed packaging in Sangli. Clear product hierarchy, farmer trust, and retail-ready agro design."
        canonical="https://graphicgalaxystudio.netlify.app/design-stories/agricultural-packaging-design"
        ogTitle="Agricultural & Cattle Feed Packaging Design | Graphic Galaxy"
        ogDescription="Explore the design story behind Graphic Galaxy's agricultural bucket and feed packaging systems crafted in Sangli, Maharashtra."
        ogUrl="https://graphicgalaxystudio.netlify.app/design-stories/agricultural-packaging-design"
        ogImage="https://res.cloudinary.com/daxfbjcpc/image/upload/v1776491750/agriSticker_agnikh.webp"
        robots="index, follow"
        schema={agriSchema}
      />

      <Navbar />

      <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/design-stories"
            className="inline-flex items-center gap-2 text-white/50 hover:text-amber-400 text-sm font-semibold transition-colors"
          >
            <ArrowLeft size={16} /> Back to Design Stories
          </Link>
        </div>

        {/* 1. HERO SECTION */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-400/10 border border-teal-400/30 text-teal-400">
              Packaging Design · Agro & Feed
            </span>
            <span className="text-white/40 text-xs sm:text-sm font-medium">
              Industry: Agriculture & Animal Feed · Sangli / Maharashtra
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-8">
            Agricultural / Cattle Feed Packaging Design
          </h1>

          {/* Large Featured Visual */}
          <div className="rounded-3xl overflow-hidden border border-[#2D3748] bg-[#0E1726] p-6 sm:p-12 flex items-center justify-center shadow-2xl">
            <img
              src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1776491750/agriSticker_agnikh.webp"
              alt="Agricultural and cattle feed product packaging design by Graphic Galaxy"
              className="max-h-[460px] w-auto object-contain filter drop-shadow-2xl"
            />
          </div>
        </header>

        {/* 2. PROJECT OVERVIEW */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="grid md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-teal-400">
                01 · Overview
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                The Brief
              </h2>
            </div>
            <div className="md:col-span-8 space-y-3 text-white/70 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Agricultural and feed manufacturers across Maharashtra face intense competition on crowded agro-agency shelves.
              </p>
              <p>
                The objective was to engineer a robust 10kg bucket and pouch packaging system that clearly communicates product benefits, statutory FCO approvals, and precise dosage instructions to farmers.
              </p>
            </div>
          </div>
        </section>

        {/* 3. DESIGN CONCEPT */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="grid md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-teal-400">
                02 · Concept
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                The Thinking
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-white/70 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                We prioritized clarity and visual reassurance over decorative clutter. The primary visual anchors around a nurturing human hand cradling fertile topsoil and vibrant green plant shoots, symbolizing harvest prosperity.
              </p>
              <p>
                Clear hexagonal nutrient markers (N, P, K, Zn, Mg) establish scientific credibility while remaining easily decodable by farmers in regional markets.
              </p>
            </div>
          </div>
        </section>

        {/* 4. VISUAL IDENTITY / DESIGN SYSTEM */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-teal-400">
              03 · Design System
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Color Palette & Information Architecture
            </h2>
          </div>

          <div className="bg-[#111827] rounded-3xl border border-[#2D3748] p-6 sm:p-8 space-y-6">
            {/* Color Swatches */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {COLORS.map((c) => (
                <div key={c.name} className="rounded-2xl p-4 bg-[#0B0F14] border border-white/5 space-y-2">
                  <div className={`w-full h-14 rounded-xl ${c.tone} border border-white/10`} />
                  <div>
                    <span className="text-xs font-bold text-white block">{c.name}</span>
                    <span className="text-[11px] font-mono text-white/40">{c.hex}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Typography & Supporting Text */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-6 justify-between text-sm text-white/70 leading-relaxed">
              <div className="sm:max-w-md">
                <span className="text-teal-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  Type Architecture
                </span>
                <p>
                  Bold condensed sans-serif for product names paired with crisp geometric numerals for weight (10 kg) and dosage instructions.
                </p>
              </div>
              <div className="sm:max-w-md">
                <span className="text-teal-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  Palette Rationale
                </span>
                <p>
                  High-contrast emerald green and golden yellow trigger instant association with agricultural vitality and retail shelf dominance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BRAND APPLICATIONS */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-teal-400">
              04 · Applications
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Rigid Buckets & Flexible Pouches
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-[#2D3748] bg-[#0E141E] flex flex-col justify-between group">
              <div className="h-64 sm:h-72 overflow-hidden bg-black/40 flex items-center justify-center p-4">
                <img
                  src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1776491750/agriSticker_agnikh.webp"
                  alt="Humigrow GR plant growth activator 10kg agricultural bucket packaging"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0E141E] border-t border-[#2D3748]">
                <span className="text-xs font-bold text-white block">10kg Agro Bucket Packaging</span>
                <span className="text-[11px] text-white/40">Waterproof plastic bucket label engineered for outdoor durability</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#2D3748] bg-[#0E141E] flex flex-col justify-between group">
              <div className="h-64 sm:h-72 overflow-hidden bg-black/40 flex items-center justify-center p-4">
                <img
                  src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1776491750/annpurnaPouch_bpptzi.webp"
                  alt="Agricultural feed and fertilizer pouch packaging design"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0E141E] border-t border-[#2D3748]">
                <span className="text-xs font-bold text-white block">Flexible Feed & Agro Pouch</span>
                <span className="text-[11px] text-white/40">Multi-layer barrier pouch with moisture protection for granular feeds</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-white/50 leading-relaxed">
            The packaging system extends seamlessly across rigid buckets, flexible foil pouches, and transport cartons, maintaining rugged durability and clear shelf distinction in agricultural dealerships.
          </p>
        </section>

        {/* 6. CLOSING SECTION */}
        <section className="border-t border-white/10 pt-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#111827] via-[#111827] to-teal-950/20 border border-[#2D3748] space-y-6">
            <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed">
              Agricultural and cattle feed packaging designed by Graphic Galaxy, Sangli for a consistent and professional brand presence.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="interactive btn-amber px-6 py-3 text-sm font-bold inline-flex items-center gap-2 rounded-2xl shadow-lg"
              >
                <MessageSquare size={16} />
                <span>Discuss a Similar Project</span>
              </a>

              <Link
                to="/packaging-design-in-sangli"
                className="text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Explore Packaging Design in Sangli</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/design-stories"
              className="text-xs font-bold text-white/50 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <ArrowLeft size={13} /> Return to All Design Stories
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgriculturalPackagingStory;

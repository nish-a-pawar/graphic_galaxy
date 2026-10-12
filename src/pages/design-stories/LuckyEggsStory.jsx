import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageSquare } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../seo/SEO";
import { WHATSAPP_LINK } from "../../constants";

const luckyEggsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Lucky Eggs Logo Design Story",
    headline: "Lucky Eggs — Logo Design Story by Graphic Galaxy",
    author: {
      "@type": "LocalBusiness",
      name: "Graphic Galaxy",
      url: "https://graphicgalaxystudio.netlify.app",
      telephone: "+91 84597 63568",
    },
    description:
      "Explore the Lucky Eggs logo design story by Graphic Galaxy. Discover how custom typography, a rooster icon, and bold farmstead colors established a leading poultry brand in Sangli.",
    image:
      "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790852591/Lucky_eggs_logo_kkwmpn.jpg",
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
        name: "Lucky Eggs Logo Design",
        item: "https://graphicgalaxystudio.netlify.app/design-stories/lucky-eggs-logo-design",
      },
    ],
  },
];

const COLORS = [
  { name: "Farmstead Green", hex: "#0E6838", tone: "bg-[#0E6838]", text: "text-white" },
  { name: "Crest Coral Red", hex: "#D85852", tone: "bg-[#D85852]", text: "text-white" },
  { name: "Pure Shell White", hex: "#FFFFFF", tone: "bg-[#FFFFFF]", text: "text-[#0B0F14]" },
  { name: "Evergreen Outline", hex: "#083E21", tone: "bg-[#083E21]", text: "text-white" },
];

const LuckyEggsStory = () => {
  const whatsappUrl = `${WHATSAPP_LINK}&text=${encodeURIComponent(
    "Hi Graphic Galaxy, I read the Lucky Eggs Design Story and want to discuss a logo design project for my brand."
  )}`;

  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] min-h-screen font-inter selection:bg-amber-400/30 selection:text-amber-200">
      <SEO
        title="Lucky Eggs Logo Design Story | Poultry Brand Identity Sangli"
        description="Discover the Lucky Eggs logo design story by Graphic Galaxy. Learn how custom friendly typography, rooster iconography, and fresh branding created a market-leading poultry identity in Sangli."
        canonical="https://graphicgalaxystudio.netlify.app/design-stories/lucky-eggs-logo-design"
        ogTitle="Lucky Eggs Logo Design Story | Graphic Galaxy"
        ogDescription="Explore the design thinking behind Lucky Eggs' playful custom typography and high-recall poultry brand mark in Sangli."
        ogUrl="https://graphicgalaxystudio.netlify.app/design-stories/lucky-eggs-logo-design"
        ogImage="https://res.cloudinary.com/daxfbjcpc/image/upload/v1790852591/Lucky_eggs_logo_kkwmpn.jpg"
        robots="index, follow"
        schema={luckyEggsSchema}
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
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
              Logo Design · Brand Mark
            </span>
            <span className="text-white/40 text-xs sm:text-sm font-medium">
              Client: Lucky Eggs · Sangli
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-8">
            Lucky Eggs — Logo Design Story
          </h1>

          {/* Large Featured Visual */}
          <div className="rounded-3xl overflow-hidden border border-[#2D3748] bg-[#F8FAFC] p-8 sm:p-14 flex items-center justify-center shadow-2xl">
            <img
              src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1790852591/Lucky_eggs_logo_kkwmpn.jpg"
              alt="Lucky Eggs brand logo design with friendly rounded typography and integrated rooster icon"
              className="max-h-[380px] w-auto object-contain filter drop-shadow-md"
            />
          </div>
        </header>

        {/* 2. PROJECT OVERVIEW */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="grid md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
                01 · Overview
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                The Brief
              </h2>
            </div>
            <div className="md:col-span-8 space-y-3 text-white/70 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Lucky Eggs is a prominent wholesale and retail egg distribution brand in Sangli, supplying fresh farm poultry products to supermarkets, bakeries, and local retailers.
              </p>
              <p>
                The objective was to replace generic egg packaging with a distinctive, consumer-friendly brand mark that builds instant recognition across transport crates and retail outlets.
              </p>
            </div>
          </div>
        </section>

        {/* 3. DESIGN CONCEPT */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="grid md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
                02 · Concept
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                The Thinking
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-white/70 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                We crafted a playful yet professional typographic emblem. The wordmark features heavy, rounded letterforms that evoke the natural smoothness of an egg, while the initial letter &lsquo;l&rsquo; seamlessly integrates a stylized rooster comb and wattle in vibrant coral red.
              </p>
              <p>
                Enclosing the mark in a solid green badge ensures maximum contrast and quick brand recall from moving delivery vehicles.
              </p>
            </div>
          </div>
        </section>

        {/* 4. VISUAL IDENTITY / DESIGN SYSTEM */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
              03 · Design System
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Color Palette & Typography
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
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  Type Architecture
                </span>
                <p>
                  Custom rounded display lettering with soft terminals and consistent stroke weight designed specifically for poultry trade visibility.
                </p>
              </div>
              <div className="sm:max-w-md">
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  Palette Rationale
                </span>
                <p>
                  The vibrant green and coral red scheme establishes an immediate connection to organic farm health, while white letters ensure clear readability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BRAND APPLICATIONS */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
              04 · Applications
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Storefront & Vehicle Fleet Touchpoints
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-[#2D3748] bg-[#0E141E] flex flex-col justify-between group">
              <div className="h-64 sm:h-72 overflow-hidden bg-black/40 flex items-center justify-center p-4">
                <img
                  src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1780986611/backlit_board_for_salon_shop_hospitals_in_sangli_miraj_kupwad_dt9hnw.png"
                  alt="Backlit retail signage board design in Sangli"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0E141E] border-t border-[#2D3748]">
                <span className="text-xs font-bold text-white block">Retail Backlit Storefront Signboard</span>
                <span className="text-[11px] text-white/40">Glow board signage for wholesale dealer outlets across Sangli</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#2D3748] bg-[#0E141E] flex flex-col justify-between group">
              <div className="h-64 sm:h-72 overflow-hidden bg-black/40 flex items-center justify-center p-4">
                <img
                  src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1776493345/Logo_aditya_transport_md5tdb.webp"
                  alt="Commercial delivery fleet branding and logistics identity"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0E141E] border-t border-[#2D3748]">
                <span className="text-xs font-bold text-white block">Delivery Fleet Branding</span>
                <span className="text-[11px] text-white/40">High-visibility truck and tempo graphics for daily egg distribution</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-white/50 leading-relaxed">
            From wholesale delivery vans and backlit retail signboards to farm carton labels, the logo maintains high visibility and friendly appeal across Sangli&apos;s distribution network.
          </p>
        </section>

        {/* 6. CLOSING SECTION */}
        <section className="border-t border-white/10 pt-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#111827] via-[#111827] to-emerald-950/20 border border-[#2D3748] space-y-6">
            <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed">
              Logo and brand identity designed by Graphic Galaxy, Sangli for a consistent and professional brand presence.
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
                to="/logo-design-in-sangli"
                className="text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Explore Logo Design in Sangli</span>
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

export default LuckyEggsStory;

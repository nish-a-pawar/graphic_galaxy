import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageSquare } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../seo/SEO";
import { WHATSAPP_LINK } from "../../constants";

const sportsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Sports Event Branding Design Story — Sangli Marathon & S3 Cyclothon",
    headline: "Sports Event Branding — Sangli Marathon / S3 Cyclothon by Graphic Galaxy",
    author: {
      "@type": "LocalBusiness",
      name: "Graphic Galaxy",
      url: "https://graphicgalaxystudio.netlify.app",
      telephone: "+91 84597 63568",
    },
    description:
      "Explore the sports event branding design story for Sangli Marathon and S3 Cyclothon by Graphic Galaxy. Start/finish arches, medals, bibs, and dynamic race-day graphics in Sangli.",
    image:
      "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/best_social__media_post_design_in_sangli_acxpa8.webp",
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
        name: "Sports Event Branding",
        item: "https://graphicgalaxystudio.netlify.app/design-stories/sports-event-branding-sangli",
      },
    ],
  },
];

const COLORS = [
  { name: "Racing Red", hex: "#DC2626", tone: "bg-[#DC2626]", text: "text-white" },
  { name: "Kinetic Amber", hex: "#F59E0B", tone: "bg-[#F59E0B]", text: "text-[#0B0F14]" },
  { name: "Asphalt Slate", hex: "#0F172A", tone: "bg-[#0F172A]", text: "text-white" },
  { name: "Finish White", hex: "#FFFFFF", tone: "bg-[#FFFFFF]", text: "text-[#0B0F14]" },
];

const SportsEventBrandingStory = () => {
  const whatsappUrl = `${WHATSAPP_LINK}&text=${encodeURIComponent(
    "Hi Graphic Galaxy, I saw the Sports Event Branding Design Story and want to discuss branding for an upcoming marathon or sports event."
  )}`;

  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] min-h-screen font-inter selection:bg-amber-400/30 selection:text-amber-200">
      <SEO
        title="Sports Event Branding Story | Sangli Marathon & S3 Duathlon"
        description="Discover how Graphic Galaxy designed the dynamic visual identity for Sangli Marathon and S3 Cyclothon. Medals, arches, bibs, and race-day event branding in Sangli."
        canonical="https://graphicgalaxystudio.netlify.app/design-stories/sports-event-branding-sangli"
        ogTitle="Sports Event Branding — Sangli Marathon / S3 Cyclothon"
        ogDescription="Explore the visual design story behind Sangli Marathon and S3 Cyclothon event branding by Graphic Galaxy in Sangli."
        ogUrl="https://graphicgalaxystudio.netlify.app/design-stories/sports-event-branding-sangli"
        ogImage="https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/best_social__media_post_design_in_sangli_acxpa8.webp"
        robots="index, follow"
        schema={sportsSchema}
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
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 border border-rose-500/30 text-rose-400">
              Event Branding · Sports & Marathons
            </span>
            <span className="text-white/40 text-xs sm:text-sm font-medium">
              Clients: Sangli Marathon & S3 Academy · Sangli
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-8">
            Sports Event Branding — Sangli Marathon / S3 Cyclothon
          </h1>

          {/* Large Featured Visual */}
          <div className="rounded-3xl overflow-hidden border border-[#2D3748] bg-[#18181B] p-6 sm:p-12 flex items-center justify-center shadow-2xl">
            <img
              src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/best_social__media_post_design_in_sangli_acxpa8.webp"
              alt="Sangli Marathon event branding key visual designed by Graphic Galaxy"
              className="max-h-[460px] w-auto object-contain filter drop-shadow-2xl"
            />
          </div>
        </header>

        {/* 2. PROJECT OVERVIEW */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="grid md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-rose-400">
                01 · Overview
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                The Brief
              </h2>
            </div>
            <div className="md:col-span-8 space-y-3 text-white/70 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Major sports gatherings like the Sangli Marathon and S3 Cyclothon / Duathlon unite thousands of athletes and spectators across Western Maharashtra.
              </p>
              <p>
                The organizers engaged Graphic Galaxy to engineer high-energy visual systems that inspire participants from pre-event registration campaigns all the way to the finish line.
              </p>
            </div>
          </div>
        </section>

        {/* 3. DESIGN CONCEPT */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="grid md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-rose-400">
                02 · Concept
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                The Thinking
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-white/70 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                We built a dynamic visual language rooted in speed, kinetic energy, and personal triumph. Forward-slanting geometric diagonals and bold typography convey unstoppable momentum.
              </p>
              <p>
                The brand assets are engineered to maintain crystal-clear legibility at high runner speeds and across expansive citywide street venues.
              </p>
            </div>
          </div>
        </section>

        {/* 4. VISUAL IDENTITY / DESIGN SYSTEM */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-rose-400">
              03 · Design System
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Color Palette & Kinetic Typography
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
                <span className="text-rose-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  Type Architecture
                </span>
                <p>
                  Slanted athletic display typography engineered for distant visibility on arches, coupled with structured numbers for timing bibs.
                </p>
              </div>
              <div className="sm:max-w-md">
                <span className="text-rose-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  Palette Rationale
                </span>
                <p>
                  High-visibility red and electric amber generate an exhilarating atmosphere, while modular guidelines ensure consistency across apparel and prints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BRAND APPLICATIONS */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-rose-400">
              04 · Applications
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Race-Day & Environmental Touchpoints
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-[#2D3748] bg-[#0E141E] flex flex-col justify-between group">
              <div className="h-56 sm:h-64 overflow-hidden bg-black/40 flex items-center justify-center p-3">
                <img
                  src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1781251711/ChatGPT_Image_Jun_12_2026_01_28_33_PM_fketql.webp"
                  alt="Sangli Marathon grand start and finish arch design"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0E141E] border-t border-[#2D3748]">
                <span className="text-xs font-bold text-white block">Start & Finish Arch</span>
                <span className="text-[11px] text-white/40">High-span venue arch with sponsor integration</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#2D3748] bg-[#0E141E] flex flex-col justify-between group">
              <div className="h-56 sm:h-64 overflow-hidden bg-black/40 flex items-center justify-center p-3">
                <img
                  src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/ChatGPT_Image_Jun_12_2026_12_42_22_PM_cyjiia.webp"
                  alt="Sangli Marathon finisher trophy and medal design"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0E141E] border-t border-[#2D3748]">
                <span className="text-xs font-bold text-white block">Finisher Trophy</span>
                <span className="text-[11px] text-white/40">Custom-molded acrylic award commemorating podium finishes</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#2D3748] bg-[#0E141E] flex flex-col justify-between group">
              <div className="h-56 sm:h-64 overflow-hidden bg-black/40 flex items-center justify-center p-3">
                <img
                  src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1776494014/ChatGPT_Image_Apr_18_2026_12_03_12_PM_ucdhrv.png"
                  alt="S3 Cyclothon and Duathlon sports branding"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0E141E] border-t border-[#2D3748]">
                <span className="text-xs font-bold text-white block">S3 Cyclothon & Duathlon</span>
                <span className="text-[11px] text-white/40">Multi-sport emblem for Sangli&apos;s annual cycling challenge</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-white/50 leading-relaxed">
            From monumental street arches and route signages to custom finisher medals and race bibs, the branding unified every physical touchpoint into a cohesive, world-class athletic experience.
          </p>
        </section>

        {/* 6. CLOSING SECTION */}
        <section className="border-t border-white/10 pt-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#111827] via-[#111827] to-rose-950/20 border border-[#2D3748] space-y-6">
            <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed">
              Sports event branding designed by Graphic Galaxy, Sangli for a consistent and professional brand presence.
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
                to="/event-graphic-design-in-sangli"
                className="text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Explore Event Graphic Design in Sangli</span>
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

export default SportsEventBrandingStory;

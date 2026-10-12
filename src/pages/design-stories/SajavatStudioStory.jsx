import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageSquare } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../seo/SEO";
import { WHATSAPP_LINK } from "../../constants";

const sajavatSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Sajavat Studio Logo & Brand Identity Design Story",
    headline: "Sajavat Studio — Logo & Brand Identity by Graphic Galaxy",
    author: {
      "@type": "LocalBusiness",
      name: "Graphic Galaxy",
      url: "https://graphicgalaxystudio.netlify.app",
      telephone: "+91 84597 63568",
    },
    description:
      "Visual design story of the Sajavat Studio logo and brand identity designed by Graphic Galaxy, Sangli. Discover custom Devanagari lettering, peacock motif, and gift hamper branding for a premium gifting brand.",
    image:
      "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790852590/Sajavat_Studio_Final_Logo_Full_vwwfdj.jpg",
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
        name: "Sajavat Studio Brand Identity",
        item: "https://graphicgalaxystudio.netlify.app/design-stories/sajavat-studio-brand-identity",
      },
    ],
  },
];

const COLORS = [
  { name: "Royal Maroon", hex: "#701A2B", tone: "bg-[#701A2B]", text: "text-white" },
  { name: "Heritage Gold", hex: "#C39938", tone: "bg-[#C39938]", text: "text-[#0B0F14]" },
  { name: "Pearl White", hex: "#FFFFFF", tone: "bg-[#FFFFFF]", text: "text-[#0B0F14]" },
  { name: "Deep Charcoal", hex: "#1C1917", tone: "bg-[#1C1917]", text: "text-white" },
];

const APPLICATION_IMAGES = [
  {
    url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790929535/1f03f7b1-4437-4e54-9c50-55a535919e15_mlfqjd.webp",
    alt: "Sajavat Studio luxury shopping bag packaging design",
  },
  {
    url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790928669/ChatGPT_Image_Oct_2_2026_01_35_18_PM_p1wyse.png",
    alt: "Sajavat Studio brand identity application on gift packaging",
  },
  {
    url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790928669/ChatGPT_Image_Oct_2_2026_01_35_13_PM_r8zpfr.png",
    alt: "Sajavat Studio luxury business card design for gift brand",
  },
  {
    url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790928668/ChatGPT_Image_Oct_2_2026_01_35_25_PM_zbcqw6.png",
    alt: "Sajavat Studio festive gift hamper packaging application",
  },
  {
    url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790928668/ChatGPT_Image_Oct_2_2026_01_35_34_PM_qatyor.png",
    alt: "Sajavat Studio logo design application for gift brand",
  },
];

const SajavatStudioStory = () => {
  const whatsappUrl = `${WHATSAPP_LINK}&text=${encodeURIComponent(
    "Hi Graphic Galaxy, I saw the Sajavat Studio Design Story and would like to discuss a similar logo and brand identity project."
  )}`;

  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] min-h-screen font-inter selection:bg-amber-400/30 selection:text-amber-200">
      <SEO
        title="Sajavat Studio Logo & Brand Identity Story | Graphic Galaxy"
        description="Explore the Sajavat Studio logo design story by Graphic Galaxy, Sangli. Learn how custom Devanagari lettering, a peacock motif, and packaging design created a distinctive identity for a premium gifting brand."
        canonical="https://graphicgalaxystudio.netlify.app/design-stories/sajavat-studio-brand-identity"
        ogTitle="Sajavat Studio Logo & Brand Identity | Graphic Galaxy"
        ogDescription="Explore the visual design story behind Sajavat Studio's luxury gifting brand identity and custom Devanagari logo."
        ogUrl="https://graphicgalaxystudio.netlify.app/design-stories/sajavat-studio-brand-identity"
        ogImage="https://res.cloudinary.com/daxfbjcpc/image/upload/v1790852590/Sajavat_Studio_Final_Logo_Full_vwwfdj.jpg"
        robots="index, follow"
        schema={sajavatSchema}
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
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/10 border border-amber-400/30 text-amber-400">
              Brand Identity · Logo Design
            </span>
            <span className="text-white/40 text-xs sm:text-sm font-medium">
              Client: Sajavat Studio · Pune
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-8">
            Sajavat Studio — Logo & Brand Identity
          </h1>

          {/* Large Featured Visual */}
          <div className="rounded-3xl overflow-hidden border border-[#2D3748] bg-[#FAFAF9] p-8 sm:p-14 flex items-center justify-center shadow-2xl">
            <img
              src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1790852590/Sajavat_Studio_Final_Logo_Full_vwwfdj.jpg"
              alt="Sajavat Studio logo and brand identity design featuring Devanagari script and peacock motif"
              className="max-h-[380px] w-auto object-contain filter drop-shadow-md"
            />
          </div>
        </header>

        {/* 2. PROJECT OVERVIEW */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="grid md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">
                01 · Overview
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                What the Brand Needed
              </h2>
            </div>
            <div className="md:col-span-8 space-y-3 text-white/70 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Sajavat Studio is a bespoke gift hamper and celebration brand based in Pune, creating curated packaging for weddings, corporate gifting and festive occasions.
              </p>
              <p>
                The client approached Graphic Galaxy, Sangli for a premium logo and brand identity design that would feel elegant, festive and rooted in Indian culture. The goal was to create a visual identity that could work consistently across gift packaging, carry bags, festive tags and digital communication.
              </p>
            </div>
          </div>
        </section>

        {/* 3. DESIGN CONCEPT */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="grid md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">
                02 · Concept
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                The Idea Behind the Logo
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-white/70 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                The Sajavat Studio logo combines traditional Indian character with a clean and modern visual style.
              </p>
              <p>
                The custom Devanagari lettering flows naturally into a peacock-inspired form. The peacock represents elegance, beauty and celebration, making it suitable for a premium gifting and festive brand.
              </p>
              <p>
                The final logo was designed to remain clear and recognisable across packaging, print materials and digital brand applications.
              </p>
            </div>
          </div>
        </section>

        {/* 4. VISUAL IDENTITY / DESIGN SYSTEM */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">
              03 · Colors & Fonts
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Creating a Premium Festive Look
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
                <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  Font Style
                </span>
                <p>
                  Custom Devanagari lettering gives the brand a distinctive Indian character, while a clean modern English font supports secondary communication and keeps the overall identity balanced.
                </p>
              </div>
              <div className="sm:max-w-md">
                <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  Why These Colors
                </span>
                <p>
                  Maroon adds warmth, tradition and richness, while gold creates a premium and celebratory feel. White and charcoal help maintain clarity and balance across different brand applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BRAND APPLICATIONS */}
        <section className="mb-14 border-t border-white/10 pt-10">
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">
              04 · Applications
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
             Ways to Use the Brand
            </h2>
            <p className="text-white/70 text-base sm:text-lg mt-3 leading-relaxed font-normal">
              The Sajavat Studio identity can be extended across premium gift packaging, carry bags, festive tags and other brand materials to maintain a consistent and recognisable visual presence.
            </p>
          </div>

          {/* Unified Applications Grid */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {APPLICATION_IMAGES.map((img, idx) => (
    <div
      key={idx}
      className="rounded-2xl overflow-hidden border border-[#2D3748] bg-[#0E141E] group shadow-xl hover:border-amber-400/40 transition-all duration-300"
    >
      <div className="aspect-[4/5] bg-black/40 overflow-hidden">
        <img
          src={img.url}
          alt={img.alt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  ))}
</div>
</section>
        {/* 6. CLOSING SECTION */}
        <section className="border-t border-white/10 pt-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#111827] via-[#111827] to-amber-950/20 border border-[#2D3748] space-y-6">
            <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed">
              Logo and brand identity designed by Graphic Galaxy, Sangli for a premium gifting and celebration brand.
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

export default SajavatStudioStory;

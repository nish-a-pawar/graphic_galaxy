import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../seo/SEO";

const FEATURED_STORIES = [
  {
    id: "sajavat-studio",
    title: "Sajavat Studio",
    subtitle: "Logo & Brand Identity",
    category: "Brand Identity · Logo Design",
    summary:
      "A graceful Devanagari logotype combined with a custom peacock flourish, crafted for a premium gifting and hamper brand in Pune.",
    image:
      "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790852590/Sajavat_Studio_Final_Logo_Full_vwwfdj.jpg",
    alt: "Sajavat Studio logo and brand identity design by Graphic Galaxy",
    url: "/design-stories/sajavat-studio-brand-identity",
    accent: "from-amber-500/20 to-rose-500/10",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    bgTone: "bg-[#FAFAF9]", // Clean neutral presentation stage for logo
  },
  {
    id: "lucky-eggs",
    title: "Lucky Eggs",
    subtitle: "Logo Design Story",
    category: "Logo Design · Brand Identity",
    summary:
      "Bold, friendly, high-recall poultry brand identity featuring custom rounded typography and a seamlessly integrated rooster mark.",
    image:
      "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790852591/Lucky_eggs_logo_kkwmpn.jpg",
    alt: "Lucky Eggs logo design story by Graphic Galaxy Sangli",
    url: "/design-stories/lucky-eggs-logo-design",
    accent: "from-emerald-500/20 to-teal-500/10",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    bgTone: "bg-[#F8FAFC]",
  },
  
  // {
  //   id: "sports-event-branding",
  //   title: " S3 Sports Events",
  //   subtitle: "Sports Event Branding",
  //   category: "Event Branding · Visual Identity",
  //   summary:
  //     "High-octane multi-sport visual system covering start/finish arches, participant bibs, finisher medals, and social campaigns across Sangli.",
  //   image:
  //     "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/best_social__media_post_design_in_sangli_acxpa8.webp",
  //   alt: "Sangli Marathon and S3 sports event branding by Graphic Galaxy",
  //   url: "/design-stories/sports-event-branding-sangli",
  //   accent: "from-red-500/20 to-amber-500/10",
  //   badgeColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
  //   bgTone: "bg-[#18181B]",
  // },
];

const designStoriesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Design Stories | Graphic Galaxy Sangli",
    headline: "Design Stories & Visual Case Studies by Graphic Galaxy",
    url: "https://graphicgalaxystudio.netlify.app/design-stories",
    description:
      "Curated visual case studies of selected branding, logo design, packaging, and sports event identity projects designed by Graphic Galaxy in Sangli, Maharashtra.",
    provider: {
      "@type": "LocalBusiness",
      name: "Graphic Galaxy",
      url: "https://graphicgalaxystudio.netlify.app",
      telephone: "+91 84597 63568",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Pramod Dairy, Vishrambag",
        addressLocality: "Sangli",
        postalCode: "416416",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    hasPart: FEATURED_STORIES.map((story) => ({
      "@type": "CreativeWork",
      name: `${story.title} — ${story.subtitle}`,
      url: `https://graphicgalaxystudio.netlify.app${story.url}`,
      image: story.image,
      description: story.summary,
    })),
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
    ],
  },
];

const DesignStories = () => {
  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] min-h-screen font-inter selection:bg-amber-400/30 selection:text-amber-200">
      <SEO
        title="Design Stories & Visual Case Studies | Graphic Galaxy Sangli"
        description="Explore selected visual case studies by Graphic Galaxy. Discover the design thinking behind our logo design, packaging, brand identity, and event branding projects in Sangli."
        canonical="https://graphicgalaxystudio.netlify.app/design-stories"
        ogTitle="Design Stories & Visual Case Studies | Graphic Galaxy"
        ogDescription="Explore curated visual case studies showcasing selected logo design, brand identity, packaging, and sports event projects."
        ogUrl="https://graphicgalaxystudio.netlify.app/design-stories"
        ogImage="https://res.cloudinary.com/daxfbjcpc/image/upload/v1790852590/Sajavat_Studio_Final_Logo_Full_vwwfdj.jpg"
        robots="index, follow"
        schema={designStoriesSchema}
      />

      <Navbar />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        {/* Minimal Hero Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Sparkles size={13} />
            <span>Curated Case Studies</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Design <span className="text-gradient">Stories.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 font-medium leading-relaxed">
            Selected high-value projects unpacked as short visual case studies.
            Step through the creative rationale, visual identity systems, and
            on-ground brand touchpoints crafted by Graphic Galaxy.
          </p>
        </div>

        {/* 4 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {FEATURED_STORIES.map((story) => (
            <article
              key={story.id}
              className="group bg-[#111827] rounded-3xl border border-[#2D3748] hover:border-amber-400/40 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Featured Project Image Card */}
              <Link
                to={story.url}
                className="block relative overflow-hidden"
                aria-label={`View design story for ${story.title}`}
              >
                <div
                  className={`w-full aspect-[16/10] sm:aspect-[16/10] ${story.bgTone} p-6 sm:p-8 flex items-center justify-center relative overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]`}
                >
                  <img
                    src={story.image}
                    alt={story.alt}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border tracking-wide uppercase ${story.badgeColor}`}
                    >
                      {story.category}
                    </span>
                    <span className="text-white/40 text-xs font-semibold">
                      Case Study
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 group-hover:text-amber-400 transition-colors">
                    <Link to={story.url}>{story.title}</Link>
                  </h2>

                  <p className="text-white/40 text-sm font-semibold mb-3">
                    {story.subtitle}
                  </p>

                  <p className="text-white/70 text-sm sm:text-base font-normal leading-relaxed">
                    {story.summary}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    to={story.url}
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 group-hover:text-amber-300 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    <span>View Design Story</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to={story.url}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-amber-400 group-hover:border-amber-400 group-hover:text-[#0B0F14] transition-all duration-300"
                    aria-label={`Open ${story.title} story`}
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Minimal Bottom Bridge to Full Portfolio */}
        <section className="mt-20 pt-12 border-t border-[#2D3748]/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-widest mb-1">
              <Layers size={14} className="text-amber-400" />
              <span>Looking for more work?</span>
            </div>
            <p className="text-white/80 font-medium text-sm sm:text-base">
              Browse our comprehensive multi-category portfolio gallery.
            </p>
          </div>

          <Link
            to="/portfolio-graphic-designer-sangli"
            className="px-6 py-3 rounded-2xl bg-white/5 border border-[#2D3748] hover:border-amber-400 text-white font-bold text-sm inline-flex items-center gap-2 hover:bg-amber-400 hover:text-[#0B0F14] transition-all shrink-0"
          >
            <span>Explore Full Portfolio</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DesignStories;

/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Trophy,
  Briefcase,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Layers,
  Flag,
  Medal,
  Shirt,
  Share2,
  MapPin,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Star,
  Zap,
  Target,
  Users,
  Eye,
  Award,
  ShieldCheck,
  FileText,
  PartyPopper
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../seo/SEO";
import {
  WHATSAPP_LINK,
  PHONE,
  SEO_DATA,
  SERVICES,
  ADDRESS,
  DANDOBA_HILL_RUN_CASE_STUDY
} from "../constants";

/* ─── Structured Data (JSON-LD) ─────────────────────────────────── */
const eventDesignSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Event Graphic Design in Sangli",
    provider: {
      "@type": "LocalBusiness",
      name: "Graphic Galaxy",
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS,
        addressLocality: "Sangli",
        addressRegion: "Maharashtra",
        postalCode: "416416",
        addressCountry: "IN",
      },
      telephone: PHONE,
      url: "https://graphicgalaxystudio.netlify.app",
      image: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787564375/WhatsApp_Image_2026-08-24_at_3.07.05_PM_dwcoll.jpg",
    },
    areaServed: ["Sangli", "Miraj", "Kupwad", "Maharashtra"],
    serviceType: "Event Graphic Design, Event Branding, Corporate Event Graphics, Exhibition Graphics, Sports Event Branding",
    description: "Event graphic design in Sangli for corporate events, exhibitions and sports events. Graphic Galaxy creates event creatives, banners, backdrops, standees and promotional designs.",
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
        name: "Services",
        item: "https://graphicgalaxystudio.netlify.app/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Event Graphic Design in Sangli",
        item: "https://graphicgalaxystudio.netlify.app/event-graphic-design-in-sangli",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does event graphic design include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Event graphic design includes digital event creatives (social media posts, digital invitations, registration graphics), print event materials (flyers, brochures, invitations, certificates), venue graphics (banners, standees, stage backdrops, arches), and sports event graphics (bibs, medals, T-shirts, route maps).",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide event graphic design in Sangli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Graphic Galaxy provides professional event graphic design and event branding services across Sangli, Miraj, Kupwad, and nearby regions of Maharashtra.",
        },
      },
      {
        "@type": "Question",
        name: "What types of events do you design for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We design graphics for sports events (marathons, cyclothons, duathlons), corporate events (BNI meetings, business conferences), trade exhibitions, cultural festivals, award ceremonies, and community gatherings.",
        },
      },
      {
        "@type": "Question",
        name: "Do you design corporate event creatives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we design corporate event branding kits including BNI meeting graphics, conference presentations, VIP invitations, stage backdrops, standees, directional signage, and sponsor graphics.",
        },
      },
      {
        "@type": "Question",
        name: "Do you design exhibition banners and stall graphics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we design complete exhibition stall graphic suites including backwall flex banners, roll-up standees, product feature displays, promotional brochures, flyers, and QR displays.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide marathon and sports event graphics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, sports event branding is one of our key specialties. We create marathon posters, bib numbers, finisher medals, certificates, T-shirt graphics, start/finish arches, route signages, and race-day backdrops.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design both digital and print event creatives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we design both high-resolution digital event creatives for social media promotion and high-DPI production-ready files for venue printing and merchandise.",
        },
      },
      {
        "@type": "Question",
        name: "Can you create a complete event visual identity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we build cohesive event visual identities that maintain consistent color themes, typography, logo placement, and design language across all pre-event, venue, and post-event touchpoints.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide event graphic design in Miraj and Kupwad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we regularly serve corporate clients, event organizers, and sports committees across Miraj, Kupwad, and the surrounding Sangli district.",
        },
      },
    ],
  },
];

/* ─── Event Stories Carousel Data ──────────────────────────────── */
const eventStories = [
  {
    id: "dandoba-story",
    isFeatured: true,
    category: "RUN EVENT BRANDING",
    title: "Dandoba Hill Run / Walk 2026",
    meta: "Radhey Seva Foundation · Sangli · 16 August 2026",
    p1: "There was an event which was not a race — no win, no lose. It was simply a run / walk to be enjoyed in nature and to find yourself.",
    p2: "Radhey Seva Foundation approached Graphic Galaxy for the event graphic design and branding of Dandoba Hill Run / Walk 2026.",
    ctaText: "View Design Story →",
    ctaLink: "/portfolio/dandoba-hill-run-2026-branding",
    heroImage: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787564375/WhatsApp_Image_2026-08-24_at_3.07.05_PM_dwcoll.jpg",
    alt: "Dandoba Hill Run / Walk 2026 event branding and graphic design",
    gallery: [
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562729/ChatGPT_Image_Aug_20_2026_03_45_57_PM_v7jtit.png",
        label: "Finisher Wings Selfie Point",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562725/ChatGPT_Image_Aug_20_2026_02_55_25_PM_vmaotz.png",
        label: "Runner T-Shirt",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562725/ChatGPT_Image_Aug_20_2026_04_27_11_PM_yntw9f.png",
        label: "Start / Finish Arch",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562725/ChatGPT_Image_Aug_20_2026_03_52_28_PM_ynt7pv.png",
        label: "Finisher Trophy",
      },
    ],
  },
  {
    id: "s3-duathlon-story",
    isFeatured: false,
    category: "MULTI-SPORT EVENT BRANDING",
    title: "S3 Duathlon Season 4",
    meta: "S3 Academy · Sangli · 2026",
    p1: "A high-octane multi-sport event in Sangli bringing together cyclists and runners across Maharashtra.",
    p2: "Complete visual identity and event design including event logo, participant brochure, trophies, T-shirts, social media creatives and stage backdrops.",
    ctaText: "View Case Study →",
    ctaLink: "/portfolio-graphic-designer-sangli",
    heroImage: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1776494014/ChatGPT_Image_Apr_18_2026_12_03_12_PM_ucdhrv.png",
    alt: "S3 Duathlon Season 4 sports event branding and visual design",
    gallery: [
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781251711/trophy_duathlon_zfnzxd.webp",
        label: "Custom Trophy",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1778576273/WhatsApp_Image_2026-05-08_at_11.47.18_AM_y4roop.jpg",
        label: "Registration Post",
      },
    ],
  },
  {
    id: "mtdk-run-story",
    isFeatured: false,
    category: "RUNNING EVENT BRANDING",
    title: "MTDK RUN",
    meta: "MTDK School · Sangli · 2026",
    p1: "A community and student running event promoting fitness, athletic spirit and active community participation.",
    p2: "Event graphic design covering promotional creatives, event communication, print materials, medals, trophies and race-day branding.",
    ctaText: "View Case Study →",
    ctaLink: "/portfolio-graphic-designer-sangli",
    heroImage: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1778576272/WhatsApp_Image_2026-04-29_at_2.33.42_PM_hhrvma.jpg",
    alt: "MTDK RUN running event branding and print collateral",
    gallery: [
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/6d860301-abb4-4b46-a642-b4c6ff538113_jcyvss.webp",
        label: "Finisher Medal",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1778576273/WhatsApp_Image_2026-04-29_at_2.33.41_PM_mjtvrc.jpg",
        label: "Social Media Post",
      },
    ],
  },
  {
    id: "sangli-marathon-story",
    isFeatured: false,
    category: "MARATHON EVENT BRANDING",
    title: "Sangli Marathon",
    meta: "Vijeta Group · Sangli · 2026",
    p1: "Sangli's city-wide marathon uniting thousands of runners with energetic brand visuals across the city.",
    p2: "Complete marathon branding including social media promotions, participant materials, bibs, medals, trophies, T-shirts, event arches, stage backdrops, selfie points and race-day graphics.",
    ctaText: "View Case Study →",
    ctaLink: "/portfolio-graphic-designer-sangli",
    heroImage: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/best_social__media_post_design_in_sangli_acxpa8.webp",
    alt: "Sangli Marathon complete marathon branding and event graphic design",
    gallery: [
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781251711/ChatGPT_Image_Jun_12_2026_01_28_33_PM_fketql.webp",
        label: "Grand Arch",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/ChatGPT_Image_Jun_12_2026_12_42_22_PM_cyjiia.webp",
        label: "Trophy Design",
      },
    ],
  },
];

const eventProcessSteps = [
  {
    num: "01",
    title: "Understand",
    desc: "Understand the event, target audience, venue layout, theme, and key brand requirements in Sangli.",
    icon: <Target className="w-6 h-6 text-amber-400" />,
  },
  {
    num: "02",
    title: "Visual Direction",
    desc: "Develop the event's visual identity, graphic direction, color theme, and design language.",
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
  },
  {
    num: "03",
    title: "Design",
    desc: "Create the required digital, print, venue, and sports event graphics with precision.",
    icon: <Layers className="w-6 h-6 text-amber-400" />,
  },
  {
    num: "04",
    title: "Adapt",
    desc: "Adapt the visual system across different sizes, aspect ratios, formats, and physical applications.",
    icon: <Zap className="w-6 h-6 text-amber-400" />,
  },
  {
    num: "05",
    title: "Deliver",
    desc: "Provide organized, production-ready print files and optimized digital assets ready for deployment.",
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
  },
];

const faqsList = [
  {
    q: "What does event graphic design include?",
    a: "Event graphic design includes all visual touchpoints created for an event across digital formats (social media posts, digital invitations, registration graphics), print materials (flyers, brochures, invitations, certificates), venue graphics (banners, standees, stage backdrops, entrance arches), and specialized sports assets (bibs, medals, T-shirts, route maps).",
  },
  {
    q: "Do you provide event graphic design in Sangli?",
    a: "Yes! Graphic Galaxy is based in Vishrambag, Sangli, and provides comprehensive event graphic design and event branding services for businesses, sports committees, and event organizers across Sangli, Miraj, Kupwad, and nearby regions of Maharashtra.",
  },
  {
    q: "What types of events do you design for?",
    a: "We design graphics for corporate events, business conferences, BNI meetings, industrial exhibitions, trade shows, sports events (marathons, cyclothons, duathlons, fitness runs), cultural festivals, product launches, and community gatherings.",
  },
  {
    q: "Do you design corporate event creatives?",
    a: "Yes, we create corporate event branding kits including BNI meeting graphics, conference presentation templates, VIP invitations, stage backdrops, standees, directional signage, sponsor walls, and participant certificates.",
  },
  {
    q: "Do you design exhibition banners and stall graphics?",
    a: "Yes, we design complete exhibition stall graphic kits including backwall flex banners, roll-up standees, product feature displays, promotional flyers, brochures, counter graphics, and QR code displays.",
  },
  {
    q: "Do you provide marathon and sports event graphics?",
    a: "Absolutely. Sports event branding is one of our core specialties. We design marathon posters, registration graphics, bib numbers, finisher medals, certificates, event T-shirts, start/finish arches, route signages, and race-day backdrop graphics.",
  },
  {
    q: "Can you design both digital and print event creatives?",
    a: "Yes. We ensure full cross-media consistency by creating high-resolution digital assets for social media and web promotion, as well as production-ready high-DPI print files for banners, flex, offset cards, and merchandise.",
  },
  {
    q: "Can you create a complete event visual identity?",
    a: "Yes. Rather than designing isolated pieces, we build a cohesive event visual identity that connects color palettes, typography, theme graphics, and sponsor positioning across every touchpoint from announcement to race day.",
  },
  {
    q: "Do you provide event graphic design in Miraj and Kupwad?",
    a: "Yes, we regularly serve clients, corporate houses, and event committees throughout Miraj, Kupwad, and the broader Sangli district with fast turnaround times and print-ready deliverables.",
  },
];

/* ─── Animation Helpers ───────────────────────────────────────── */
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
          ? "border-amber-400 bg-amber-400/5 shadow-[0_4px_20px_rgba(245,158,11,0.1)]"
          : "border-[#2D3748] bg-[#111827] hover:border-amber-400/30"
      }`}
    >
      <button
        id={`faq-q-${idx}`}
        aria-expanded={open}
        aria-controls={`faq-a-${idx}`}
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer"
      >
        <span className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div id={`faq-a-${idx}`} className="px-6 pb-6 text-white/70 font-medium leading-relaxed border-t border-white/5 pt-4 text-base">
          {a}
        </div>
      )}
    </div>
  );
}

/* ─── Main Page Component ─────────────────────────────────────── */
const EventGraphicDesignInSangli = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const whatsappUrl = `${WHATSAPP_LINK}&text=Hi%2C%20I%20need%20Event%20Graphic%20Design%20services%20in%20Sangli`;

  const nextStory = () => {
    setActiveStoryIndex((prev) => (prev + 1) % eventStories.length);
  };

  const prevStory = () => {
    setActiveStoryIndex((prev) => (prev - 1 + eventStories.length) % eventStories.length);
  };

  const currentStory = eventStories[activeStoryIndex];

  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] min-h-screen font-inter selection:bg-amber-400/30 selection:text-amber-200 overflow-x-hidden">
      <SEO
        title="Event Graphic Design in Sangli | Event Creatives & Branding"
        description="Event graphic design in Sangli for corporate events, exhibitions and sports events. Graphic Galaxy creates event creatives, banners, backdrops, standees and promotional designs."
        canonical="https://graphicgalaxystudio.netlify.app/event-graphic-design-in-sangli"
        ogTitle="Event Graphic Design in Sangli | Event Creatives & Branding"
        ogDescription="Event graphic design in Sangli for corporate events, exhibitions and sports events. Graphic Galaxy creates event creatives, banners, backdrops, standees and promotional designs."
        ogUrl="https://graphicgalaxystudio.netlify.app/event-graphic-design-in-sangli"
        ogImage="https://res.cloudinary.com/daxfbjcpc/image/upload/v1787564375/WhatsApp_Image_2026-08-24_at_3.07.05_PM_dwcoll.jpg"
        robots="index, follow"
        schema={eventDesignSchema}
      />

      <Navbar />

      {/* ─── 7. HERO SECTION ───────────────────────────────────── */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-semibold mb-6">
                  <Calendar size={16} /> Event Branding & Graphic Design Studio • Sangli
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-6">
                  Event Graphic Design in Sangli
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-xl sm:text-2xl font-bold text-amber-400 mb-6 leading-snug">
                  Creative visuals that bring your event identity to life.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="text-white/70 font-medium text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
                  From corporate meetings and exhibitions to marathons, cyclothons and duathlons, Graphic Galaxy creates professional event graphics that keep your event visually consistent, recognizable and memorable.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive btn-amber px-8 py-4 text-base font-black flex items-center gap-3 shadow-[0_4px_25px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_30px_rgba(245,158,11,0.5)] transition-all"
                  >
                    <MessageSquare size={18} />
                    Plan Your Event Design
                  </a>
                  <a
                    href="#event-design-stories"
                    className="interactive px-8 py-4 text-base font-bold text-white bg-white/5 border border-[#2D3748] rounded-2xl hover:border-amber-400/50 hover:bg-amber-400/5 transition-all flex items-center gap-2"
                  >
                    View Event Design Stories
                    <ChevronRight size={18} />
                  </a>
                </div>
              </Reveal>

              {/* Quick Navigation Pills */}
              <Reveal delay={0.5}>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <span className="text-xs uppercase tracking-widest text-white/40 block mb-3 font-bold">
                    Quick Jump to Event Sections:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="#event-design-stories"
                      className="px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold hover:bg-amber-400 hover:text-black transition-all flex items-center gap-1.5"
                    >
                      <Sparkles size={13} /> Design Stories
                    </a>
                    <a
                      href="#sports-events"
                      className="px-3.5 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs font-bold hover:bg-emerald-400 hover:text-black transition-all flex items-center gap-1.5"
                    >
                      <Trophy size={13} /> Sports Events
                    </a>
                    <a
                      href="#corporate-events"
                      className="px-3.5 py-1.5 rounded-full bg-blue-400/10 border border-blue-400/30 text-blue-400 text-xs font-bold hover:bg-blue-400 hover:text-black transition-all flex items-center gap-1.5"
                    >
                      <Briefcase size={13} /> Corporate Events
                    </a>
                    <a
                      href="#exhibition-design"
                      className="px-3.5 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-400 text-xs font-bold hover:bg-teal-400 hover:text-black transition-all flex items-center gap-1.5"
                    >
                      <Megaphone size={13} /> Exhibition & Stalls
                    </a>
                    <a
                      href="#community-events"
                      className="px-3.5 py-1.5 rounded-full bg-purple-400/10 border border-purple-400/30 text-purple-400 text-xs font-bold hover:bg-purple-400 hover:text-white transition-all flex items-center gap-1.5"
                    >
                      <PartyPopper size={13} /> Festive & Community
                    </a>
                    <a
                      href="#services-matrix"
                      className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/20 text-white/70 text-xs font-bold hover:bg-white hover:text-black transition-all flex items-center gap-1.5"
                    >
                      <Layers size={13} /> Service Grid
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Visual Media Box */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={0.3}>
                <div className="relative rounded-3xl overflow-hidden border border-[#2D3748] bg-[#111827] p-3 shadow-2xl group">
                  <img
                    src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1787564375/WhatsApp_Image_2026-08-24_at_3.07.05_PM_dwcoll.jpg"
                    alt="Event graphic design in Sangli by Graphic Galaxy"
                    className="w-full h-auto rounded-2xl object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0B0F14]/90 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block">
                          Featured Design Story
                        </span>
                        <h3 className="text-white font-black text-lg">
                          Dandoba Hill Run / Walk 2026
                        </h3>
                        <p className="text-white/60 text-xs font-medium">
                          Nature-Focused Event Branding • Sangli
                        </p>
                      </div>
                      <Link
                        to="/portfolio/dandoba-hill-run-2026-branding"
                        className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-[#0B0F14] font-bold hover:scale-110 transition-transform"
                        aria-label="View Dandoba Hill Run Case Study"
                      >
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. INTRODUCTION / TOPICAL AUTHORITY SECTION ──────── */}
      <section className="py-20 bg-[#090D12] border-y border-[#2D3748]/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-400 block mb-3">
                  Integrated Event Branding
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                  Complete Event Graphic Design for Every Event Touchpoint
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="space-y-4 text-white/70 font-medium text-base sm:text-lg leading-relaxed">
                  <p>
                    Planning a memorable event requires far more than a single flex banner. Professional event graphic design establishes a connected visual language across every touchpoint—ensuring your attendees, sponsors, and participants experience a unified, high-impact brand identity.
                  </p>
                  <p>
                    At Graphic Galaxy, we create end-to-end event visual identity and event branding solutions for businesses, trade shows, sports committees, and community organizers in Sangli, Miraj, and Kupwad. From the first promotional post to the final event-day backdrop, every visual can work as part of one consistent event identity.
                  </p>
                  <p className="text-amber-400 font-bold">
                    Whether you need event promotion graphics, stage backdrops, venue signages, or finisher medals, we deliver design consistency that commands respect.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    "Event Announcements",
                    "Registration Creatives",
                    "Social Media Posts",
                    "Promotional Posters",
                    "VIP Invitations",
                    "Event Banners",
                    "Roll-up Standees",
                    "Stage Backdrops",
                    "Stage Graphics",
                    "Certificates",
                    "Directional Signage",
                    "Route Maps",
                    "Sponsor Graphics",
                    "Promotional Kits",
                    "Race-Day Visuals",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#111827] border border-[#2D3748] hover:border-amber-400/50 transition-all text-xs sm:text-sm font-semibold text-white/80 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. EVENT DESIGN STORIES (PREMIUM EDITORIAL CAROUSEL) ─── */}
      <section id="event-design-stories" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0B0F14] via-[#0E1520] to-[#0B0F14]">
        {/* Glow Effects */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-4">
                  <Sparkles size={14} /> Featured Portfolio
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  Event Design Stories
                </h2>
                <p className="text-white/70 text-base sm:text-lg font-medium mt-3 max-w-2xl leading-relaxed">
                  We create visual identities for runs, marathons, sports events, corporate events and exhibitions — from the first promotional creative to the final on-ground application.
                </p>
              </Reveal>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                onClick={prevStory}
                className="w-12 h-12 rounded-2xl bg-[#111827] border border-[#2D3748] flex items-center justify-center text-white hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/10 transition-all cursor-pointer shadow-lg"
                aria-label="Previous event story"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextStory}
                className="w-12 h-12 rounded-2xl bg-[#111827] border border-[#2D3748] flex items-center justify-center text-white hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/10 transition-all cursor-pointer shadow-lg"
                aria-label="Next event story"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Featured Horizontal Card / Slider Area */}
          <motion.div
            key={currentStory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-3xl border border-[#2D3748] bg-[#111827] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12"
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Editorial Copy */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-widest">
                      {currentStory.category}
                    </span>
                    {currentStory.isFeatured && (
                      <span className="px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black uppercase tracking-widest">
                        Featured Story
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                    {currentStory.title}
                  </h3>

                  <div className="text-xs sm:text-sm font-semibold text-white/50 mb-6 flex items-center gap-2">
                    <MapPin size={14} className="text-amber-400 shrink-0" />
                    <span>{currentStory.meta}</span>
                  </div>

                  <div className="space-y-4 text-white/70 font-medium text-base sm:text-lg leading-relaxed">
                    <p>{currentStory.p1}</p>
                    <p>{currentStory.p2}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to={currentStory.ctaLink}
                    className="interactive btn-amber px-8 py-4 text-base font-black inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_30px_rgba(245,158,11,0.5)] transition-all"
                  >
                    <span>{currentStory.ctaText}</span>
                  </Link>

                  {/* Dot Indicators */}
                  <div className="flex items-center gap-2">
                    {eventStories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveStoryIndex(idx)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          activeStoryIndex === idx
                            ? "w-8 bg-amber-400"
                            : "w-2.5 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Rich Layered Visual Showcase / Collage */}
              <div className="lg:col-span-6">
                <div className="space-y-4">
                  {/* Hero Visual */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#2D3748] bg-black/40 shadow-xl group">
                    <img
                      src={currentStory.heroImage}
                      alt={currentStory.alt}
                      className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-white/80 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 inline-block">
                      Primary Branding & Creative Layout
                    </div>
                  </div>

                  {/* Supporting Visual Thumbnails / Collage */}
                  {currentStory.gallery && currentStory.gallery.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {currentStory.gallery.map((item, gIdx) => (
                        <div
                          key={gIdx}
                          className="rounded-xl overflow-hidden border border-[#2D3748] bg-black/40 group relative h-24 sm:h-28"
                        >
                          <img
                            src={item.url}
                            alt={`${currentStory.title} - ${item.label}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                          <div className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-bold text-white bg-black/70 px-1.5 py-0.5 rounded text-center truncate">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 10. SPORTS EVENT SECTION (HIGH PRIORITY) ─────────── */}
      <section id="sports-events" className="py-24 relative overflow-hidden bg-[#0B0F14] border-t border-[#2D3748]/60">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-4">
                <Trophy size={14} /> Sports Events Section
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
                Sports Event Graphic Design & Branding in Sangli
              </h2>
              <p className="text-white/70 text-lg font-medium leading-relaxed">
                We craft high-energy visual systems for marathons, cyclothons, duathlons, running events, fitness challenges, and community sports tournaments across Sangli, Miraj, and Maharashtra.
              </p>
            </Reveal>
          </div>

          {/* Differentiator Highlight Banner */}
          <Reveal delay={0.2}>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-400/15 via-[#111827] to-[#111827] border border-amber-400/40 shadow-2xl mb-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-3xl">
                <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">
                  Our Strong Differentiator
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  "We don't just design a sports event poster. We create a consistent visual system that can continue from registration to race day."
                </h3>
                <p className="text-white/70 text-sm sm:text-base">
                  Every participant, runner, sponsor, and spectator sees a single, unified identity across digital teasers, race bibs, finisher medals, stage backdrops, and finisher photo points.
                </p>
              </div>
              <a
                href={`${WHATSAPP_LINK}&text=Hi%2C%20I%20want%20to%20discuss%20Sports%20Event%20Branding%20in%20Sangli`}
                target="_blank"
                rel="noreferrer"
                className="interactive btn-amber px-8 py-4 text-base font-black shrink-0 whitespace-nowrap"
              >
                Explore Sports Event Branding
              </a>
            </div>
          </Reveal>

          {/* Sports Deliverables Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: <Megaphone className="w-6 h-6 text-amber-400" />, label: "Marathon Posters", desc: "High-impact registration & promotional posters." },
              { icon: <Share2 className="w-6 h-6 text-amber-400" />, label: "Registration Creatives", desc: "Social media & digital registration banners." },
              { icon: <Flag className="w-6 h-6 text-amber-400" />, label: "Bib Designs", desc: "Custom participant race bib graphics with sponsor logos." },
              { icon: <Medal className="w-6 h-6 text-amber-400" />, label: "Medal Graphics", desc: "Bespoke finisher medal concept & artwork design." },
              { icon: <Award className="w-6 h-6 text-amber-400" />, label: "Certificates", desc: "Finisher & winner certificate design templates." },
              { icon: <Shirt className="w-6 h-6 text-amber-400" />, label: "T-Shirt Graphics", desc: "Event runner T-shirt apparel artwork." },
              { icon: <Zap className="w-6 h-6 text-amber-400" />, label: "Event Arches", desc: "Grand entrance & start/finish line arches." },
              { icon: <Layers className="w-6 h-6 text-amber-400" />, label: "Stage Backdrops", desc: "Prize distribution & main stage backdrops." },
              { icon: <MapPin className="w-6 h-6 text-amber-400" />, label: "Route Graphics", desc: "KM markers, water station signs & directional maps." },
              { icon: <Users className="w-6 h-6 text-amber-400" />, label: "Sponsor Graphics", desc: "Sponsor tier walls & photo backdrop boards." },
              { icon: <Eye className="w-6 h-6 text-amber-400" />, label: "Selfie Points", desc: "Interactive finisher wing selfie & photo backdrops." },
              { icon: <Star className="w-6 h-6 text-amber-400" />, label: "Race-Day Visuals", desc: "Complete visual ecosystem for event day." },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-5 rounded-2xl bg-[#111827] border border-[#2D3748] hover:border-amber-400/40 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-3">{item.icon}</div>
                    <h4 className="font-bold text-white text-base mb-1">{item.label}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. CORPORATE EVENTS BRANDING ─────────────────────── */}
      <section id="corporate-events" className="py-24 relative overflow-hidden bg-[#090D12] border-t border-[#2D3748]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Reveal>
                <div className="p-8 rounded-3xl bg-[#111827] border border-[#2D3748] space-y-6">
                  <div className="flex items-center gap-3 text-blue-400">
                    <Briefcase size={28} />
                    <span className="font-bold text-sm tracking-wider uppercase">Corporate Deliverables</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">What We Design for Corporate Events</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-white/70">
                    {[
                      "BNI Meeting Creatives",
                      "Conference Graphics",
                      "Corporate Invitations",
                      "Event Announcements",
                      "Social Media Creatives",
                      "Presentation / Event Graphics",
                      "Stage Backdrops",
                      "Executive Standees",
                      "Participant Certificates",
                      "Directional Signage",
                      "Sponsor / Partner Graphics",
                      "Corporate Event Collaterals",
                    ].map((d, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <Reveal>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-400/10 border border-blue-400/30 text-blue-400 text-xs font-black uppercase tracking-widest mb-3">
                  <Briefcase size={13} /> Corporate Events Section
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                  Corporate Event Graphic Design in Sangli
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-white/70 font-medium text-base sm:text-lg leading-relaxed mb-6">
                  Corporate meetings, BNI chapter events, business conferences, annual summits, seminars, and networking gatherings demand sharp, authoritative, and brand-consistent design.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <blockquote className="p-4 rounded-2xl bg-blue-400/5 border-l-4 border-blue-400 text-blue-300 font-semibold text-base mb-8">
                  Professional event visuals designed to stay aligned with your corporate brand.
                </blockquote>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-white/60 font-medium text-sm sm:text-base leading-relaxed mb-8">
                  We integrate your brand guidelines, corporate colors, and message hierarchy seamlessly into corporate event branding, business event design, and conference graphics for corporate clients across Sangli, Miraj, and Kupwad.
                </p>
                <a
                  href={`${WHATSAPP_LINK}&text=Hi%2C%20I%20want%20to%20discuss%20Corporate%20Event%20Graphic%20Design%20in%20Sangli`}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive btn-amber inline-flex items-center gap-2 px-7 py-3.5 text-sm font-black"
                >
                  Explore Corporate Event Design
                  <ArrowRight size={16} />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 12. EXHIBITION & STALL DESIGN ─────────────────────── */}
      <section id="exhibition-design" className="py-24 bg-[#0B0F14] border-t border-[#2D3748]/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-400 text-xs font-black uppercase tracking-widest mb-3">
                  <Megaphone size={13} /> Exhibition & Stall Section
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                  Exhibition Graphic Design in Sangli
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-white/70 font-medium text-base sm:text-lg leading-relaxed mb-6">
                  In a crowded exhibition hall or industrial trade show, your booth has only a few seconds to command attention. Exhibition graphic design needs to attract visitors instantly while presenting your product offerings with crisp visual clarity.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <blockquote className="p-4 rounded-2xl bg-teal-400/5 border-l-4 border-teal-400 text-teal-300 font-semibold text-base mb-8">
                  Make your exhibition space easier to notice, understand and remember.
                </blockquote>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-white/60 font-medium text-sm sm:text-base leading-relaxed mb-8">
                  From large stall backwalls and roll-up standees to product showcase graphics, promotional display graphics, and informational brochures, Graphic Galaxy ensures your exhibition stall in Sangli MIDC, Kupwad, or Kolhapur looks professional and inviting.
                </p>
                <a
                  href={`${WHATSAPP_LINK}&text=Hi%2C%20I%20want%20to%20discuss%20Exhibition%20Stall%20Design%20in%20Sangli`}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive btn-amber inline-flex items-center gap-2 px-7 py-3.5 text-sm font-black"
                >
                  Explore Exhibition Design
                  <ArrowRight size={16} />
                </a>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="p-8 rounded-3xl bg-[#111827] border border-[#2D3748] space-y-6">
                  <div className="flex items-center gap-3 text-teal-400">
                    <Megaphone size={28} />
                    <span className="font-bold text-sm tracking-wider uppercase">Exhibition Stall Package</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">Stall Graphics & Exhibition Banners</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-white/70">
                    {[
                      "Exhibition Banners",
                      "Exhibition Stall Graphics",
                      "Backwall Designs",
                      "Roll-Up Standees",
                      "Product Display Graphics",
                      "Promotional Creatives",
                      "Brochures & Catalogs",
                      "Handout Flyers",
                      "QR & Contact Displays",
                      "Directional Signage",
                    ].map((d, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 13. FESTIVE, CULTURAL & COMMUNITY EVENTS ──────────── */}
      <section id="community-events" className="py-24 relative overflow-hidden bg-[#090D12] border-t border-[#2D3748]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Reveal>
                <div className="p-8 rounded-3xl bg-[#111827] border border-[#2D3748] space-y-6">
                  <div className="flex items-center gap-3 text-purple-400">
                    <PartyPopper size={28} />
                    <span className="font-bold text-sm tracking-wider uppercase">Community & Cultural Assets</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">What We Design for Cultural Events</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-white/70">
                    {[
                      "Festival & Mahotsav Banners",
                      "Award Ceremony Stage Backdrops",
                      "VIP Passes & Digital Cards",
                      "Social Media Announcement Posts",
                      "Trophy & Memento Artworks",
                      "Celebrity Welcome Arches",
                      "Community Rally Graphics",
                      "Souvenir & Booklet Layouts",
                      "Directional & Schedule Boards",
                      "Sponsor Recognition Flex",
                    ].map((d, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <Reveal>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-400/10 border border-purple-400/30 text-purple-400 text-xs font-black uppercase tracking-widest mb-3">
                  <PartyPopper size={13} /> Cultural & Community Events Section
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                  Festive, Cultural & Community Event Design in Sangli
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-white/70 font-medium text-base sm:text-lg leading-relaxed mb-6">
                  From large-scale cultural mahotsavs, music and youth fests to foundation anniversary celebrations, award functions, and community gatherings in Sangli, Miraj, and Kupwad, we design graphics that bring energy and celebration.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <blockquote className="p-4 rounded-2xl bg-purple-400/5 border-l-4 border-purple-400 text-purple-300 font-semibold text-base mb-8">
                  Grand stage visuals and celebratory branding that inspire your audience.
                </blockquote>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-white/60 font-medium text-sm sm:text-base leading-relaxed mb-8">
                  We handle high-resolution stage backdrops, entrance arches, VIP invitations, social media campaigns, and memento artwork tailored to your event's theme and cultural essence.
                </p>
                <a
                  href={`${WHATSAPP_LINK}&text=Hi%2C%20I%20want%20to%20discuss%20Cultural%20or%20Community%20Event%20Branding%20in%20Sangli`}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive btn-amber inline-flex items-center gap-2 px-7 py-3.5 text-sm font-black"
                >
                  Plan Community Event
                  <ArrowRight size={16} />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 14. EVENT GRAPHIC DESIGN SERVICES (GRID) ────────── */}
      <section id="services-matrix" className="py-24 bg-[#0B0F14] border-t border-[#2D3748]/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-400 block mb-3">
                Complete Service Matrix
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
                What We Design for Events
              </h2>
              <p className="text-white/70 text-lg font-medium">
                Structured event graphic design services tailored across digital, print, on-ground venue, and sports formats.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1 */}
            <Reveal delay={0.1}>
              <div className="p-8 rounded-3xl bg-[#111827] border border-[#2D3748] hover:border-amber-400/50 transition-all h-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Share2 size={24} />
                </div>
                <h3 className="text-xl font-black text-white">Digital Event Creatives</h3>
                <ul className="space-y-2.5 text-sm font-medium text-white/70">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Event Social Media Creatives</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Registration Posts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Event Announcements</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Digital Invitations</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Promotional Creatives</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Event Posters</li>
                </ul>
              </div>
            </Reveal>

            {/* Category 2 */}
            <Reveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-[#111827] border border-[#2D3748] hover:border-amber-400/50 transition-all h-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-black text-white">Print Event Graphics</h3>
                <ul className="space-y-2.5 text-sm font-medium text-white/70">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Event Banners</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Promotional Flyers</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Event Brochures</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Printed Invitations</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Winner Certificates</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Promotional Materials</li>
                </ul>
              </div>
            </Reveal>

            {/* Category 3 */}
            <Reveal delay={0.3}>
              <div className="p-8 rounded-3xl bg-[#111827] border border-[#2D3748] hover:border-amber-400/50 transition-all h-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-black text-white">Venue & On-Ground</h3>
                <ul className="space-y-2.5 text-sm font-medium text-white/70">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Roll-Up Standees</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Stage Backdrops</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Stage Podium Graphics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Event Arches</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Directional Signage</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Sponsor Tier Walls</li>
                </ul>
              </div>
            </Reveal>

            {/* Category 4 */}
            <Reveal delay={0.4}>
              <div className="p-8 rounded-3xl bg-[#111827] border border-[#2D3748] hover:border-amber-400/50 transition-all h-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Trophy size={24} />
                </div>
                <h3 className="text-xl font-black text-white">Sports Event Assets</h3>
                <ul className="space-y-2.5 text-sm font-medium text-white/70">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Race Bib Numbers</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Finisher Medals</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Runner T-Shirts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Finisher Certificates</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Selfie & Photo Points</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Race-Day Visuals</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 15. KEY DIFFERENTIATOR SECTION ────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-[#090D12] border-t border-[#2D3748]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-400 block mb-3">
                Strategic Differentiator
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
                More Than Just Event Banners
              </h2>
              <p className="text-xl font-bold text-amber-400 leading-snug">
                An event has many visual touchpoints. We design them to work together.
              </p>
            </Reveal>
          </div>

          {/* Visual Journey Component */}
          <Reveal delay={0.2}>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#111827] border border-[#2D3748] space-y-12">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
                {[
                  { step: "01", name: "Social Media", icon: "📱", desc: "Teasers & Posts" },
                  { step: "02", name: "Registration", icon: "📝", desc: "Digital Forms" },
                  { step: "03", name: "Invitation", icon: "✉️", desc: "VIP Passes" },
                  { step: "04", name: "Banner & Arch", icon: "⛩️", desc: "Entrance Flex" },
                  { step: "05", name: "Standee", icon: "🚩", desc: "Schedule & Info" },
                  { step: "06", name: "Backdrop", icon: "🖼️", desc: "Main Stage" },
                  { step: "07", name: "Event-Day", icon: "🏅", desc: "Bibs & Medals" },
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="p-4 rounded-2xl bg-[#0B0F14] border border-[#2D3748] group-hover:border-amber-400 transition-all flex flex-col items-center space-y-2">
                      <span className="text-xs font-black text-amber-400">{item.step}</span>
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-bold text-white text-xs sm:text-sm">{item.name}</span>
                      <span className="text-[10px] text-white/50">{item.desc}</span>
                    </div>
                    {idx < 6 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-white/30 font-bold">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10 text-center max-w-3xl mx-auto space-y-4">
                <h4 className="text-xl font-black text-white">
                  Positioning Graphic Galaxy as Your Event Visual Design Partner
                </h4>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Instead of hiring separate vendors for banners, social posts, and apparel, Graphic Galaxy manages your entire event visual system. This eliminates inconsistent colors, mismatched fonts, and weak brand authority—making your event look thoroughly organized and prestigious.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 16. WHY PROFESSIONAL EVENT GRAPHIC DESIGN? ────────── */}
      <section className="py-24 bg-[#0B0F14] border-t border-[#2D3748]/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-400 block mb-3">
                Proven Value
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
                Why Event Graphic Design Matters
              </h2>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 rounded-3xl bg-[#111827] border border-[#2D3748] hover:border-amber-400/40 transition-all h-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
                  01
                </div>
                <h3 className="text-xl font-black text-white">Consistent Event Identity</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  A unified visual identity makes an event easier to recognize across digital and physical touchpoints.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-[#111827] border border-[#2D3748] hover:border-amber-400/40 transition-all h-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
                  02
                </div>
                <h3 className="text-xl font-black text-white">Professional Presentation</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Strong event graphics create a professional impression for attendees, participants, clients and sponsors.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-8 rounded-3xl bg-[#111827] border border-[#2D3748] hover:border-amber-400/40 transition-all h-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
                  03
                </div>
                <h3 className="text-xl font-black text-white">Clear Communication</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Well-designed signage and promotional graphics help people quickly understand event information and navigate the venue.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-8 rounded-3xl bg-[#111827] border border-[#2D3748] hover:border-amber-400/40 transition-all h-full space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold">
                  04
                </div>
                <h3 className="text-xl font-black text-white">Stronger Promotion</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Consistent event creatives help build recognition before, during and after the event.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 17. EVENT DESIGN PROCESS ──────────────────────────── */}
      <section className="py-24 bg-[#090D12] border-t border-[#2D3748]/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-400 block mb-3">
                How We Execute
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
                Our Event Graphic Design Process
              </h2>
              <p className="text-white/70 text-lg font-medium">
                A structured 5-step creative workflow to ensure timely delivery and flawless print readiness.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {eventProcessSteps.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-6 rounded-3xl bg-[#111827] border border-[#2D3748] hover:border-amber-400/40 transition-all h-full flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black text-amber-400 tracking-wider">
                        {s.num}
                      </span>
                      {s.icon}
                    </div>
                    <h3 className="text-lg font-black text-white mb-2">{s.title}</h3>
                    <p className="text-white/60 text-xs font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 18. LOCAL SEO SECTION ─────────────────────────────── */}
      <section className="py-24 bg-[#0B0F14] border-t border-[#2D3748]/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#111827] border border-[#2D3748] relative overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-black tracking-widest uppercase">
                    <MapPin size={16} /> Regional Service Coverage
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-white">
                    Event Graphic Design Services in Sangli, Miraj & Kupwad
                  </h2>
                  <p className="text-white/70 text-base leading-relaxed">
                    Graphic Galaxy proudly works with businesses, event organizers, corporate teams, exhibition participants, sports event committees, and community organizations across <strong>Sangli, Miraj, and Kupwad</strong>. Whether you need an experienced event graphic designer in Sangli for an upcoming business convention at Vishrambag, professional event branding in Sangli for an expo in Kupwad MIDC, or sports event design services in Miraj and Kupwad, our local studio is equipped to deliver exceptional quality.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive btn-amber px-8 py-4 text-base font-black text-center w-full sm:w-auto"
                  >
                    Discuss Your Local Event
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 19. FAQ SECTION ───────────────────────────────────── */}
      <section className="py-24 bg-[#090D12] border-t border-[#2D3748]/60 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-400 block mb-3">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
                Frequently Asked Questions About Event Graphic Design
              </h2>
              <p className="text-white/70 text-lg font-medium">
                Everything you need to know about our event design services in Sangli.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {faqsList.map((faq, idx) => (
                <FAQItem key={idx} q={faq.q} a={faq.a} idx={idx} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 20. FINAL CTA ─────────────────────────────────────── */}
      <section className="py-24 bg-[#0B0F14] border-t border-[#2D3748]/60 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#111827] to-[#0B0F14] border border-amber-400/40 shadow-[0_10px_40px_rgba(245,158,11,0.15)] space-y-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 text-amber-400 text-xs font-black uppercase tracking-widest">
                <Sparkles size={14} /> Start Planning Today
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Planning an Event in Sangli? Let's Design It.
              </h2>
              <p className="text-white/70 text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                Tell us what you're planning and we'll help turn your event requirements into a clear, consistent and professional visual experience.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive btn-amber px-10 py-4 text-lg font-black flex items-center gap-3 shadow-[0_4px_25px_rgba(245,158,11,0.3)]"
                >
                  <MessageSquare size={20} />
                  Start Your Event Project
                </a>
                <Link
                  to="/portfolio-graphic-designer-sangli"
                  className="interactive px-10 py-4 text-lg font-bold text-white bg-white/5 border border-[#2D3748] rounded-2xl hover:border-amber-400/50 hover:bg-amber-400/5 transition-all flex items-center gap-2"
                >
                  View Recent Projects
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 21. INTERNAL LINKING / RELATED SERVICES ───────────── */}
      <section className="py-16 bg-[#06090D] border-t border-[#2D3748]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <h3 className="text-xl font-black text-white">Explore More Design Services in Sangli</h3>
            <Link
              to="/portfolio/dandoba-hill-run-2026-branding"
              className="text-amber-400 font-bold text-sm hover:underline"
            >
              Explore Dandoba Hill Run Design Story →
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Dandoba Hill Run Design Story", path: "/portfolio/dandoba-hill-run-2026-branding" },
              { name: "Logo Design Services", path: "/logo-design-in-sangli" },
              { name: "Explore Social Media Design Services", path: "/social-media-design-sangli" },
              { name: "Packaging Design Services", path: "/packaging-design-in-sangli" },
              { name: "Brochure Design Services", path: "/brochure-design-sangli" },
              { name: "Flyer Design Services", path: "/flyer-design-sangli" },
              { name: "Invitation Card Design", path: "/invitation-design-sangli" },
              { name: "Signage Board Design", path: "/signage-design-sangli" },
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="px-4 py-2 rounded-xl bg-[#111827] border border-[#2D3748] text-xs font-semibold text-white/70 hover:text-amber-400 hover:border-amber-400/50 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventGraphicDesignInSangli;

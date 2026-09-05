/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  MapPin,
  Sparkles,
  Layers,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Eye,
  Trophy,
  Share2,
  Flag,
  Shirt,
  Compass
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../seo/SEO";
import { WHATSAPP_LINK, PHONE, ADDRESS } from "../constants";

/* ─── Structured Data (JSON-LD) ─────────────────────────────────── */
const dandobaSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Dandoba Hill Run / Walk 2026 - Event Branding Design Story",
    headline: "Dandoba Hill Run / Walk 2026 - Run Event Branding by Graphic Galaxy",
    author: {
      "@type": "LocalBusiness",
      name: "Graphic Galaxy",
      url: "https://graphicgalaxystudio.netlify.app",
    },
    datePublished: "2026-08-16",
    description:
      "Explore the visual design story and run event branding created by Graphic Galaxy for Dandoba Hill Run / Walk 2026 organized by Radhey Seva Foundation in Sangli.",
    image:
      "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787564375/WhatsApp_Image_2026-08-24_at_3.07.05_PM_dwcoll.jpg",
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
        name: "Event Graphic Design",
        item: "https://graphicgalaxystudio.netlify.app/event-graphic-design-in-sangli",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dandoba Hill Run / Walk 2026 Branding",
        item: "https://graphicgalaxystudio.netlify.app/portfolio/dandoba-hill-run-2026-branding",
      },
    ],
  },
];

/* ─── Chapter Definitions ────────────────────────────────────────── */
const CHAPTERS = [
  { id: 0, num: "01", key: "project", shortTitle: "The Project", fullTitle: "01 · The Project" },
  { id: 1, num: "02", key: "challenge", shortTitle: "The Challenge", fullTitle: "02 · The Challenge" },
  { id: 2, num: "03", key: "approach", shortTitle: "Design Approach", fullTitle: "03 · Design Approach" },
  { id: 3, num: "04", key: "showcase", shortTitle: "Design Showcase", fullTitle: "04 · Design Showcase" },
  { id: 4, num: "05", key: "screen-to-event", shortTitle: "Screen to Event", fullTitle: "05 · From Screen to Event" },
  { id: 5, num: "06", key: "outcome", shortTitle: "The Outcome", fullTitle: "06 · The Outcome" },
];

/* ─── Chapter 04 Design Gallery Assets ─────────────────────────── */
const SHOWCASE_GALLERY = [
  {
    id: "showcase-1",
    url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562727/ChatGPT_Image_Aug_20_2026_03_49_27_PM_hjeipa.png",
    title: "Sports event stage backdrop design",
    tag: "Main Stage Visual",
    alt: "Sports event stage backdrop design for Dandoba Hill Run Walk 2026",
    caption:
      "Central stage backdrop combining hill silhouettes, morning sunrise symbolism, and clean typography that reinforces movement and self-discovery.",
  },
  {
    id: "showcase-2",
    url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787564375/WhatsApp_Image_2026-08-24_at_3.07.05_PM_dwcoll.jpg",
    title: "Dandoba Hill Run / Walk 2026 event brochure design",
    tag: "Primary Key Visual",
    alt: "Dandoba Hill Run / Walk 2026 event brochure design",
    caption:
      "Comprehensive participant brochure setting the calm, nature-connected visual tone for the entire event across digital and print distribution.",
  },
  {
    id: "showcase-3",
    url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562725/ChatGPT_Image_Aug_20_2026_04_27_11_PM_yntw9f.png",
    title: "Dandoba Hill Run event start and finish arch",
    tag: "Venue Entrance Arch",
    alt: "Dandoba Hill Run event start and finish arch",
    caption:
      "High-visibility entrance arch with nature green accents, clear distance markers, and sponsor placements welcoming walkers and runners.",
  },
  {
    id: "showcase-4",
    url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562725/ChatGPT_Image_Aug_20_2026_02_55_25_PM_vmaotz.png",
    title: "Run event T-shirt and bib branding",
    tag: "Apparel Merchandise",
    alt: "Run event T-shirt and bib branding",
    caption:
      "Wearable participant apparel designed with custom mountain-trail motifs that turned each participant into an ambassador for nature.",
  },
  {
    id: "showcase-5",
    url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562725/ChatGPT_Image_Aug_20_2026_03_52_28_PM_ynt7pv.png",
    title: "Finisher acrylic trophy and memento design",
    tag: "Participant Trophy",
    alt: "Finisher acrylic trophy and memento design for Dandoba Hill Run",
    caption:
      "Custom shaped acrylic memento crafted with hill contour illustrations and event date, providing a lasting keepsake of personal achievement.",
  },
  {
    id: "showcase-6",
    url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562729/ChatGPT_Image_Aug_20_2026_03_45_57_PM_v7jtit.png",
    title: "Finisher wings photo selfie stand design",
    tag: "Selfie Backdrop",
    alt: "Dandoba Hill Run finisher wings selfie stand design",
    caption:
      "Interactive finisher photo backdrop featuring custom feather wings graphic and sponsor hierarchy that became the primary photo spot of the event.",
  },
  {
    id: "showcase-7",
    url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562726/ChatGPT_Image_Aug_20_2026_03_49_35_PM_gny7zw.png",
    title: "Dandoba Hill Run KM signal & billboard design",
    tag: "Venue Billboard",
    alt: "Dandoba Hill Run KM signal and venue billboard design",
    caption:
      "High-impact venue billboard graphic connecting the hill walk challenge with community refreshment and volunteer orientation.",
  },
];

/* ─── What We Designed Tags ─────────────────────────────────────── */
const WHAT_WE_DESIGNED = [
  "Brochure Design",
  "T-Shirt Design",
  "Bib Design",
  "Trophy Design",
  "Stage Backdrops",
  "Social Media Posts",
  "Start / Finish Arches",
  "KM Signals",
  "Selfie Stands",
  "Event Branding Assets",
];

/* ─── Animation Transitions ────────────────────────────────────── */
const chapterVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 40 : -40,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -40 : 40,
    scale: 0.98,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const DandobaHillRunDesignStory = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [direction, setDirection] = useState(1);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const storyContainerRef = useRef(null);

  const whatsappUrl = `${WHATSAPP_LINK}&text=Hi%2C%20I%20saw%20the%20Dandoba%20Hill%20Run%20Design%20Story%20and%20want%20to%20discuss%20an%20Event%20Branding%20project`;

  const scrollToStory = () => {
    if (storyContainerRef.current) {
      const topOffset = storyContainerRef.current.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const goToChapter = (newIndex) => {
    if (newIndex >= 0 && newIndex < CHAPTERS.length) {
      setDirection(newIndex > activeChapter ? 1 : -1);
      setActiveChapter(newIndex);
      scrollToStory();
    }
  };

  const nextChapter = () => {
    if (activeChapter < CHAPTERS.length - 1) {
      goToChapter(activeChapter + 1);
    }
  };

  const prevChapter = () => {
    if (activeChapter > 0) {
      goToChapter(activeChapter - 1);
    }
  };

  // Keyboard navigation support (ArrowRight / ArrowLeft)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Do not intercept when user is in input or textarea
      if (["input", "textarea"].includes(document.activeElement.tagName.toLowerCase())) {
        return;
      }
      if (e.key === "ArrowRight") {
        if (activeChapter < CHAPTERS.length - 1) {
          goToChapter(activeChapter + 1);
        }
      } else if (e.key === "ArrowLeft") {
        if (activeChapter > 0) {
          goToChapter(activeChapter - 1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeChapter]);

  // Gallery slider handlers for Chapter 04
  const nextGallery = () => {
    setGalleryIndex((prev) => (prev + 1) % SHOWCASE_GALLERY.length);
  };
  const prevGallery = () => {
    setGalleryIndex((prev) => (prev - 1 + SHOWCASE_GALLERY.length) % SHOWCASE_GALLERY.length);
  };

  const currentGalleryItem = SHOWCASE_GALLERY[galleryIndex];

  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] min-h-screen font-inter selection:bg-amber-400/30 selection:text-amber-200 overflow-x-hidden">
      <SEO
        title="Dandoba Hill Run / Walk 2026 | Run Event Branding Story | Graphic Galaxy"
        description="Explore the interactive Dandoba Hill Run / Walk 2026 event branding and graphic design story created by Graphic Galaxy for Radhey Seva Foundation in Sangli."
        canonical="https://graphicgalaxystudio.netlify.app/portfolio/dandoba-hill-run-2026-branding"
        ogTitle="Dandoba Hill Run / Walk 2026 | Run Event Branding Story"
        ogDescription="Explore the visual design story and run event branding created by Graphic Galaxy for Dandoba Hill Run / Walk 2026 in Sangli."
        ogUrl="https://graphicgalaxystudio.netlify.app/portfolio/dandoba-hill-run-2026-branding"
        ogImage="https://res.cloudinary.com/daxfbjcpc/image/upload/v1787564375/WhatsApp_Image_2026-08-24_at_3.07.05_PM_dwcoll.jpg"
        robots="index, follow"
        schema={dandobaSchema}
      />

      <Navbar />

      {/* ─── BREADCRUMB & BACK LINK ─── */}
      <div className="pt-32 pb-4 max-w-6xl mx-auto px-6">
        <Link
          to="/event-graphic-design-in-sangli"
          className="inline-flex items-center gap-2 text-white/50 hover:text-amber-400 text-sm font-semibold transition-colors"
        >
          <ArrowLeft size={16} /> Back to Event Graphic Design
        </Link>
      </div>

      {/* ─── HERO INTRODUCTION SECTION ─── */}
      <section className="pb-12 max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest">
              Run Event Branding
            </span>
            <span className="text-white/40 text-xs sm:text-sm font-medium flex items-center gap-1.5">
              <MapPin size={14} className="text-amber-400" /> Radhey Seva Foundation · Sangli
            </span>
            <span className="text-white/40 text-xs sm:text-sm font-medium flex items-center gap-1.5">
              <Calendar size={14} className="text-amber-400" /> 16 August 2026
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Dandoba Hill Run / Walk 2026
          </h1>

          <p className="text-xl sm:text-2xl text-amber-400 font-bold max-w-3xl leading-snug">
            A nature-centred visual identity designed for an event about movement, mindfulness and self-discovery.
          </p>
        </div>

        {/* Large Full-Width Hero Visual */}
        <div className="relative rounded-3xl overflow-hidden border border-[#2D3748] bg-[#111827] shadow-2xl mb-8 group">
          <img
            src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1787564375/WhatsApp_Image_2026-08-24_at_3.07.05_PM_dwcoll.jpg"
            alt="Dandoba Hill Run / Walk 2026 event brochure and primary branding design"
            className="w-full h-auto max-h-[700px] object-cover object-center group-hover:scale-101 transition-transform duration-700"
          />
          <div className="p-4 sm:p-6 bg-[#0E141E] border-t border-[#2D3748]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-white/50">
            <span className="font-semibold text-white/70">
              Dandoba Hill Run / Walk 2026 event brochure design & key visual identity
            </span>
            <span className="text-emerald-400 font-bold">Client: Radhey Seva Foundation</span>
          </div>
        </div>

        {/* Interactive Story Prompt after Hero */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-500/15 via-[#111827] to-[#111827] border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest">
              <Compass size={16} /> Interactive Visual Case Study
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Explore the 6 Chapters of the Dandoba Story
            </h2>
            <p className="text-white/60 text-xs sm:text-sm font-medium">
              Step through the project from initial concept to on-ground execution.
            </p>
          </div>

          <button
            onClick={() => goToChapter(0)}
            className="interactive btn-amber px-7 py-3.5 text-sm font-black flex items-center gap-2 shrink-0 cursor-pointer shadow-lg"
          >
            <span>01 / 06 · The Project</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ─── INTERACTIVE CHAPTER EXPERIENCE CONTAINER ─── */}
      <section ref={storyContainerRef} className="py-12 bg-[#090D12] border-y border-[#2D3748]/60 relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Chapter Progress Tabs Header */}
          <div className="mb-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-400 flex items-center gap-2">
                <Sparkles size={14} /> Story Chapters
              </span>
              <span className="text-xs font-bold text-white/50 bg-[#111827] px-3 py-1 rounded-full border border-white/10">
                Chapter {activeChapter + 1} of {CHAPTERS.length}
              </span>
            </div>

            {/* Progress Tabs Bar */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 bg-[#111827] p-2 rounded-2xl border border-[#2D3748]">
              {CHAPTERS.map((ch, idx) => {
                const isActive = activeChapter === idx;
                const isPast = activeChapter > idx;
                return (
                  <button
                    key={ch.id}
                    onClick={() => goToChapter(idx)}
                    className={`py-2.5 px-3 rounded-xl text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                      isActive
                        ? "bg-amber-400 text-[#0B0F14] font-black shadow-md"
                        : isPast
                        ? "text-white/80 hover:bg-white/5 hover:text-white"
                        : "text-white/40 hover:bg-white/5 hover:text-white/70"
                    }`}
                  >
                    <span className={`text-[10px] font-bold block ${isActive ? "text-[#0B0F14]/70" : "text-amber-400/80"}`}>
                      {ch.num}
                    </span>
                    <span className="text-xs font-bold truncate block">{ch.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── DYNAMIC CHAPTER VIEW (ANIMATED) ─── */}
          <div className="min-h-[580px] flex flex-col justify-between">
            <AnimatePresence mode="wait" custom={direction}>
              {/* ──────────────── CHAPTER 01: THE PROJECT ──────────────── */}
              {activeChapter === 0 && (
                <motion.div
                  key="chap-0"
                  custom={direction}
                  variants={chapterVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-8"
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#111827] p-6 sm:p-10 rounded-3xl border border-[#2D3748] shadow-2xl">
                    {/* Left: Project Narrative */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black uppercase tracking-widest">
                        01 · The Project
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                        Not a race — simply a run / walk to be enjoyed in nature.
                      </h2>
                      <div className="space-y-4 text-white/70 font-medium text-base sm:text-lg leading-relaxed">
                        <p>
                          There was an event which was not a race — no win, no lose. It was just a run / walk that should be enjoyed in nature, to find yourself.
                        </p>
                        <p>
                          Organised by Radhey Seva Foundation, Sangli at Dandoba Hills on 16th August 2026, the event was centred around enjoying nature, being active and connecting with yourself.
                        </p>
                        <p>
                          They approached Graphic Galaxy for the requirement of event graphic design and branding assets that would make the resemblance with nature and show a connection with nature.
                        </p>
                        <p>
                          Starting from brochure design, we designed T-shirts, bibs, trophies, stage backdrops, social media posts, start / finish arches, KM signals, selfie stands and much more.
                        </p>
                      </div>
                    </div>

                    {/* Right: Project Visual */}
                    <div className="lg:col-span-5">
                      <div className="rounded-2xl overflow-hidden border border-[#2D3748] bg-black/40 shadow-xl group">
                        <img
                          src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1787564375/WhatsApp_Image_2026-08-24_at_3.07.05_PM_dwcoll.jpg"
                          alt="Dandoba Hill Run / Walk 2026 event brochure design"
                          className="w-full h-auto max-h-[440px] object-cover group-hover:scale-102 transition-transform duration-500"
                        />
                        <div className="p-3 bg-[#0E141E] border-t border-[#2D3748] text-xs text-white/50 text-center font-medium">
                          Dandoba Hill Run / Walk 2026 event brochure design
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chapter 01 Bottom Action */}
                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => goToChapter(1)}
                      className="interactive btn-amber px-8 py-4 text-base font-black inline-flex items-center gap-2 cursor-pointer shadow-xl"
                    >
                      <span>Next: The Challenge</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ──────────────── CHAPTER 02: THE CHALLENGE ──────────────── */}
              {activeChapter === 1 && (
                <motion.div
                  key="chap-1"
                  custom={direction}
                  variants={chapterVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-8"
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#111827] p-6 sm:p-10 rounded-3xl border border-[#2D3748] shadow-2xl">
                    {/* Left: Design Visual */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                      <div className="rounded-2xl overflow-hidden border border-[#2D3748] bg-black/40 shadow-xl group">
                        <img
                          src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562726/ChatGPT_Image_Aug_20_2026_03_49_35_PM_gny7zw.png"
                          alt="Dandoba Hill Run KM signal and venue billboard design"
                          className="w-full h-auto max-h-[440px] object-cover group-hover:scale-102 transition-transform duration-500"
                        />
                        <div className="p-3 bg-[#0E141E] border-t border-[#2D3748] text-xs text-white/50 text-center font-medium">
                          Venue billboard & promotional creative
                        </div>
                      </div>
                    </div>

                    {/* Right: Challenge Narrative */}
                    <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-widest">
                        02 · The Challenge
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                        Stepping Away From Competitive Racing Clichés
                      </h2>
                      <div className="space-y-4 text-white/70 font-medium text-base sm:text-lg leading-relaxed">
                        <p>
                          The event was not about competition. It was about enjoying the run / walk, being surrounded by nature and finding yourself.
                        </p>
                        <p>
                          The challenge was to create an identity that felt different from a typical competitive race while maintaining consistency across digital promotions and multiple on-ground branding elements.
                        </p>
                      </div>
                      <blockquote className="p-4 rounded-2xl bg-emerald-500/5 border-l-4 border-emerald-400 text-emerald-300 font-semibold text-sm sm:text-base">
                        "How do you design high-energy event branding that encourages mindfulness and connection with nature rather than aggressive competition?"
                      </blockquote>
                    </div>
                  </div>

                  {/* Chapter 02 Bottom Actions */}
                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => goToChapter(0)}
                      className="px-6 py-3.5 rounded-2xl text-white/70 bg-white/5 border border-[#2D3748] hover:border-amber-400 hover:text-white font-bold text-sm inline-flex items-center gap-2 cursor-pointer transition-all"
                    >
                      <ArrowLeft size={16} />
                      <span>The Project</span>
                    </button>
                    <button
                      onClick={() => goToChapter(2)}
                      className="interactive btn-amber px-8 py-4 text-base font-black inline-flex items-center gap-2 cursor-pointer shadow-xl"
                    >
                      <span>Next: Design Approach</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ──────────────── CHAPTER 03: DESIGN APPROACH ──────────────── */}
              {activeChapter === 2 && (
                <motion.div
                  key="chap-2"
                  custom={direction}
                  variants={chapterVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-8"
                >
                  <div className="bg-[#111827] p-6 sm:p-10 rounded-3xl border border-[#2D3748] shadow-2xl space-y-8">
                    <div className="max-w-3xl space-y-4">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black uppercase tracking-widest">
                        03 · Our Design Approach
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                        Connected to Nature, Clean and Natural
                      </h2>
                      <div className="space-y-3 text-white/70 font-medium text-base sm:text-lg leading-relaxed">
                        <p>
                          We kept the theme connected to nature throughout the designs.
                        </p>
                        <p>
                          The visual direction was kept clean and neat to make the event branding look premium while still feeling natural and approachable.
                        </p>
                        <p>
                          The idea was to avoid making it look like a typical competitive race event and instead create a visual identity that suited the event's central idea — enjoying the surroundings, being active and finding yourself in nature.
                        </p>
                        <p>
                          The same visual language was carried across the run event branding, participant materials, social media creatives and on-ground event graphics.
                        </p>
                      </div>
                    </div>

                    {/* What We Designed Compact Visual List with subtle stagger */}
                    <div className="pt-6 border-t border-white/10 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
                        <Sparkles size={14} /> What We Designed (Full Scope)
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {WHAT_WE_DESIGNED.map((item, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 + 0.1 }}
                            className="px-4 py-2 rounded-xl bg-[#0B0F14] border border-[#2D3748] text-xs sm:text-sm font-bold text-white/90 hover:border-amber-400/50 hover:text-amber-400 transition-colors flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Chapter 03 Bottom Actions */}
                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => goToChapter(1)}
                      className="px-6 py-3.5 rounded-2xl text-white/70 bg-white/5 border border-[#2D3748] hover:border-amber-400 hover:text-white font-bold text-sm inline-flex items-center gap-2 cursor-pointer transition-all"
                    >
                      <ArrowLeft size={16} />
                      <span>The Challenge</span>
                    </button>
                    <button
                      onClick={() => goToChapter(3)}
                      className="interactive btn-amber px-8 py-4 text-base font-black inline-flex items-center gap-2 cursor-pointer shadow-xl"
                    >
                      <span>Next: Design Showcase</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ──────────────── CHAPTER 04: DESIGN SHOWCASE (INTERACTIVE SEQUENCE) ──────────────── */}
              {activeChapter === 3 && (
                <motion.div
                  key="chap-3"
                  custom={direction}
                  variants={chapterVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-8"
                >
                  <div className="bg-[#111827] p-6 sm:p-10 rounded-3xl border border-[#2D3748] shadow-2xl space-y-6">
                    {/* Header with Slider Controls */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-2">
                          04 · Design Showcase
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-white">
                          Interactive Visual Sequence
                        </h2>
                      </div>

                      {/* Design Slider Controls */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-amber-400 bg-black/40 px-3 py-1.5 rounded-xl border border-white/10 font-mono">
                          {String(galleryIndex + 1).padStart(2, "0")} / {String(SHOWCASE_GALLERY.length).padStart(2, "0")}
                        </span>
                        <button
                          onClick={prevGallery}
                          className="w-10 h-10 rounded-xl bg-white/5 border border-[#2D3748] flex items-center justify-center text-white hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/10 transition-all cursor-pointer"
                          aria-label="Previous Design Asset"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextGallery}
                          className="w-10 h-10 rounded-xl bg-white/5 border border-[#2D3748] flex items-center justify-center text-white hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/10 transition-all cursor-pointer"
                          aria-label="Next Design Asset"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Large Active Design Showcase Card */}
                    <div className="relative rounded-2xl overflow-hidden border border-[#2D3748] bg-black/50 shadow-2xl">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentGalleryItem.id}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.35 }}
                        >
                          <div className="max-h-[500px] overflow-hidden flex items-center justify-center bg-black/60">
                            <img
                              src={currentGalleryItem.url}
                              alt={currentGalleryItem.alt}
                              className="w-full h-auto max-h-[500px] object-contain object-center"
                            />
                          </div>
                          <div className="p-5 sm:p-6 bg-[#0E141E] border-t border-[#2D3748] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                              <span className="text-emerald-400 text-xs font-black uppercase tracking-wider block mb-1">
                                {currentGalleryItem.tag}
                              </span>
                              <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                                {currentGalleryItem.title}
                              </h3>
                              <p className="text-white/60 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
                                {currentGalleryItem.caption}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                              <button
                                onClick={prevGallery}
                                className="text-xs font-bold text-white/60 hover:text-amber-400 transition-colors"
                              >
                                ← Previous
                              </button>
                              <span className="text-white/30">•</span>
                              <button
                                onClick={nextGallery}
                                className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                              >
                                Next Design →
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Thumbnail Selector Strip */}
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 pt-2">
                      {SHOWCASE_GALLERY.map((item, idx) => (
                        <button
                          key={item.id}
                          onClick={() => setGalleryIndex(idx)}
                          className={`rounded-xl overflow-hidden border transition-all cursor-pointer h-16 relative ${
                            galleryIndex === idx
                              ? "border-amber-400 ring-2 ring-amber-400/30 scale-102"
                              : "border-[#2D3748] opacity-50 hover:opacity-100"
                          }`}
                        >
                          <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chapter 04 Bottom Actions */}
                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => goToChapter(2)}
                      className="px-6 py-3.5 rounded-2xl text-white/70 bg-white/5 border border-[#2D3748] hover:border-amber-400 hover:text-white font-bold text-sm inline-flex items-center gap-2 cursor-pointer transition-all"
                    >
                      <ArrowLeft size={16} />
                      <span>Design Approach</span>
                    </button>
                    <button
                      onClick={() => goToChapter(4)}
                      className="interactive btn-amber px-8 py-4 text-base font-black inline-flex items-center gap-2 cursor-pointer shadow-xl"
                    >
                      <span>Next: Screen to Event</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ──────────────── CHAPTER 05: FROM SCREEN TO EVENT ──────────────── */}
              {activeChapter === 4 && (
                <motion.div
                  key="chap-4"
                  custom={direction}
                  variants={chapterVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-8"
                >
                  <div className="bg-[#111827] p-6 sm:p-10 rounded-3xl border border-[#2D3748] shadow-2xl space-y-8">
                    <div className="max-w-3xl space-y-4">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-widest">
                        05 · From Screen to Event
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                        Design → Real-World On-Ground Application
                      </h2>
                      <p className="text-white/70 font-medium text-base sm:text-lg leading-relaxed">
                        The event graphic designs were taken from the digital screen to the actual event environment, creating a consistent visual presence across participant and event touchpoints.
                      </p>
                    </div>

                    {/* Split Layout: On-ground Photo & Billboard */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Visual 1: Selfie Wing Stand */}
                      <div className="rounded-2xl overflow-hidden border border-[#2D3748] bg-black/40 shadow-xl flex flex-col justify-between">
                        <div className="h-64 sm:h-80 overflow-hidden">
                          <img
                            src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562729/ChatGPT_Image_Aug_20_2026_03_45_57_PM_v7jtit.png"
                            alt="Dandoba Hill Run finisher wings selfie stand design"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5 bg-[#0E141E] border-t border-[#2D3748]">
                          <span className="text-amber-400 text-xs font-bold block mb-1">On-Ground Spot</span>
                          <h3 className="text-white font-bold text-base mb-1">
                            Finisher Wings Photo Selfie Stand
                          </h3>
                          <p className="text-white/50 text-xs leading-relaxed">
                            Interactive finisher photo backdrop featuring custom feather wings graphic that became the primary photo spot of the event.
                          </p>
                        </div>
                      </div>

                      {/* Visual 2: Start/Finish Arch */}
                      <div className="rounded-2xl overflow-hidden border border-[#2D3748] bg-black/40 shadow-xl flex flex-col justify-between">
                        <div className="h-64 sm:h-80 overflow-hidden">
                          <img
                            src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1787562725/ChatGPT_Image_Aug_20_2026_04_27_11_PM_yntw9f.png"
                            alt="Dandoba Hill Run event start and finish arch"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5 bg-[#0E141E] border-t border-[#2D3748]">
                          <span className="text-emerald-400 text-xs font-bold block mb-1">Event Entry Arch</span>
                          <h3 className="text-white font-bold text-base mb-1">
                            Start & Finish Arch Gate
                          </h3>
                          <p className="text-white/50 text-xs leading-relaxed">
                            High-visibility entrance arch with nature green accents, clear distance markers, and sponsor placements welcoming participants.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chapter 05 Bottom Actions */}
                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => goToChapter(3)}
                      className="px-6 py-3.5 rounded-2xl text-white/70 bg-white/5 border border-[#2D3748] hover:border-amber-400 hover:text-white font-bold text-sm inline-flex items-center gap-2 cursor-pointer transition-all"
                    >
                      <ArrowLeft size={16} />
                      <span>Design Showcase</span>
                    </button>
                    <button
                      onClick={() => goToChapter(5)}
                      className="interactive btn-amber px-8 py-4 text-base font-black inline-flex items-center gap-2 cursor-pointer shadow-xl"
                    >
                      <span>Next: The Outcome</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ──────────────── CHAPTER 06: THE OUTCOME ──────────────── */}
              {activeChapter === 5 && (
                <motion.div
                  key="chap-5"
                  custom={direction}
                  variants={chapterVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-8"
                >
                  <div className="bg-[#111827] p-8 sm:p-14 rounded-3xl border border-[#2D3748] shadow-2xl text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-widest">
                      06 / 06 · The Outcome
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
                      A Unified Visual Presence From First Creative to Finish Line
                    </h2>

                    <div className="space-y-5 text-white/70 font-medium text-base sm:text-xl leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
                      <p>
                        The final event branding system maintained a consistent identity across promotional, participant and on-ground event touchpoints while staying connected to the central idea of nature, movement and self-discovery.
                      </p>
                      <p className="text-amber-400 font-bold text-lg sm:text-2xl">
                        The complete run / walk event branding carried the same visual language from the first promotional creative to the actual event experience.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="interactive btn-amber px-8 py-4 text-base font-black flex items-center gap-2 shadow-xl"
                      >
                        <MessageSquare size={18} />
                        Discuss Your Event Project
                      </a>
                      <button
                        onClick={() => goToChapter(3)}
                        className="px-8 py-4 text-base font-bold text-white bg-white/5 border border-[#2D3748] rounded-2xl hover:border-amber-400 hover:bg-amber-400/5 transition-all cursor-pointer"
                      >
                        Replay Design Showcase
                      </button>
                    </div>
                  </div>

                  {/* Chapter 06 Bottom Navigation */}
                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => goToChapter(4)}
                      className="px-6 py-3.5 rounded-2xl text-white/70 bg-white/5 border border-[#2D3748] hover:border-amber-400 hover:text-white font-bold text-sm inline-flex items-center gap-2 cursor-pointer transition-all"
                    >
                      <ArrowLeft size={16} />
                      <span>Screen to Event</span>
                    </button>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 size={16} /> Story Complete
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─── FIXED / STICKY BOTTOM STORY NAVIGATION BAR ─── */}
      <div className="sticky bottom-4 z-40 max-w-lg mx-auto px-4 pointer-events-auto">
        <div className="bg-[#0B0F14]/95 backdrop-blur-md border border-[#2D3748] p-2.5 rounded-2xl shadow-2xl flex items-center justify-between gap-3">
          {/* Previous Button */}
          <button
            onClick={prevChapter}
            disabled={activeChapter === 0}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeChapter === 0
                ? "text-white/20 bg-transparent cursor-not-allowed"
                : "text-white/80 bg-white/5 hover:bg-amber-400 hover:text-black"
            }`}
          >
            <ChevronLeft size={15} />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Current Chapter Indicator */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-black text-amber-400">
              {CHAPTERS[activeChapter].num} / 06
            </span>
            <span className="text-xs font-semibold text-white/70 truncate max-w-[120px] sm:max-w-[180px]">
              {CHAPTERS[activeChapter].shortTitle}
            </span>
          </div>

          {/* Next Button */}
          <button
            onClick={nextChapter}
            disabled={activeChapter === CHAPTERS.length - 1}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeChapter === CHAPTERS.length - 1
                ? "text-white/20 bg-transparent cursor-not-allowed"
                : "text-black bg-amber-400 hover:bg-amber-300 font-black shadow-md"
            }`}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* ─── COMPLETION STATE: MORE EVENT DESIGN STORIES ─── */}
      <section className="py-24 max-w-6xl mx-auto px-6 border-t border-[#2D3748]/60 mt-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-amber-400 block mb-2">
              Story Complete · Explore More
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              More Event Design Stories
            </h2>
          </div>
          <Link
            to="/event-graphic-design-in-sangli"
            className="text-amber-400 text-sm font-bold hover:underline inline-flex items-center gap-1.5"
          >
            All Event Design Services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Sangli Marathon */}
          <div className="rounded-3xl border border-[#2D3748] bg-[#111827] overflow-hidden flex flex-col justify-between group hover:border-amber-400/50 transition-all shadow-xl">
            <div className="h-56 overflow-hidden bg-black/40">
              <img
                src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/best_social__media_post_design_in_sangli_acxpa8.webp"
                alt="Sangli Marathon branding and event design"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-teal-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  Marathon Branding
                </span>
                <h3 className="text-xl font-black text-white">Sangli Marathon</h3>
                <p className="text-white/60 text-xs font-medium line-clamp-2">
                  Complete marathon branding including bibs, medals, arches, and race-day graphics.
                </p>
              </div>
              <Link
                to="/event-graphic-design-in-sangli#sports-events"
                className="text-amber-400 font-bold text-sm inline-flex items-center gap-1 hover:translate-x-1 transition-transform"
              >
                View Design Story <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Card 2: S3 Duathlon */}
          <div className="rounded-3xl border border-[#2D3748] bg-[#111827] overflow-hidden flex flex-col justify-between group hover:border-amber-400/50 transition-all shadow-xl">
            <div className="h-56 overflow-hidden bg-black/40">
              <img
                src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1776494014/ChatGPT_Image_Apr_18_2026_12_03_12_PM_ucdhrv.png"
                alt="S3 Duathlon sports event branding in Sangli"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-teal-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  Sports Event Branding
                </span>
                <h3 className="text-xl font-black text-white">S3 Duathlon Season 4</h3>
                <p className="text-white/60 text-xs font-medium line-clamp-2">
                  Multi-sport visual identity, brochures, runner T-shirts, and stage backdrops.
                </p>
              </div>
              <Link
                to="/event-graphic-design-in-sangli#sports-events"
                className="text-amber-400 font-bold text-sm inline-flex items-center gap-1 hover:translate-x-1 transition-transform"
              >
                View Design Story <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Card 3: MTDK RUN */}
          <div className="rounded-3xl border border-[#2D3748] bg-[#111827] overflow-hidden flex flex-col justify-between group hover:border-amber-400/50 transition-all shadow-xl">
            <div className="h-56 overflow-hidden bg-black/40">
              <img
                src="https://res.cloudinary.com/daxfbjcpc/image/upload/v1778576272/WhatsApp_Image_2026-04-29_at_2.33.42_PM_hhrvma.jpg"
                alt="MTDK RUN running event branding in Sangli"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-teal-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  Running Event Branding
                </span>
                <h3 className="text-xl font-black text-white">MTDK RUN</h3>
                <p className="text-white/60 text-xs font-medium line-clamp-2">
                  Event communication, participant booklets, medals, and on-ground graphics.
                </p>
              </div>
              <Link
                to="/event-graphic-design-in-sangli#sports-events"
                className="text-amber-400 font-bold text-sm inline-flex items-center gap-1 hover:translate-x-1 transition-transform"
              >
                View Design Story <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 bg-[#090D12] border-t border-[#2D3748]/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#111827] border border-amber-400/30 space-y-6 shadow-2xl">
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Planning a similar event?
            </h2>
            <p className="text-white/70 text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              From event branding to on-ground graphics, let's create a visual identity that people remember.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="interactive btn-amber px-8 py-4 text-base font-black flex items-center gap-2 shadow-[0_4px_25px_rgba(245,158,11,0.3)]"
              >
                <MessageSquare size={18} />
                Discuss Your Project →
              </a>
              <Link
                to="/contact"
                className="interactive px-8 py-4 text-base font-bold text-white bg-white/5 border border-[#2D3748] rounded-2xl hover:border-amber-400/50 hover:bg-amber-400/5 transition-all"
              >
                Contact Studio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DandobaHillRunDesignStory;

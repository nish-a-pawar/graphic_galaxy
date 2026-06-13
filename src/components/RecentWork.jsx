import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

import { Link } from "react-router-dom";


import posterSample from "../assets/images/brochure.jpeg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "S3 Duathlon",
    category: "Sports Event Branding",
    image: posterSample,
    tag: "Completed",
    assets: [
      { url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1776494014/ChatGPT_Image_Apr_18_2026_12_03_12_PM_ucdhrv.png", name: "Logo" },
      { url: posterSample, name: "Brochure" },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781251711/trophy_duathlon_zfnzxd.webp",
        name: "Trophy ",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1778576273/WhatsApp_Image_2026-05-08_at_11.47.18_AM_y4roop.jpg",
        name: "Social Media Post",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1778576476/WhatsApp_Image_2026-02-22_at_2.27.20_PM_jd0ixd.jpg",
        name: "Trophy",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781251711/trophy_duathlon_zfnzxd.webp",
        name: "Trophy",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1778576477/Gemini_Generated_Image_ppwlqxppwlqxppwl_hlrl95.png",
        name: "T Shirt",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781251711/ChatGPT_Image_Jun_12_2026_01_28_33_PM_fketql.webp",
        name: "Start/Finish Gate",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781251711/ChatGPT_Image_Jun_12_2026_01_32_39_PM_nc2slz.webp",
        name: "Selfie Point",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781251710/ChatGPT_Image_Jun_12_2026_01_37_16_PM_nihunz.webp",
        name: "Stage Backdrop",
      },
    ],
  },

  {
    title: "MTDK RUN",
    category: "Sports Event Branding",
    image:
      "https://res.cloudinary.com/daxfbjcpc/image/upload/v1778576272/WhatsApp_Image_2026-04-29_at_2.33.42_PM_hhrvma.jpg",

    tag: "Completed",

    assets: [
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1778576273/WhatsApp_Image_2026-04-29_at_2.33.41_PM_mjtvrc.jpg",
        name: "Social Media Post",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1778576272/WhatsApp_Image_2026-04-29_at_2.33.42_PM_hhrvma.jpg",
        name: "Brochure",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/6d860301-abb4-4b46-a642-b4c6ff538113_jcyvss.webp",
        name: "Medal",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/ChatGPT_Image_Jun_12_2026_12_42_22_PM_cyjiia.webp",
        name: "Trophy",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/best_social__media_post_design_in_sangli_acxpa8.webp",
        name: "Social Media Post",
      },
      {
        url: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1781249551/75d72dd7-c1dd-431c-9c95-7e9cd3b58733_qgtrmo.webp",
        name: "Medal",
      },
    ],
  },
];

const RecentWork = () => {
  const gridRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);

  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  // OPEN MODAL
  const openModal = (index) => {
    setSelectedProject(index);
    setCurrentAssetIndex(0);

    document.body.style.overflow = "hidden";
  };

  // CLOSE MODAL
  const closeModal = () => {
    setSelectedProject(null);

    document.body.style.overflow = "";
  };

  // NEXT
  const nextAsset = (e) => {
    e.stopPropagation();

    if (selectedProject !== null) {
      setCurrentAssetIndex(
        (prev) => (prev + 1) % projects[selectedProject].assets.length
      );
    }
  };

  // PREV
  const prevAsset = (e) => {
    e.stopPropagation();

    if (selectedProject !== null) {
      setCurrentAssetIndex(
        (prev) =>
          (prev - 1 + projects[selectedProject].assets.length) %
          projects[selectedProject].assets.length
      );
    }
  };

  // GSAP
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".work-card");

    if (!cards?.length) return;

    gsap.fromTo(
      cards,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 82%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="portfolio" className="py-28 bg-[#0B0F14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-4">
              Our Portfolio
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-white">
              Recent <span className="text-gradient">Work.</span>
            </h2>
          </div>

          <p className="max-w-md text-white/40 font-medium text-lg">
            A showcase of our latest design projects across various industries.
          </p>
        </div>

        {/* GRID */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
        >
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => openModal(i)}
              className="work-card w-full max-w-[420px] group relative h-[300px] sm:h-[420px] rounded-3xl overflow-hidden cursor-pointer border border-[#2D3748] hover:border-amber-400/40 transition-all duration-500"
              style={{ opacity: 0 }}
            >
              {/* IMAGE */}
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent)]" />

              {/* TAG */}
              {p.tag && (
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1.5 bg-amber-400 text-[#0B0F14] text-xs font-black rounded-full uppercase tracking-wider">
                    {p.tag}
                  </span>
                </div>
              )}

              {/* CONTENT */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-teal-400 font-bold uppercase tracking-wider text-xs mb-2">
                  {p.category}
                </span>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">
                      {p.title}
                    </h3>
                    <p className="text-sm text-white/70 font-medium line-clamp-1 max-w-[250px]">
                      {p.assets.map((a) => a.name).join(", ")}
                    </p>
                  </div>

                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-[#0B0F14] opacity-100 translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:translate-y-2 md:group-hover:translate-y-0 shrink-0">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject !== null && (
          <div className="fixed inset-0 z-[100] bg-[#0B0F14] overflow-hidden flex flex-col md:flex-row">
            {/* CLOSE */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 p-3 rounded-full backdrop-blur-md transition-colors z-50 border border-white/10"
            >
              <X size={24} />
            </button>

            {/* SIDEBAR */}
            <div className="w-full md:w-1/3 md:h-screen p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#2D3748] flex flex-col justify-center bg-black/30 z-10 shrink-0">
              <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                {projects[selectedProject].category}
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                {projects[selectedProject].title}
              </h2>

              <div className="w-16 h-1 bg-amber-400 mb-6"></div>

              <p className="text-white/60 mb-8 font-medium">
                Browsing brand assets. Click Next or Back to view multiple
                design files provided for this event.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {projects[selectedProject].assets.map((asset, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
                  >
                    {asset.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CAROUSEL */}
            <div className="flex-1 w-full relative flex items-center justify-center p-4 min-h-[50vh]">
              {/* PREV */}
              {projects[selectedProject].assets.length > 1 && (
                <button
                  onClick={prevAsset}
                  className="absolute left-4 md:left-8 text-white/80 hover:text-white bg-white/5 p-4 rounded-full backdrop-blur-md transition-colors z-10 border border-white/10"
                >
                  <ChevronLeft size={28} />
                </button>
              )}

              {/* IMAGE */}
              <div className="flex items-center justify-center h-full w-full max-w-4xl p-4">
                <img
                  src={projects[selectedProject].assets[currentAssetIndex].url}
                  alt={`${projects[selectedProject].title} Brand Asset ${
                    currentAssetIndex + 1
                  }`}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-xl"
                />
              </div>

              {/* DESIGN NAME */}
              <div className="absolute bottom-8 right-4 md:right-12 z-20">
                <div className="text-amber-400 font-bold uppercase tracking-wider text-xs md:text-xl bg-black/50 px-3 py-1.5 md:px-4 md:py-2 rounded-lg backdrop-blur-sm border border-white/10">
                  {projects[selectedProject].assets[currentAssetIndex].name}
                </div>
              </div>

              {/* NEXT */}
              {projects[selectedProject].assets.length > 1 && (
                <button
                  onClick={nextAsset}
                  className="absolute right-4 md:right-8 text-white/80 hover:text-white bg-white/5 p-4 rounded-full backdrop-blur-md transition-colors z-10 border border-white/10"
                >
                  <ChevronRight size={28} />
                </button>
              )}

              {/* COUNTER */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white font-medium px-5 py-2 rounded-full text-xs tracking-widest backdrop-blur-md border border-white/10">
                {currentAssetIndex + 1} /{" "}
                {projects[selectedProject].assets.length}
              </div>
            </div>
          </div>
        )}

        {/* BUTTON */}
        <div className="mt-14 text-center">
          <Link
            to="/portfolio-graphic-designer-sangli"
            className="interactive inline-flex items-center gap-2 px-10 py-4 btn-amber text-lg"
          >
            View Full Portfolio
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;

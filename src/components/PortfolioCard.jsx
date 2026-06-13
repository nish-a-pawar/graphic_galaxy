import { useEffect, useState, useRef } from "react";
import { WHATSAPP_LINK } from "../constants";
import { Lightbulb, LightbulbOff } from "lucide-react";

const PortfolioCard = ({
  image,
  title,
  category,
  type,
  videoUrl,
  index,
  total,
  projects,
}) => {
  const [open, setOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(index);
  const [showLit, setShowLit] = useState(true);
  const [innerImgIdx, setInnerImgIdx] = useState(0);

  // Reset inner states when changing projects
  useEffect(() => {
    setShowLit(true);
    setInnerImgIdx(0);
  }, [modalIdx]);

  const playClickSound = (isTurningOff) => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      // Realistic mechanical switch click
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      
      // Different frequencies for turning on vs off
      const baseFreq = isTurningOff ? 300 : 500;
      
      osc.type = "square";
      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.05);
      
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(baseFreq * 1.5, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.05);
      
      gain.gain.setValueAtTime(0.8, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
      
      osc.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc2.start();
      osc.stop(ctx.currentTime + 0.05);
      osc2.stop(ctx.currentTime + 0.05);
    } catch (e) {
      console.log("Audio error:", e);
    }
  };

  const touchStartX = useRef(null);

  // TOUCH START
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // TOUCH END
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const diff =
      e.changedTouches[0].clientX - touchStartX.current;

    if (diff > 50) {
      prevItem(e);
    } else if (diff < -50) {
      nextItem(e);
    }

    touchStartX.current = null;
  };

  // OPEN MODAL
  const handleOpen = () => {
    setModalIdx(index);
    setOpen(true);
  };

  // ESC CLOSE
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () =>
      window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // NEXT IMAGE
  const nextItem = (e) => {
    e.stopPropagation();

    setModalIdx((prev) => (prev + 1) % projects.length);
  };

  // PREVIOUS IMAGE
  const prevItem = (e) => {
    e.stopPropagation();

    setModalIdx(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  // CURRENT PROJECT
  const current = projects[modalIdx] || {};

  const currentTitle = current.title || title;
  const currentCategory = current.category || category;
  const currentType = current.type || type;

  const currentImage =
    current.thumbnail ||
    current.image ||
    current.url ||
    image;

  const currentVideoUrl = current.url;

  // ENQUIRY LINK
  const enquiryLink = `${WHATSAPP_LINK}&text=${encodeURIComponent(
    `Hi, I liked your ${currentTitle} project and I want to enquire about a similar design.`
  )}`;

  return (
    <>
      {/* CARD */}
      <div
        onClick={handleOpen}
        className="group relative overflow-hidden rounded-xl cursor-pointer cursor-zoom-in bg-[#0B0F14] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
      >
        {/* IMAGE */}
        {projects[index]?.litImage && projects[index]?.unlitImage ? (
          <>
            <img
              src={projects[index].unlitImage}
              alt={title}
              loading="lazy"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <img
              src={projects[index].litImage}
              alt={title}
              loading="lazy"
              className="absolute inset-0 w-full h-64 object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </>
        ) : (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/40" />

        {/* DESKTOP HOVER TEXT */}
        <div className="absolute inset-0 z-10 hidden items-center justify-center opacity-0 transition-opacity duration-300 md:flex md:group-hover:opacity-100">
          <span className="text-white text-lg font-semibold">
            Click to Enlarge
          </span>
        </div>

        {/* MOBILE TAP INDICATOR */}
        <div className="absolute top-3 right-3 z-20 md:hidden">
          <div className="rounded-full bg-black/40 backdrop-blur-md px-3 py-2 text-white text-xs border border-white/10">
            Tap to View ↗
          </div>
        </div>

        {/* VIDEO ICON */}
        {type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl text-white backdrop-blur-sm">
              ▶
            </span>
          </div>
        )}

        {/* TOP VIEW BADGE */}
        <div className="absolute inset-x-0 top-0 hidden justify-end p-4 opacity-0 transition-opacity duration-300 md:flex md:group-hover:opacity-100">
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            View
          </span>
        </div>

        {/* TEXT */}
        <div className="relative z-20 p-4">
          <h3 className="text-white font-bold">
            {title}
          </h3>

          <p className="text-gray-400 text-sm">
            {category}
          </p>
        </div>

        {/* HOVER BUTTON */}
        <div className="absolute bottom-4 left-4 right-4 hidden items-center justify-end opacity-0 transition-all duration-300 md:flex md:group-hover:opacity-100">
          <a
            href={enquiryLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-[#0B0F14] transition-all duration-300 hover:scale-[1.02] hover:bg-amber-300"
          >
            Enquiry ↗
          </a>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`fixed inset-0 z-[200] flex items-center justify-center px-4 py-6 pt-24 animate-in fade-in duration-500 transition-colors ${
            current.litImage && current.unlitImage && showLit ? 'bg-black' : 'bg-black/95'
          }`}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            className="fixed left-4 top-24 z-[220] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/20 text-xl text-white backdrop-blur-md shadow-lg transition hover:scale-105 hover:bg-white/30"
            aria-label="Close image preview"
          >
            ×
          </button>

          {/* PREVIOUS */}
          <button
            onClick={prevItem}
            className="fixed left-3 top-1/2 z-[220] -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-3xl text-white backdrop-blur-md transition hover:bg-white/20"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* NEXT */}
          <button
            onClick={nextItem}
            className="fixed right-3 top-1/2 z-[220] -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-3xl text-white backdrop-blur-md transition hover:bg-white/20"
            aria-label="Next image"
          >
            ›
          </button>

          {/* BOTTOM INFO BAR */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="fixed bottom-4 md:bottom-8 left-1/2 z-[220] flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/15 bg-black/70 px-4 md:px-6 py-3 backdrop-blur-md shadow-2xl"
          >
            <span className="whitespace-nowrap text-sm font-bold tracking-wide text-white md:text-base">
              {currentCategory}
            </span>

            <div className="h-5 w-px bg-white/20" />

            <a
              href={enquiryLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-amber-400 px-3 py-1.5 md:px-4 md:py-1.5 text-xs md:text-sm font-bold text-[#0B0F14] transition-all duration-300 hover:scale-[1.05] hover:bg-amber-300"
            >
              Enquiry ↗
            </a>
          </div>

          {/* CONTENT */}
          {currentType === "video" ? (
            <iframe
              src={currentVideoUrl}
              title={currentTitle}
              allowFullScreen
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 h-[80vh] w-[min(1100px,95vw)] rounded-xl pb-16"
            />
          ) : current.images ? (
            <div 
              className="relative z-10 flex flex-col items-center pb-16 w-full max-w-[95vw]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Pagination Dots */}
              <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-4 bg-black/20 px-3 py-2 rounded-full backdrop-blur-sm border border-white/5">
                {current.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInnerImgIdx(idx)}
                    className={`rounded-full transition-all duration-300 ${
                      innerImgIdx === idx 
                        ? 'bg-amber-400 w-6 h-1.5 md:w-8 md:h-2 shadow-md' 
                        : 'bg-white/30 w-1.5 h-1.5 md:w-2 md:h-2 hover:bg-white/50'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
              </div>
              
              {/* Current Image */}
              <img
                key={innerImgIdx}
                src={current.images[innerImgIdx]}
                alt={`${currentTitle} page ${innerImgIdx + 1}`}
                className="max-h-[60vh] md:max-h-[70vh] w-auto rounded-xl object-contain shadow-2xl animate-in fade-in duration-500"
              />
            </div>
          ) : current.litImage && current.unlitImage ? (
            <div className="relative z-10 flex flex-col items-center pb-16 w-full max-w-[95vw]" onClick={(e) => e.stopPropagation()}>
              <div className="mb-6 mt-2 flex flex-col items-center gap-2">
                <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                  {showLit ? 'Light is On' : 'Light is Off'}
                </span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    playClickSound(showLit); // passing true if currently lit, meaning we turn it off
                    setShowLit(!showLit);
                  }} 
                  className={`relative flex items-center w-20 h-10 rounded-full transition-all duration-300 p-1 border-2 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] ${
                    showLit 
                      ? 'bg-amber-400 border-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.4)]' 
                      : 'bg-gray-800 border-gray-600'
                  }`}
                  aria-label={showLit ? "Turn light off" : "Turn light on"}
                >
                  <div className="flex w-full justify-between px-2 text-[10px] font-black absolute left-0 z-0 pointer-events-none">
                    <span className={`transition-opacity duration-300 ${showLit ? 'opacity-100 text-[#0B0F14]' : 'opacity-0'}`}>ON</span>
                    <span className={`transition-opacity duration-300 ${!showLit ? 'opacity-100 text-gray-400' : 'opacity-0'}`}>OFF</span>
                  </div>
                  
                  <div className={`relative z-10 w-8 h-8 rounded-full bg-gradient-to-b from-white to-gray-200 shadow-[0_2px_5px_rgba(0,0,0,0.4),inset_0_-2px_2px_rgba(0,0,0,0.1)] flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    showLit ? 'translate-x-10' : 'translate-x-0'
                  }`}>
                    {showLit ? <Lightbulb className="w-4 h-4 text-amber-500 fill-amber-500" /> : <LightbulbOff className="w-4 h-4 text-gray-500" />}
                  </div>
                </button>
              </div>
              <div className="relative z-10 w-full flex justify-center items-center h-[60vh] md:h-[65vh]">
                <img
                  src={current.unlitImage}
                  alt={currentTitle}
                  className="absolute max-h-full w-auto rounded-xl object-contain shadow-2xl transition-all duration-700 ease-in-out"
                />
                <img
                  src={current.litImage}
                  alt={currentTitle}
                  className={`absolute max-h-full w-auto rounded-xl object-contain transition-all duration-700 ease-in-out ${
                    showLit 
                      ? 'opacity-100 shadow-[0_0_80px_rgba(251,191,36,0.25)] scale-100' 
                      : 'opacity-0 scale-[0.98]'
                  }`}
                  style={showLit ? { filter: 'drop-shadow(0 0 20px rgba(251,191,36,0.15))' } : {}}
                />
              </div>
            </div>
          ) : (
            <img
              src={currentImage}
              alt={currentTitle}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 max-h-[78vh] md:max-h-[85vh] max-w-[95vw] rounded-xl object-contain shadow-2xl pb-16"
            />
          )}
        </div>
      )}
    </>
  );
};

export default PortfolioCard;
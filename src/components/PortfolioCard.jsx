import { useEffect, useState, useRef } from "react";
import { WHATSAPP_LINK } from "../constants";

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
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />

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
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 px-4 py-6 pt-24 animate-in fade-in duration-300"
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
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-1.5 text-sm font-bold text-[#0B0F14] transition-all duration-300 hover:scale-[1.05] hover:bg-amber-300"
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
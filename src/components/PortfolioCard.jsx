import { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "../constants";

const PortfolioCard = ({ image, title, category, type, videoUrl, index, total, projects }) => {
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [modalIdx, setModalIdx] = useState(index);

  const enquiryLink = `${WHATSAPP_LINK}&text=${encodeURIComponent(
    `Hi, I liked your ${title} project and I want to enquire about a similar design.`
  )}`;

  // Update modal index when opening a specific card
  const handleOpen = () => {
    setModalIdx(index);
    setOpen(true);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const nextItem = (e) => {
    e.stopPropagation();
    setModalIdx((prev) => (prev + 1) % projects.length);
  };

  const prevItem = (e) => {
    e.stopPropagation();
    setModalIdx((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const current = projects[modalIdx] || {};
  const currentTitle = current.title || title;
  const currentCategory = current.category || category;
  const currentType = current.type || type;
  const currentImage = current.thumbnail || current.image || current.url || image;
  const currentVideoUrl = current.url;


  return (
    <>
      {/* CARD */}
      <div
        className="group relative overflow-hidden rounded-xl cursor-pointer bg-[#0B0F14] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
        onClick={() => setOpen(true)}
      >
          {/* CLICK INDICATOR OVERLAY ON THUMBNAIL */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <span className="text-white text-lg font-semibold">Click to Enlarge</span>
          </div>

        {/* IMAGE (FIXED) */}
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* VIDEO ICON */}
        {type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/35 text-white transition-colors duration-300 group-hover:bg-black/25">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              ▶
            </span>
          </div>
        )}

        {/* HOVER ACTION */}
        <div className="absolute inset-x-0 top-0 flex justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm border border-white/10">
            View
          </span>
        </div>

        {/* TEXT */}
        <div className="p-4 transition-colors duration-300 group-hover:bg-white/3">
          <h3 className="text-white font-bold">{title}</h3>
          <p className="text-gray-400 text-sm">{category}</p>
        </div>

        {/* ACTIONS */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setLiked((prevLiked) => {
                  const newLiked = !prevLiked;
                  setLikeCount((c) => c + (newLiked ? 1 : -1));
                  return newLiked;
                });
              }}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-md border transition-all duration-300 ${
                liked
                  ? "bg-rose-500 text-white border-rose-400/50"
                  : "bg-black/45 text-white border-white/15 hover:bg-white/15"
              }`}
              aria-label={liked ? `Remove like for ${title}` : `Like ${title}`}
            >
              <span className="text-base leading-none">{liked ? "♥" : "♡"}</span>
              Like {likeCount > 0 ? `(${likeCount})` : ''}
            </button>

            <a
              href={enquiryLink}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-[#0B0F14] transition-all duration-300 hover:bg-amber-300 hover:scale-[1.02]"
              aria-label={`Enquire on WhatsApp about ${title}`}
            >
              Enquiry
              <span aria-hidden="true">↗</span>
            </a>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center bg-black/90 px-4 py-6 pt-24"
          onClick={() => setOpen(false)}
        >
            {/* CLOSE */}
            <button
  onClick={(e) => { e.stopPropagation(); setOpen(false); }}
  className="fixed left-4 top-24 z-210 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/20 text-white text-xl backdrop-blur-md shadow-lg transition hover:bg-white/30 hover:scale-105"
  aria-label="Close image preview"
>
  ×
</button>

{/* PREV */}
<button
  onClick={prevItem}
  className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl z-[210]"
  aria-label="Previous image"
>
  ‹
</button>
{/* NEXT */}
<button
  onClick={nextItem}
  className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl z-[210]"
  aria-label="Next image"
>
  ›
</button>

          {/* ENQUIRE BUTTON IN MODAL */}
          <a
            href={enquiryLink}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-lg font-bold text-[#0B0F14] transition-all duration-300 hover:bg-amber-300 hover:scale-[1.02]"
            aria-label={`Enquire on WhatsApp about ${currentTitle}`}
          >
            Enquire
            <span aria-hidden="true">↗</span>
          </a>
            <iframe
              src={currentVideoUrl}
              className="relative z-10 w-[min(1100px,95vw)] h-[80vh] rounded-xl"
              allowFullScreen
              title={currentTitle}
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              src={currentImage}
              className="relative z-10 max-w-[95vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
              alt={currentTitle}
              onClick={(event) => event.stopPropagation()}
            />
          )}

        </div>
      )}
    </>
  );
};

export default PortfolioCard;
import { useState } from "react";

const PortfolioCard = ({ image, title, category, type, videoUrl }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        className="group relative overflow-hidden rounded-xl cursor-pointer bg-[#0B0F14]"
        onClick={() => setOpen(true)}
      >
        {/* IMAGE (FIXED) */}
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
          loading="lazy"
        />

        {/* VIDEO ICON */}
        {type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-4xl">
            ▶
          </div>
        )}

        {/* TEXT */}
        <div className="p-4">
          <h3 className="text-white font-bold">{title}</h3>
          <p className="text-gray-400 text-sm">{category}</p>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          {/* CONTENT */}
          {type === "video" ? (
            <iframe
              src={videoUrl}
              className="w-[90%] h-[80vh] rounded-xl"
              allowFullScreen
              title={title}
            />
          ) : (
            <img
              src={image}
              className="max-w-[90%] max-h-[85vh] object-contain rounded-xl"
              alt={title}
            />
          )}

        </div>
      )}
    </>
  );
};

export default PortfolioCard;
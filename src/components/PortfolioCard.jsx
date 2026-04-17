import { useState } from "react";

const PortfolioCard = ({ image, alt, title, category, mockups }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-xl cursor-pointer"
        onClick={() => mockups && setOpen(true)}
      >
        {/* MAIN IMAGE */}
        {image ? (
          <img
            src={image}
            alt={alt || title}
            className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-[250px] bg-linear-to-br from-[#1F2937] to-[#0B0F14]" />
        )}

        {/* 🔥 HOVER MOCKUPS (only if exists) */}
        {mockups && (
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex gap-2 p-3">
            {mockups.slice(0, 3).map((m, i) => (
              <img
                key={i}
                src={m}
                className="w-1/3 object-cover rounded"
              />
            ))}
          </div>
        )}

        {/* TITLE */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white font-bold">{title}</h3>
          <p className="text-gray-300 text-sm">{category}</p>
        </div>
      </div>

      {/* 🔥 MODAL (only if mockups exist) */}
      {open && mockups && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          <div className="flex gap-4 overflow-x-auto p-6">
            {mockups.map((m, i) => (
              <img
                key={i}
                src={m}
                className="h-[400px] rounded-xl"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioCard;
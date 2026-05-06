import { useState } from "react";

const InvitationSection = ({ INVITATION_PROJECTS = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const selectedItem =
    activeIndex !== null && INVITATION_PROJECTS[activeIndex]
      ? INVITATION_PROJECTS[activeIndex]
      : null;

  const closeModal = () => setActiveIndex(null);

  const nextItem = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === INVITATION_PROJECTS.length - 1 ? 0 : prev + 1
    );
  };

  const prevItem = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === 0 ? INVITATION_PROJECTS.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="py-12 px-4 md:px-10"
      aria-label="Invitation Design Portfolio Section"
    >

      {/* SEO HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Creative Invitation Design Portfolio in Sangli
        </h2>

        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Explore wedding, event, and custom invitation designs including
          digital invites, video invitations, and printable templates crafted
          for modern branding and memorable celebrations.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {INVITATION_PROJECTS.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className="cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-white/5"
          >
            <img
              src={item.thumbnail || item.url}
              alt={item.title}
              className="w-full h-64 object-cover hover:scale-105 transition"
            />
          </div>
        ))}

      </div>

      {/* MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]"
          onClick={closeModal}
        >

          <div
            className="relative max-w-5xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-4 right-4 text-white text-4xl z-[10000] bg-black/40 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>

            {/* PREV */}
            <button
              onClick={prevItem}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl z-[10000]"
            >
              ‹
            </button>

            {/* NEXT */}
            <button
              onClick={nextItem}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl z-[10000]"
            >
              ›
            </button>

            {/* CONTENT */}
            <div className="w-full flex justify-center items-center">

              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full max-h-[85vh] object-contain rounded-2xl"
                />
              ) : (
                <iframe
                  src={selectedItem.url}
                  title={selectedItem.title}
                  thumbnail={selectedItem.thumbnail}
                  className="w-full h-[85vh] rounded-2xl"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                 />
              )}

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default InvitationSection;
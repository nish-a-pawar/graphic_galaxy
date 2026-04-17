import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import PortfolioCard from "../components/PortfolioCard";

import { RECENT_PROJECTS, PACKAGING_PROJECTS ,LOGO_PROJECTS } from "../constants";

const categories = [
  "All",
  "Sports Branding",
  "Logo Design",
  "Social Media Design",
  "Bag Design",
  "Box Design",
  "Sticker Design",
  "Pouch Design"
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const location = useLocation();

  // 🔥 Flatten all data properly
  const allProjects = useMemo(() => {
    return [...LOGO_PROJECTS,...RECENT_PROJECTS, ...PACKAGING_PROJECTS];
  }, []);

  // 🔥 Filter logic
  const filteredProjects = useMemo(() => {
    if (active === "All") return allProjects;
    return allProjects.filter((p) => p.category === active);
  }, [active, allProjects]);

  // 🔥 Scroll to section (important)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-[#0B0F14]">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
          Graphic Design Portfolio in Sangli
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Explore logo design, packaging design, social media creatives and branding projects.
        </p>
      </section>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-bold ${active === cat
                ? "bg-amber-400 text-black"
                : "bg-gray-800 text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔥 ALL PROJECTS */}
      {active === "All" ? (
        <>
          {/* BAG */}
          <section id="bag-design" className="px-6 pb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Bag Design</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects
                .filter((p) => p.category === "Bag Design")
                .map((project) => (
                  <PortfolioCard key={project.id} {...project} />
                ))}
            </div>
          </section>

          {/* BOX */}
          <section id="box-design" className="px-6 pb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Box Design
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects
                .filter((p) => p.category === "Box Design")
                .map((project) => (
                  <PortfolioCard key={project.id} {...project} />
                ))}
            </div>
          </section>

          {/* STICKER */}
          <section id="sticker-design" className="px-6 pb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Sticker Design
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects
                .filter((p) => p.category === "Sticker Design")
                .map((project) => (
                  <PortfolioCard key={project.id} {...project} />
                ))}
            </div>
          </section>

          {/* POUCH */}
          <section id="pouch-design" className="px-6 pb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Pouch Design
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects
                .filter((p) => p.category === "Pouch Design")
                .map((project) => (
                  <PortfolioCard key={project.id} {...project} />
                ))}
            </div>
          </section>

          {/* SPORTS */}
          <section id="sports-branding" className="px-6 pb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Sports Branding
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects
                .filter((p) => p.category === "Sports Branding")
                .map((project) => (
                  <PortfolioCard key={project.id} {...project} />
                ))}
            </div>
          </section>
        </>
      ) : (
        /* 🔥 FILTERED GRID */
        <section className="px-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} {...project} />
            ))}
          </div>
        </section>
      )}

      <CTA />
      <Footer />
    </div>
  );
};

export default Portfolio;
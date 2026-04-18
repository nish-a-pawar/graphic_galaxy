import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import PortfolioCard from "../components/PortfolioCard";

import {
  RECENT_PROJECTS,
  PACKAGING_PROJECTS,
  LOGO_PROJECTS,
  INVITATION_PROJECTS,
} from "../constants";

const categories = [
  "All",
  "Sports Branding",
  "Logo Design",
  "Social Media Design",
  "Bag Design",
  "Box Design",
  "Sticker Design",
  "Pouch Design",
  "Invitation Design",
];

// 🔥 Normalize function (IMPORTANT FIX)
const normalizeProject = (p) => ({
  id: p.id,
  image: p.thumbnail || p.image || p.url,
  title: p.title,
  category: p.category,
  type: p.type || "image",
  videoUrl: p.url,
});

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const location = useLocation();

  // 🔥 ALL PROJECTS
  const allProjects = useMemo(() => {
    return [
      ...LOGO_PROJECTS,
      ...RECENT_PROJECTS,
      ...PACKAGING_PROJECTS,
      ...INVITATION_PROJECTS,
    ];
  }, []);

  // 🔥 FILTER
  const filteredProjects = useMemo(() => {
    if (active === "All") return allProjects;
    return allProjects.filter((p) => p.category === active);
  }, [active, allProjects]);

  return (
    <div className="bg-[#0B0F14]">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
          Graphic Design Portfolio in Sangli
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Explore logo, packaging, invitation and branding projects.
        </p>
      </section>

      {/* FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-bold ${
              active === cat
                ? "bg-amber-400 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <section className="px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              {...normalizeProject(project)}
            />
          ))}

        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Portfolio;
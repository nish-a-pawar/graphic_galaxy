import { useState, useMemo, useEffect } from "react";
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
  SIGNAGE_PROJECTS,
  BROCHURE_PROJECTS,
  FLYER_PROJECTS
  
} from "../constants";

const categories = [
  "All",
  "Logo Design",
  "Brochure Design",
  "Bag Design",
  "Box Design",
  "Sticker Design",
  "Pouch Design",
  "Invitation Design",
  "Signage Design",
  "Flyer Design"
];

// Normalize function
const normalizeProject = (p) => ({
  id: p.id,
  image: p.thumbnail || p.image || p.url,
  title: p.title,
  category: p.category,
  type: p.type || "image",
  videoUrl: p.url,
});

const Portfolio = () => {
  const location = useLocation();

  // ✅ FIXED STATE
  const [active, setActive] = useState("All");

  // All Projects
  const allProjects = useMemo(() => { return [ ...LOGO_PROJECTS, ...RECENT_PROJECTS, ...PACKAGING_PROJECTS, ...INVITATION_PROJECTS, ...SIGNAGE_PROJECTS, ...BROCHURE_PROJECTS,...FLYER_PROJECTS ]; }, []);

  // Handle query params / hash
  useEffect(() => {
    const query = new URLSearchParams(location.search);

    const categoryQuery = query.get("category");
    const hash = location.hash.replace("#", "");

    const target = categoryQuery || hash;

    if (target) {
      const categoryMap = {
        "logo-design": "Logo Design",
        "brochure-design": "Brochure Design",
        "bag-design": "Bag Design",
        "box-design": "Box Design",
        "sticker-design": "Sticker Design",
        "pouch-design": "Pouch Design",
        "invitation-design": "Invitation Design",
        "signage-design": "Signage Design",
        "flyer-design" :"Flyer Design"
      };

      const normalized = categoryMap[target] || target;

      if (categories.includes(normalized)) {
        setActive(normalized);

        setTimeout(() => {
          const grid = document.getElementById("portfolio-grid");

          if (grid) {
            grid.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    }
  }, [location]);

  // Filter Projects
  const filteredProjects = useMemo(() => {
    if (active === "All") return allProjects;

    return allProjects.filter(
      (project) => project.category === active
    );
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

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${
              active === cat
                ? "bg-amber-400 text-black"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PORTFOLIO GRID */}
      <section
        id="portfolio-grid"
        className="px-6 pb-16 scroll-mt-24"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <PortfolioCard
              key={project.id}
              index={i}
              total={filteredProjects.length}
              projects={filteredProjects}
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
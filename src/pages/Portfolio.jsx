import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  FLYER_PROJECTS,
  SOCIALMEDIA_PROJECTS
  
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
  "Flyer Design",
  "Social Media Post"
];

// Normalize function
const normalizeProject = (p) => ({
  id: p.id,
  image: p.thumbnail || p.image || p.url,
  title: p.title,
  category: p.category,
  type: p.type || "image",
  videoUrl: p.url,
  litImage: p.litImage,
  unlitImage: p.unlitImage,
});

const socialMediaCategories = ["All", "Hospital/Clinic", "Event", "Product", "Offer"];

const Portfolio = () => {
  const location = useLocation();

  // ✅ FIXED STATE
  const [active, setActive] = useState("All");
  const [socialMediaActive, setSocialMediaActive] = useState("All");

  // All Projects
  const allProjects = useMemo(() => { return [ ...LOGO_PROJECTS, ...RECENT_PROJECTS, ...PACKAGING_PROJECTS, ...INVITATION_PROJECTS, ...SIGNAGE_PROJECTS, ...BROCHURE_PROJECTS,...FLYER_PROJECTS ,...SOCIALMEDIA_PROJECTS ]; }, []);

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
        "flyer-design" :"Flyer Design",
        "social-media-post":"Social Media Post"
      };

      const normalized = categoryMap[target] || target;

      if (categories.includes(normalized)) {
        setActive(normalized);
        setSocialMediaActive("All");

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
    let projects = allProjects;
    
    if (active !== "All") {
      projects = allProjects.filter((project) => project.category === active);
    }
    
    // Sub-filter for Social Media
    if (active === "Social Media Post" && socialMediaActive !== "All") {
       projects = projects.filter(project => project.title.includes(socialMediaActive));
    }
    
    return projects;
  }, [active, socialMediaActive, allProjects]);

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
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setSocialMediaActive("All"); // Reset subcategory on main tab change
              }}
              className={`relative px-5 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm transition-colors duration-300 ${
                isActive
                  ? "text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-amber-400 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ zIndex: 0 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* SOCIAL MEDIA SUB-CATEGORIES */}
      {active === "Social Media Post" && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2 mb-10 px-4"
        >
          {socialMediaCategories.map((subcat) => {
            const isActive = socialMediaActive === subcat;
            return (
              <button
                key={subcat}
                onClick={() => setSocialMediaActive(subcat)}
                className={`px-4 py-1 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "bg-amber-400 text-black"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {subcat}
              </button>
            );
          })}
        </motion.div>
      )}

      {/* PORTFOLIO GRID */}
      <section
        id="portfolio-grid"
        className="px-6 pb-16 scroll-mt-24 min-h-[500px]"
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, i) => (
              <PortfolioCard
                key={project.id}
                index={i}
                total={filteredProjects.length}
                projects={filteredProjects}
                {...normalizeProject(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Portfolio;
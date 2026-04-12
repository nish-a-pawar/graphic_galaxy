import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const categories = [
  "All",
  "Logo",
  "Packaging",
  "Social Media",
  "Pamphlet",
  "Brochure",
  "Signage",
  "Nameplates",
  "Booklet & Magazine",
  "Trophies & Sports",
  "T-Shirt",
  "Event",
  "Misc",
];

const projects = [
  {
    id: 1,
    title: "Duathlon Event",
    client: "S3 Academy Sangli",
    category: "Social Media",
    status: "Completed",
    bg: "#1e293b",
  },
  {
    id: 2,
    title: "Marathon Event",
    client: "MTDK Run",
    category: "Trophies & Sports",
    status: "Ongoing",
    bg: "#3b0764",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen py-16 px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-green-600 uppercase tracking-widest mb-2">
            Our Work
          </p>
          <h1 className="text-4xl font-bold text-gray-900">Portfolio</h1>
          <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto">
            Graphic design projects for businesses across Sangli, Miraj,
            Kupwad and Maharashtra.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                active === cat
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                {/* Thumbnail */}
                <div
                  className="h-52 flex items-center justify-center"
                  style={{ background: project.bg }}
                >
                  <span className="text-white text-2xl font-black opacity-20 tracking-tight">
                    {project.title.toUpperCase()}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-green-600 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-50 text-green-600"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-gray-900 font-semibold text-base mt-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{project.client}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm">
              No projects in this category yet.
            </p>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
};

export default Portfolio;
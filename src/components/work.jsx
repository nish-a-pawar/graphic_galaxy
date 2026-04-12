import React from "react";
import { Link } from "react-router-dom";

const previewProjects = [
  {
    id: 1,
    title: "Duathlon Event",
    client: "S3 Academy Sangli",
    category: "Branding & Social Media",
    status: "completed",
    bg: "bg-slate-800",
    label: "S3 DUATHLON",
  },
  {
    id: 2,
    title: "Marathon Event",
    client: "MTDK Run",
    category: "Event Branding",
    status: "ongoing",
    bg: "bg-purple-900",
    label: "MTDK RUN",
  },
];

const Work = () => {
  return (
    <section className="my-10 px-6 max-w-6xl mx-auto ">

      <p className="text-sm font-medium text-green-600 uppercase tracking-widest text-center mb-2">
        Recent Work
      </p>
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Our Recent Work
      </h2>
      <p className="text-gray-500 text-center mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
        Branding and design work for local Sangli businesses and events.
      </p>
      <div className="w-12 h-1 bg-green-500 mx-auto mt-6 mb-10 rounded-full" />

      {/* Preview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {previewProjects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Thumbnail */}
            <div className={`${project.bg} h-48 flex items-center justify-center`}>
              <span className="text-white text-3xl font-black opacity-20 tracking-tight">
                {project.label}
              </span>
            </div>

            {/* Info */}
            <div className="p-5">
              <span
                className={`text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full ${
                  project.status === "completed"
                    ? "bg-green-50 text-green-600"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                {project.status}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {project.client} · {project.category}
              </p>
              <Link
                to={`/portfolio/${project.id}`}
                className="inline-block mt-4 text-sm text-green-600 font-medium hover:underline"
              >
                View project →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Link
          to="/portfolio"
          className="inline-block border border-gray-900 text-gray-900 px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200"
        >
          View Full Portfolio →
        </Link>
      </div>

    </section>
  );
};

export default Work;
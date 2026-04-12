import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState } from "react";
const services = [
  { name: "Logo Design", path: "/logo-design-in-sangli" },
  { name: "Packaging Design", path: "/packaging-design-in-sangli" },
  { name: "Social Media Design", path: "/social-media-design-sangli" },
  { name: "Pamphlet Design", path: "/pamphlet-design-sangli" },
  { name: "Brochure Design", path: "/brochure-design-sangli" },
  { name: "Signage Design", path: "/signage-design-sangli" },
  { name: "Nameplate Design", path: "/nameplate-design-sangli" },
  { name: "Booklet & Magazine", path: "/booklet-magazine-design-sangli" },
  { name: "Trophy & Sports", path: "/trophy-sports-design-sangli" },
  { name: "T-Shirt Design", path: "/tshirt-design-sangli" },
];
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Graphic Galaxy Logo" className="h-12 w-auto" />
          <h1 className="text-xl font-bold text-gray-800">Graphic Galaxy</h1>
        </Link>

        {/* Navigation */}

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-green-500 transition font-medium">
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded-xl shadow-xl w-56 py-2 z-50">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/portfolio-graphic-designer-sangli"
            className="hover:text-green-500 transition"
          >
            Portfolio
          </Link>

          <Link to="/contact" className="hover:text-green-500 transition">
            Contact
          </Link>

          <Link to="/about" className="hover:text-green-500 transition">
            About
          </Link>
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/845976?text=Hi, I need design service"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          Get Quote
        </a>
      </nav>
    </header>
  );
};

export default Header;

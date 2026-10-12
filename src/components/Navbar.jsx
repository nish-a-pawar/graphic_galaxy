import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import { LOGO } from "../constants.js";
import { SERVICES, WHATSAPP_LINK } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    {
      name: "Portfolio",
      path: "/portfolio-graphic-designer-sangli",
    },
    {
      name: "Design Stories",
      path: "/design-stories",
      highlight: true,
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* ───────────────────────────── */}
      {/* FLOATING NAVBAR */}
      {/* ───────────────────────────── */}

      <div
        className={`fixed top-0 left-0 w-full z-[100] pointer-events-none transition-all duration-500 ${
          scrolled ? "pt-3 px-4" : ""
        }`}
      >
        <nav
          className={`pointer-events-auto transition-all duration-500 ${
            scrolled
              ? "bg-[#0B0F14]/85 backdrop-blur-xl border border-[#2D3748] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-3"
              : "bg-transparent py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            {/* ───────────────────────────── */}
            {/* LOGO */}
            {/* ───────────────────────────── */}

            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src={LOGO}
                alt="Graphic Galaxy"
                className="px-2 h-16 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* ───────────────────────────── */}
            {/* DESKTOP NAVIGATION */}
            {/* ───────────────────────────── */}

            <div className="hidden md:flex items-center gap-8">
              {/* SERVICES DROPDOWN */}

              <div
                className="relative"
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <button
                  className="
                    flex
                    items-center
                    gap-1
                    text-sm
                    font-semibold
                    text-white/70
                    hover:text-amber-400
                    transition-colors
                    py-2
                  "
                >
                  Services

                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      dropOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div
                      className="
                        glass-dark
                        rounded-2xl
                        w-64
                        py-2
                        border
                        border-[#2D3748]
                        shadow-2xl
                        max-h-[75vh]
                        overflow-y-auto
                      "
                    >
                      {SERVICES.filter((service) => service.path).map(
                        (service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="
                              block
                              px-5
                              py-2.5
                              text-sm
                              text-white/70
                              hover:text-amber-400
                              hover:bg-amber-400/10
                              transition-colors
                              font-medium
                            "
                            onClick={() => setDropOpen(false)}
                          >
                            {service.title}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* OTHER LINKS */}

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    text-sm
                    font-semibold
                    transition-colors
                    relative
                    group
                    flex
                    items-center
                    gap-1.5

                    ${
                      link.highlight
                        ? "text-amber-300 hover:text-amber-400"
                        : "text-white/70 hover:text-amber-400"
                    }
                  `}
                >
                  {/* LINK TEXT */}

                  <span>{link.name}</span>

                  {/* ANIMATED SPARKLE FOR DESIGN STORIES */}

                  {link.highlight && (
                    <span
                      className="
                        relative
                        inline-flex
                        items-center
                        justify-center
                        w-5
                        h-5
                      "
                    >
                      {/* SOFT GLOW */}

                      <span
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-amber-400/20
                          blur-md
                          animate-[storyGlow_2.4s_ease-in-out_infinite]
                        "
                      />

                      {/* SPARKLE */}

                      <span
                        className="
                          relative
                          inline-block
                          text-[15px]
                          leading-none
                          animate-[storySparkle_2.4s_ease-in-out_infinite]
                          drop-shadow-[0_0_7px_rgba(251,191,36,0.8)]
                        "
                      >
                        ✨
                      </span>
                    </span>
                  )}

                  {/* UNDERLINE */}

                  <span
                    className="
                      absolute
                      -bottom-0.5
                      left-0
                      w-full
                      h-0.5
                      bg-amber-400
                      scale-x-0
                      group-hover:scale-x-100
                      transition-transform
                      duration-300
                      origin-left
                      rounded-full
                    "
                  />
                </Link>
              ))}
            </div>

            {/* ───────────────────────────── */}
            {/* DESKTOP CTA */}
            {/* ───────────────────────────── */}

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="
                hidden
                md:flex
                interactive
                btn-amber
                group
                px-5
                py-2.5
                items-center
                gap-2
                text-sm
              "
            >
              Get Quote
            </a>

            {/* ───────────────────────────── */}
            {/* MOBILE HAMBURGER */}
            {/* ───────────────────────────── */}

            <button
              className="md:hidden p-2 text-white"
              style={{
                position: "relative",
                zIndex: 300,
              }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* ───────────────────────────── */}
      {/* MOBILE FULL SCREEN MENU */}
      {/* ───────────────────────────── */}

      <div
        className="fixed inset-0 md:hidden transition-all duration-500"
        style={{
          zIndex: 250,
          background: "#0B0F14",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {/* GLOW BACKGROUND */}

        <div
          className="
            absolute
            top-0
            right-0
            w-80
            h-80
            bg-amber-400/10
            rounded-full
            blur-[100px]
            -translate-y-1/2
            translate-x-1/2
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            w-80
            h-80
            bg-teal-400/10
            rounded-full
            blur-[100px]
            translate-y-1/2
            -translate-x-1/2
            pointer-events-none
          "
        />

        {/* CLOSE BUTTON */}

        <button
          className="
            absolute
            top-6
            right-6
            w-12
            h-12
            rounded-full
            bg-white/10
            border
            border-white/20
            flex
            items-center
            justify-center
            text-white
            hover:bg-amber-400
            hover:border-amber-400
            hover:text-[#0B0F14]
            transition-all
            duration-300
          "
          style={{ zIndex: 20 }}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={22} />
        </button>

        <div
          className="
            flex
            flex-col
            h-full
            px-8
            pt-24
            pb-12
            overflow-y-auto
            relative
            z-10
          "
        >
          {/* ───────────────────────────── */}
          {/* MOBILE SERVICES */}
          {/* ───────────────────────────── */}

          <div className="border-b border-white/10">
            <button
              className="
                w-full
                flex
                justify-between
                items-center
                text-xl
                font-black
                text-white
                hover:text-amber-400
                transition-colors
                py-4
                text-left
              "
              onClick={() => setMobileServices(!mobileServices)}
            >
              Services

              <ChevronDown
                size={28}
                className={`transition-transform duration-300 ${
                  mobileServices
                    ? "rotate-180 text-amber-400"
                    : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                mobileServices
                  ? "max-h-[32rem] pb-4"
                  : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-1 pl-4 border-l-2 border-amber-400/30">
                {SERVICES.filter((service) => service.path).map(
                  (service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="
                        text-base
                        font-bold
                        text-white/60
                        hover:text-amber-400
                        transition-colors
                        py-2
                      "
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileServices(false);
                      }}
                    >
                      {service.title}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {/* ───────────────────────────── */}
          {/* MOBILE LINKS */}
          {/* ───────────────────────────── */}

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`
                text-xl
                font-black
                transition-colors
                border-b
                border-white/10
                py-4
                flex
                items-center
                justify-between
                group

                ${
                  link.highlight
                    ? "text-amber-300 hover:text-amber-400"
                    : "text-white hover:text-amber-400"
                }
              `}
              onClick={() => setMenuOpen(false)}
            >
              <span className="flex items-center gap-3">
                {link.name}

                {link.highlight && (
                  <span
                    className="
                      relative
                      inline-flex
                      items-center
                      justify-center
                      w-7
                      h-7
                    "
                  >
                    {/* GLOW */}

                    <span
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-amber-400/20
                        blur-md
                        animate-[storyGlow_2.4s_ease-in-out_infinite]
                      "
                    />

                    {/* SPARKLE */}

                    <span
                      className="
                        relative
                        text-xl
                        leading-none
                        animate-[storySparkle_2.4s_ease-in-out_infinite]
                        drop-shadow-[0_0_8px_rgba(251,191,36,0.85)]
                      "
                    >
                      ✨
                    </span>
                  </span>
                )}
              </span>

              {/* OPTIONAL NEW INDICATOR */}

              {link.highlight && (
                <span
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.16em]
                    text-amber-300
                    border
                    border-amber-400/30
                    bg-amber-400/10
                    px-2
                    py-1
                    rounded-full
                    animate-[storyBadge_2.4s_ease-in-out_infinite]
                  "
                >
                  Explore
                </span>
              )}
            </Link>
          ))}

          {/* ───────────────────────────── */}
          {/* MOBILE CTA */}
          {/* ───────────────────────────── */}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="
              block
              w-full
              py-3
              mt-4
              btn-amber
              text-center
              text-lg
              font-black
              rounded-2xl
            "
          >
            Get Quote
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
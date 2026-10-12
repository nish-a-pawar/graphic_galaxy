import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../seo/SEO";
import { WHATSAPP_LINK } from "../../constants";

const DesignStory = ({
  seo,
  schema,

  category,
  client,
  location = "Sangli",

  title,
  heroImage,
  heroAlt,

  overview = [],
  concept = [],

  colors = [],
  typography,
  paletteRationale,

  applications = [],

  closingText =
    "Brand identity designed by Graphic Galaxy, Sangli for a consistent and professional brand presence.",

  whatsappMessage =
    "Hi Graphic Galaxy, I read your Design Story and want to discuss a branding project.",

  serviceLink = "/logo-design-in-sangli",
  serviceLinkText = "Explore Logo Design in Sangli",
}) => {
  const whatsappUrl = `${WHATSAPP_LINK}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  /*
  --------------------------------------------------
  APPLICATION GRID LOGIC
  --------------------------------------------------
  1 image  = Full width

  2 images = 50 / 50

  3 images =
  Full width
  50 / 50

  4 images =
  50 / 50
  50 / 50

  5 images =
  50 / 50
  33 / 33 / 33

  6+ images =
  Mixed portfolio/editorial layout
  --------------------------------------------------
  */

  const getApplicationSpan = (index, total) => {
    if (total === 1) {
      return "lg:col-span-6";
    }

    if (total === 2) {
      return "lg:col-span-3";
    }

    if (total === 3) {
      if (index === 0) {
        return "lg:col-span-6";
      }

      return "lg:col-span-3";
    }

    if (total === 4) {
      return "lg:col-span-3";
    }

    if (total === 5) {
      if (index < 2) {
        return "lg:col-span-3";
      }

      return "lg:col-span-2";
    }

    /*
    6+ images

    Pattern example:

    Image 1 = 4 columns
    Image 2 = 2 columns

    Image 3 = 3 columns
    Image 4 = 3 columns

    Image 5 = 2 columns
    Image 6 = 4 columns

    Pattern repeats
    */

    const pattern = [
      "lg:col-span-4",
      "lg:col-span-2",
      "lg:col-span-3",
      "lg:col-span-3",
      "lg:col-span-2",
      "lg:col-span-4",
    ];

    return pattern[index % pattern.length];
  };

  return (
    <div
      className="
        bg-[#0B0F14]
        text-[#F9FAFB]
        min-h-screen
        font-inter
        selection:bg-amber-400/30
        selection:text-amber-200
      "
    >
      {/* ============================= */}
      {/* SEO */}
      {/* ============================= */}

      <SEO
        title={seo?.title}
        description={seo?.description}
        canonical={seo?.canonical}
        ogTitle={seo?.ogTitle || seo?.title}
        ogDescription={seo?.ogDescription || seo?.description}
        ogUrl={seo?.ogUrl || seo?.canonical}
        ogImage={seo?.ogImage || heroImage}
        robots="index, follow"
        schema={schema}
      />

      {/* ============================= */}
      {/* NAVBAR */}
      {/* ============================= */}

      <Navbar />

      {/* ============================= */}
      {/* MAIN */}
      {/* ============================= */}

      <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">
        {/* ============================= */}
        {/* BACK TO DESIGN STORIES */}
        {/* ============================= */}

        <div className="mb-8">
          <Link
            to="/design-stories"
            className="
              inline-flex
              items-center
              gap-2
              text-white/50
              hover:text-amber-400
              text-sm
              font-semibold
              transition-colors
            "
          >
            <ArrowLeft size={16} />

            <span>Back to Design Stories</span>
          </Link>
        </div>

        {/* ============================= */}
        {/* 01 HERO */}
        {/* ============================= */}

        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* CATEGORY */}

            {category && (
              <span
                className="
                  px-3.5
                  py-1
                  rounded-full
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  bg-emerald-400/10
                  border
                  border-emerald-400/30
                  text-emerald-400
                "
              >
                {category}
              </span>
            )}

            {/* CLIENT */}

            {client && (
              <span className="text-white/40 text-xs sm:text-sm font-medium">
                Client: {client}
                {location && ` · ${location}`}
              </span>
            )}
          </div>

          {/* TITLE */}

          <h1
            className="
              text-3xl
              sm:text-5xl
              lg:text-6xl
              font-black
              text-white
              tracking-tight
              leading-[1.15]
              mb-8
            "
          >
            {title}
          </h1>

          {/* HERO IMAGE */}

          <div
            className="
              rounded-3xl
              overflow-hidden
              border
              border-[#2D3748]
              bg-[#F8FAFC]
              p-8
              sm:p-14
              flex
              items-center
              justify-center
              shadow-2xl
            "
          >
            <img
              src={heroImage}
              alt={heroAlt}
              className="
                max-h-[420px]
                w-auto
                max-w-full
                object-contain
                drop-shadow-md
              "
            />
          </div>
        </header>

        {/* ============================= */}
        {/* 02 PROJECT OVERVIEW */}
        {/* ============================= */}

        {overview.length > 0 && (
          <section className="mb-14 border-t border-white/10 pt-10">
            <div className="grid md:grid-cols-12 gap-6 items-start">
              {/* LEFT */}

              <div className="md:col-span-4">
                <span
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-emerald-400
                  "
                >
                  01 · Overview
                </span>

                <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                  The Brief
                </h2>
              </div>

              {/* RIGHT */}

              <div
                className="
                  md:col-span-8
                  space-y-4
                  text-white/70
                  text-base
                  sm:text-lg
                  leading-relaxed
                  font-normal
                "
              >
                {overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================= */}
        {/* 03 DESIGN CONCEPT */}
        {/* ============================= */}

        {concept.length > 0 && (
          <section className="mb-14 border-t border-white/10 pt-10">
            <div className="grid md:grid-cols-12 gap-6 items-start">
              {/* LEFT */}

              <div className="md:col-span-4">
                <span
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-emerald-400
                  "
                >
                  02 · Concept
                </span>

                <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                  The Thinking
                </h2>
              </div>

              {/* RIGHT */}

              <div
                className="
                  md:col-span-8
                  space-y-4
                  text-white/70
                  text-base
                  sm:text-lg
                  leading-relaxed
                  font-normal
                "
              >
                {concept.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================= */}
        {/* 04 DESIGN SYSTEM */}
        {/* ============================= */}

        {(colors.length > 0 || typography || paletteRationale) && (
          <section className="mb-14 border-t border-white/10 pt-10">
            {/* HEADING */}

            <div className="mb-6">
              <span
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-emerald-400
                "
              >
                03 · Design System
              </span>

              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                Color Palette & Typography
              </h2>
            </div>

            {/* DESIGN SYSTEM CARD */}

            <div
              className="
                bg-[#111827]
                rounded-3xl
                border
                border-[#2D3748]
                p-6
                sm:p-8
                space-y-7
              "
            >
              {/* ============================= */}
              {/* COLORS */}
              {/* ============================= */}

              {colors.length > 0 && (
                <div
                  className="
                    grid
                    grid-cols-2
                    sm:grid-cols-4
                    gap-3
                  "
                >
                  {colors.map((color, index) => (
                    <div
                      key={`${color.hex}-${index}`}
                      className="
                        rounded-2xl
                        p-4
                        bg-[#0B0F14]
                        border
                        border-white/5
                        space-y-3
                      "
                    >
                      {/* COLOR */}

                      <div
                        className="
                          w-full
                          h-16
                          rounded-xl
                          border
                          border-white/10
                          shadow-inner
                        "
                        style={{
                          backgroundColor: color.hex,
                        }}
                      />

                      {/* NAME */}

                      <div>
                        <span className="text-xs font-bold text-white block">
                          {color.name}
                        </span>

                        <span className="text-[11px] font-mono text-white/40">
                          {color.hex}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ============================= */}
              {/* TYPOGRAPHY + PALETTE */}
              {/* ============================= */}

              {(typography || paletteRationale) && (
                <div
                  className="
                    pt-5
                    border-t
                    border-white/10
                    grid
                    sm:grid-cols-2
                    gap-8
                    text-sm
                    text-white/70
                    leading-relaxed
                  "
                >
                  {/* TYPOGRAPHY */}

                  {typography && (
                    <div>
                      <span
                        className="
                          text-emerald-400
                          font-bold
                          text-xs
                          uppercase
                          tracking-wider
                          block
                          mb-2
                        "
                      >
                        Type Architecture
                      </span>

                      <p>{typography}</p>
                    </div>
                  )}

                  {/* PALETTE */}

                  {paletteRationale && (
                    <div>
                      <span
                        className="
                          text-emerald-400
                          font-bold
                          text-xs
                          uppercase
                          tracking-wider
                          block
                          mb-2
                        "
                      >
                        Palette Rationale
                      </span>

                      <p>{paletteRationale}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ============================= */}
        {/* 05 BRAND APPLICATIONS */}
        {/* ============================= */}

        {applications.length > 0 && (
          <section className="mb-14 border-t border-white/10 pt-10">
            {/* HEADING */}

            <div className="mb-6">
              <span
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-emerald-400
                "
              >
                04 · Applications
              </span>

              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                Brand Applications
              </h2>
            </div>

            {/* ============================= */}
            {/* DYNAMIC APPLICATION GRID */}
            {/* ============================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-6
                gap-5
                auto-rows-[280px]
                sm:auto-rows-[320px]
              "
            >
              {applications.map((application, index) => {
                const total = applications.length;

                const spanClass = getApplicationSpan(index, total);

                return (
                  <div
                    key={`${application.image}-${index}`}
                    className={`
                      ${spanClass}
                      relative
                      rounded-2xl
                      overflow-hidden
                      border
                      border-[#2D3748]
                      bg-[#0E141E]
                      group
                      shadow-lg
                    `}
                  >
                    {/* IMAGE */}

                    <img
                      src={application.image}
                      alt={
                        application.alt ||
                        `${client || "Brand"} application ${index + 1}`
                      }
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.04]
                      "
                    />

                    {/* DARK GRADIENT */}

                    {(application.title ||
                      application.description) && (
                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          pt-16
                          pb-4
                          px-4
                          bg-gradient-to-t
                          from-black/90
                          via-black/50
                          to-transparent
                        "
                      >
                        {/* APPLICATION TITLE */}

                        {application.title && (
                          <span
                            className="
                              text-sm
                              sm:text-base
                              font-bold
                              text-white
                              block
                              mb-1
                            "
                          >
                            {application.title}
                          </span>
                        )}

                        {/* DESCRIPTION */}

                        {application.description && (
                          <span
                            className="
                              text-[11px]
                              sm:text-xs
                              text-white/60
                              leading-relaxed
                              block
                              max-w-lg
                            "
                          >
                            {application.description}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ============================= */}
        {/* 06 FINAL CTA */}
        {/* ============================= */}

        <section className="border-t border-white/10 pt-10">
          <div
            className="
              p-8
              sm:p-10
              rounded-3xl
              bg-gradient-to-br
              from-[#111827]
              via-[#111827]
              to-emerald-950/20
              border
              border-[#2D3748]
              space-y-6
            "
          >
            {/* CLOSING TEXT */}

            <p
              className="
                text-lg
                sm:text-xl
                text-white/90
                font-medium
                leading-relaxed
              "
            >
              {closingText}
            </p>

            {/* CTA ROW */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-start
                sm:items-center
                justify-between
                gap-4
                pt-5
                border-t
                border-white/10
              "
            >
              {/* WHATSAPP CTA */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  interactive
                  btn-amber
                  px-6
                  py-3
                  text-sm
                  font-bold
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  shadow-lg
                "
              >
                <MessageSquare size={16} />

                <span>Discuss a Similar Project</span>
              </a>

              {/* SERVICE LINK */}

              <Link
                to={serviceLink}
                className="
                  text-sm
                  font-bold
                  text-amber-400
                  hover:text-amber-300
                  transition-colors
                  inline-flex
                  items-center
                  gap-1.5
                "
              >
                <span>{serviceLinkText}</span>

                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* RETURN LINK */}

          <div className="mt-8 text-center">
            <Link
              to="/design-stories"
              className="
                text-xs
                font-bold
                text-white/50
                hover:text-white
                transition-colors
                inline-flex
                items-center
                gap-1.5
              "
            >
              <ArrowLeft size={13} />

              <span>Return to All Design Stories</span>
            </Link>
          </div>
        </section>
      </main>

    

      <Footer />
    </div>
  );
};

export default DesignStory;
// SajavatStudioDesignStory.jsx
import React from "react";
import DesignStory from "../components/DesignStory";
import SEO from "../seo/SEO";
import { WHATSAPP_LINK } from "../constants";

/**
 * Design story page for the Sajavat Studio project.
 *
 * NOTE: Fill in the placeholder values (TODO) with actual content for the
 * Sajavat Studio design story – SEO metadata, schema JSON‑LD, overview, concept,
 * colour palette, typography, and application assets.
 */
const SajavatStudioDesignStory = () => {
  const seo = {
    title: "Sajavat Studio – Design Story",
    description: "Explore the visual identity and design process behind Sajavat Studio.",
    canonical: "https://graphicgalaxystudio.netlify.app/portfolio/sajavat-studio",
    ogTitle: "Sajavat Studio – Design Story",
    ogDescription: "Learn how Sajavat Studio branding was crafted.",
    ogUrl: "https://graphicgalaxystudio.netlify.app/portfolio/sajavat-studio",
    ogImage: "TODO_HERO_IMAGE_URL",
  };

  const schema = [] // TODO: add JSON‑LD schema if required

  const props = {
    seo,
    schema,
    category: "Branding",
    client: "Sajavat Studio",
    location: "Sangli",
    title: "Sajavat Studio – Brand Identity",
    heroImage: "TODO_HERO_IMAGE_URL",
    heroAlt: "Sajavat Studio branding hero image",
    overview: [
      "TODO: Brief overview paragraph(s) describing the project goals and challenges.",
    ],
    concept: ["TODO: Concept narrative describing the creative thinking."],
    colors: [
      // Example colour objects: { name: "Primary", hex: "#FFCC00" }
    ],
    typography: "TODO: Typography description or font stack.",
    paletteRationale: "TODO: Explain why the colour palette was chosen.",
    applications: [
  {
    image: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790935980/ChatGPT_Image_Oct_2_2026_03_40_18_PM_vgt3co.webp",
    alt: "Sajavat Studio design asset 1",
    title: "Sajavat Studio Asset 1",
    description: "Description for Sajavat Studio asset 1"
  },
  {
    image: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790935981/ChatGPT_Image_Oct_2_2026_03_40_38_PM_vsiitg.webp",
    alt: "Sajavat Studio design asset 2",
    title: "Sajavat Studio Asset 2",
    description: "Description for Sajavat Studio asset 2"
  },
  {
    image: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790935981/ChatGPT_Image_Oct_2_2026_03_40_00_PM_p8kqhx.webp",
    alt: "Sajavat Studio design asset 3",
    title: "Sajavat Studio Asset 3",
    description: "Description for Sajavat Studio asset 3"
  },
],
    closingText:
      "Brand identity designed by Graphic Galaxy, Sangli for a consistent and professional brand presence.",
    whatsappMessage:
      "Hi Graphic Galaxy, I read your Sajavat Studio Design Story and want to discuss a branding project.",
    serviceLink: "/logo-design-in-sangli",
    serviceLinkText: "Explore Logo Design in Sangli",
  };

  const whatsappUrl = `${WHATSAPP_LINK}&text=${encodeURIComponent(props.whatsappMessage)}`;

  return (
    <>
      <SEO {...seo} schema={schema} />
      {/* The DesignStory component handles the full UI layout */}
      <DesignStory {...props} />
    </>
  );
};

export default SajavatStudioDesignStory;

// LuckyEggsDesignStory.jsx
import React from "react";
import DesignStory from "../components/DesignStory";
import SEO from "../seo/SEO";
import { WHATSAPP_LINK } from "../constants";

/**
 * Design story page for the Lucky Eggs project.
 *
 * NOTE: Replace the placeholder values (marked with TODO) with the actual
 * content for the Lucky Eggs design story – SEO metadata, schema JSON‑LD,
 * overview paragraphs, concept description, colour palette, typography, and
 * application assets.
 */
const LuckyEggsDesignStory = () => {
  const seo = {
    title: "Lucky Eggs – Design Story",
    description: "Explore the visual identity and design process behind Lucky Eggs.",
    canonical: "https://graphicgalaxystudio.netlify.app/portfolio/lucky-eggs",
    ogTitle: "Lucky Eggs – Design Story",
    ogDescription: "Learn how Lucky Eggs branding was crafted.",
    ogUrl: "https://graphicgalaxystudio.netlify.app/portfolio/lucky-eggs",
    ogImage: "TODO_HERO_IMAGE_URL",
  };

  const schema = [] // TODO: add JSON‑LD schema if required

  const props = {
    seo,
    schema,
    category: "Branding",
    client: "Lucky Eggs",
    location: "Sangli",
    title: "Lucky Eggs – Brand Identity",
    heroImage: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790935980/ChatGPT_Image_Oct_2_2026_03_40_18_PM_vgt3co.webp",
    heroAlt: "Lucky Eggs main hero image",
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
    alt: "Lucky Eggs design asset 1",
    title: "Lucky Eggs Asset 1",
    description: "Description for Lucky Eggs asset 1"
  },
  {
    image: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790935981/ChatGPT_Image_Oct_2_2026_03_40_38_PM_vsiitg.webp",
    alt: "Lucky Eggs design asset 2",
    title: "Lucky Eggs Asset 2",
    description: "Description for Lucky Eggs asset 2"
  },
  {
    image: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1790935981/ChatGPT_Image_Oct_2_2026_03_40_00_PM_p8kqhx.webp",
    alt: "Lucky Eggs design asset 3",
    title: "Lucky Eggs Asset 3",
    description: "Description for Lucky Eggs asset 3"
  },
],
    closingText:
      "Brand identity designed by Graphic Galaxy, Sangli for a consistent and professional brand presence.",
    whatsappMessage:
      "Hi Graphic Galaxy, I read your Lucky Eggs Design Story and want to discuss a branding project.",
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

export default LuckyEggsDesignStory;

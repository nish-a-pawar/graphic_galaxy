/**
 * Blog Utility — Markdown-based blog system for Graphic Galaxy.
 *
 * Vite requires `import.meta.glob` to be called at the TOP LEVEL of a module
 * (not inside a function) so that it can be statically analysed and the
 * resolved module map is shared across all lazy chunks that import this file.
 *
 * Using `as: "raw"` (Vite 5 syntax) returns each .md file as a plain string.
 */

// Single top-level glob — Vite resolves this at build time and shares the
// result across ALL chunks that import blogUtils (BlogListing + BlogPost).
const postsModules = import.meta.glob("./posts/*.md", {
  eager: true,
  as: "raw",
});

// ---------------------------------------------------------------------------
// Frontmatter parser — no external dependency needed
// ---------------------------------------------------------------------------
export function parseMarkdown(rawText) {
  if (!rawText || typeof rawText !== "string")
    return { metadata: {}, content: "" };

  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = rawText.match(frontmatterRegex);

  if (!match) {
    return { metadata: {}, content: rawText };
  }

  const yamlBlock = match[1];
  const content = match[2].trim();
  const metadata = {};

  yamlBlock.split(/\r?\n/).forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      // Strip surrounding quotes
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      metadata[key] = value;
    }
  });

  return { metadata, content };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Returns an array of all post metadata objects, sorted newest-first. */
export function getAllPosts() {
  const posts = [];

  for (const path in postsModules) {
    const rawText = postsModules[path];
    const { metadata } = parseMarkdown(rawText);
    if (metadata.slug) {
      posts.push(metadata);
    }
  }

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/** Returns { metadata, content } for the post matching `slug`, or null. */
export function getPostBySlug(slug) {
  for (const path in postsModules) {
    const rawText = postsModules[path];
    const { metadata, content } = parseMarkdown(rawText);
    if (metadata.slug === slug) {
      return { metadata, content };
    }
  }
  return null;
}

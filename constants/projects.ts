export type Project = {
  slug: string;
  title: string;
  coverImage: string;
  tagline: string;
  description: string;
  role?: string;
  tools?: string;
  images: string[];
};

// ---------------------------------------------------------------------------
// EDIT ME: This is the single source of truth for every project on the site.
// - `slug` sets the URL: /projects/<slug>
// - `coverImage` shows up as the full-width banner on the homepage
// - `images` is the gallery shown on that project's own page
// Add a new object to this array to add a new project banner + page.
// ---------------------------------------------------------------------------
export const Projects: Project[] = [
  {
    slug: "cmy",
    title: "CMY",
    coverImage: "/images/CMYcover.png",
    tagline: "Replace this with a one-line summary of the project.",
    description:
      "Replace this with a full description of the project: what it is, the goal, your process, and anything you're proud of.",
    role: "Add your role here (e.g. Technical Artist, 3D Modeler)",
    tools: "Add the tools/engine you used here (e.g. Unity, Blender, Substance Painter)",
    images: ["/images/CMYcover.png"],
  },
  {
    slug: "ddd",
    title: "DDD",
    coverImage: "/images/DDDcover.png",
    tagline: "Replace this with a one-line summary of the project.",
    description:
      "Replace this with a full description of the project: what it is, the goal, your process, and anything you're proud of.",
    role: "Add your role here",
    tools: "Add the tools/engine you used here",
    images: ["/images/DDDcover.png"],
  },
  {
    slug: "senior-project",
    title: "Senior Project",
    coverImage: "/images/SenProjcover.png",
    tagline: "Replace this with a one-line summary of the project.",
    description:
      "Replace this with a full description of the project: what it is, the goal, your process, and anything you're proud of.",
    role: "Add your role here",
    tools: "Add the tools/engine you used here",
    images: [
      "/images/SenProjcover.png",
      "/images/building%20(1).jpg",
      "/images/building%20(2).jpg",
      "/images/building%20(3).jpg",
      "/images/building%20(4).jpg",
      "/images/building%20(5).jpg",
      "/images/building%20(6).jpg",
    ],
  },
  {
    slug: "trailer",
    title: "Trailer",
    coverImage: "/images/trailercover.png",
    tagline: "Replace this with a one-line summary of the project.",
    description:
      "Replace this with a full description of the project: what it is, the goal, your process, and anything you're proud of.",
    role: "Add your role here",
    tools: "Add the tools/engine you used here",
    images: ["/images/trailercover.png"],
  },
];

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
    slug: "CMYKingdom",
    title: "CMYKingdom",
    coverImage: "/images/CMYcover.png",
    tagline: "A 3d platformer exploration game where you collect crystals to restore color to the world.",
    description:
      "CMYKingdom is a 3d platformer exploration game where you collect crystals to restore color back into a monocrhome world. The game is designed to be a relaxing and immersive experience, with a focus on exploration and discovery. This was a 10 week collaborative project ran on a game engine our team built using OpenGL. This process included asset and level optomization, as well as various culling/rendering techniques to ensure the game ran smoothly on different systems. Some of my major contibutions to this project is the player model, and the game UI design/implementation.",
    role: "Technical Artist, 3D Modeler, UI Designer",
    tools: "Maya, Substance Painter, OpenGL, C++, GitHub",
    images: ["/images/CMYcover.png"],
  },
  {
    slug: "DDD",
    title: "Dumpledore's Dumpster Defense",
    coverImage: "/images/DDDcover.png",
    tagline: "A Tower defense / hack and slash hybrid game where you must protect your dumpster from enemies.",
    description:
      "Dumpledore's Dumpster Defense is a tower defense / hack and slash hybrid game. Where you start as Dumpledore, a wizard who is capable of binmancy - that is the magical control over trash and trash-like objects. Throughout the game the player can buy different weapons or summons from the shop to help defend their dumpster, whilst enemy waves get harder as the game progrsses. This was a 10 week collaborative project done in Unity where our main goal was to create engaing and meaningful play. In this project I was responsible for the summon model and game mechanics, as well as the UI design.",
    role: "Programmer and UI Designer",
    tools: "Unity, C#, GitHub",
    images: ["/images/DDDcover.png"],
  },
  {
    slug: "senior-project",
    title: "Animal Motion Capture Research",
    coverImage: "/images/SenProjcover.png",
    tagline: "Research on creating a pipeline for animal motion capture in Blender",
    description:
      "This was my Senior Project at Cal Poly where I created a pipeline for markerless (video-based) animal motion capture and transferring the data to a rigged 3d model in Blender. This was a solo project done over the span of 20 weeks where I was able to track joint positions of the dog I was tracking using DeepLabCut and then using Python scripting to retarget the data to a model I made in Blender. ",
    tools: "Blender, Maya, DeepLabCut, Python, GitHub",
    images: ["/images/SenProjcover.png"],
  },
  {
    slug: "ETS-trailer",
    title: "Enhanced Technology Studios Trailer",
    coverImage: "/images/trailercover.png",
    tagline: "A multimedia trailer that showcases the technologies of the Expressive Technology Studios at Cal Poly.",
    description:
      "The Expressive Technology Studios (ETS) is a theater space at Cal Poly that has a surround sound system, motion capture system, barco projector, studio lighting, etc. This trailer was made to showcase the technologies of the studio and was made using a combination of 3d animation, video editing, and sound design. This was a 10 week collaborative project  where I was responsible for the 3d animation, motion capture and modeling. I do not have access to the full trailer, but here are some clips and pictures of my contributions.",
    role: "editor, Animator, Motion Capture, Modeler",
    tools: "Premiere Pro, DaVinci Resolve, Blender, Maya, Motion Capture, GitHub",
    images: ["/images/trailercover.png"],
  },
];

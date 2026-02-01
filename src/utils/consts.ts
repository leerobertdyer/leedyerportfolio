export const ROUTES = {
  coding: [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/coding/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Coding", path: "/coding" },
    { name: "Resume", path: "/resumeJune2025.pdf", isExternal: true },
  ],
  music: [
    { name: "Home", path: "/" },
    // { name: "Tiny Sun", path: "/music/tinysun" },
    // { name: "Wife Island", path: '/music/wifeisland' },
    // { name: "Aunt Vicki", path: "/music/auntvicki" },
  ],
};

const tinySun = {
  link: "https://www.tinysunstudio.com",
  href: "coding//projects#tiny-sun",
  id: "tiny-sun",
  label: "Tiny Sun",
  description: "A React/Next.js/TypeScript studio website",
  image: "/images/tinySun.png",
  github: "https://github.com/leerobertdyer/tiny_sun",
};
const auntVicki = {
  link: "https://www.auntvicki.rocks",
  href: "coding//projects#aunt-vicki",
  label: "Aunt Vicki",
  id: "aunt-vicki",
  description:
    "A React/Vite/TypeScript band website that utilizes Google Calendar API to display upcoming shows",
  image: "/images/auntVicki.png",
  github: "https://github.com/leerobertdyer/auntvicki",
};
const erinDawn = {
  link: "https://www.erindawncampbell.com",
  href: "coding//projects#erin-dawn",
  id: "erin-dawn",
  label: "Erin Dawn Campbell",
  description:
    "A React/Vite/TypeScript e-commerce site for local clothing designer with shopping cart, Stripe, Firebase, and admin backend for inventory",
  image: "/images/erinDawnSite.png",
  github: "https://github.com/leerobertdyer/erin_dawn",
};
const nvelope = {
  link: "https://www.nvelopes.app",
  href: "coding//projects#nvelope",
  id: "nvelope",
  label: "Nvelope",
  description:
    "A personal finance management app built with React, TypeScript, Firebase, and Tailwind. Old school budgeting with digital envelopes.",
  image: "/images/nvelopesIcon.png",
  github: "https://github.com/leerobertdyer/nvelope",
};
const server = {
  link: "https://github.com/leerobertdyer/server",
  href: "coding//projects#server",
  id: "server",
  label: "Shared Node Server",
  description:
    "A general-use Node/Express/TypeScript backend for hobby projects: nodemailer, Stripe, Firebase Admin, PostgreSQL, and email/SEO routes for Aunt Vicki, Erin Dawn, and Nvelope",
  image: "/images/nodeServer.webp",
  github: "https://github.com/leerobertdyer/server",
};
const leedyerportfolio = {
  link: "https://www.leedyer.com",
  href: "coding//projects#leedyerportfolio",
  id: "leedyerportfolio",
  label: "leedyer.com (this site)",
  description:
    "The portfolio you're staring at right now. Yes, it's on the list. It has a lot going on, including Prisma, NextAuth, multi-router architecture, firebase-admin, and more. ",
  image: "/images/profilePicSmaller.jpg",
  github: "https://github.com/leerobertdyer/leedyerportfolio",
};

export const allProjects = [
  nvelope,
  erinDawn,
  auntVicki,
  tinySun,
  server,
  leedyerportfolio,
];

export const SKILLS = [
  {
    name: "React",
    description: "This portfolio site was built in React!",
    links: [auntVicki, tinySun, erinDawn, nvelope, leedyerportfolio],
  },
  {
    name: "Next.js",
    description:
      "This portfolio site was built utilizing NEXT.js for both front and backend!",
    links: [tinySun, leedyerportfolio],
  },
  {
    name: "Node.js",
    description:
      "This portfolio site uses nodemailer in the backend to handle the contact form.",
    links: [auntVicki, tinySun, server, leedyerportfolio],
  },
  {
    name: "Golang",
    description:
      "I have experience with Go working at Red Ventures to stand up several new microservices which helped us move away from legacy Java code, and gave us the opportunity to clean up and modernize our apps.",
    links: [],
  },
  {
    name: "GraphQL",
    description:
      "Another Red Ventures skill I learned, I helped build a subgraph for a federated GraphQL API which allowed collaboration between several teams at RV and the greater community.",
    links: [],
  },
  {
    name: "Shell Scripts",
    description:
      "I have experience with shell scripting, and have used it to automate tasks and build scripts for my development environment and workflow.",
    links: [],
  },
  {
    name: "SQL",
    description:
      "Experienced in PostgreSQL, having used it plenty at Red Ventures as well as here on this site.",
    links: [server],
  },
  {
    name: "HTML/CSS",
    description:
      "I have experience with Tailwind, but am also comfortable with vanilla CSS.",
    links: allProjects,
  },
  {
    name: "Python",
    description:
      "I am quite comfortable with the fundamentals of Python, and have experience with Flask.",
    links: [],
  },
  {
    name: "Java",
    description:
      "I worked extensively with java in rebuilding a legacy telephony sales app at Red Ventures.",
    links: [{ href: "coding/projects", label: "Red Ventures Work Experience" }],
  },
  {
    name: "TypeScript",
    description: "This portfolio site was built in TypeScript!",
    links: [auntVicki, tinySun, erinDawn, nvelope, server, leedyerportfolio],
  },
  {
    name: "Three.js",
    description:
      "I have a firm grasp on the key concepts: Scene, Camera, Renderer, Mesh, Geometry, Material, Lighting, Textures.",
    links: [],
  },
  {
    name: "ReactXR",
    description:
      "I have a solid understanding of the ReactXR library. Including basic setup for VR and AR.",
    links: [],
  },
  {
    name: "Vitest",
    description:
      "I have experience crafting and editing unit tests with Vitest and React Testing Library.",
    links: [],
  },
  {
    name: "Express",
    description:
      "I have experience with Express, and have worked with several RESTful APIs.",
    links: [server],
  },
  {
    name: "Docker",
    description: "I have used Docker to containerize and deploy.",
    links: [],
  },
  {
    name: "Socket",
    description:
      "I have experience with socket.io setting up instant messaging and live notifications.",
    links: [],
  },
  {
    name: "Playwright",
    description:
      "I have experience with Playwright and Beautiful Soup for web scraping.",
    links: [],
  },
  {
    name: "Firebase",
    description:
      "I have experience with Firebase and Supabase for authentication and database management.",
    links: [auntVicki, tinySun, erinDawn, nvelope, leedyerportfolio],
  },
  {
    name: "APIs",
    description:
      "I have experience with several 3rd party APIs including Dropbox, Google Calendar, and PayPal.",
    links: [auntVicki, tinySun, erinDawn, nvelope, server, leedyerportfolio],
  },
  {
    name: "Git/GitHub",
    description:
      "I have extensive experience working with source control including interactive rebasing as well as traditional merging.",
    links: allProjects,
  },
];

export const DUO_CALENDAR_ID =
  "507d3c707b4698a16683b04f302ab221389050e367ad3dd0cb06889f00748a3a@group.calendar.google.com";

export const SOLO_CALENDAR_ID =
  "56169198901904ef1fa66f1c5d53b8721892308a7ce99c430dab23b698f73409@group.calendar.google.com";

export const TINY_SUN_ARTIST_ID = "1"; // Using for solo artist currently.
export const AUNT_VICKI_ARTIST_ID = "2";
export const DUO_ARTIST_ID = "3";
export const SOLO_ARTIST_ID = "1"; // Currently using Tiny Sun, but if I ever started playing out with tiny sun would have to switch this.

export const adminEmails = ["leerobertdyer@gmail.com", "lee.dyer.dev@gmail.com", "ldyer@redventures.com"];

export const ALLOWED_SONG_FIELDS = new Set([
  "artist_id",
  "title",
  "src",
  "img",
  "is_cover",
  "songwriter",
]);

export const ALLOWED_VIDEO_FIELDS = new Set([
  "youtube_id",
  "title",
  "artist_id",
  "is_featured",
  "show_on_main",
]);

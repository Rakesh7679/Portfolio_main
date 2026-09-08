/* Professional experience — from Gireesh's CV, positioned design-first per
   03_CONTENT_STRATEGY.md. Reverse chronological: newest first. */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  /* panel color — intentional, one vibrant per role (Experience deck) */
  color: string;
  fg: "light" | "dark";
  /* Company mark. `variant` follows what the supplied file actually IS:
     · "tile"  — the logo ships with its own background baked in (square
                 avatars), so it is shown as a rounded tile, uncropped
     · "plate" — transparent artwork that needs a light ground to read;
                 the plate's width follows the logo's true aspect ratio
     · absent  — no official file supplied yet → typographic fallback */
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    /* Placement adapts to how dense the panel's copy is — a logo is not
       forced into the same slot for every company.
       "right" — sits beside the content (default, when there is room)
       "below" — closes the panel underneath the content (dense copy) */
    placement?: "right" | "below";
  };
  /* French copy for the translatable fields (see lib/i18n.tsx → L()) */
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "IBM SkillsBuild",
    role: "Full Stack Development Trainee",
    type: "Internship",
    location: "Remote",
    period: "Jan 2025 - Present",
    summary: "Full Stack Development Training. Worked on building and optimizing internal tools using React.js, Node.js, Express.js, and MongoDB.",
    achievements: [
      "Built and optimized internal tools.",
      "Gained hands-on experience with MERN stack development."
    ],
    outcome: "Developed robust full stack applications",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
    color: "#0f62fe",
    fg: "light",
  },
  {
    company: "Tech Solutions Inc.",
    role: "Frontend Developer",
    type: "Full-time",
    location: "Remote",
    period: "Jun 2023 - Dec 2024",
    summary:
      "Developed interactive and responsive user interfaces for a high-traffic web application using React and Tailwind CSS.",
    achievements: [
      "Improved page load speed by 25%.",
      "Collaborated with designers to implement pixel-perfect UI."
    ],
    outcome: "Delivered seamless user experiences",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    color: "#e84a5f",
    fg: "light",
  },
  {
    company: "Creative Web Agency",
    role: "Web Development Intern",
    type: "Internship",
    location: "Remote",
    period: "Jan 2023 - May 2023",
    summary:
      "Assisted in building custom websites for various clients. Learned the basics of modern web development workflow.",
    achievements: [
      "Built 3 responsive landing pages.",
      "Fixed UI bugs across multiple client projects."
    ],
    outcome: "Gained practical experience in web development",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    color: "#2b2e4a",
    fg: "light",
  }
];

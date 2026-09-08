/* My Design Stack — tools shown in the spiral orbit.
   `src` uses a real logo from /public/images/logos when we have one;
   otherwise a brand-tinted monogram mark keeps the set visually uniform.
   To upgrade a monogram: drop an SVG/PNG in that folder and swap in `src`. */

export type Tool = {
  name: string;
  group: "AI" | "Design" | "Build" | "Creative";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — Frontend — */
  { name: "React.js", group: "Build", mono: "Re", color: "#61DAFB" },
  { name: "JavaScript", group: "Build", mono: "JS", color: "#F7DF1E" },
  { name: "HTML5", group: "Build", mono: "H5", color: "#E34F26" },
  { name: "CSS3", group: "Build", mono: "C3", color: "#1572B6" },
  
  /* — Backend — */
  { name: "Node.js", group: "Build", mono: "No", color: "#339933" },
  { name: "Express.js", group: "Build", mono: "Ex", color: "#000000" },
  
  /* — Database — */
  { name: "MongoDB", group: "Build", mono: "Mg", color: "#47A248" },
  { name: "MySQL", group: "Build", mono: "My", color: "#4479A1" },

  /* — Other — */
  { name: "Redux Toolkit", group: "Build", mono: "Rx", color: "#764ABC" },
  { name: "Docker", group: "Build", mono: "Dk", color: "#2496ED" },
  { name: "Kubernetes", group: "Build", mono: "K8", color: "#326CE5" },
  { name: "AWS", group: "Build", mono: "AW", color: "#FF9900" },
  { name: "Git", group: "Build", mono: "Gt", color: "#F05032" },
  { name: "GitHub", group: "Build", mono: "GH", color: "#181717" },
];

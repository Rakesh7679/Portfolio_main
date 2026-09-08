/* THE JOURNEY — the chapters the light tunnel travels through.
 *
 * ⚠ SOURCING: every fact here traces to Gireesh's CV (mirrored in
 * content/experience.ts) — companies, dates, places, roles and outcomes.
 * The 2021 chapter carries only what he stated himself: the year and
 * Telangana. Nothing biographical is invented around it.
 *
 * Shape per chapter:
 *   year   — shown large, the anchor
 *   title  — what the chapter is about, in his voice
 *   place  — where it happened (context line)
 *   story  — what was actually happening, 2–3 sentences
 *   bridge — how it handed over to the next chapter (the transition line)
 *
 * `fr` mirrors every translatable field (see lib/i18n.tsx -> L()). Company,
 * product and place names stay as they are. French runs ~15% longer than
 * English, so the copy is written to length, not translated literally. */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "roots",
    year: "2023",
    title: "Beginning the Journey",
    place: "Brainware University · Barasat",
    story:
      "Started my Bachelor of Computer Application with a focus on building a strong foundation in computer science and software development.",
    bridge: "The academic environment provided the groundwork for practical application.",
  },
  {
    id: "training",
    year: "2025",
    title: "IBM SkillsBuild Training",
    place: "Remote",
    story:
      "Engaged in an intensive Full Stack Development Training program. Worked on building and optimizing internal tools using the MERN stack (React.js, Node.js, Express.js, MongoDB).",
    bridge: "This practical experience transformed academic knowledge into real-world skills.",
  },
  {
    id: "objective",
    year: "Present",
    title: "Aspiring Full Stack Developer",
    place: "Jhargram, India",
    story:
      "Currently seeking an opportunity to contribute, learn, and grow as a Software Developer. Focused on leveraging my strong skills in React.js, Node.js, Express.js, and MongoDB.",
    bridge: "Ready to take on new challenges and build robust, scalable web applications.",
  },
];

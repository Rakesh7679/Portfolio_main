/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Rakesh Laha",
  jobTitle: "Fullstack Developer",
  email: "rakeshlaha305@gmail.com",
  location: "Jhargram, India",
  /* exact profile URLs as supplied — also consumed by JSON-LD */
  sameAs: [
    "https://www.linkedin.com/in/rakesh-laha-2196b62a7/",
    "https://github.com/Rakesh7679/",
    "https://steady-dodol-371e0b.netlify.app/",
  ],
};

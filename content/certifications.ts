/* Credentials — professional certification records.
 *
 * ⚠ SOURCING NOTE — read before editing.
 * Everything here comes from Gireesh's CV. His LinkedIn certifications page
 * is login-walled and could not be read, so ISSUERS, YEARS and CREDENTIAL IDs
 * were NOT available for most entries. Those fields are deliberately left
 * null and render as "to confirm" rather than being guessed: printing
 * "Microsoft Certified" or an invented credential ID on a job-seeker's
 * portfolio is a false credential claim, not a design detail.
 *
 * To complete a panel, fill in: issuer, year, credentialId, credentialUrl.
 * `verified` should only become true when a credential URL exists.
 *
 * `fr` carries French copy for the human-readable fields. Issuers stay as
 * issued, and a programme title that is itself a product name (Power BI,
 * Power Virtual Agents) is not translated. */

export type Cert = {
  no: string; /* deck-style section number */
  /* the awarding organisation, exactly as it issued the credential */
  issuer: string | null;
  /* official issuer mark, supplied by Gireesh. Always rendered on a light
     plate so brand colours stay true on dark and light panels alike.
     `aspect` is the file's real ratio — the mark is never distorted. */
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  {
    no: "2.1",
    issuer: "AWS",
    title: "AWS re/Start Graduate",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "Cloud Foundations",
      "Linux",
      "Python",
      "Networking",
      "Security",
      "Databases"
    ],
  },
  {
    no: "2.2",
    issuer: null,
    title: "Certificate in Data Visulization",
    year: null,
    credentialId: null,
    verified: false,
    skills: [
      "Data Analytics",
      "Dashboard Design",
      "Visual Encodings"
    ],
  },
  {
    no: "2.3",
    issuer: "Oracle",
    title: "Oracle Certified: Generative AI Professional",
    year: "2025",
    credentialId: null,
    verified: false,
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "Large Language Models"
    ],
  }
];

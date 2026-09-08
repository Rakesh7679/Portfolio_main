"use client";

/*
 * Centralised EN/FR store for every user-facing string on the site.
 *
 * Switching is pure React state: scroll position, the active section and all
 * pinned ScrollTriggers survive, with no reload. The choice persists in
 * localStorage and is mirrored onto <html lang> for assistive tech.
 *
 * Proper nouns (companies, products, tools, place names) are deliberately
 * NOT translated. French runs longer than English, so copy here is written
 * to fit the same layout rather than translated literally.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Entry = { en: string; fr: string };

export const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.work": { en: "Work", fr: "Projets" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.menu": { en: "Open menu", fr: "Ouvrir le menu" },
  "nav.close": { en: "Close menu", fr: "Fermer le menu" },

  /* ---------------- intro ---------------- */
  "intro.scroll": { en: "Scroll to enter", fr: "Faites défiler pour entrer" },

  /* ---------------- hero ---------------- */
  "hero.kicker": {
    en: "Full Stack Developer · MERN Stack",
    fr: "Développeur Full Stack · MERN Stack",
  },
  "hero.h1a": { en: "Apps that are", fr: "Des applications" },
  "hero.h1aEm": { en: "fast.", fr: "rapides." },
  "hero.h1b": { en: "Code that", fr: "Du code qui" },
  "hero.h1bEm": { en: "scales.", fr: "évolue." },
  "hero.sub": {
    en: "I build full-stack web applications end to end — React frontends, Node.js backends, MongoDB databases — with one obsession: clean, scalable code.",
    fr: "Je développe des applications web full-stack de bout en bout — interfaces React, backends Node.js, bases de données MongoDB — avec une obsession : un code propre et évolutif.",
  },
  "hero.cta1": { en: "View My Projects", fr: "Voir mes projets" },
  "hero.cta2": { en: "My Tech Stack", fr: "Ma stack tech" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Faites défiler" },
  "stat.projects": { en: "Projects Built", fr: "Projets réalisés" },
  "stat.years": { en: "Years of Coding", fr: "Ans de développement" },
  "stat.countries": { en: "Technologies Mastered", fr: "Technologies maîtrisées" },
  "stat.satisfaction": { en: "GitHub Repos", fr: "Dépôts GitHub" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About", fr: "À propos" },
  "about.h2a": { en: "Code is how I think —", fr: "Le code, c'est ma façon de penser —" },
  "about.h2b": { en: "shipping is how I", fr: "le déploiement, ma façon de la" },
  "about.h2Em": { en: "prove", fr: "prouver" },
  "about.h2c": { en: "it.", fr: "." },
  "about.m1": {
    en: "IBM SkillsBuild — Full Stack Training",
    fr: "IBM SkillsBuild — Formation Full Stack",
  },
  "about.m2": {
    en: "Full-stack projects shipped end-to-end",
    fr: "Projets full-stack livrés de bout en bout",
  },
  "about.m3": {
    en: "AI models integrated across personal projects",
    fr: "Modèles IA intégrés dans mes projets personnels",
  },
  "about.m4": {
    en: "Technologies in my stack — React, Node, MongoDB, Docker, AWS and more",
    fr: "Technologies dans ma stack — React, Node, MongoDB, Docker, AWS et plus",
  },
  "about.edu": {
    en: "BCA · Brainware University · Barasat · Computer Science · Software Development · Web Technologies",
    fr: "BCA · Brainware University · Barasat · Informatique · Développement logiciel · Technologies web",
  },
  "about.cta": { en: "Explore My Projects", fr: "Découvrir mes projets" },

  /* ---------------- journey ----------------
     Chapter copy lives in content/journey.ts; only the chrome is here. */
  "journey.eyebrow": { en: "My Journey", fr: "Mon parcours" },
  "journey.enter": { en: "Scroll to travel", fr: "Faites défiler pour avancer" },
  "journey.chapter": { en: "Chapitre", fr: "Chapitre" },
  "journey.lede": {
    en: "From Jhargram to the cloud — the chapters that turned a student into a Full Stack Developer.",
    fr: "De Jhargram au cloud — les chapitres qui ont transformé un étudiant en développeur Full Stack.",
  },

  /* ---------------- tech stack ---------------- */
  "stack.eyebrow": { en: "Tech Stack", fr: "Stack technique" },
  "stack.h2": { en: "My Dev", fr: "Ma" },
  "stack.h2Em": { en: "Stack.", fr: "Stack." },
  "stack.lede": {
    en: "The technologies I use to build, test, deploy and scale — from React frontends to Node.js APIs, MongoDB databases to Docker containers.",
    fr: "Les technologies que j'utilise pour créer, tester, déployer et faire évoluer — des interfaces React aux APIs Node.js, des bases MongoDB aux containers Docker.",
  },
  "stack.count": { en: "technologies", fr: "technologies" },
  "stack.disciplines": { en: "layers", fr: "couches" },

  /* ---------------- work ---------------- */
  "work.eyebrow": { en: "Featured Projects", fr: "Projets sélectionnés" },
  "work.h2a": { en: "Selected projects,", fr: "Des projets choisis," },
  "work.h2b": { en: "built to", fr: "construits pour" },
  "work.h2Em": { en: "scale.", fr: "évoluer." },
  "work.lede": {
    en: "Full-stack web apps, AI integrations and real-time platforms — each project a different challenge, all built with the MERN stack.",
    fr: "Applications web full-stack, intégrations IA et plateformes temps réel — chaque projet un défi différent, tous construits avec la stack MERN.",
  },
  "work.open": { en: "Details", fr: "Détails" },
  "work.live": { en: "Live Demo", fr: "Démo live" },
  "work.hint": { en: "SCROLL TO BROWSE", fr: "FAITES DÉFILER" },

  /* ---------------- experience ---------------- */
  "exp.eyebrow": { en: "Experience", fr: "Expérience" },
  "exp.h2": { en: "Where I built my", fr: "Là où j’ai forgé mon" },
  "exp.h2Em": { en: "judgment.", fr: "jugement." },
  "exp.worked": { en: "What I worked on", fr: "Ce sur quoi j’ai travaillé" },
  "exp.impact": { en: "Impact", fr: "Impact" },
  "exp.tools": { en: "Tools & skills", fr: "Outils & compétences" },
  "exp.hint": { en: "SCROLL · CLICK TO JUMP", fr: "DÉFILER · CLIQUER POUR NAVIGUER" },
  "type.Internship": { en: "Internship", fr: "Stage" },
  "type.Full-time": { en: "Full-time", fr: "Temps plein" },
  "type.Hackathon": { en: "Hackathon", fr: "Hackathon" },
  "type.Freelance": { en: "Freelance", fr: "Freelance" },

  /* ---------------- credentials ---------------- */
  "cert.introLabel": { en: "Introduction", fr: "Introduction" },
  "cert.introTitle1": { en: "VERIFIED", fr: "TITRES" },
  "cert.introTitle2": { en: "CREDENTIALS", fr: "VÉRIFIÉS" },
  "cert.introBody": {
    en: "Continuous, applied learning across cloud, AI, databases and web development — the technical foundation underneath every project.",
    fr: "Un apprentissage continu et appliqué en cloud, IA, bases de données et développement web — la base technique de chaque projet.",
  },
  "cert.introNote": {
    en: "Multiple programmes · AWS, Oracle, Kaggle, Simplilearn and hands-on projects.",
    fr: "Plusieurs programmes · AWS, Oracle, Kaggle, Simplilearn et projets concrets.",
  },
  "cert.eyebrow": { en: "Credentials", fr: "Titres & certifications" },
  "cert.h2": { en: "Credentials", fr: "Certifications" },
  "cert.lede": {
    en: "Professional certifications and credentials earned throughout my full-stack development journey.",
    fr: "Les certifications et titres professionnels obtenus tout au long de mon parcours en développement full-stack.",
  },
  "cert.certified": { en: "Certified", fr: "Certifié" },
  "cert.brandRole": { en: "Full Stack Developer", fr: "Développeur Full Stack" },
  "cert.issuerTBC": { en: "Issuer — to confirm", fr: "Organisme — à confirmer" },
  "cert.certification": { en: "Certification", fr: "Certification" },
  "cert.verified": { en: "✓ Verified", fr: "✓ Vérifié" },
  "cert.onRequest": { en: "Credential on request", fr: "Justificatif sur demande" },
  "cert.issuedBy": { en: "Issued by", fr: "Délivré par" },
  "cert.year": { en: "Year", fr: "Année" },
  "cert.id": { en: "Credential ID", fr: "N° de justificatif" },
  "cert.tbc": { en: "To confirm", fr: "À confirmer" },
  "cert.skills": { en: "Skills", fr: "Compétences" },
  "cert.verify": { en: "Verify credential ↗", fr: "Vérifier le justificatif ↗" },
  "cert.foot": { en: "Credentials", fr: "Titres" },

  /* ---------------- gallery — the people behind the work ---------------- */
  "gallery.eyebrow": { en: "The Archive", fr: "L’archive" },
  "gallery.h2a": { en: "The people behind", fr: "Celles et ceux derrière" },
  "gallery.h2Em": { en: "the work", fr: "le travail" },
  "gallery.lede": {
    en: "The people, moments and experiences that shaped the work behind the screen.",
    fr: "Les personnes, les moments et les expériences qui ont façonné le travail derrière l’écran.",
  },
  "gallery.alt": {
    en: "A moment with the people behind the work",
    fr: "Un moment avec celles et ceux derrière le travail",
  },
  "gallery.frames": { en: "Frames", fr: "Images" },
  "gallery.hint": { en: "Scroll to travel the archive", fr: "Faites défiler pour parcourir l’archive" },

  /* ---------------- connect ---------------- */
  "connect.eyebrow": { en: "Let’s Connect", fr: "Restons en contact" },
  "connect.h2a": { en: "Let's build what's", fr: "Construisons ce qui" },
  "connect.h2Em": { en: "next.", fr: "vient." },
  "connect.lede": {
    en: "I'm open to full-stack developer roles, collaborations and interesting problems — if you're building something that needs a developer, I'd like to hear about it.",
    fr: "Je suis ouvert aux postes de développeur full-stack, aux collaborations et aux problèmes intéressants — si vous construisez quelque chose qui a besoin d'un développeur, parlons-en.",
  },
  "connect.cta": { en: "Get In Touch", fr: "Me contacter" },
  "connect.credit": { en: "Designed & Developed by", fr: "Conçu & développé par" },
  "connect.top": { en: "Back to top ↑", fr: "Haut de page ↑" },

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to work", fr: "← Retour aux projets" },
  "case.kicker": { en: "Case Study", fr: "Étude de cas" },
  "case.role": { en: "Role", fr: "Rôle" },
  "case.timeline": { en: "Timeline", fr: "Période" },
  "case.focus": { en: "Focus", fr: "Focus" },
  "case.site": { en: "Live product", fr: "Produit en ligne" },
  "case.repo": { en: "Source", fr: "Code source" },
  "case.cover": { en: "COVER", fr: "VISUEL" },
  "case.context": { en: "Context", fr: "Contexte" },
  "case.problem": { en: "The Problem", fr: "Le problème" },
  "case.process": { en: "How I Built It", fr: "Comment je l'ai construit" },
  "case.decisions": { en: "Technical Decisions", fr: "Décisions techniques" },
  "case.outcome": { en: "Outcome", fr: "Résultats" },
  "case.reflection": { en: "Reflection", fr: "Ce que j'en retire" },
  "case.all": { en: "← All projects", fr: "← Tous les projets" },
  "case.next": { en: "Next project", fr: "Projet suivant" },

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": { en: "← PORTFOLIO", fr: "← PORTFOLIO" },
  "lab.hint": {
    en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
    fr: "LAB · TUNNEL TYPE — FAITES DÉFILER POUR AVANCER · BOUGEZ LA SOURIS",
  },

  /* ---------------- 404 ---------------- */
  "nf.label": { en: "404 — NOT FOUND", fr: "404 — PAGE INTROUVABLE" },
  "nf.h1": { en: "This page went", fr: "Cette page a quitté" },
  "nf.h1Em": { en: "off the grid.", fr: "les radars." },
  "nf.cta": { en: "Back to the portfolio →", fr: "Retour au portfolio →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => DICT[k]?.en ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "fr") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {
      /* private mode — the choice simply won't persist */
    }
    document.documentElement.lang = l;
  };

  const t = (k: string) => DICT[k]?.[lang] ?? DICT[k]?.en ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a translated field off a content record: `L(lang, item, "summary")`
 *  returns `item.fr.summary` when available, else the English original. */
export function L<T extends { fr?: Record<string, unknown> }>(
  lang: Lang,
  item: T,
  field: keyof T & string
): string {
  if (lang === "fr" && item.fr && typeof item.fr[field] === "string") {
    return item.fr[field] as string;
  }
  return item[field] as unknown as string;
}

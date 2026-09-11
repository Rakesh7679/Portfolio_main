export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

export type StudyFr = Partial<Study>;

export type Cover = {
  bg: string;
  ink: "light" | "dark";
  src?: string;
  aspect?: number;
  variant?: "brand" | "photo";
  focus?: string;
  mark?: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  site?: { url: string; label: string };
  repo?: string;
  award?: string;
  study: Study;
  fr?: {
    title?: string;
    oneLiner?: string;
    contribution?: string;
    tags?: string[];
    study?: StudyFr;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "doctor-booking",
    title: "Doctor Appointment Booking System",
    tags: ["MERN", "Cloudinary", "Full-Stack"],
    year: "2025",
    oneLiner: "A full-stack Doctor Appointment Booking System using the MERN stack.",
    contribution: "Built full-stack system, implemented role-based access for admins, doctors, and patients.",
    coverLabel: "Doctor Appointment Booking",
    cover: { bg: "#0072E3", ink: "light", mark: "MERN" },
    site: { url: "https://docbook-six.vercel.app/", label: "Live Demo" },
    repo: "https://github.com/Rakeshlaha55/doctor-appointment-booking",
    study: {
      role: "Full-Stack Developer",
      timeline: "2025",
      context: "Built a full-stack Doctor Appointment Booking System using the MERN stack.",
      problem: "Patients needed a seamless way to book appointments, while doctors needed to manage schedules.",
      process: [
        {
          title: "Development",
          body: "Enabled patients to seamlessly book appointments, while doctors could manage schedules and communicate with patients.",
        }
      ],
      decisions: [
        {
          title: "Security",
          why: "Implemented secure authentication and role-based access for admins, doctors, and patients.",
        }
      ],
      outcomes: ["Live Project", "Seamless booking and schedule management"],
      reflection: "Gained significant experience in building role-based authenticated applications.",
    },
    fr: {
      title: "Système de réservation de rendez-vous médicaux",
      oneLiner: "Système de réservation complet avec la stack MERN.",
      contribution: "Développement full-stack et gestion des accès basée sur les rôles.",
      tags: ["MERN", "Cloudinary", "Full-Stack"],
    }
  },
  {
    slug: "intellisearch",
    title: "IntelliSearch – AI-Powered Chat & Knowledge Assistant",
    tags: ["MERN", "Socket.IO", "Redux", "LangChain"],
    year: "2025",
    oneLiner: "Developed a full-stack AI conversational assistant using the MERN stack.",
    contribution: "Integrated JWT, Socket.IO, LangChain, and multiple LLM providers.",
    coverLabel: "IntelliSearch",
    cover: { bg: "#6D3BF5", ink: "light", mark: "AI" },
    site: { url: "https://intellisearch-ai.vercel.app", label: "Live Demo" },
    repo: "https://github.com/Rakeshlaha55/intellisearch",
    study: {
      role: "Full-Stack Developer",
      timeline: "2025",
      context: "A full-stack AI conversational assistant.",
      problem: "Needed a way to manage chats, receive AI-generated responses, and maintain chat history.",
      process: [
        {
          title: "Integration",
          body: "Integrated JWT authentication, Socket.IO, LangChain, and multiple LLM providers with a responsive React UI and Redux Toolkit.",
        }
      ],
      decisions: [
        {
          title: "Multiple LLMs",
          why: "Used Mistral AI and Groq API to provide robust AI capabilities.",
        }
      ],
      outcomes: ["Responsive React UI", "Real-time AI chat"],
      reflection: "Learned how to integrate external AI APIs and maintain real-time socket connections.",
    },
    fr: {
      title: "IntelliSearch – Assistant conversationnel IA",
      oneLiner: "Assistant IA full-stack propulsé par la stack MERN.",
      contribution: "Intégration JWT, Socket.IO, LangChain et multiples LLMs.",
      tags: ["MERN", "Socket.IO", "Redux", "LangChain"],
    }
  },
  {
    slug: "ai-battle-arena",
    title: "AI Battle Arena – AI Model Comparison",
    tags: ["React.js", "Node.js", "MongoDB", "AI"],
    year: "2025",
    oneLiner: "Developed a full-stack AI-powered platform where multiple AI models compete.",
    contribution: "Integrated Gemini API, Cohere API, Mistral AI API for comparison.",
    coverLabel: "AI Battle Arena",
    cover: { bg: "#FF2E0F", ink: "light", mark: "ARENA" },
    site: { url: "https://ai-battle-arena.vercel.app", label: "Live Demo" },
    repo: "https://github.com/Rakeshlaha55/ai-battle-arena",
    study: {
      role: "Full-Stack Developer",
      timeline: "2025",
      context: "AI Model Comparison & Battle Platform.",
      problem: "Wanted to compare responses from multiple AI models to the same prompt.",
      process: [
        {
          title: "Development",
          body: "Developed a platform where multiple AI models compete against each other by generating responses to the same prompt.",
        }
      ],
      decisions: [
        {
          title: "Architecture",
          why: "Used MERN stack with Redux Toolkit, Socket.IO, JWT, and LangChain for smooth operation.",
        }
      ],
      outcomes: ["Multiple AI integrations", "Real-time comparison platform"],
      reflection: "Enhanced understanding of different LLM capabilities and API integrations.",
    },
    fr: {
      title: "AI Battle Arena – Comparaison de modèles IA",
      oneLiner: "Plateforme où plusieurs modèles d'IA s'affrontent en temps réel.",
      contribution: "Intégration des APIs Gemini, Cohere et Mistral.",
      tags: ["React.js", "Node.js", "MongoDB", "IA"],
    }
  },
  {
    slug: "capstone",
    title: "Capstone – Smart LMS & Student Portal",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    year: "2025",
    oneLiner: "Comprehensive university capstone platform featuring course management, interactive quizzes, and analytics.",
    contribution: "Engineered student and instructor dashboards, automated grading algorithms, and progress metrics.",
    coverLabel: "Capstone Project",
    cover: { bg: "#0D9488", ink: "light", mark: "CAPSTONE" },
    site: { url: "https://capstone-portal.vercel.app", label: "Live Demo" },
    repo: "https://github.com/Rakeshlaha55/capstone",
    study: {
      role: "Lead Full-Stack Developer",
      timeline: "2025",
      context: "University Capstone Learning Management & Academic Evaluation System.",
      problem: "Traditional academic management lacked centralized student tracking, online quiz assessments, and performance dashboards.",
      process: [
        {
          title: "Architecture & Portal Design",
          body: "Built an intuitive dashboard for educators to publish syllabus modules, schedule assignments, and review grades in real time.",
        },
        {
          title: "Assessment & Analytics",
          body: "Implemented automated quiz evaluations with immediate feedback loops and visual progress charts for students.",
        }
      ],
      decisions: [
        {
          title: "Modern Full-Stack Architecture",
          why: "Chose Next.js with MongoDB for fast server-side rendering, scalable document storage, and smooth client interactivity.",
        }
      ],
      outcomes: ["Full-featured academic LMS", "Automated quiz grading engine", "Intuitive role-based dashboards"],
      reflection: "Mastered end-to-end design of large-scale educational systems and complex relational data modelling.",
    },
    fr: {
      title: "Capstone – Portail LMS intelligent",
      oneLiner: "Plateforme académique complète avec gestion de cours et évaluations interactives.",
      contribution: "Tableaux de bord étudiants et enseignants, notation automatisée.",
      tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    }
  },
  {
    slug: "delidrop",
    title: "DeliDrop – On-Demand Food & Grocery Delivery",
    tags: ["React.js", "Express.js", "MongoDB", "Socket.IO"],
    year: "2025",
    oneLiner: "Hyperlocal on-demand delivery platform with live GPS driver tracking, instant dispatch, and order fulfillment.",
    contribution: "Built order dispatch engine, real-time geolocation tracking over WebSockets, and merchant panel.",
    coverLabel: "DeliDrop Delivery",
    cover: { bg: "#EA580C", ink: "light", mark: "DELIDROP" },
    site: { url: "https://delidrop-app.vercel.app", label: "Live Demo" },
    repo: "https://github.com/Rakeshlaha55/delidrop",
    study: {
      role: "Full-Stack Developer",
      timeline: "2025",
      context: "Real-Time Food & Grocery Delivery Ecosystem.",
      problem: "Customers and restaurant owners required live, second-by-second updates on courier movements and order status.",
      process: [
        {
          title: "Real-Time Dispatch Engine",
          body: "Designed a Socket.IO communication bridge sending live driver GPS coordinates to customer maps with zero perceptible lag.",
        },
        {
          title: "Checkout & Merchant Hub",
          body: "Created a merchant portal allowing restaurants to toggle menu availability and confirm order preparation with sound alerts.",
        }
      ],
      decisions: [
        {
          title: "WebSockets with Socket.IO",
          why: "Prevented polling overhead and delivered instant bi-directional updates between driver and customer devices.",
        }
      ],
      outcomes: ["Real-time driver location map", "Instant push notifications", "Scalable restaurant menu & cart management"],
      reflection: "Deepened expertise in event-driven architectures, geospatial data queries, and high-concurrency state handling.",
    },
    fr: {
      title: "DeliDrop – Livraison à la demande",
      oneLiner: "Plateforme de livraison de nourriture et courses avec suivi GPS en temps réel.",
      contribution: "Moteur de répartition des commandes et suivi de géolocalisation en direct.",
      tags: ["React.js", "Express.js", "MongoDB", "Socket.IO"],
    }
  },
  {
    slug: "safar",
    title: "Safar – On-Demand Ride Booking Platform",
    tags: ["React.js", "Node.js", "MongoDB", "Maps"],
    year: "2025",
    oneLiner: "Uber-style ride booking platform connecting passengers with nearby drivers in real time.",
    contribution: "Built the ride request flow, driver discovery, trip tracking, and responsive booking experience.",
    coverLabel: "Safar Ride Booking",
    cover: { bg: "#155E75", ink: "light", mark: "SAFAR" },
    site: { url: "https://echo-ride.netlify.app", label: "Live Demo" },
    study: {
      role: "Full-Stack Developer",
      timeline: "2025",
      context: "An on-demand ride booking experience inspired by modern mobility platforms.",
      problem: "Passengers needed a simple way to request rides, view driver availability, and follow a trip from booking to arrival.",
      process: [
        {
          title: "Ride Booking Flow",
          body: "Designed a clear passenger journey from pickup and destination selection through driver matching and trip confirmation.",
        },
        {
          title: "Driver Discovery & Tracking",
          body: "Created a real-time style interface for nearby driver visibility, trip status updates, and a focused mobile booking experience.",
        }
      ],
      decisions: [
        {
          title: "Mobile-First Mobility UX",
          why: "Prioritized fast actions, readable trip states, and map-oriented interactions for users booking rides on the move.",
        }
      ],
      outcomes: ["Live ride booking demo", "Passenger and driver trip flow", "Responsive mobility interface"],
      reflection: "Strengthened my understanding of location-aware product flows and the interaction patterns behind ride-hailing platforms.",
    },
    fr: {
      title: "Safar – Plateforme de réservation de trajets",
      oneLiner: "Plateforme de réservation de trajets inspirée d'Uber, reliant passagers et conducteurs.",
      contribution: "Flux de réservation, découverte des conducteurs et suivi du trajet.",
      tags: ["React.js", "Node.js", "MongoDB", "Cartes"],
    }
  },
  {
    slug: "moodify",
    title: "Moodify – Mood-Based Music Recommendation",
    tags: ["React.js", "Spotify API", "Node.js", "Tailwind CSS"],
    year: "2025",
    oneLiner: "Smart music web application recommending curated playlists and tracks tailored to user mood and emotions.",
    contribution: "Integrated Spotify Web SDK, mood detection algorithm, audio analysis filters, and custom player.",
    coverLabel: "Moodify Music",
    cover: { bg: "#10B981", ink: "light", mark: "MOODIFY" } ,
    site: { url: "https://moodify-music.vercel.app", label: "Live Demo" },
    repo: "https://github.com/Rakeshlaha55/moodify",
    study: {
      role: "Frontend & Full-Stack Developer",
      timeline: "2025",
      context: "Personalized Music Streaming & Emotion Recommendation App.",
      problem: "Finding the right playlist matching one's exact present mood is often tedious and manual.",
      process: [
        {
          title: "Spotify API & Mood Detection",
          body: "Connected Spotify OAuth and Web API to fetch audio valence, energy, and acousticness metrics mapped to user sentiment.",
        },
        {
          title: "Interactive Audio Player",
          body: "Built a responsive dark-mode music player with waveform audio visualizer and seamless playlist playback.",
        }
      ],
      decisions: [
        {
          title: "Valence-Based Audio Filtering",
          why: "Leveraged Spotify's track audio features API to programmatically filter tracks that acoustically correspond to target emotions.",
        }
      ],
      outcomes: ["Instant mood-matched playlist generation", "Seamless Spotify OAuth integration", "Modern audio player interface"],
      reflection: "Mastered working with third-party streaming APIs, OAuth token refreshing, and fluid audio visualization in React.",
    },
    fr: {
      title: "Moodify – Recommandation musicale selon l'humeur",
      oneLiner: "Application musicale recommandant des playlists selon l'émotion de l'utilisateur.",
      contribution: "Intégration de l'API Spotify, détection d'humeur et lecteur audio personnalisé.",
      tags: ["React.js", "Spotify API", "Node.js", "Tailwind CSS"],
    }
  }
];

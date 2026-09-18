/* ── Shared Project Data ── */

export type Project = {
  id: string;
  title: string;
  description: string;
  categories: string[];
  tech: string[];
  gradient: string;
  image?: string;
  terminalCmd: string;
  liveUrl: string;
  repoUrl: string;
  status: "live" | "dev" | "archived";
  /* ── Detail page fields ── */
  longDescription: string;
  features: string[];
  challenges: { title: string; solution: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "twibify",
    title: "Twibify",
    description:
      "Create stunning, watermark-free digital campaign frames (Twibbons) online. Choose from trending templates, customize with ease, and share directly to social media.",
    categories: ["Full Stack", "Web App"],
    tech: ["Laravel", "React", "TypeScript", "PHP", "MySQL"],
    gradient: "linear-gradient(135deg, #0A2E1C 0%, #051A0E 50%, #08080E 100%)",
    image: "/projects/twibify.png",
    terminalCmd: "php artisan serve --host=twibify.local",
    liveUrl: "https://twibify.com/",
    repoUrl: "#",
    status: "live",
    longDescription:
      "Twibify is a highly performant, watermark-free digital campaign platform that empowers users to create, customize, and share Twibbons effortlessly. Built with a robust Laravel backend and a dynamic React frontend, it provides a seamless experience for both campaign creators and participants.\n\nDesigned to handle viral traffic spikes, the platform efficiently manages thousands of concurrent image processing requests and database transactions. The intuitive UI makes discovering trending campaigns and generating custom frames a frictionless process across all devices.",
    features: [
      "Watermark-free, high-resolution image generation",
      "Real-time frame preview and photo customization",
      "Trending campaign discovery and intelligent search",
      "Optimized server-side image processing",
      "Seamless direct-to-social-media sharing",
      "Fully responsive, mobile-first interface",
    ],
    challenges: [
      {
        title: "Optimizing High-Volume Database Queries",
        solution:
          "Viral campaigns caused massive, sudden spikes in traffic that overwhelmed standard database queries. I resolved this by restructuring our MySQL schema, implementing strategic composite indexes, and utilizing Redis for advanced query caching. We also heavily optimized our Eloquent queries with eager loading, reducing N+1 issues and ensuring sub-second response times even under heavy concurrent load.",
      },
      {
        title: "Concurrent Image Processing",
        solution:
          "To prevent server bottlenecking during peak frame generation, I offloaded image processing tasks to asynchronous background queues, ensuring the main application thread remained responsive for all users.",
      },
    ],
  },
  {
    id: "luka-ai",
    title: "Luka AI",
    description:
      "AI-powered diabetic wound checker using advanced CapsNet deep learning for early detection and tracking.",
    categories: ["Full Stack", "AI/ML"],
    tech: ["Next.js", "React", "Express.js", "TypeScript", "PostgreSQL", "FastAPI", "Python"],
    gradient: "linear-gradient(135deg, #1A0030 0%, #0D0020 50%, #08080E 100%)",
    image: "/projects/luka-ai.png",
    terminalCmd: "python -m uvicorn main:app --reload",
    liveUrl: "https://luka-ai.aneukvision.com/en",
    repoUrl: "#",
    status: "live",
    longDescription:
      "Luka AI is an experimental AI-powered platform designed to assist in the early detection and tracking of diabetic wounds, specifically Diabetic Foot Ulcers. Powered by a cutting-edge CapsNet deep learning architecture, it processes user-uploaded images instantly to provide high-accuracy classification and reliable confidence scores.\n\nThe system features an intuitive manual masking tool for pixel-perfect wound isolation, reducing background noise and focusing the AI precisely on the region of interest. Patient data is secured with end-to-end encryption, and the platform provides detailed historical tracking, visual healing timelines, and exportable PDF reports.",
    features: [
      "Advanced CapsNet deep learning for high-accuracy classification",
      "Precision manual masking tool for pixel-perfect wound isolation",
      "Instant indication results with reliable model confidence scores",
      "End-to-end data encryption and private patient data handling",
      "Detailed historical tracking and visual healing timelines",
      "Exportable PDF reports for medical insights",
    ],
    challenges: [
      {
        title: "Optimizing AI Inference Speed",
        solution:
          "Leveraged FastAPI in Python to serve the CapsNet model, achieving sub-second inference times while handling concurrent analysis requests.",
      },
      {
        title: "Pixel-Perfect Image Masking",
        solution:
          "Developed an interactive canvas-based brush tool in React to allow users to precisely isolate the wound area, drastically improving model accuracy by eliminating background noise.",
      },
    ],
  },
  {
    id: "vectolio",
    title: "Vectolio",
    description:
      "A modern digital asset marketplace for discovering and downloading high-quality vectors, stock photos, and PSD files.",
    categories: ["Web App", "Full Stack"],
    tech: ["Next.js", "React", "Typescript", "Express.js", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #001f3f 0%, #001020 50%, #08080E 100%)",
    terminalCmd: "pnpm dev --store --env=prod",
    liveUrl: "https://vectolio.com/",
    repoUrl: "#",
    status: "live",
    image: "/projects/vectolio.png",
    longDescription:
      "Vectolio is a high-performance digital asset platform designed to provide creative professionals with top-tier vectors, stock photos, and PSD files. The platform is engineered with a robust Next.js and React frontend, paired with an Express.js and PostgreSQL backend, delivering a seamless browsing and downloading experience.\n\nBeyond just an asset library, Vectolio also functions as a community-driven marketplace where independent creators and designers can join as contributors, share their unique work, and monetize their high-quality digital content.",
    features: [
      "Extensive library of free and premium vectors, photos, and PSDs",
      "Daily content updates with fresh and trending designs",
      "Fast, intuitive search engine with advanced filtering",
      "Dedicated contributor dashboard for asset management and monetization",
      "Highly optimized media delivery and image rendering",
      "Fully responsive and accessible user interface",
    ],
    challenges: [
      {
        title: "Optimizing High-Resolution Media Delivery",
        solution:
          "Handling a massive library of high-resolution digital assets required an efficient delivery system. I implemented a resilient media optimization pipeline using Next.js caching and CDN integration, ensuring fast page loads and reduced bandwidth without compromising visual quality.",
      },
      {
        title: "Advanced Search and Categorization",
        solution:
          "To guarantee accurate search results across thousands of diverse assets, I integrated a powerful search mechanism backed by PostgreSQL full-text search, complemented by a dynamic tagging system for efficient content discovery.",
      },
    ],
  },
  {
    id: "aneuk-vision",
    title: "Aneuk Vision",
    description:
      "An AI-powered medical application that enables early stunting detection and growth monitoring for children using just a facial photo.",
    categories: ["Mobile App", "AI/ML", "Full Stack"],
    tech: [
      "React Native",
      "Next.js",
      "TypeScript",
      "Express.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
    ],
    gradient: "linear-gradient(135deg, #fad090 0%, #e87c14 50%, #a84e00 100%)",
    terminalCmd: "pnpm dev --store --env=prod",
    liveUrl: "https://aneukvision.com/en",
    repoUrl: "#",
    status: "live",
    image: "/projects/aneukvision.png",
    longDescription:
      "Aneuk Vision is an innovative health-tech platform designed to assist parents and healthcare providers in the early detection of childhood stunting. Utilizing advanced computer vision and medical AI algorithms, the application analyzes facial biometric points to accurately monitor a child's growth and development against WHO standards.\n\nThe system features a cross-platform mobile application and a web dashboard, powered by a robust backend architecture. It prioritizes data privacy with end-to-end encryption and ensures clinical-grade accuracy, enabling faster and more measurable clinical interventions right from a mobile device.",
    features: [
      "AI-driven facial scanning for early stunting detection with 94.8% accuracy",
      "Interactive dashboard for historical growth tracking",
      "End-to-end encryption for sensitive biometric data privacy",
      "Instant growth indicator reports and nutritional recommendations",
      "Cross-platform mobile application built with React Native",
      "Seamless backend integration with Express.js and FastAPI",
    ],
    challenges: [
      {
        title: "High-Accuracy Biometric Analysis",
        solution:
          "Developed and optimized a custom computer vision model using Python and FastAPI, achieving a 94.8% facial analysis accuracy by training on thousands of validated clinical data points.",
      },
      {
        title: "Secure Data Processing",
        solution:
          "Implemented strict end-to-end encryption protocols to ensure compliance with international medical privacy standards while handling sensitive pediatric biometric data.",
      },
    ],
  },
  {
    id: "wa-bot-softwaremurah",
    title: "WA Bot softwaremurah.id",
    description:
      "A WhatsApp bot tailored for a reseller group to automate responses and manage inquiries efficiently.",
    categories: ["Backend"],
    tech: ["JavaScript", "Node.js", "Baileys"],
    gradient: "linear-gradient(135deg, #075E54 0%, #128C7E 50%, #08080E 100%)",
    terminalCmd: "npm start",
    liveUrl: "#",
    repoUrl: "https://github.com/TrxModX21/WA-Bot",
    status: "live",
    longDescription:
      "WA Bot softwaremurah.id is an automated WhatsApp assistant built specifically to support a reseller group. Leveraging Node.js and the Baileys library, the bot operates seamlessly using a lightweight WebSocket connection, making it incredibly fast and efficient without requiring a heavy browser instance.\n\nIt is designed to handle common reseller inquiries, automate repetitive administrative tasks, and ensure group members receive instant responses, significantly reducing the manual workload for group administrators.",
    features: [
      "Automated responses for frequent reseller inquiries",
      "Lightweight WhatsApp Web API integration using the Baileys library",
      "Group administration and member management capabilities",
      "Real-time message processing with minimal latency",
      "Easily configurable auto-replies and custom keyword triggers",
    ],
    challenges: [
      {
        title: "Reliable Session Management",
        solution:
          "Implemented persistent authentication handling to ensure the bot remains securely connected, avoiding the need for frequent QR code rescans even after routine server restarts.",
      },
      {
        title: "Concurrent Message Processing",
        solution:
          "Designed an asynchronous processing flow to reliably handle spikes in message volume within active reseller groups, ensuring no requests are skipped or dropped.",
      },
    ],
  },
  {
    id: "budaya-aceh",
    title: "Budaya Aceh",
    description:
      "A comprehensive digital platform dedicated to preserving, documenting, and showcasing the rich cultural heritage of Aceh.",
    categories: ["Web App", "Mobile App", "Full Stack"],
    tech: ["Laravel", "Flutter", "PHP", "MySQL"],
    gradient: "linear-gradient(135deg, #033c59 0%, #022538 50%, #01121d 100%)",
    terminalCmd: "php artisan serve",
    liveUrl: "https://budayaaceh.com/",
    repoUrl: "#",
    status: "live",
    image: "/projects/budaya-aceh.png",
    longDescription:
      "Budaya Aceh is an integrated digital ecosystem aimed at preserving, documenting, and promoting the cultural heritage of Aceh, Indonesia. The platform serves as a centralized, publicly accessible repository for cultural assets, historical sites, traditional arts, and literature.\n\nPowered by a robust Laravel and MySQL backend, the system manages a massive catalog of cultural data. It delivers this content through a responsive web portal and a companion cross-platform mobile application built with Flutter, ensuring seamless access for tourists, researchers, and locals alike.",
    features: [
      "Comprehensive database of tangible and intangible cultural heritage",
      "Advanced search functionality for precise artifact and site discovery",
      "Digital library featuring cultural e-books and multimedia galleries",
      "Cross-platform mobile application developed with Flutter",
      "Robust admin dashboard for content management and public submission reviews",
      "Multilingual support including Indonesian, English, and Acehnese",
    ],
    challenges: [
      {
        title: "Complex Data Taxonomy",
        solution:
          "Designed a highly flexible and normalized MySQL database architecture to efficiently categorize diverse cultural data types—ranging from physical monuments to traditional dances—ensuring optimal query performance.",
      },
      {
        title: "Omnichannel Content Delivery",
        solution:
          "Developed a unified RESTful API using Laravel to serve content consistently across both the web platform and the Flutter mobile application, eliminating data redundancy and streamlining maintenance.",
      },
    ],
  },
];

export const CATEGORIES = [
  "All",
  ...Array.from(new Set(PROJECTS.flatMap((p) => p.categories))),
];

// Shared public career facts and selected project evidence.
export const navigationLinks = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const educationData = [
  {
    period: "Jul 2023 - Jul 2025",
    degree: "Master of Information Technology",
    institution: "The University of Western Australia",
    url: "https://www.uwa.edu.au/",
    logoUrl: "/imgs/uwa.webp",
    location: "Perth, Australia",
    focusAreas: [],
  },
  {
    period: "Sep 2019 - Jun 2021",
    degree:
      "Bachelor of Management - Information Management and Information System",
    institution: "University of Electronic Science and Technology of China",
    url: "https://en.uestc.edu.cn/",
    logoUrl: "/imgs/uestc.webp",
    location: "Chengdu, China",
    focusAreas: [],
  },
];

export const projectsData = [
  {
    id: "doorbell",
    title: "Smart Doorbell System",
    description:
      "A web application for exploring device events, with a companion worker for email notifications. The interface and notification processing form two parts of the same project.",
    contributions: [
      "Built date, time-range and event-type filters with React and server-side PostgreSQL queries.",
      "Integrated a Cloudflare Worker with Clerk and Resend to process pending events and email device owners.",
      "Wrote Vitest component tests for shared React controls.",
    ],
    technologies: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Cloudflare Workers",
      "Vitest",
    ],
    links: [
      {
        label: "Web application source",
        url: "https://github.com/Hayeensss/Smart_Doorbell",
      },
      {
        label: "Notification worker source",
        url: "https://github.com/Hayeensss/SmartDoorbell_Notification",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "A personal website that brings my projects, technical background and current experience together, with clear paths to the source code and CV.",
    contributions: [
      "Built reusable React components driven by shared project data.",
      "Created responsive layouts with Next.js and Tailwind CSS, with light and dark themes.",
      "Previously implemented a validated contact-form action with a Resend integration; the current site uses direct email contact.",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    links: [
      {
        label: "Portfolio source",
        url: "https://github.com/Hayeensss/portfolio_Hayeen",
      },
    ],
  },
];

export const contactData = {
  intro:
    "Get in touch about junior software development opportunities or the projects shown here.",
  email: "gracehayeens@gmail.com",
  address: "Perth, Western Australia",
  socialLinks: [{ platform: "github", url: "https://github.com/Hayeensss" }],
};

export const skillsData = [
  {
    id: "frontend",
    title: "Web interfaces",
    iconPath: "/imgs/icons/frontend.svg",
    description: "React components and responsive layouts",
    tags: ["JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Server integration",
    iconPath: "/imgs/icons/backend.svg",
    description: "Server actions and notification processing",
    tags: ["Next.js", "Cloudflare Workers", "Clerk", "Resend"],
  },
  {
    id: "database",
    title: "Data",
    iconPath: "/imgs/icons/database.svg",
    description: "Relational data and filtered event queries",
    tags: ["PostgreSQL", "SQL", "Drizzle ORM"],
  },
  {
    id: "devops",
    title: "Development tools",
    iconPath: "/imgs/icons/devops.svg",
    description: "Source control and React component tests",
    tags: ["Git", "GitHub", "Vitest", "Testing Library"],
  },
];

export const aboutData = [
  {
    title: "IT graduate",
    content:
      "I completed a Master of Information Technology at UWA in July 2025. I am based in Perth and seeking a Junior Software Developer role, with a focus on web applications.",
  },
  {
    title: "Web project experience",
    content:
      "My Smart Doorbell and Portfolio projects connect React interfaces with server-side data and service integrations. The project links below point to the source code and implementation notes.",
  },
  {
    title: "Business experience",
    content:
      "Since August 2025, I have worked as a Procurement Coordinator at Eco Sakura Energy. I coordinate purchasing requests, supplier communication and delivery follow-up, gaining practical experience with business processes and changing requirements.",
  },
];

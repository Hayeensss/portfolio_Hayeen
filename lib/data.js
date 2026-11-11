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
    title: "Smart Doorbell",
    description:
      "A web app for finding past doorbell events, with a companion worker that emails device owners.",
    notes: [
      {
        title: "Finding an event",
        description:
          "I built the filters for date, time range and event type, along with the PostgreSQL query behind them. The query keeps the device-owner condition even when the filters change. I also tested shared React controls with Vitest.",
        links: [
          {
            label: "Web app source",
            url: "https://github.com/Hayeensss/Smart_Doorbell",
          },
          {
            label: "History query",
            url: "https://github.com/Hayeensss/Smart_Doorbell/blob/3def21555470fcfd21107874aa24c832dabe7caa/db/db.js#L98-L118",
          },
        ],
      },
      {
        title: "Notifying the owner",
        description:
          "I connected a Cloudflare Worker to Clerk and Resend. For pending events, the worker looks up each device owner’s primary email address and sends the notification.",
        links: [
          {
            label: "Notification worker source",
            url: "https://github.com/Hayeensss/SmartDoorbell_Notification",
          },
        ],
      },
    ],
  },
  {
    id: "soil",
    title: "Soil Condition Mapping",
    description:
      "A desktop tool that turns electrical resistivity readings into maps of soil conditions.",
    links: [
      {
        label: "Soil mapping source",
        url: "https://github.com/Simokio/SoilConditionMapping",
      },
    ],
    notes: [
      {
        title: "Resistivity inversion",
        description:
          "I used PyGIMLi to build the subsurface mesh and estimate resistivity from electrode measurements. The plot shows how the estimated resistivity varies across the survey line and with depth.",
        links: [
          {
            label: "Inversion PR",
            url: "https://github.com/Simokio/SoilConditionMapping/pull/14",
          },
        ],
      },
      {
        title: "Soil water content",
        description:
          "I implemented the soil water content calculation and its plot output. I also added tests for mesh generation and output files.",
        links: [
          {
            label: "Water content PR",
            url: "https://github.com/Simokio/SoilConditionMapping/pull/32",
          },
        ],
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "I built this site to give my projects room to show how they work. Reusable React components and shared project content let the layout adapt to different screen sizes and both themes.",
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

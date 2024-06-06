import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import foxmgmt from "@/public/foxmgmt.jpg";
import foxexpense from "@/public/foxexpense.jpg";
import foxtech from "@/public/foxtech.jpg";
import superPort from "@/public/super.jpg";
import jobApp from "@/public/jobApp.jpg";
import foxForms from "@/public/foxForms.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

type Experience = {
  readonly title: string;
  readonly location: string;
  readonly description: string;
  readonly responsibilities: readonly string[];
  readonly icon: JSX.Element;
  readonly date: string;
  readonly tech_stack: readonly string[];
};

type ExperiencesData = readonly Experience[];

export const experiencesData: ExperiencesData = [
  {
    title: "Software Engineer – Full Stack",
    location: "Aviva, Remote/Edinburgh",
    description:
      "As a Software Engineer, I collaborated with Product Owners, SMEs, and the team to deliver excellent and timely customer outcomes through continuous development and delivery. Leveraged my experience to contribute improvements to development standards and practices, increasing the quality and efficiency of delivery.",
    responsibilities: [
      "Modernized frontend frameworks, replacing outdated technologies like jQuery and Bootstrap with React and Next.js.",
      "Developed and optimized APIs using Go, AWS CDK, Lambda, and DynamoDB within a serverless, event-driven architecture.",
      "Collaborate with Product Owners, SMEs, and the team to deliver excellent and timely customer outcomes.",
      "Implement modern development practices including Agile, continuous deployments, and DevOps.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "06/2022 - 04/2023",
    tech_stack: [
      "Typescript",
      "React",
      "Prometheus",
      "Grafana",
      "Dynamo DB",
      "Docker",
      "GitHub Actions",
      "AWS",
      "CDK",
    ],
  },
  {
    title: "Full Stack Developer",
    location: "Centrica, Remote/Edinburgh/Glasgow",
    description:
      "At Centrica, a leading energy company, I was committed to revolutionizing a cleaner, greener future. This role involved developing cutting-edge green tech and helping solve Europe's energy challenges through software development in our Fundamental Data Platform Team.",
    responsibilities: [
      "Modernized legacy systems, transitioning from monolithic architectures to microservices.",
      "Updated frontend frameworks, replacing old technologies like JSF and JSP with modern solutions such as React and Angular.",
      "Collaborate closely with internal customers through all phases of a product's lifecycle.",
      "Participate in the establishment of a new team and contribute to shaping the workflow and methodologies.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "09/2021 - 05/2022 ",
    tech_stack: [
      "Typescript",
      "REST",
      "GraphQL",
      "AWS",
      "Azure DevOps",
      "Kafka",
      "SQL",
    ],
  },
  {
    title: "Front End Engineer",
    location: "Amazon, Remote/Edinburgh/London",
    description:
      "As part of the IMDb TV team, we focused on delivering an exceptional user experience on various living room devices. I worked with cutting-edge technologies to build and optimize applications that reach millions of customers worldwide.",
    responsibilities: [
      "Updated legacy frontend technologies, transitioning from jQuery and Bootstrap to modern frameworks like React and Next.js.",
      "Collaborate with engineers, UX designers, product managers, and business stakeholders.",
      "Own the full lifecycle of front-end development, focusing on performance and usability.",
      "Support the launch of customer experiences for millions of Prime subscribers worldwide.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "06/2020 - 02/2021",
    tech_stack: [
      "React",
      "Redux",
      "NodeJS",
      "TypeScript",
      "AWS",
      "MySQL",
      "Jest",
    ],
  },
  {
    title: "Software Developer",
    location: "Webhelp, Sky, Larbert, Scotland",
    description:
      "As a Software Developer, I was responsible for developing and modifying a web platform for clients, focusing on delivering high-quality web user experiences using cutting-edge web technologies. This role involved extensive collaboration with team members and integration with backend services and UX teams.",
    responsibilities: [
      "Develop and modify a client-centric web platform using Typescript, HTML, CSS, and WebGL.",
      "Design and develop new features and products for the 3D Cloud platform.",
      "Collaborate frequently with team members in an open and inclusive atmosphere.",
      "Integrate with backend services and UX teams to ensure delivery of a superior web user experience.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "06/2019 - 05/2020",
    tech_stack: [
      "Typescript",
      "React",
      "HTML",
      "CSS",
      "WebGL",
      "Webpack",
      "Git",
    ],
  },
  {
    title: "Bachelor of Science in Computer Science",
    location: "University of Portland, Portland, Oregon, USA",
    description:
      "Obtained a BSc in Computer Science, paving the way for my internship at Intel and subsequent technology career.",
    responsibilities: [
      "Acquired a solid foundation in computer science principles.",
      "Engaged in projects that emphasized real-world application of programming.",
      "Developed critical thinking and problem-solving skills.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2007 - 2011",
    tech_stack: [],
  },
  {
    title: "Certifications",
    location: "Online",
    description:
      "Completed several certifications to further enhance my technical expertise and stay updated with the latest industry standards.",
    responsibilities: [
      "AWS Certified Solutions Architect",
      "Microsoft Certified: Azure Developer Associate",
      "Node.js Certified Developer (NCD)",
      "NGINX, Apache, SSL Encryption - Certification",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2018 - Present",
    tech_stack: [],
  },
] as const;

export const projectsData = [
  {
    title: "Expense Tracker App",
    description:
      "Full-stack expense tracker application. Allows users to track expenses, manage budgets, and analyze spending habits.",
    tags: ["MERN", "Apollo", "GraphQL", "Tailwind", "Authentication"],
    imageUrl: foxexpense,
    url: "https://expense.davidfoxdev.co.uk",
    functionality: [
      "Learn type definitions and resolvers for defining GraphQL schema and data fetching logic",
      "Mutations for modifying data in the GraphQL API and establishing graph relations",
      "Authentication with Passport.js and MongoDB session store",
      "Cron jobs for scheduled tasks and automation",
    ],
  },
  {
    title: "Fox Forms",
    description:
      "Form builder app enabling users to create and share custom forms with drag-and-drop functionality and PostgreSQL backend.",
    tags: [
      "Next.js",
      "Dnd-Kit",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "Authentication",
    ],
    imageUrl: foxForms,
    url: "https://foxforms.davidfoxdev.co.uk",
    functionality: [
      "Drag-and-Drop Form Builder: Intuitive drag-and-drop interface to create forms with various field types.",
      "Form Field Customization: Easily add and customize fields such as Text, Number, Select, Date, Checkbox, and Textarea.",
      "Form Preview: Preview forms before publishing to ensure they meet requirements.",
      "Form Sharing: Share forms via a unique URL.",
      "Form Validation: Ensure data integrity with built-in form validation.",
      "Form Statistics: Track form visits and submissions with detailed analytics.",
      "PostgreSQL Backend: Robust backend with PostgreSQL and Prisma ORM for data management.",
    ],
  },
  {
    title: "Job List App",
    description:
      "A full-stack application for managing job listings. Users can add, edit, delete, and view job listings with detailed information.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "JSON-Server",
      "Tailwind CSS",
      "Vite",
    ],
    imageUrl: jobApp, // Replace with the actual image path or URL
    url: "https://joblist.davidfoxdev.co.uk",
    functionality: [
      "Create, read, update, and delete job listings using a RESTful API",
      "Front-end built with React and styled with Tailwind CSS",
      "Backend server using Node.js and Express",
      "Data persistence with JSON-Server for quick prototyping",
      "Proxy setup in Vite for seamless API integration",
    ],
  },
  {
    title: "FoxTech",
    description:
      "IT Helpdesk for managing support tickets, user requests, and knowledge base articles leveraging AWS cloud services.",
    tags: ["Next.js", "Tailwind", "Supabase", "Authentication", "AWS EC2"],
    imageUrl: foxtech,
    url: "https://helpdesk.davidfoxdev.co.uk",
    functionality: [
      "Ticket Management: Efficiently create, track, and resolve tickets with categorized priorities and assigned agents.",
      "User Portal: Allows users to submit tickets, monitor their status, and access knowledge base articles.",
      "Knowledge Base: Develop a searchable knowledge base with categorized articles and user feedback.",
    ],
  },
  {
    title: "Fox ProMGMT",
    description:
      "A Full-stack project management system. It provides a comprehensive platform for managing projects, clients, and tasks efficiently.",
    tags: ["GraphQL", "Express", "MongoDB", "React", "Apollo"],
    imageUrl: foxmgmt,
    url: "https://foxmgmt.davidfoxdev.co.uk/",
    functionality: [
      "Project Management: Create, view, update, and delete projects with ease.",
      "Task Management: Break down projects into tasks and assign them to team members.",
      "GraphQL API: Utilize the power of GraphQL for flexible and efficient data querying and manipulation.",
    ],
  },
  {
    title: "Super Portfolio",
    description:
      "A Portfolio I made before realising I'm not a 12 year old. Still, it showcases my skills in an original, fun, and interactive way.",
    tags: ["React", "Javascript", "Tailwind", "HTML", "Custom CSS"],
    imageUrl: superPort,
    url: "https://super.davidfoxdev.co.uk",
    functionality: [
      "Accessibility Features: Enhances usability for all users with ARIA attributes and keyboard navigability, ensuring effective interaction.",
      "Performance Optimized: Utilizes lazy loading and modern image formats for fast loading times and optimal performance without sacrificing visual quality.",
    ],
  },
] as const;

type SkillsData = {
  readonly [category: string]: readonly string[];
};

export const skillsData: SkillsData = {
  frontend_development: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
    "Next.js",
    "React Native",
  ] as const,
  backend_development: [
    "Node.js",
    "Express.js",
    "PHP",
    "WebSockets",
    "Redis",
    "RESTful API",
    "GraphQL",
    "Microservices",
    "Nginx",
    "Apache",
  ] as const,
  database: ["MongoDB", "SQL", "Supabase", "NoSQL", "DynamoDB"] as const,
  devops_cloud: [
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Git",
    "Jenkins",
    "Terraform",
    "Linux",
    "CI/CD Pipelines",
    "Cloud-Native",
  ] as const,
  testing_quality_assurance: [
    "Cypress",
    "Jest",
    "Supertest",
    "Postman",
  ] as const,
  web_performance: ["SEO", "Performance Optimization"] as const,
  web_security: [
    "Web Security Practices",
    "Ethical Hacking/Cybersecurity",
  ] as const,
  other_technologies: ["WebAssembly (WASM)", "Machine Learning/AI"] as const,
  methodologies: ["Agile methodologies", "WCAG"] as const,
};

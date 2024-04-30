import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import foxmgmt from "@/public/foxmgmt.jpg";
import foxexpense from "@/public/foxexpense.jpg";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    location: "Aviva, Remote/Edinburgh/Bristol",
    description:
      "As a Software Engineer, I collaborated with Product Owners, SMEs, and the team to deliver excellent and timely customer outcomes through continuous development and delivery. Leveraged my experience to contribute improvements to development standards and practices, increasing the quality and efficiency of delivery.",
    responsibilities: [
      "Collaborate with Product Owners, SMEs, and the team to deliver excellent and timely customer outcomes.",
      "Contribute improvements to development standards and practices.",
      "Utilize a wide variety of programming languages, with an appetite to learn new languages such as Go.",
      "Implement modern development practices including Agile, continuous deployments, and DevOps.",
      "Take pride in work and deliver quality outputs at every step of a project.",
      "Contribute ideas to the team on new technologies, solutions, and delivery approaches.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Present",
    tech_stack: [
      "Typescript",
      "React",
      "Next.js",
      "HTML / CSS",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
  },
  {
    title: "Developer",
    location: "Centrica, Remote/Edinburgh/Glasgow",
    description:
      "At Centrica, a leading energy company, I was committed to revolutionizing a cleaner, greener future. This role involved developing cutting-edge green tech and helping solve Europe's energy challenges through software development in our Fundamental Data Platform Team.",
    responsibilities: [
      "Lead complex design and software initiatives for our Fundamental Data Platform.",
      "Work with forefront technologies such as AWS and CI/CD deployments on a microservice architecture.",
      "Collaborate closely with internal customers through all phases of a product's lifecycle.",
      "Participate in the establishment of a new team and contribute to shaping the workflow and methodologies.",
      "Continuously explore new technologies and expand my skill set.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
    tech_stack: ["Python", "C# .NET", "AWS", "Azure DevOps", "Kafka", "SQL"],
  },
  {
    title: "Front End Engineer",
    location: "Amazon, Remote/Edinburgh/London",
    description:
      "As part of the IMDb TV team, we focused on delivering an exceptional user experience on various living room devices. I worked with cutting-edge technologies to build and optimize applications that reach millions of customers worldwide.",
    responsibilities: [
      "Develop and deliver React-based UX across multiple device families.",
      "Collaborate with engineers, UX designers, product managers, and business stakeholders.",
      "Explore and implement innovative ideas and contribute to decision-making and strategic planning.",
      "Own the full lifecycle of front-end development, focusing on performance and usability.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2018",
    tech_stack: ["React", "Redux", "NodeJS", "TypeScript"],
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
    date: "2015 - 2017",
    tech_stack: ["Typescript", "HTML", "CSS", "WebGL"],
  },
] as const;

export const projectsData = [
  {
    title: "Fox ProMGMT",
    description:
      "Fox ProMGMT is a full-stack project management system built with GraphQL, Express, MongoDB, React, and Apollo. It provides a comprehensive platform for managing projects, clients, and tasks efficiently.",
    tags: ["GraphQL", "Express", "MongoDB", "React", "Apollo"],
    imageUrl: foxmgmt,
  },

  {
    title: "Expense Tracker App",
    description:
      "Full-stack expense tracker application built with the MERN stack and Apollo GraphQL. Allows users to track expenses, manage budgets, and analyze spending habits.",
    tags: ["MERN", "Apollo GraphQL", "Expense Tracker", "Full-stack"],
    imageUrl: foxexpense,
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
    "SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "Next.js",
    "React Native",
  ] as const,
  backend_development: [
    "Node.js",
    "Express.js",
    "PHP",
    "ASP.Net",
    "WebSockets",
    "Redis",
    "RESTful API",
    "GraphQL",
    "Microservices",
    "Kafka",
    "Edge servers",
    "TTL",
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

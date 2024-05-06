import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import foxmgmt from "@/public/foxmgmt.jpg";
import foxexpense from "@/public/foxexpense.jpg";
import foxtech from "@/public/foxtech.jpg";
import superPort from "@/public/super.jpg";

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
      "Collaborate with Product Owners, SMEs, and the team to deliver excellent and timely customer outcomes.",
      "Contribute improvements to development standards and practices.",
      "Utilize a wide variety of programming languages, with an appetite to learn new languages such as Go.",
      "Implement modern development practices including Agile, continuous deployments, and DevOps.",
      "Take pride in work and deliver quality outputs at every step of a project.",
      "Contribute ideas to the team on new technologies, solutions, and delivery approaches.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "06/2022 - 04/2023",
    tech_stack: [
      "Typescript",
      "React",
      "HTML / CSS",
      "Dynamo DB",
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
      "Develop and deliver React-based UX across multiple device families.",
      "Collaborate with engineers, UX designers, product managers, and business stakeholders.",
      "Explore and implement innovative ideas and contribute to decision-making and strategic planning.",
      "Own the full lifecycle of front-end development, focusing on performance and usability.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "06/2020 - 02/2021",
    tech_stack: [
      "React",
      "Redux",
      "NodeJS",
      "TypeScript",
      "AWS",
      "Version Control",
      "Command Line Tools",
      "Chrome Dev Tools",
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
      "Gulp",
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
      "Agile Fundamentals: Including Scrum and Kanban",
      "Full Stack Developer Traineeship - IT Career Switch",
      "Level 2 & 3 Certificate in Understanding Coding Awarded by: NCFE",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2018 - Present",
    tech_stack: [],
  },
] as const;

export const projectsData = [
  {
    title: "Fox ProMGMT",
    description:
      "Fox ProMGMT is a full-stack project management system. It provides a comprehensive platform for managing projects, clients, and tasks efficiently.",
    tags: ["GraphQL", "Express", "MongoDB", "React", "Apollo"],
    imageUrl: foxmgmt,
    url: "https://foxmgmt.onrender.com",
    functionality: [
      "Project Management: Create, view, update, and delete projects with ease. Track project progress and status effortlessly.",
      "Client Management: Manage clients by adding, editing, and removing client information. Associate clients with projects for better organization.",
      "Task Management: Break down projects into tasks and assign them to team members. Monitor task completion and deadlines effectively.",
      "GraphQL API: Utilize the power of GraphQL for flexible and efficient data querying and manipulation.",
      "Responsive UI: The user interface is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.",
    ],
  },

  {
    title: "Expense Tracker App",
    description:
      "Full-stack expense tracker application. Allows users to track expenses, manage budgets, and analyze spending habits.",
    tags: ["MERN", "Apollo", "GraphQL", "Tailwind", "Authentication"],
    imageUrl: foxexpense,
    url: "https://expensetracker-2nhh.onrender.com",
    functionality: [
      "Learn type definitions and resolvers for defining GraphQL schema and data fetching logic",
      "Mutations for modifying data in the GraphQL API and establishing graph relations",
      "Authentication with Passport.js and MongoDB session store",
      "Global state management with Apollo Client",
      "Error handling both on the server and on the client",
      "Deployment made easy with a platform called Render",
      "Cron jobs for scheduled tasks and automation",
    ],
  },
  {
    title: "FoxTech",
    description:
      "FoxTech is an IT Helpdesk for managing support tickets, user requests, and knowledge base articles leveraging AWS cloud services.",
    tags: ["Next.js", "Tailwind", "Supabase", "Authentication", "AWS EC2"],
    imageUrl: foxtech,
    url: "https://helpdesk.davidfoxdev.co.uk",
    functionality: [
      "Ticket Management: Create, track, and resolve tickets efficiently with categories, priorities, and assigned agents.",
      "User Portal: Users can submit tickets, track their status, and access knowledge base articles through a dedicated portal.",
      "Knowledge Base: Build a comprehensive knowledge base with searchable articles, categories, and user feedback.",
      "Agent Tools: Assigned agents can manage their workload, collaborate on tickets, and stay informed with notifications.",
      "Modern Interface: Tailwind CSS ensures a beautiful and responsive UI that adapts to any device.",
      "Realtime Updates: Supabase powers a real-time experience, keeping everyone informed with instant updates.",
      "Scalable: FoxTech is built with scalability in mind, ready to grow with your needs.",
    ],
  },
  {
    title: "Super Portfolio",
    description:
      "A Portfolio I made before realising I'm not a 12 year old. Still, it showcases my skills in an original, fun, and interactive way.",
    tags: ["React", "Tailwind", "Custom CSS"],
    imageUrl: superPort,
    url: "https://super.davidfoxdev.co.uk",
    functionality: [
      "Dynamic Gallery: Experience a curated dynamic gallery showcasing creative designs and AI-generated images, which adapts based on user interactions and preferences.",
      "Responsive Design: Built with modern web technologies to ensure a seamless and responsive user experience across all devices and screen sizes.",
      "Real-Time Updates: Utilize WebSocket technology for real-time updates to the gallery, ensuring users see the most current and innovative designs as they are created.",
      "Accessibility Features: Ensures that all users, regardless of ability, can navigate and interact with the portfolio effectively, incorporating ARIA attributes and keyboard navigability.",
      "Performance Optimized: Implements lazy loading and modern image formats to ensure fast loading times and optimal performance without compromising on visual quality.",
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

import { FaReact, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiTailwindcss, SiPostman, SiRadixui } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJira } from "react-icons/si";

export const skills = [
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Jira", icon: SiJira },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Postman", icon: SiPostman },
  { name: "npm", icon: FaNpm },
  { name: "Radix UI", icon: SiRadixui },
];
export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chat assistant powered by OpenAI's GPT API with custom training data and context-aware responses.",
    tech: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for data visualization with real-time charts, filtering capabilities, and export functionality.",
    tech: ["D3.js", "React", "Node.js", "PostgreSQL", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS for a responsive design.",
    tech: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blogging platform with user authentication, markdown support, and social sharing capabilities.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
];

export const experience = [
  {
    title: "Frontend Developer - Internship",
    company: "Proshore Nepal Pvt. Ltd.",
    period: "Nov 2025 – Feb 2026",
    achievements: [
      "Developed a survey platform for livestock/poultry data with image-based capture, OCR extraction, and editable verification workflows.",
      "Implemented image scanning workflow: file/camera uploads, canvas cropping, quality checks, and overlay verification for OCR results.",
      "Built inline-editable tables with confidence-based highlighting, filters, pagination, and Excel (XLSX) export for survey data management.",
      "Integrated authentication and security using Better Auth; ensured code quality with React Hook Form + Yup, Biome, and Husky."
    ],
  },
];

export const education = [
  {
    degree: "Bachelor in Information Technology",
    school: "Patan Multiple Campus - Tribhuvan University",
    period: "2022 - 2026",
    location: "Patan Dhoka, Lalitpur",
    description:
      "I am pursuing a Bachelor's in IT at Patan Multiple Campus, specializing in programming, web development, and software engineering.",
  },
  {
    degree: "Management",
    school: "Shree Himalayan Secondary School - NEB",
    period: "2019 - 2021",
    location: "Damak, Jhapa",
    description:
      "Majored in Computer Science while learning management skills through projects and self study.",
  },
];

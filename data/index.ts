import { FaReact, FaGitAlt, FaGithub, FaNpm,FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiPostman,
  SiRadixui,
  SiVercel,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJira } from "react-icons/si";

export const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Jira", icon: SiJira },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "Postman", icon: SiPostman },
  { name: "npm", icon: FaNpm },
  { name: "Radix UI", icon: SiRadixui },
];
export const projects = [
  {
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "AI-powered resume analyzer that compares resumes against job descriptions, generates an ATS score, and highlights areas for improvement.",
    longDescription:
      "A dynamic AI Resume Analyzer that allows users to upload their resume and compare it with a job description. The tool evaluates compatibility, generates an ATS score, highlights weaknesses, and provides suggestions to improve the resume for better shortlisting chances.",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Neon PostgreSQL",
      "Gemini API",
      "Tailwind CSS",
    ],
    features: [
      "Upload resume and job description to generate compatibility score in real time.",
      "ATS-style scoring with clear breakdown of strengths and weaknesses.",
      "Actionable suggestions to improve keywords, structure, and clarity.",
      "Clean, responsive UI optimized for both desktop and mobile.",
    ],
    challenges: [
      "Designing prompts that return consistent and meaningful scores from the AI model.",
      "Handling different resume formats and large text inputs efficiently.",
      "Balancing accuracy with performance for a smooth user experience.",
    ],
    learnings: [
      "Deepened understanding of integrating AI APIs into real-world products.",
      "Improved skills with Next.js server actions and data fetching patterns.",
      "Strengthened knowledge of performance optimization and UX for form-heavy flows.",
    ],
    feedbackEmail: "tniroj35@gmail.com",
    github: "https://github.com/Niroj-t/ai-resume-analyzer",
    live: "https://ai-resume-analyzer-w5gz.vercel.app",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    slug: "niroj-portfolio",
    title: "Portfolio | Niroj Thapa",
    description:
      "A modern, minimal portfolio showcasing my projects, skills, and experience using the latest web technologies.",
    longDescription:
      "My personal portfolio is built to highlight my journey as a frontend developer. It focuses on a clean, minimal UI with smooth navigation between profile, projects, experience, education, and contact sections. The site is fully responsive, supports dark mode, and is optimized for readability and performance.",
    tech: ["Next.js", "React", "Tailwind CSS", "Radix UI", "TypeScript"],
    features: [
      "Section-based layout for profile, projects, experience, education, and contact.",
      "Responsive design optimized for mobile, tablet, and desktop viewports.",
      "Dark mode support with a smooth theme toggle.",
      "Reusable UI components built with Radix UI + Tailwind CSS.",
      "Project details pages with rich descriptions, tech stack, and external links.",
    ],
    challenges: [
      "Designing a layout that stays clean and readable across all screen sizes.",
      "Balancing minimal design with enough detail to present projects clearly.",
      "Ensuring navigation feels fast and smooth between sections and pages.",
    ],
    learnings: [
      "Improved skills in building production-ready layouts with Next.js and Tailwind CSS.",
      "Refined component composition and state management for a portfolio-scale app.",
      "Deepened understanding of accessibility and typography for content-heavy pages.",
    ],
    feedbackEmail: "tniroj35@gmail.com",
    github: "https://github.com/Niroj-t/niroj-portfolio-v2", // update if your repo URL differs
    live: "https://your-portfolio-live-url.com", // put your actual deployed URL here
    image: "/placeholder.svg?height=200&width=400", // or a real screenshot path
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
      "Integrated authentication and security using Better Auth; ensured code quality with React Hook Form + Yup, Biome, and Husky.",
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

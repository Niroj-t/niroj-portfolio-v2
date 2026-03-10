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
    title: "AI Resume Analyzer",
    description:
      "Developed an AI Resume Analyzer that allows users to upload their resume and compare it with a job description. The tool evaluates compatibility, generates an ATS score, highlights weaknesses, and provides suggestions to improve the resume",
    tech: ["Next.js", "TypeScript", "Prisma", "Neon PostgreSQL","Gemini API", "Tailwind CSS"],
    github: "https://github.com/Niroj-t/ai-resume-analyzer",
    live: "https://ai-resume-analyzer-w5gz.vercel.app",
    image: "/resume-analyzer.png",
  },
  {
    title: "E-State",
    description:
      "Estate is a responsive real estate web app built with React, Vite, and Tailwind CSS. It features project showcases, customer testimonials, an interactive contact form, and real-time notifications for a seamless user experience.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Niroj-t/Estate",
    live: "https://estate-8ute.vercel.app",
    image: "/estate.png",
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

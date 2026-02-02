import { Project, SkillCategory, EducationItem, Certificate } from './types';

export const USER_INFO = {
  name: "MANOJ M S",
  role: "B.E. Computer Science Engineering & Web Developer",
  profile: "A dedicated and disciplined Information Engineering student with a strong sense of responsibility, aiming to build a rewarding career in Information Technology and problem-solving.",
  email: "iammanojms2006@gmail.com",
  phone: "9241357135",
  linkedin: "manojsrinivasanms",
  github: "maannnoojj",
  leetcode: "MANOJ_1112",
  profileImage: "https://i.ibb.co/vCbWYmtg/Whats-App-Image-2026-01-30-at-7-28-39-PM.jpg",
  resumeUrl: "https://github.com/maannnoojj/resume-", 
  stats: [
    { label: "PROJECTS", value: "4+" },
    { label: "INTERNSHIPS", value: "2" },
    { label: "AI CERTS", value: "2" }
  ]
};

export interface DetailedProject extends Project {
  id: string;
  technicalImpact: string;
  icon: string;
  link?: string;
  tech: string[]; // Added for the high-end Projects UI
}

export const DETAILED_PROJECTS: DetailedProject[] = [
  {
    id: "handwritten-notes",
    title: "Handwritten to Smart Notes",
    description: "A mini project focused on digitizing handwritten content into structured digital notes using OCR technology.",
    category: "OCR",
    tags: ["PYTHON", "OCR", "NLP"],
    tech: ["PYTHON", "TESSERACT", "NLP"],
    technicalImpact: "Achieved 95% OCR accuracy on varied handwriting styles.",
    icon: "notes",
    link: 'https://benevolent-axolotl-efa12d.netlify.app/'
  },
  {
    id: "vehicle-mgmt",
    title: "Vehicle Management System",
    description: "A comprehensive system using sensor connections for real-time monitoring and management of vehicle data.",
    category: "IOT",
    tags: ["FLUTTERFLOW"],
    tech: ["IOT", "FLUTTERFLOW", "FIREBASE"],
    technicalImpact: "Optimized sensor data transmission efficiency by 40%.",
    icon: "cable",
    link: 'https://github.com/maannnoojj'
  },
  {
    id: "ai-buddy",
    title: "AI Buddy Time Management",
    description: "An intelligent time-tracking and scheduling assistant designed to optimize student productivity.",
    category: "AI",
    tags: ["REACT", "GEMINI AI", "NODE.JS","FLUTTERFLOW"],
    tech: ["REACT", "GEMINI AI", "NODE.JS"],
    technicalImpact: "Integrated Gemini API for adaptive scheduling logic.",
    icon: "mic",
    link: 'https://github.com/maannnoojj/JARVIS.git'
  },
  {
    id: "farmer-assistant",
    title: "Farmer Query Assistant",
    description: "An AI-driven bot helping farmers identify crop diseases and providing agricultural advice via image processing.",
    category: "AI",
    tags: ["COMPUTER VISION", "ML", "AZURE AI"],
    tech: ["AZURE AI", "ML", "COMPUTER VISION"],
    technicalImpact: "Supported multi-modal image analysis for crop disease detection.",
    icon: "wb_sunny",
    link: 'https://github.com/maannnoojj'
  }
];

export const EXPERIENCE = [
  {
    title: "Full-Stack Web Development Intern",
    company: "Prodigy Infotech",
    period: "Winter 2025",
    points: [
      "Engineered responsive web architectures using the MERN stack.",
      "Optimized database queries in MongoDB resulting in a 30% improvement in API response times."
    ],
    tags: ["Built a custom CRM dashboard", "Implemented OAuth 2.0 security"]
  },
  {
    title: "Web Development Intern",
    company: "InternPe",
    period: "Summer 2025",
    points: [
      "Developed a series of fundamental web projects to sharpen front-end engineering skills.",
      "Implemented interactive user interfaces and utility applications using modern web standards."
    ],
    tags: ["Calculator Project", "Interactive To-Do List", "Personal Landing Page"]
  }
];

export const GROUPED_SKILLS = {
  frontend: [
    { name: "REACT", value: 85 },
    { name: "HTML", value: 95 },
    { name: "CSS", value: 90 },
    { name: "JS", value: 88 },
    { name: "TYPESCRIPT", value: 80 }
  ],
  backend: [
    { name: "C PROGRAMMING", value: 92 },
    { name: "PYTHON PROGRAMMING", value: 88 },
    { name: "JAVA PROGRAMMING", value: 85 },
    { name: "NODE.JS", value: 78 }
  ],
  ai: [
    { name: "CHATGPT", value: 95 }
  ],
  tools: [
    { name: "MICROSOFT OFFICE", value: 98 },
    { name: "TEXT PROCESSOR", value: 85 },
    { name: "MS POWERPOINT", value: 95 },
    { name: "MS WORD", value: 95 }
  ],
  soft: [
    { name: "TEAM WORK", value: 90 },
    { name: "TIME MANAGEMENT", value: 92 },
    { name: "EFFECTIVE COMMUNICATION", value: 88 },
    { name: "CRITICAL THINKING", value: 85 }
  ]
};

export const ACADEMIC_JOURNEY: EducationItem[] = [
  {
    institution: "SNS College of Engineering",
    degree: "B.E. Computer Science and Engineering",
    period: "2024 - 2028",
    grade: "CGPA: 80%"
  },
  {
    institution: "Jawahar Navodaya Vidyalaya, Mysore",
    degree: "Higher Secondary Education (HSC)",
    period: "2023 - 2024",
    grade: "79%"
  },
  {
    institution: "Jawahar Navodaya Vidyalaya, Mysore",
    degree: "Secondary School Education (SSLC)",
    period: "2021 - 2022",
    grade: "81%"
  }
];

export const CERTIFICATIONS: Certificate[] = [
  { title: "Java Certificate Holder", issuer: "Oracle/Various • 2024" },
  { title: "C Programming Certification", issuer: "Various • 2024" },
  { title: "20+ Courses Completed", issuer: "PrepInsta • 2024" },
  { title: "Hackathon Certificate CICADA'25", issuer: "College Event • 2025" },
  { title: "Code O Clock", issuer: "Competitive Programming • 2024" }
];
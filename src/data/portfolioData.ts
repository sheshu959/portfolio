export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  recognition?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  duration: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  linkedinQr?: string;
  github: string;
  githubDisplay: string;
  careerObjective: string;
  summaryQuote: string;
}

export const personalInfo: PersonalInfo = {
  name: "LakkiReddy Naga sheshu Reddy",
  location: "Khammam, Telangana, India",
  phone: "+91-9908104415",
  email: "luckyreddy3214@gmail.com",
  linkedin: "https://www.linkedin.com/in/lakkireddy-sheshu-reddy-b409893a7/",
  linkedinDisplay: "lakkireddy-sheshu-reddy-b409893a7",
  linkedinQr: "/assets/linkedin-qr.jpg",
  github: "https://github.com/sheshu959",
  githubDisplay: "sheshu959",
  careerObjective:
    "To leverage my expertise in software engineering, full-stack development, and Artificial Intelligence to build scalable, intelligent, and impactful products that solve real-world challenges. I aim to continuously expand my technical knowledge, contribute to high-performing engineering teams, and grow into a technology leader recognized for innovation, problem-solving, and delivering software that improves people's lives.",
  summaryQuote:
    "Software engineer & computer science scholar focused on building scalable full-stack applications, intelligent AI platforms, and data-driven solutions."
};

export const projects: Project[] = [
  {
    id: "second-serve",
    title: "SecondServe",
    category: "AI-Powered Food Recovery Platform",
    year: "2024",
    description:
      "Engineered a full-stack web application connecting food donors with NGOs and volunteers in real time to reduce food waste through technology-driven logistics.",
    bulletPoints: [
      "Engineered a full-stack web application using Java, Spring Boot, React JS, and MySQL, connecting food donors with NGOs and volunteers in real time to reduce food waste through technology-driven logistics.",
      "Implemented RESTful APIs and Spring Security for role-based authentication and authorization covering Donor, Volunteer, and NGO Coordinator roles.",
      "Built a responsive React JS admin dashboard with live donation status, analytics panels, and data visualization for performance monitoring.",
      "Independently designed and deployed SecondServe — a production-grade AI-integrated full-stack platform addressing real-world food insecurity, recognized during university evaluations."
    ],
    technologies: [
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL (Supabase)",
      "PostgreSQL",
      "React JS",
      "Java",
      "Spring Boot",
      "MySQL"
    ],
    image: "/assets/secondserve.png",
    live: "https://secon-serve-connect.lovable.app",
    github: "https://github.com/sheshu959",
    recognition: "Recognized during Parul University evaluations as a production-grade AI-integrated platform."
  },
  {
    id: "insight-iq",
    title: "InsightIQ",
    category: "AI-Powered Business Intelligence Platform",
    year: "2024",
    description:
      "Built a full-stack SaaS analytics platform enabling users to upload CSV/Excel datasets and generate AI-powered dashboards, KPI reports, and forecasts automatically.",
    bulletPoints: [
      "Built a full-stack SaaS analytics platform enabling users to upload CSV/Excel datasets and generate AI-powered dashboards, KPI reports, and forecasts automatically.",
      "Integrated Anthropic Claude API for natural language querying, AI chat analyst, anomaly detection alerts, and one-click executive report generation.",
      "Designed 9 Mongoose schemas with JWT authentication and refresh token rotation; engineered auto schema detection, paginated REST APIs with rate limiting, and a database seeder for instant deployment.",
      "Developed InsightIQ, an AI-powered business analytics platform that automates forecasting, anomaly detection, customer segmentation, and executive reporting from uploaded datasets."
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Claude AI",
      "JWT Auth",
      "Mongoose"
    ],
    image: "/assets/insightiq.png",
    github: "https://github.com/sheshu959",
    recognition: "Automated forecasting, anomaly detection, customer segmentation, and executive reporting platform."
  }
];

// STRICT RULE ENFORCED: Skills section contains ONLY technical skills explicitly listed in the resume's TECHNICAL SKILLS section.
export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "python"]
  },
  {
    category: "Web development",
    skills: ["Html", "Css."]
  },
  {
    category: "Databases",
    skills: ["MySQL", "PowerBI"]
  },
  {
    category: "Tools & Platforms",
    skills: ["GitHub", "VSCode"]
  },
  {
    category: "Concepts",
    skills: ["Data Structures", "Oops"]
  }
];

export const educationList: Education[] = [
  {
    institution: "Parul University",
    degree: "Bachelor of Technology – Computer Science (Big Data Analytics)",
    location: "Vadodara, Gujarat",
    duration: "Aug 2023 – Present"
  }
];

export const achievementsList: Achievement[] = [
  {
    title: "SecondServe Production Deployment & Recognition",
    description:
      "Independently designed and deployed SecondServe — a production-grade AI-integrated full-stack platform addressing real-world food insecurity, recognized during university evaluations."
  },
  {
    title: "InsightIQ Business Analytics Platform",
    description:
      "Developed InsightIQ, an AI-powered business analytics platform that automates forecasting, anomaly detection, customer segmentation, and executive reporting from uploaded datasets."
  }
];

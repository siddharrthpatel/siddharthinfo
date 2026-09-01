/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

import type {
  PersonalInfo,
  Experience,
  Project,
  Education,
  Certificate,
  SocialLink,
} from "@/types/portfolio";

import headshot from "@/assets/headshot.jpg";


// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
  name: "Siddharth Patel",
  title: "Full Stack Developer",
  location: { city: "Varanasi", country: "India" },
  website: "github.com/siddharrthpatel",
  email: "patelsiddharth264@gmail.com",
  phone: "+91 8052082640",
  avatar: headshot,
  bio: "I'm Siddharth Patel, a passionate Full Stack Developer focused on building fast, responsive, and user-friendly web applications. I specialize in JavaScript, Node.js, Angular, Python, and MySQL, with hands-on experience gained through internships at HCL GUVI and Coding Cafe.\n\nOver the past year, I've built real-world projects, including portfolio websites, management systems, dashboards, and API-driven web applications. I enjoy solving real-world problems, optimizing application performance, and writing clean, maintainable code while following modern development practices and Agile methodologies.\n\nI'm passionate about learning new technologies and continuously improving my skills to build scalable, high-quality software. Currently pursuing my Master of Computer Applications (MCA), I'm actively seeking opportunities as a Full Stack Developer, Software Developer, or Web Developer, where I can contribute to impactful projects, collaborate with talented teams, and grow as a software engineer.",
  skills: [
    { category: "Programming Languages", items: ["JavaScript", "Python", "HTML5", "CSS3", "PHP", "Java"] },
    { category: "Frontend Technologies", items: ["Angular", "HTML5", "CSS3", "JavaScript", "Responsive Web Design", "UI/UX Design"] },
    { category: "Backend Technologies", items: ["Spring Boot", "RESTful API Development", "ASP.NET MVC"] },
    { category: "Databases", items: ["MySQL"] },
    { category: "Development Tools", items: ["Git", "GitHub", "VS Code"] },
    { category: "Frameworks & Libraries", items: ["Streamlit", "Pandas", "ASP.NET MVC", "Bootstrap"] },
    { category: "Methodologies", items: ["Agile Development", "Software Development Life Cycle (SDLC)", "Object-Oriented Programming (OOP)", "Test-Driven Development", "Unit Testing"] }
  ],
};



export const experience: Experience[] = [
  {
    id: "exp-3",
    company: "EISystems Technologies",
    role: "Generative AI Intern",
    location: "IIT Kanpur (Remote)",
    startDate: "2026-06",
    endDate: "2026-08",
    description: "Completed an 8-week internship with EISystems Services & EISystems Technologies as part of Prabandhan'26 at IIT Kanpur. Engaged in training focused on Generative AI, exploring its practical applications in various sectors. Developed and submitted a project report on an AI-Powered Personal Portfolio, showcasing hands-on experience with AI technologies. Gained valuable insights into real-world applications of Generative AI, enhancing technical skills and industry knowledge.",
    current: false,
  },
  {
    id: "exp-2",
    company: "HCL GUVI",
    role: "Full Stack Developer Intern (Virtual)",
    location: "Remote",
    startDate: "2025-07",
    endDate: "2025-09",
    description: "Developed and tested full-stack application modules following SDLC and Agile methodologies. Applied OOP principles while building scalable frontend and backend components using JavaScript, Node.js, Express.js, and MySQL. Completed structured coding assignments, performed debugging and unit testing, and practiced collaborative development with Git and GitHub.",
    current: false,
  },
  {
    id: "exp-1",
    company: "Coding Cafe",
    role: "Python Developer Intern",
    location: "Varanasi",
    startDate: "2024-11",
    endDate: "2025-04",
    description: "Developed and deployed Python-based web applications using Streamlit and Pandas for interactive data visualization and dashboard creation. Optimized backend data processing workflows, achieving performance improvement in application responsiveness. Designed user-centric UI components following modern UX principles, and collaborated with cross-functional teams using Git version control to deliver production-ready applications.",
    current: false,
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Pankaj Sharma Vocalist Portfolio",
    description:
      "Live portfolio website for a vocalist with fully responsive design, modern UI/UX principles, cross-browser compatibility, and optimized performance for fast page loads across all devices.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://pankajsharmavocalist.vercel.app",
    status: "active",
  },
  {
    id: "proj-2",
    name: "Travel and Tourism Portal",
    description:
      "Comprehensive travel and tourism web application with booking system, destination showcases, user authentication, session management, and responsive layouts for seamless multi-device experience.",
    techStack: ["HTML5", "CSS3", "JavaScript", "RESTful APIs"],
    status: "active",
  },
  {
    id: "proj-3",
    name: "Hotel Management System",
    description:
      "Full-featured hotel management system with room booking, guest management, automated billing, and MySQL database integration to streamline operations and improve guest experience.",
    techStack: ["HTML5", "CSS3", "JavaScript", "MySQL"],
    status: "active",
  },
  {
    id: "proj-4",
    name: "Student Result Management System",
    description:
      "Secure online result management system for educational institutions with role-based access control, robust MySQL database design, admin panel for result entry, and authenticated student portal.",
    techStack: ["PHP", "MySQL", "XAMPP", "HTML5", "CSS3"],
    status: "active",
  },
  {
    id: "proj-5",
    name: "BMI Calculator Application",
    description:
      "Interactive BMI calculator application with real-time calculation, health category classification, data validation, and user-friendly interface built with Streamlit.",
    techStack: ["Python", "Streamlit"],
    status: "active",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "School of Management Sciences (SMS)",
    degree: "Master of Computer Applications",
    field: "MCA",
    startYear: "2025",
    endYear: "Present",
    location: "Varanasi",
    details: "Currently pursuing",
  },
  {
    id: "edu-2",
    institution: "Microtek College of Management & Technology",
    degree: "Bachelor of Computer Applications",
    field: "BCA",
    startYear: "2022",
    endYear: "2025",
    location: "Varanasi",
    details: "Completed",
  },
];

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    name: "Full Stack Development (ASP.NET MVC)",
    issuer: "HCL GUVI",
    date: "2024-09",
    description: "Comprehensive training in full-stack development using ASP.NET MVC.",
  },
  {
    id: "cert-2",
    name: "Full Stack Development (FSD)",
    issuer: "Certification of Completion",
    date: "2024-07",
    description: "Certification covering full-stack development fundamentals and practices.",
  },
  {
    id: "cert-3",
    name: "Introduction to Programming Using Python",
    issuer: "Microsoft",
    date: "2024-06",
    description: "Foundational Python programming certification from Microsoft.",
  },
  {
    id: "cert-4",
    name: "Power BI for Beginners",
    issuer: "Data Visualization & Analytics",
    date: "2024-05",
    description: "Introductory course on data visualization and analytics with Power BI.",
  },
  {
    id: "cert-5",
    name: "HTML & CSS Bootcamp",
    issuer: "Web Development Fundamentals",
    date: "2024-04",
    description: "Bootcamp covering core web development fundamentals with HTML and CSS.",
  },
  {
    id: "cert-6",
    name: "Introduction to Figma",
    issuer: "UI/UX Design Tools",
    date: "2024-03",
    description: "Introductory course on UI/UX design tools using Figma.",
  },
  {
    id: "cert-7",
    name: "Introduction to Adobe XD",
    issuer: "User Experience Design",
    date: "2024-02",
    description: "Introductory course on user experience design with Adobe XD.",
  },
  {
    id: "cert-8",
    name: "Introduction to MS Excel",
    issuer: "Data Analysis & Management",
    date: "2024-01",
    description: "Foundational course on data analysis and management using MS Excel.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    username: "siddharth-patel-108581304",
    url: "https://www.linkedin.com/in/siddharth-patel-108581304/",
  },
  {
    platform: "GitHub",
    username: "siddharrthpatel",
    url: "https://github.com/siddharrthpatel",
  },
];

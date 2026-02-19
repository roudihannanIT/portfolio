export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: "frontend" | "backend" | "fullstack";
  status: "completed" | "in-progress" | "planned";
  date: string;
}


export const projects: Project[] = [
  {
    id: "jobtrackr-api",
    name: "JobTrackr API",
    description: "REST API for tracking job applications with JWT authentication and role-based access control",
    longDescription: `A powerful REST API built with Node.js and Express that helps users track their job applications. 
    Features include user authentication, role-based access control (user/admin), and comprehensive job application management.`,
    image: "",
    technologies: ["Node.js", "Express", "MongoDB", "TypeScript", "JWT", "Zod"],
    githubUrl: "https://github.com/roudihannanIT/jobtrackr-api",
    category: "backend",
    status: "completed",
    date: "2026-02-18"
  },
];
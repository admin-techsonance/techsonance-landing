import { EmployeePortfolio } from "@/components/EmployeePortfolio";

export default function Page() {
    const employee = {
        name: "Niraj Singh",
         role: "Full Stack Developer",
        description: "Turning complex problems into clean, scalable full-stack solutions.",
        bio: "As a Full Stack Developer, I bridge design and development to create fast, secure, and user-centric applications. I work across frontend, backend, APIs, and databases to build products that are efficient, maintainable, and future-ready. I value performance optimization, structured workflows, and writing code that not only works—but lasts.",
        image: "/employee-profile/Niraj.jpeg",
        email: "niraj.techsonance@outlook.com",
        linkedin: "https://linkedin.com/in/niraj1742",
        github: "https://github.com/niraj-dev-techsonance",
        phone: "+91-9173101711",

       skills: [
        { name: "Frontend (React, Flutter)", level: 95 },
        { name: "Backend (Node.js, Django, Python)", level: 90 },
        { name: "UI/UX Design (Figma, Prototyping)", level: 92 },
        // { name: "AI & ML Integration", level: 85 },
        { name: "Database (MongoDB, MySQL)", level: 88 },
        // { name: "Git & Deployment (GitHub, Vercel)", level: 90 }
    ],
        experience: [
            {
            company: "Startup (Full Stack Developer)",
            period: "2025 - Present",
            position: "Full Stack Developer",
            description: "Building scalable web applications, handling frontend to backend development, API integrations, and deployment. Working in Agile environment and delivering production-ready features."
        },
        // {
        //     company: "CMR Hackathon - Hyderabad",
        //     period: "2024",
        //     position: "GUI Developer & Team Lead",
        //     description: "Designed and developed UI/UX for ModelXpert – a No-Code AI/ML Model Training Platform. Led the team and handled frontend architecture."
        // }
        ],
        projects: [
             {
            title: "AI-Based Phishing Detector",
            description: "Building a Chrome extension that scans emails and websites to detect phishing attempts using AI models.",
            tags: ["Cybersecurity", "AI", "Chrome Extension"],
            link: "#"
        },
        {
            title: "Cloud-Based Desktop System",
            description: "Developing a cloud-powered virtual desktop environment with customizable UI and productivity tools.",
            tags: ["Cloud", "Full Stack", "System Design"],
            link: "#"
        },
        {
            title: "Pomodoro Productivity App (Flutter)",
            description: "Created a modern productivity app with focus timer, task tracking, and performance analytics.",
            tags: ["Flutter", "Mobile App", "Productivity"],
            link: "#"
        }
        ],
        achievements: [
          "NextGen Leaders Program Certified",
        "Arbitrum Governance & Development Initiative Participant",
        "Hackathon Team Lead",
        "Multiple Academic & Technical Project Contributions"
        ]
    };

    return <EmployeePortfolio employee={employee} />;
}

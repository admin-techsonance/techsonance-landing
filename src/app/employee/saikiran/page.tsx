import { EmployeePortfolio } from "@/components/EmployeePortfolio";
import { PhoneCall } from "lucide-react";

export default function Page() {
    const employee = {
        name: "Saikiran Rudra",
        role: "Full Stack Developer",
        description:
            "Building scalable web applications and smart tech solutions with a focus on real-world impact.",
        bio: `I am a passionate Full Stack Developer currently pursuing B.Tech in Computer Engineering at Bhagwan Mahavir University, Surat. 

I enjoy transforming ideas into real-world digital products. My work spans React.js, Next.js, Node.js. I have built projects like Student CMS Portal, Library Refund Portal, and a 
I believe in clean code, modern UI/UX, and continuous learning to stay ahead in the fast-moving tech world.`,
        image: "/employee-profile/sai.png",
        email: "rudrasaikiran66@gmail.com",
        linkedin: "https://www.linkedin.com/in/saikiran-rudra/",
        github: "https://github.com/Saikiran-dev-techsonance",
        phone: "+91-7096093321",
        skills: [
            { name: "React.js / Next.js", level: 92 },
            { name: "Node.js / Express", level: 88 },
            { name: "JavaScript / TypeScript", level: 90 },
            { name: "AI & ML", level: 85 }
        ],
        experience: [
            {
                company: "Software Engineer - Intern",
                period: "2025-present",
                position: "Full Stack Developer",
                description:
                    "Developing responsive web applications and POS system interfaces with modern UI/UX practices."
            },
            {
                company: "Freelance",
                period: "2023-25",
                position: "Full Stack Developer",
                description:
                    "Developing responsive web applications, designing modern UI/UX interfaces, and building real-world projects for clients. Actively participating in hackathons and collaborating with developer communities."

            }
        ],
        projects: [
            {
                title: "Alumni Connect",
                description:
                    "A unified platform designed to bridge the gap between students, esteemed alumni, and the college administration.",
                tags: ["AI", "React", "Node js"],
                link: "https://sih-alumni-connect-portal.netlify.app/"

            },
            {
                title: "Skill2carrer ai",
                description:
                    "Skill2Career AI is an intelligent career platform that guides students from skill development to job readiness. It offers structured roadmaps, curated learning resources, quizzes, resume building, AI interview prep, and job search support—all in one place.",
                tags: ["React", "Node.js", "MongoDB"],
                link: "https://skill2career-aii.netlify.app/"
            },
            {
                title: "Pos System",
                description:
                    "smart business management and POS platform designed to streamline billing, inventory, and real-time sales operations for modern businesses. It provides fast digital billing, inventory tracking, analytics, and cloud-powered management to help companies run efficiently and scale smoothly.",
                tags: ["Web App", "Automation", "Dashboard"],
                link: "https://syncserve.techsonance.co.in/"
            }
        ],
        achievements: [
            "Gold Medalist – Diploma in Computer Engineering (2023)",
            "React JS Certified",
            "Generative Al Mastermind",
            "McKinsey.org Forward Program",
            "Prompt Engineering for Everyones",
            "SAP Code Unnati – Advanced Certification in Emerging Technologies",
          
        ]
    };

    return <EmployeePortfolio employee={employee} />;
}
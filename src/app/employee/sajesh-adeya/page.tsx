import { EmployeePortfolio } from "@/components/EmployeePortfolio";

export default function Page() {
    const employee = {
        name: "Sajesh Adeya",
        role: "Co-Founder & CTO",
        description: "Architecting the future of TechSonance through technical excellence and visionary leadership.",
        bio: `As the Co-Founder and CTO of TechSonance InfoTech LLP, I lead our technical strategy and long-term innovation roadmap. My passion lies in building high-performance, scalable systems that solve complex business challenges.

        With a deep background in full-stack engineering and system architecture, I ensure that every project we deliver at TechSonance adheres to the highest standards of code quality, security, and performance. I believe in fostering a culture of continuous learning and engineering excellence within our team.`,
        image: "/employee-profile/Sajesh2.png",
        email: "sajesh.techsonance@outlook.com",
        linkedin: "https://www.linkedin.com/in/sajeshkumar-adeya-418809148/",
        github: "https://github.com/sajesh-techsonance",
        phone: "+91-7096093321",
        skills: [
            { name: "System Architecture", level: 98 },
            { name: "Full-Stack Development", level: 95 },
            { name: "Cloud & DevOps", level: 92 },
            { name: "Technical Leadership", level: 96 }
        ],
        experience: [
            {
                company: "TechSonance InfoTech LLP",
                period: "2023 - Present",
                position: "Co-Founder & CTO",
                description: "Defining the technical vision, overseeing architectural decisions, and leading the engineering team to deliver scalable digital solutions."
            },
            {
                company: "Tech Innovation Hub",
                period: "2020 - 2023",
                position: "Senior Systems Architect",
                description: "Designed and implemented robust backend architectures for high-traffic enterprise applications."
            }
        ],
        projects: [
            {
                title: "TechSonance Core Infrastructure",
                description: "Developed the foundational scalable cloud infrastructure and CI/CD pipelines used across all company projects.",
                tags: ["Cloud", "DevOps", "Infrastructure"],
                link: "#"
            },
            {
                title: "Enterprise AI Integration",
                description: "Led the development of a custom AI-driven workflow automation tool for a major logistics client.",
                tags: ["AI", "Automation", "Architecture"],
                link: "#"
            },
            {
                title: "Scalable SaaS Foundation",
                description: "Created a modular SaaS starter-kit that reduced project startup time by 60% for new clients.",
                tags: ["Next.js", "SaaS", "Productivity"],
                link: "#"
            }
        ],
        achievements: [
            "AWS Certified Solutions Architect",
            "Speaker at Gujarat Tech Summit 2024",
            "Top 100 Engineering Leaders to Watch",
            "Hackathon Mentor & Technical Advisor"
        ]
    };

    return <EmployeePortfolio employee={employee} />;
}

import { EmployeePortfolio } from "@/components/EmployeePortfolio";

export default function Page() {
    const employee = {
        name: "Akash Pandit",
        role: "Full Stack Developer",
        description: "Building scalable web applications and smart tech solutions with a focus on real-world impact.",
        bio: `As a Full Stack Developer, I bridge design and development to create fast, secure, and user-centric applications. I work across frontend, backend, APIs, and databases to build products that are efficient, maintainable, and future-ready. I value performance optimization, structured workflows, and writing code that not only works—but lasts.`,
        image: "/employee-profile/aakash.jpeg",
        email: "aakash@techsonance@outlook.com",
        linkedin: "https://www.linkedin.com/in/akash-pandiit/",
        github: "https://github.com/Akash-Panditt",
        phone: "+91-9173101711",
        
        skills: [
            { name: "Html, Css & Js", level: 88 },
            { name: "Node.js / TypeScript", level: 97 },
            { name: "React, Next.js", level: 92 },
            { name: "Figma / UI/UX", level: 85 }
        ],
        experience: [
            {
                company: "TechSonance InfoTech LLP",
                period: "2025 - Present",
                position: "Full Stack Developer",
                description: "Architecting the core API services and managing transition from monolithic to microservices."
            },
        ],
        projects: [
            // {
            //     title: "Distributed Payment Gateway",
            //     description: "Built a fault-tolerant payment processing system with double-entry accounting records.",
            //     tags: ["Node.js", "Kafka", "PostgreSQL"],
            //     link: "#"
            // },
            // {
            //     title: "Real-time Messaging Engine",
            //     description: "Scalable WebSocket server capable of handling 500k+ concurrent connections.",
            //     tags: ["WebSockets", "Redis", "TypeScript"],
            //     link: "#"
            // },
            // {
            //     title: "Automated Data Migration Tool",
            //     description: "Custom zero-downtime migration utility for large-scale database transitions.",
            //     tags: ["Python", "Rust", "Shell Scripting"],
            //     link: "#"
            // }
        ],
        achievements: [
            // "Published Paper on Distributed Consensus",
            // "Node.js Core Contributor",
            // "Certified Kubernetes Administrator (CKA)"
        ]
    };

    return <EmployeePortfolio employee={employee} />;
}

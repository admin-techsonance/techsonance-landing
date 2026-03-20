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
            {
                title: "GenZ Storez",
                description: "GenZ Storez is a modern online platform offering trendy products with a clean design and smooth, user-friendly shopping experience.",
                tags: ["HTML", "CSS", "React.js"],
                link: "https://genzstorez.netlify.app/"
            },
            {
                title: "MeltMagic",
                description: "MeltMagic is a modern AI-driven agency platform that builds high-performance digital solutions, automation systems, and scalable products to help businesses grow faster.",
                tags: ["HTML", "CSS", "GSAP"],
                link: "https://meltmagic.netlify.app/"
            },
            // {
            //     title: "Automated Data Migration Tool",
            //     description: "Custom zero-downtime migration utility for large-scale database transitions.",
            //     tags: ["Python", "Rust", "Shell Scripting"],
            //     link: "#"
            // }
        ],
        achievements: [
            "Prompt Engineering ( IBM Certified )",
            // "Node.js Core Contributor",
            // "Certified Kubernetes Administrator (CKA)"
        ]
    };

    return <EmployeePortfolio employee={employee} />;
}

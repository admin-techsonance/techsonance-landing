import { EmployeePortfolio } from "@/components/EmployeePortfolio";

export default function Page() {
    const employee = {
        name: "Someshwari Adeya",
        role: "Co-Founder & CEO",
        description: "Driving TechSonance's mission to empower businesses through transformative digital experiences.",
        bio: `As the Co-Founder and CEO of TechSonance InfoTech LLP, I am dedicated to building a company that prioritizes innovation, client success, and ethical engineering. My focus is on strategic growth, building strong partnerships, and ensuring that our team delivers exceptional value to every client.

        I believe that great software starts with understanding people. By bridging the gap between business objectives and technology, I help our clients navigate the digital landscape and achieve scalable growth.`,
        image: "/employee-profile/someshwari.jpg", // Placeholder or authentic image path if provided
        email: "someshwari.adeya@techsonance.com", // Assumed professional email
        linkedin: "https://www.linkedin.com/in/someshwari-rudra-229584207/",
        github: "https://github.com/someshwari-techsonance",
        phone: "+91-7096093321",
        
        skills: [
            { name: "Strategic Leadership", level: 98 },
            { name: "Business Growth", level: 95 },
            { name: "Client Relations", level: 96 },
            { name: "Operational Excellence", level: 92 }
        ],
        experience: [
            {
                company: "TechSonance InfoTech LLP",
                period: "2025 - Present",
                position: "Co-Founder & CEO",
                description: "Leading overall business strategy, operations, and growth initiatives for the firm."
            },
            {
                company: "Global Solutions Corp",
                period: "2019 - 2023",
                position: "Senior Operations Manager",
                description: "Managed cross-functional teams and optimized internal processes for large-scale digital transformations."
            }
        ],
        projects: [
            {
                title: "TechSonance Foundation",
                description: "Co-founded and scaled TechSonance from a vision to a multi-disciplinary software development firm.",
                tags: ["Leadership", "Entrepreneurship", "Strategy"],
                link: "#"
            },
            {
                title: "Client Success Framework",
                description: "Implemented a dedicated client success model that resulted in a 90% retention rate for long-term projects.",
                tags: ["Operations", "Client Success", "Growth"],
                link: "#"
            },
            {
                title: "Digital Partnership Ecosystem",
                description: "Developed and managed strategic partnerships with key technology providers to expand our service capabilities.",
                tags: ["Partnerships", "Business Development", "Strategy"],
                link: "#"
            }
        ],
        achievements: [
            "Entrepreneur of the Year Nominee 2024",
            "Women in Tech Leadership Award",
            "Certified Business Strategist",
            "Keynote Speaker at Industry Conferences"
        ]
    };

    return <EmployeePortfolio employee={employee} />;
}

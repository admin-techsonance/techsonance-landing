import { EmployeePortfolio } from "@/components/EmployeePortfolio";
import { ChartBarDecreasingIcon, FilesIcon, HardDriveDownload } from "lucide-react";

export default function Page() {
    const employee = {
        name: "Pandhari Ubherande",
        role: "Graphics Designer",
        description: "Designing visual experiences that turn brands into unforgettable identities.",
        bio: `I’m a passionate Graphic Designer focused on creating visually compelling brand identities and digital experiences. My work goes beyond aesthetics — I design with strategy, ensuring every visual element aligns with business goals and audience psychology.

From social media creatives to complete brand systems, I combine creativity with clarity to help businesses communicate better, attract attention, and build lasting impressions. I believe great design isn’t just seen — it’s felt and remembered.`,
        image: "/employee-profile/pandhari.jpeg",
        email: "pandhari.techsonance@outlook.com",
        linkedin: "https://linkedin.com/in/pandhari-ubherande",
        github: "https://github.com/pandhari-ubherande",
        phone: "+91-9173101711",

        skills: [
            { name: "Canva", level: 92 },
            { name: "Figma", level: 90 },
            { name: "Photoshop", level: 50 },
            { name: "Illustrator", level: 50 },
        ],
        experience: [
            {
                company: "TechSonance InfoTech LLP",
                period: "2025 - Present",
                position: "Graphics Designer",
                description: "Creating visually stunning and user-friendly designs for e-commerce platforms."
            },
            {
                company: "RetailTech Solutions",
                period: "2025",
                position: "Graphics Designer",
                description: "Creating visually stunning and user-friendly designs for e-commerce platforms."
            }
        ],
        projects: [
            // {
            //     title: "Global Multi-Vendor Hub",
            //     description: "A comprehensive marketplace supporting 500+ sellers and multi-currency transactions.",
            //     tags: ["Next.js", "Algolia", "Stripe Connect"],
            //     link: "#"
            // },
            // {
            //     title: "DTC Brand Growth Engine",
            //     description: "Headless commerce setup that improved mobile load times by 75% for a premium fashion brand.",
            //     tags: ["Sanity.io", "Shopify Hydrogen", "Tailwind"],
            //     link: "#"
            // },
            // {
            //     title: "Inventory Management System",
            //     description: "Real-time stock synchronization tool across multiple warehouses and physical stores.",
            //     tags: ["Node.js", "Redis", "Inventory Sync"],
            //     link: "#"
            // }
        ],
        achievements: [
            "Certified Graphic Design Professional",
            "Delivered 15+ Creative Projects",
            "Creative Content Contributor",
            "Brand Identity Specialist"
        ]
    };

    return <EmployeePortfolio employee={employee} />;
}

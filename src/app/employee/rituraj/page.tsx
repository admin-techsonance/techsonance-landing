import { EmployeePortfolio } from "@/components/EmployeePortfolio";
import { PhoneCall } from "lucide-react";

export default function Page() {
    const employee = {
        name: "Rituraj Singh",
        role: "Project Manager",
        description: "Bridging communication and ensuring project delivery with precision, speed, and efficiency.",
        bio: `I am the glue that holds projects together. My role is to translate complex technical requirements into achievable goals and ensure that our team stays focused, productive, and happy.

        I believe in Agile methodologies, transparent communication, and the power of a well-organized roadmap to bring ambitious visions to life.`,
        image: "/employee-profile/utsav.jpg",
        email: "rituraj.techsonance@outlook.com",
        linkedin: "https://linkedin.com/in/riturajsinghrajput",
        github: "https://github.com/riturajsinghrajput",
        phone: "+91-7990201438",
        skills: [
            { name: "Agile / Scrum", level: 98 },
            { name: "Risk Management", level: 94 },
            { name: "Client Relations", level: 95 },
            { name: "Resource Planning", level: 90 }
        ],
        experience: [
            {
                company: "TechSonance InfoTech LLP",
                period: "Dec 2025 - Present",
                position: "Project Manager",
                description: "Managing multiple high-value client accounts and streamlining internal delivery processes."
            },
            {
                company: "Freelancing",
                period: "2020 - 2025",
                position: "Project Manager",
                description: "Successfully delivered 30+ web and mobile projects within budget and timeline."
            }
        ],
        projects: [
            {
                title: "Click2pdf",
                description: "Click2PDF is a fast and easy online tool that converts your files into high-quality PDF documents in seconds.No signup required — simple, secure, and completely free to use anytime. 🚀",
                tags: ["Agile", "Change Management", "ERP"],
                link: "https://click2pdf.in/"
            },
            {
                title: "Sparsh Digital Solutions",
                description: "Sparsh Digital Solutions delivers smart, modern, and scalable digital products tailored for businesses and creators.From web development to automation tools, we transform ideas into powerful digital experiences. 🚀",
                tags: ["Product Management", "SaaS", "Automation"],
                link: "https://riturajsinghrajput.github.io/sparshdigitalsolutions/"
            },
            {
                title: "Scholar Assist",
                description: "Scholr Assist is your smart academic companion, offering tools and guidance to simplify assignments, projects, and research work.Fast, reliable, and student-focused — designed to boost productivity and academic success. 🎓🚀",
                tags: ["Remote Work", "Ops", "Leadership"],
                link: "https://sparshdigitalsolutions.com/"
            }
        ],
        achievements: [
            "SSIP Hackathon Winner 2022",
            "NAtional Level IOT Design Challeneg Winner 2022, 2023, 2024",
            "PMP® Certified Professional",
            "Certified Scrum Master (CSM)",
        ]
    };

    return <EmployeePortfolio employee={employee} />;
}
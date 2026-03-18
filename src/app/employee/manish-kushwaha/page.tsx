import { EmployeePortfolio } from "@/components/EmployeePortfolio";
import { PhoneCall } from "lucide-react";

export default function Page() {
    const employee = {
        name: "Manish Kushwaha",
        role: "Web Developer",
        description: "Crafting high-performance web applications and leading technical teams with a focus on scalable, modern architecture.",
        bio: `I am a passionate Web Developer and Team Lead dedicated to building seamless digital experiences. With a strong foundation in full-stack development, I bridge the gap between complex backend logic and intuitive frontend interfaces.

        I thrive in collaborative environments, leveraging modern frameworks like React, Next.js, and Node.js to deliver robust solutions. As a leader, I focus on guiding teams to achieve technical excellence through structured mentorship and agile practices.`,
        image: "/employee-profile/manish2.jpeg",
        email: "manish.techsonance@outlook.com",
        "linkedin": "https://www.linkedin.com/in/manish-kushwaha-316674319/",
        "github": "https://github.com/ANANT-0000",
        phone: "+91-9173101711",

        skills: [
            { name: "React / Next.js", level: 95 },
            { name: "Node.js / Express", level: 88 },
            { name: "JavaScript / Java", level: 92 },
            { name: "SQL & Databases", level: 85 }
        ],
        experience: [
            {
                company: "NexGen Club",
                period: "2025 - Present",
                position: "Web Developer",
                description: "Developing and maintaining modern web applications, optimizing performance, and implementing responsive UI/UX designs."
            },
            {
                company: "BMU",
                period: "2025 - Present",
                position: "Team Lead",
                description: "Leading technical initiatives, managing project timelines, and mentoring team members to ensure high-quality software delivery."
            }
        ],
        projects: [
            // {
            //     title: "Sentinel",
            //     description: "A comprehensive personal safety application built with React Native (Expo) featuring real-time SOS alerts, safe route planning, and automated evidence capture.",
            //     tags: ["React Native", "Location Tracking", "Mobile App"],
            //     link: "#"
            // },
            {
                title: "Techsonance Marketplace",
                description: "A robust e-commerce platform designed for seamless user transactions and high backend scalability.",
                tags: ["E-commerce", "Full-Stack", "Web Development"],
                link: "#"
            },
            {
                "title": "Sentinel safe App",
                "description": "personal safety application designed to provide users with proactive security tools and rapid emergency response capabilities.",
                "tags": ["React Native (Expo)", "Mobile App", "Security"],
                "link": "#"
            }
        ],
        achievements: [
            "Team Lead of BMU",
            "Web Developer at NexGen Club",
            "Full-Stack JavaScript & E-commerce Specialist",
            "Innovex Hackathon winner"
        ]
    };

    return <EmployeePortfolio employee={employee} />;
}
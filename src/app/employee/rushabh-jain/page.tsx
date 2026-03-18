import { EmployeePortfolio } from "@/components/EmployeePortfolio";
import { PhoneCall } from "lucide-react";
export default function Page() {
    const employee = {
        name: "Rushabh",
        role: "Mentor",
        description: "Mentoring Interns to achive their goals",
        bio: `I am a Software Engineer with over 5 years of experience specializing in backend development. I possess strong technical expertise in Java and the Spring Boot framework. My experience includes working with relational databases such as Oracle and MySQL, as well as NoSQL databases including MongoDB, DynamoDB, and Cassandra. I have hands-on experience deploying applications on AWS cloud infrastructure and containerized environments using Docker and Kubernetes. I am committed to writing optimized, high-quality code and continuously improving application performance to enhance response times and deliver an excellent customer experience.`,
        image: "/employee-profile/rusha.jpeg",
        email: "rushabh.techsonance@outlook.com", 
        linkedin: "www.linkedin.com/in/rushabh-jain-553541206",
        github: "https://github.com/rushabh-jain-452",
        phone: "+91-9173101711",
 
        skills: [
            { name: "Java", level: 98 },
            { name: "React", level: 90 },
            { name: "Spring Boot", level: 90 },
            { name: "Cloud", level: 70 }
        ],
        experience: [
            {
                company: "BBD",
                period: "2021 - Present",
                position: "Software Engineer",
                description: "Worked with Spring Boot microservices, and deployment in AWS"
            },
        ],
        projects: [
            {
                title: "Student Progress Tracking System",
                description: "It is designed for the Orphanage to help teachers in tracking the progress of sudents. The software also generates various MIS Reports helpful for the teachers to analyze and take decisions.",
                tags: ["VB.NET", " MySQL 8.0", "Edraw"],
                link: "#"
            },
            {
                title: "SportsGeek App",
                description: "App allows betting on IPL matched based on points",
                tags: ["React Native", "Spring Boot", "MySQL"],
                link: "#"
            },
            {
             "title": "Asset Management System",
      "description": "manages assets allocated to the employees of company",
      "tags": ["React", "Web App", "MySQL"],
      "link": "#"
            }
        ],
        achievements: [
            "Secured 2nd Rank in MCA",
            "Cloud Expert",
            "Quick Learner"
        ]
    };
    return <EmployeePortfolio employee={employee} />;
}
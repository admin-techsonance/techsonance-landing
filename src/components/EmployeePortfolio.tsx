"use client"

import { motion } from "framer-motion"
import {
    Mail,
    Linkedin,
    Github,
    Twitter,
    ArrowRight,
    ExternalLink,
    CheckCircle2,
    Award,
    Briefcase,
    User,
    Code2,
    Cpu,
    Globe,
    Zap,
    Phone
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations"

interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
}

interface Skill {
    name: string;
    level: number; // 0 to 100
}

interface EmployeeProps {
    name: string;
    role: string;
    description: string;
    bio: string;
    image: string;
    email: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
    phone?: string;
    skills: Skill[];
    experience: {
        company: string;
        period: string;
        position: string;
        description: string;
    }[];
    projects: Project[];
    achievements: string[];
}

export function EmployeePortfolio({ employee }: { employee: EmployeeProps }) {
    return (
        <div className="min-h-screen bg-slate-50 selection:bg-brand-cyan selection:text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-deep to-brand-dark" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

                {/* Decorative Blobs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan/20 rounded-full blur-[60px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#29619e]/20 rounded-full blur-[60px]" />

                <div className="container mx-auto max-w-6xl relative z-10 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <FadeInUp duration={0.8}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan/20 rounded-full text-brand-cyan text-sm font-bold uppercase mb-6 border border-brand-cyan/30">
                                <Zap className="w-4 h-4" /> Team Portfolio
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight">
                                {employee.name}
                            </h1>
                            <div className="text-2xl md:text-3xl font-medium text-brand-cyan mb-6">
                                {employee.role}
                            </div>
                            <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
                                {employee.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href={`mailto:${employee.email}`}
                                    className="px-8 h-12 bg-gradient-to-r from-brand-cyan to-[#29619e] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-brand-cyan/30 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                                >
                                    Contact Me <Mail className="w-5 h-5" />
                                </Link>
                                <div className="flex gap-3">
                                    {employee.linkedin && (
                                        <Link href={employee.linkedin} target="_blank" className="w-12 h-12 bg-white/10 hover:bg-white/20 transition-all rounded-xl flex items-center justify-center border border-white/20">
                                            <Linkedin className="w-6 h-6" />
                                        </Link>
                                    )}
                                    {employee.github && (
                                        <Link href={employee.github} target="_blank" className="w-12 h-12 bg-white/10 hover:bg-white/20 transition-all rounded-xl flex items-center justify-center border border-white/20">
                                            <Github className="w-6 h-6" />
                                        </Link>
                                    )}
                                    {employee.twitter && (
                                        <Link href={employee.twitter} target="_blank" className="w-12 h-12 bg-white/10 hover:bg-white/20 transition-all rounded-xl flex items-center justify-center border border-white/20">
                                            <Twitter className="w-6 h-6" />
                                        </Link>
                                    )}
                                    {employee.phone && (
                                        <Link href={`tel:${employee.phone}`} className="w-12 h-12 bg-white/10 hover:bg-white/20 transition-all rounded-xl flex items-center justify-center border border-white/20 text-brand-cyan">
                                            <Phone className="w-6 h-6" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </FadeInUp>

                        <FadeInUp duration={0.8} delay={0.2}>
                            <div className="relative w-full aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan to-[#29619e] rounded-[2rem] rotate-6 opacity-20" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan to-[#29619e] rounded-[2rem] -rotate-3 opacity-20" />
                                <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-2xl bg-brand-dark/50 flex items-center justify-center">
                                    {employee.image ? (
                                        <Image
                                            src={employee.image}
                                            alt={employee.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 400px"
                                            priority
                                        />
                                    ) : (
                                        <User className="w-48 h-48 text-brand-cyan/20" />
                                    )}
                                </div>

                                {/* Floating Achievement Card */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute -bottom-6 -left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl hidden md:block z-20"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-brand-cyan/30 rounded-full flex items-center justify-center">
                                            <Award className="w-6 h-6 text-brand-cyan" />
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-widest text-brand-cyan font-bold">Expertise</div>
                                            <div className="text-lg font-bold">{employee.skills[0].name}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2">
                            <FadeInUp>
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-slate-900 border-l-4 border-brand-cyan pl-6">
                                    About Me
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed whitespace-pre-line mb-8">
                                    {employee.bio}
                                </p>
                            </FadeInUp>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                                {employee.experience.map((exp, idx) => (
                                    <FadeInUp key={idx} delay={0.1 * idx}>
                                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 relative group overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full -mr-8 -mt-8 group-hover:bg-brand-cyan/10 transition-all" />
                                            <Briefcase className="w-8 h-8 text-brand-cyan mb-4" />
                                            <div className="text-sm font-bold text-brand-cyan uppercase tracking-wider mb-1">{exp.period}</div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.position}</h3>
                                            <div className="text-slate-500 font-medium mb-4">{exp.company}</div>
                                            <p className="text-slate-600 text-sm">{exp.description}</p>
                                        </div>
                                    </FadeInUp>
                                ))}
                            </div>
                        </div>

                        <div>
                            <FadeInUp>
                                <h2 className="text-3xl md:text-3xl font-extrabold mb-8 text-slate-900">
                                    Skills & Expertise
                                </h2>
                                <div className="space-y-6">
                                    {employee.skills.map((skill, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-bold text-slate-700">{skill.name}</span>
                                                <span className="text-brand-cyan font-bold">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className="h-full bg-gradient-to-r from-brand-cyan to-[#29619e]"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 p-8 bg-brand-dark rounded-3xl text-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent" />
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-4">Core Values</h3>
                                        <ul className="space-y-3">
                                            {["Quality Driven", "Continuous Learning", "Team Collaboration", "Problem Solver"].map((val, i) => (
                                                <li key={i} className="flex items-center gap-2 text-slate-300">
                                                    <CheckCircle2 className="w-4 h-4 text-brand-cyan" /> {val}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeInUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-16 px-6 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <FadeInUp>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                                Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-[#29619e]">Projects & Contributions</span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                A glimpse into the impactful work I've delivered and the technical challenges I've overcome.
                            </p>
                        </FadeInUp>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {employee.projects.map((project, idx) => (
                            <FadeInUp key={idx} delay={0.1 * idx}>
                                <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col group hover:scale-[1.02] transition-all duration-300">
                                    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-500">
                                            {idx % 3 === 0 ? <Code2 className="w-24 h-24 text-brand-cyan" /> :
                                                idx % 3 === 1 ? <Cpu className="w-24 h-24 text-brand-cyan" /> :
                                                    <Globe className="w-24 h-24 text-brand-cyan" />}
                                        </div>
                                        <div className="absolute bottom-4 left-4 flex gap-2">
                                            {project.tags.slice(0, 2).map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-slate-800">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-8 flex-grow">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-cyan transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    {project.link && (
                                        <div className="px-8 pb-8">
                                            <Link
                                                href={project.link}
                                                className="text-brand-cyan font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
                                            >
                                                View Project <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </FadeInUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 px-6 bg-brand-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <FadeInUp>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
                            Achievements & <span className="text-brand-cyan">Recognition</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {employee.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 text-left hover:bg-white/10 transition-all">
                                    <div className="w-14 h-14 bg-brand-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Award className="w-8 h-8 text-brand-cyan" />
                                    </div>
                                    <p className="text-lg text-slate-200 font-medium">{achievement}</p>
                                </div>
                            ))}
                        </div>
                    </FadeInUp>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-gradient-to-r from-brand-cyan to-[#29619e] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-cyan/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
                                Interested in working with {employee.name.split(' ')[0]}?
                            </h2>
                            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                                Let's discuss how our team's expertise can help fast-track your next big software project.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    href="/contact"
                                    className="px-10 py-5 bg-white text-brand-cyan font-extrabold rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Get in Touch
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white font-extrabold rounded-2xl hover:bg-white/20 transition-all duration-300"
                                >
                                    View Team Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </div>
    )
}

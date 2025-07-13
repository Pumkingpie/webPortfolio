'use client';
import { motion } from "framer-motion"
import Image from "next/image";

interface Skill {
    name: string;
    logo: string;
}

function Skills() {
    const skills: Skill[] = [
        {
            name: "HTML",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "CSS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Next.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "Node.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "Python",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
            name: "TypeScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "Git",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
            name: "MySQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
    ];

    return (
        <section id="skills" className="w-full px-4 py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">Habilidades Técnicas</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                width={64}
                                height={64}
                                className="w-16 h-16"
                            />
                            <span className="text-[#E8ECFF] font-medium">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Skills };

